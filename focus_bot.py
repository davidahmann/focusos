import os
from slack_bolt import App
from slack_bolt.adapter.socket_mode import SocketModeHandler
from dotenv import load_dotenv

load_dotenv()

# Install dependencies:
# pip install slack_bolt

# Usage:
# export SLACK_BOT_TOKEN=xoxb-...
# export SLACK_APP_TOKEN=xapp-...
# python focus_bot.py

import re

app = App(token=os.environ.get("SLACK_BOT_TOKEN"))

@app.message(re.compile("quick question", re.IGNORECASE))
def handle_message(message, say):
    # Only reply in DMs to avoid spamming channels
    if message["channel_type"] == "im":
        print(f"⚡️ Auto-replying to DM from {message['user']}")
        say(
            text="[User] is heads-down until 2pm. I can clarify or route this in the meantime.",
            thread_ts=message.get("ts")
        )

if __name__ == "__main__":
    print("🛡️  Focus Shield Active. Waiting for DMs...")
    SocketModeHandler(app, os.environ["SLACK_APP_TOKEN"]).start()
