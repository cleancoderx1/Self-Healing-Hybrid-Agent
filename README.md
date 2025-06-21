**Self‑Healing Hybrid Agent**

Runs on Windows, Linux, or macOS hosts to detect and auto‑remediate common issues, then reports status to your chosen channel.

## Tech Stack
- **Node.js** & **npm**
- **systemd** (Linux) or **Windows Service** wrapper
- **Slack Webhooks** (or AWS SNS)
- **GitHub Actions** (for CI)

## Quickstart

```bash
git clone https://github.com/YourUserName/hybrid-healer.git
cd hybrid-healer
npm install
sudo ./install.sh        # or run the PowerShell installer on Windows

By default it:

Monitors disk usage and cleans /tmp or %TEMP% if >75%.

Watches for critical processes (from config) and restarts them if they hang.

Sends a summary every hour via Slack webhook.

Edit src/config.json to customize thresholds and notifications.
