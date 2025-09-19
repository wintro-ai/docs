---
title: Microsoft Teams App
description: Step-by-step guide for installing and configuring the Wintro app for Microsoft Teams
---

This guide provides step-by-step instructions for installing and configuring the Wintro app for Microsoft Teams. Successful integration will enable seamless communication and user management between Wintro and your Teams environment.

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
5. Select and import the Wintro app zip file that you have received or download the file from this <a href="https://storage.googleapis.com/wintro-public/teams-app/Wintro.zip" target="_blank">link</a>

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

1. In the Teams Admin Center, navigate to "Teams apps" and then select "Setup policies"
2. Choose the "Global (Org-wide default)" policy. This policy applies to all users unless overridden by other specific policies
3. Under "Installed apps," click "Add apps" to ensure "Wintro" is included in the list of apps that are automatically installed for users
4. **Optional: Pin the App**: Under "Pinned apps," click "Add apps" to optionally make Wintro a pinned app in the Teams app bar for users. This makes the app easily accessible. You can rearrange the order of pinned apps as desired.

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