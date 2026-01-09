---
title: Microsoft Teams App
description: Step-by-step guide for installing and configuring the Wintro app for Microsoft Teams
---

This guide provides step-by-step instructions for installing and configuring the Wintro app for Microsoft Teams. Successful integration will enable seamless communication and user management between Wintro and your Teams environment.

### What the Wintro Teams App Does

The Wintro Teams app is a **notification-only bot** that delivers Wintro updates directly to employees' Teams chats. It enables:

- Receiving referral notifications and updates in Teams
- Quick access to Wintro through adaptive card actions
- Automatic conversation setup when users install the app

The bot operates exclusively in **personal chat** scope - it does not access team channels, group chats, or meetings content.

Users who prefer to receive notifications via email instead can simply uninstall the app from their Teams (right-click → Uninstall). Their notification preference will automatically be reset to email.

### Prerequisites

Before you begin the installation process, please ensure the following requirements are met:

**Wintro Authentication**: The recruiter responsible for the integration must have already authenticated their Microsoft account within the Wintro platform. This can be done by navigating to Settings > Nudging > Teams in your Wintro account.

**Microsoft Teams Permissions**: You must have either Administrator or Developer rights in the Microsoft Teams Developer Portal to upload and manage applications.

### Microsoft Teams Configuration

This section outlines the necessary steps to upload and publish the Wintro app within your Microsoft Teams environment.

#### 1. Import the Wintro App Package

1. Go to the <a href="https://dev.teams.microsoft.com/" target="_blank">Microsoft Teams Developer Portal</a>
2. To upload apps in the Microsoft Teams Developer Portal, you need either the Administrator or Developer role. The Administrator role has the broadest permissions, including the ability to update app configurations, add or remove owners, and delete apps. The Developer role allows users to submit and adjust application files.
3. In the Developer Portal, navigate to "Apps" on the left sidebar
4. Click on "Import app"
5. Select and import the Wintro app zip file that you have received or download the file from this <a href="https://storage.googleapis.com/wintro-public/teams-app/wintro_117.zip" target="_blank">link</a>

#### 2. Publish the App to Your Organization

1. After importing, you will be directed to the app's dashboard
2. Click "Distribute" at the top right corner of the page
3. From the "Distribute your app" dialog, select "Publish to your organization". This action submits a request to your IT admin to publish the app, making it available in your organization's app store once approved.

<div style="box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06); border-radius: 16px; overflow: hidden; margin: 40px 0;">

![Teams Developer Portal Distribute](/teams-app-step-2-1.png)

</div>
<div style="box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06); border-radius: 16px; overflow: hidden; margin: 40px 0;">

![Publish to Organization Dialog](/teams-app-step-2-2.png)

</div>

#### 3. Verify App Status in Teams Admin Center

1. Go to the <a href="https://admin.teams.microsoft.com/" target="_blank">Microsoft Teams Admin Center</a>
2. Search for "Wintro" in the list of apps
3. Open the Wintro app details. If the app hasn't been fully published or approved for your organization, you might see a "Publish" button available on the app card. Ensure the app is in a published or approved state.

<div style="box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06); border-radius: 16px; overflow: hidden; margin: 40px 0;">

![Teams Admin Center App Status](/teams-app-step-3-1.png)

</div>
<div style="box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06); border-radius: 16px; overflow: hidden; margin: 40px 0;">

![Wintro App Details in Admin Center](/teams-app-step-3-2.png)

</div>

#### 4. Configure Teams App Setup Policies

You can deploy the Wintro app either organization-wide or to a specific group of users.

**Option A: Organization-wide deployment**

1. In the Teams Admin Center, navigate to "Teams apps" and then select "Setup policies"
2. Choose the "Global (Org-wide default)" policy. This policy applies to all users unless overridden by other specific policies
3. Under "Installed apps," click "Add apps" to ensure "Wintro" is included in the list of apps that are automatically installed for users
4. **Optional: Pin the App**: Under "Pinned apps," click "Add apps" to optionally make Wintro a pinned app in the Teams app bar for users. This makes the app easily accessible. You can rearrange the order of pinned apps as desired.

**Option B: Deploy to a specific group (recommended for pilots or phased rollouts)**

If you prefer to install the app only for specific users (e.g., the same security group used for SSO/SCIM provisioning):

1. In the Teams Admin Center, navigate to "Teams apps" > "Setup policies"
2. Click "Add" to create a new custom policy
3. Give the policy a descriptive name (e.g., "Wintro Users Policy")
4. Under "Installed apps," click "Add apps" and add "Wintro"
5. **Optional: Pin the App**: Under "Pinned apps," add Wintro if you want it pinned for these users
6. Click "Save"
7. Navigate to "Setup policies" and select your newly created policy
8. Click "Assign users" or "Group policy assignment":
   - **For individual users**: Click "Assign users" and search for users to add
   - **For a security group**: Click "Group policy assignment," then "Add group," search for your security group (e.g., the same group used for Wintro SSO/SCIM), and assign the policy

Using a security group assignment is ideal if you've already set up a Wintro security group for SSO or SCIM provisioning, as the same users will automatically receive the Teams app.

The Teams app has now been set up on the Microsoft side.

### Wintro-Side Configuration

The final steps involve configuring the integration from your Wintro account.

#### 1. Access Teams Configuration in Wintro

1. Log in to Wintro with a recruiter admin account
2. Navigate to Recruiter Settings
3. Within the channel settings, locate and click the configuration button for Teams

#### 2. Enter Your Tenant ID

1. You will need to provide your Microsoft Azure AD Tenant ID
2. To find your Tenant ID: In the Azure portal, navigate to Enterprise applications > All applications, select your app, and you will find the Tenant ID listed under Overview or Properties
3. Paste the Tenant ID into the designated field in Wintro
4. Click Save/Sync

#### 3. Set as Default Channel (Recommended)

If you intend for all communications to be sent through the Wintro Teams Bot, ensure you set Teams as the default channel in your Wintro settings.

#### 4. Verify the Connection

Upon successful configuration, a Heartbeat notification (a test or welcome message) will be automatically sent to the recruiter's Teams account. This confirms that the integration between Wintro and Teams is active.

### Permissions & Capabilities

The Wintro Teams app requests minimal permissions following the principle of least privilege. All permissions are declared in the app manifest and can be reviewed before installation.

#### App Identification

| Property | Value |
|----------|-------|
| **App ID** | `410d9cc1-22d8-4ca4-947d-1b686ba56199` |
| **Bot ID** | `d70347e7-f4d1-4323-93a4-760a6a6c1d91` |
| **Microsoft Partner Network ID** | `6971263` |
| **Manifest Version** | 1.20 |

#### Bot Capabilities

| Capability | Value | Why |
|------------|-------|-----|
| **Scope** | Personal only | The bot only operates in 1:1 chats with users, not in team channels or group chats. |
| **Notification-only** | Yes | The bot is designed to send notifications, not to have complex conversations. |
| **Calling support** | No | The bot cannot initiate or receive calls. |
| **Video support** | No | The bot cannot access video features. |
| **File access** | No | The bot cannot send or receive files. |

#### Resource-Specific Permissions

| Permission | Type | Why We Need It |
|------------|------|----------------|
| `TeamsActivity.Send.User` | Application | To send activity feed notifications to users when there are Wintro updates. |
| `ChannelMember.Read.Group` | Application | To identify users in your organization for matching with Wintro accounts. |

#### Device Permissions

| Permission | Why We Need It |
|------------|----------------|
| `notifications` | To deliver Teams notifications when Wintro sends updates. |
| `openExternal` | To allow users to open links to the Wintro web app from notification cards. |

#### What the App Cannot Do

- **Cannot read your messages** - The bot only sends messages, it cannot read your chat history
- **Cannot access team channels** - Operates only in personal 1:1 chats
- **Cannot access files** - No file read/write capabilities
- **Cannot make calls** - No calling or video capabilities
- **Cannot access your calendar** - No calendar permissions requested
- **Cannot access other apps' data** - Isolated to Wintro functionality only

### Data Handling

**What we store:**
- Your Teams user ID (to send you notifications)
- Your conversation reference (to enable proactive messaging)
- Your tenant ID (to identify your organization)

**Data retention:**
- Conversation data is immediately deleted when your Wintro account is deleted
- No message content is stored - we only keep delivery references

### Uninstalling the App

If you need to remove the Wintro Teams app from your organization, follow these steps.

#### Remove from Users via Setup Policies

1. In the Teams Admin Center, navigate to "Teams apps" > "Setup policies"
2. Select the policy that has Wintro installed (either "Global" or your custom policy)
3. Under "Installed apps," find Wintro and click the "X" to remove it
4. Click "Save"

The app will be automatically uninstalled from all users assigned to that policy. Note that policy changes may take a few hours to propagate to all users.

#### Remove from Your Organization's App Catalog

To completely remove the app from your organization:

1. Go to the <a href="https://admin.teams.microsoft.com/" target="_blank">Microsoft Teams Admin Center</a>
2. Navigate to "Teams apps" > "Manage apps"
3. Search for "Wintro"
4. Select the Wintro app
5. Click "Actions" > "Delete" (or change the status to "Blocked" if you want to prevent usage but retain the app for potential future use)

#### Individual User Uninstall

Users can also uninstall the app themselves:

1. In Microsoft Teams, right-click the Wintro app in the left sidebar (or find it in the Apps section)
2. Select "Uninstall"

#### What Happens to Data After Uninstalling

- **On Wintro's side:** Conversation references stored in Wintro become inactive. If you later offboard from Wintro entirely, all Teams-related data (user IDs, conversation references, tenant ID) is permanently deleted along with your Wintro account data.
- **On Microsoft's side:** The chat history with the Wintro bot remains in the user's Teams chat history unless they manually delete it. No Wintro data persists in your Microsoft tenant after uninstalling.

### Troubleshooting

**Not receiving notifications?**
- Ensure the Wintro app is installed in your Teams
- Check that your organization's IT admin has approved the app
- Verify that Teams is set as your notification channel in Wintro settings

**Bot not responding?**
- The bot is notification-only and responds to limited commands (help, hello, about)
- For full Wintro functionality, use the web application