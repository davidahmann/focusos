# Focus OS

**Your AI Chief of Staff for Slack.**

This repository contains the high-fidelity demo build for Focus OS. It demonstrates how the system transforms chaotic Slack communication into structured, prioritized "Work Objects," enabling founders to make decisions 10x faster.

## 🌟 Features

- **Daily Briefing**: A "nightclub-to-library" morning console that filters noise and surfaces only what matters.
- **Work Objects**: structured decision cards extracted from messy Slack threads.
- **Draft Queue**: AI-drafted responses that learn your tone and policy preferences via inline feedback.
- **Safety Ledger**: A transparent log of every action the AI takes, building trust through visibility.
- **Focus Shield**: Automated protection during deep work sessions.

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router, Turbopack)
- **Styling**: Tailwind CSS v4 (CSS Variables Theme)
- **Language**: TypeScript
- **UI Primitives**: Radix UI (Tooltip), Lucide React (Icons)

## 🌟 Features

- **Daily Briefing**: A "nightclub-to-library" morning console that filters noise and surfaces only what matters.
- **Work Objects**: Structured decision cards extracted from messy Slack threads.
- **Draft Queue**: AI-drafted responses that learn your tone and policy preferences via inline feedback.
- **Safety Ledger**: A transparent log of every action the AI takes, building trust through visibility.
- **Focus Shield**: Automated protection during deep work sessions (Slack Bot).
- **Navigation**: Quick access to Drafts and Ledger via the Top Bar.

## 🚀 Getting Started

### 1. Web Application

The web app provides the "Morning Console" experience.

```bash
# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the demo.

### 2. Slack Simulation (Seeding)

To create the "Slack Chaos" shown in the demo, we use a Python script to seed a Slack sandbox with realistic, high-stakes threads.

**Prerequisites:**
- A Slack Workspace (Sandbox recommended)
- A Slack App with `chat:write`, `channels:manage`, `users:read` scopes
- `SLACK_BOT_TOKEN` environment variable set

**Usage:**

```bash
# Install Python dependencies
pip install slack_sdk typer rich python-dotenv

# Reset the sandbox (archives old channels)
python focus_seed.py reset

# Seed "Overnight Backlog" (Wave 1)
python focus_seed.py seed wave1

# Seed "Morning Spike" (Wave 2) - Run this right before recording
python focus_seed.py seed wave2
```

### 3. Focus Shield (Auto-Reply Bot)

To run the "Focus Shield" auto-reply bot during the recording:

**Prerequisites:**
- `SLACK_APP_TOKEN` (Socket Mode)
- `SLACK_BOT_TOKEN`

**Usage:**

```bash
# Install slack_bolt
pip install slack_bolt python-dotenv

# Run the bot
python focus_bot.py
```

**Testing Focus Shield:**
1. Run the script.
2. Send a DM to the bot user on Slack: "Hey quick question".
3. Verify the auto-reply: "David is heads-down until 2pm..."


## 🎬 Demo Script

The full script for the YC demo video is available in [DEMO.md](./DEMO.md).
