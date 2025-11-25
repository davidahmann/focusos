import os, time, json, random
from typing import Dict, List, Any, Optional
import typer
from rich import print
from slack_sdk import WebClient
from slack_sdk.errors import SlackApiError
from dotenv import load_dotenv

load_dotenv()

app = typer.Typer(add_completion=False)
client = WebClient(token=os.environ["SLACK_BOT_TOKEN"])

# ---------------------------
# Dataset (load from file or inline)
# ---------------------------

DATASET_PATH = os.environ.get("FOCUS_SEED_DATASET", "seed_dataset.json")

def load_dataset():
    with open(DATASET_PATH, "r") as f:
        return json.load(f)

# ---------------------------
# Slack helpers
# ---------------------------

def safe_call(fn, **kwargs):
    try:
        return fn(**kwargs)
    except SlackApiError as e:
        print(f"[red]Slack error:[/red] {e.response['error']} on {fn.__name__}")
        raise

def ensure_channel(name: str) -> str:
    # Try find existing
    cursor = None
    while True:
        resp = safe_call(client.conversations_list, types="public_channel,private_channel", limit=200, cursor=cursor)
        for ch in resp["channels"]:
            if ch["name"] == name:
                return ch["id"]
        cursor = resp.get("response_metadata", {}).get("next_cursor")
        if not cursor:
            break
    # Create if not exists
    resp = safe_call(client.conversations_create, name=name)
    return resp["channel"]["id"]

def archive_channel(channel_id: str):
    safe_call(client.conversations_archive, channel=channel_id)

def invite_users(channel_id: str, user_ids: List[str]):
    if not user_ids: return
    safe_call(client.conversations_invite, channel=channel_id, users=",".join(user_ids))

def post_message(channel_id: str, user_as: Optional[str], text: str, thread_ts: Optional[str]=None):
    # Slack bots can’t post as arbitrary users unless you use user tokens.
    # For demo, we just label the sender in text.
    prefix = f"*{user_as}*: " if user_as else ""
    resp = safe_call(client.chat_postMessage, channel=channel_id, text=prefix + text, thread_ts=thread_ts)
    time.sleep(1.05)  # rate-limit safety
    return resp["ts"]

# ---------------------------
# Seeding logic
# ---------------------------

def seed_wave(dataset: Dict[str, Any], wave_key: str, dry_run: bool=False):
    channels_map: Dict[str, str] = {}

    # 1) Ensure channels exist
    for ch_name in dataset["channels"]:
        if dry_run:
            channels_map[ch_name] = f"DRY_{ch_name}"
        else:
            channels_map[ch_name] = ensure_channel(ch_name)

    # 2) Invite users if provided
    user_ids = dataset.get("user_ids", [])
    for ch_id in channels_map.values():
        if not dry_run:
            invite_users(ch_id, user_ids)

    # 3) Post threads + noise
    wave = dataset["waves"][wave_key]
    for ch_name, items in wave.items():
        ch_id = channels_map[ch_name]
        print(f"[cyan]Seeding {ch_name} {wave_key}[/cyan]")

        for item in items:
            kind = item["kind"]
            if kind == "thread":
                parent = item["parent"]
                if dry_run:
                    print(f"  THREAD parent: ({parent['as']}) {parent['text']}")
                    for r in item["replies"]:
                        print(f"    reply: ({r['as']}) {r['text']}")
                else:
                    parent_ts = post_message(ch_id, parent.get("as"), parent["text"])
                    for r in item["replies"]:
                        post_message(ch_id, r.get("as"), r["text"], thread_ts=parent_ts)

            elif kind == "message":
                msg = item["message"]
                if dry_run:
                    print(f"  MSG: ({msg['as']}) {msg['text']}")
                else:
                    post_message(ch_id, msg.get("as"), msg["text"])

            elif kind == "noise_flood":
                lines = item["lines"]
                count = item["count"]
                if dry_run:
                    print(f"  NOISE x{count}")
                else:
                    for _ in range(count):
                        post_message(ch_id, random.choice(item.get("as", [None])), random.choice(lines))

def reset_demo_channels(dataset: Dict[str, Any], dry_run: bool=False):
    for ch_name in dataset["channels"]:
        try:
            ch_id = ensure_channel(ch_name)
            if dry_run:
                print(f"[yellow]Would rename & archive #{ch_name}[/yellow]")
            else:
                # Rename to free up the name for the next run
                new_name = f"{ch_name}-archived-{int(time.time())}"
                try:
                    client.conversations_rename(channel=ch_id, name=new_name)
                except SlackApiError as e:
                    # If already archived or renamed, just ignore
                    pass
                
                archive_channel(ch_id)
                print(f"[green]Archived #{ch_name} (renamed to {new_name})[/green]")
        except Exception as e:
            print(f"[yellow]Skipping {ch_name}: {e}[/yellow]")

# ---------------------------
# CLI commands
# ---------------------------

@app.command()
def reset(dry_run: bool=False):
    """Archive demo channels so you can reseed cleanly."""
    dataset = load_dataset()
    reset_demo_channels(dataset, dry_run=dry_run)

@app.command()
def seed(wave: str = "all", dry_run: bool=False, pause_seconds: int=15):
    """
    Seed wave1, wave2, or all.
    wave=wave1 | wave2 | all
    """
    dataset = load_dataset()
    if wave in ("wave1", "all"):
        seed_wave(dataset, "wave1", dry_run=dry_run)
    if wave == "all":
        if dry_run:
            print(f"[magenta]Would pause {pause_seconds}s between waves[/magenta]")
        else:
            print(f"[magenta]Pausing {pause_seconds}s between waves...[/magenta]")
            time.sleep(pause_seconds)
    if wave in ("wave2", "all"):
        seed_wave(dataset, "wave2", dry_run=dry_run)

if __name__ == "__main__":
    app()
