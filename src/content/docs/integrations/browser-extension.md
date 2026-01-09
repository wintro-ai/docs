---
title: Wintro Browser Extension
description: Guide for installing the Wintro Companion browser extension
---

The Wintro Companion browser extension connects your LinkedIn account to Wintro, enabling features like importing your professional network for referral matching. It can be used alongside or as an alternative to Wintro's native LinkedIn integration, providing additional import capabilities.

### What the Extension Does

- **Network Import**: Import your LinkedIn connections (and optionally their public connections) into Wintro to discover referral opportunities among your colleagues' networks
- **Quick Access**: Adds a convenient Wintro link to your LinkedIn navigation bar

The extension authenticates your LinkedIn session with Wintro, allowing us to retrieve your connection data on your behalf.

> **Important**: Wintro does not automate sending messages, connection requests, or any other LinkedIn actions. The extension is read-only and used solely for importing network data.

### Installation

1. Visit the <a href="https://chromewebstore.google.com/detail/wintro-companion/ebnleakfmfddiogmleichjfpjbbcknea" target="_blank">Wintro Companion extension page</a> in the Chrome Web Store
2. Click "Add to Chrome" and confirm the installation
3. Ensure you are logged into LinkedIn
4. Click the extension icon and select "Sync with Wintro"

A green checkmark indicates successful connection.

### Permissions

| Permission | Purpose |
|------------|---------|
| `cookies` (linkedin.com) | To authenticate your LinkedIn session |
| `storage` | To store connection status locally |
| `notifications` | To show sync status updates |

### Data Handling

- Session credentials are encrypted at rest
- Data is transmitted over HTTPS
- Logging out of LinkedIn automatically invalidates the connection
- Removing your Wintro account deletes all associated data

### Uninstalling

Right-click the extension icon and select "Remove from Chrome". Your imported connections remain in Wintro but the session link is removed.
