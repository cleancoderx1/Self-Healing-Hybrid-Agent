#!/usr/bin/env bash
# Example installer for Linux/macOS
cp -r src /usr/local/hybrid-healer
ln -sf /usr/local/hybrid-healer/agent.js /usr/local/bin/hybrid-healer
# Create systemd service file...
