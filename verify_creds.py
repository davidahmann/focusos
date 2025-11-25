import os
from slack_sdk import WebClient
from slack_sdk.errors import SlackApiError
from dotenv import load_dotenv

load_dotenv()

bot_token = os.environ.get("SLACK_BOT_TOKEN")
app_token = os.environ.get("SLACK_APP_TOKEN")

print(f"Checking credentials...")

# 1. Check Bot Token
if not bot_token:
    print("❌ SLACK_BOT_TOKEN is missing")
else:
    try:
        client = WebClient(token=bot_token)
        auth_test = client.auth_test()
        print(f"✅ SLACK_BOT_TOKEN is valid!")
        print(f"   Bot User: {auth_test['user']}")
        print(f"   Team: {auth_test['team']}")
        print(f"   URL: {auth_test['url']}")
    except SlackApiError as e:
        print(f"❌ SLACK_BOT_TOKEN failed: {e.response['error']}")

# 2. Check App Token format (simple check)
if not app_token:
    print("❌ SLACK_APP_TOKEN is missing")
elif not app_token.startswith("xapp-"):
    print("❌ SLACK_APP_TOKEN looks invalid (should start with xapp-)")
else:
    print("✅ SLACK_APP_TOKEN is present and has correct prefix")
