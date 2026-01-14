---
title: Microsoft Outlook
description: Connect your Microsoft Outlook to send emails on your behalf from Wintro
---

This guide walks you through connecting your Microsoft Outlook account to Wintro, enabling you to send emails directly from the platform using your own email address.

### Prerequisites

Before starting the integration, ensure you have:

- **Active Microsoft 365 account** with Outlook access
- **Recruiter account** in Wintro with appropriate permissions
- **Organization permissions** to connect third-party applications (some organizations may require admin approval)

### How It Works

The Outlook integration uses Microsoft Graph API to:
- Send emails through your Outlook account on your behalf
- Maintain your identity when sending emails (recipients see emails from you, not Wintro)
- Allow colleagues to reply directly to your email address

### Step 1: Access Integration Settings

1. Log in to your Wintro account
2. Navigate to **Settings**
3. Go to the **Communication** tab
4. Find **Microsoft Outlook** in the integrations section
5. Click **Connect**

### Step 2: Microsoft OAuth Authentication

When you click to connect, you'll be redirected to Microsoft's secure login page:

1. **Sign in** with your Microsoft 365 credentials
2. **Review permissions** that Wintro is requesting (see detailed breakdown below)
3. Click **Accept** to grant permissions

#### Permissions Explained

Wintro requests the following Microsoft Graph API permissions for Outlook email sending. We follow the principle of least privilege and only request what is strictly necessary for the integration to function. All permissions are **delegated permissions**, meaning Wintro can only act on behalf of the signed-in user and cannot perform actions without user context.

| Permission | Microsoft Name | Why We Need It |
|------------|----------------|----------------|
| **Read your profile** | `User.Read` | To display your name and email in Wintro, and to verify your identity when sending emails. |
| **Send emails** | `Mail.Send` | To send emails through your Outlook account when you choose to reach out via email from Wintro. |
| **Stay connected** | `offline_access` | To maintain your connection without requiring you to re-authenticate every time you use Wintro. This allows us to refresh your access securely. |

#### What We Don't Access

- **We cannot read your emails** - We only have permission to send, not read
- **We cannot access your inbox or folders** - Not requested
- **We cannot access your calendar** - Not requested
- **We cannot access your contacts** - Not requested
- **We cannot access your files or OneDrive** - Not requested
- **We cannot modify your profile** - Read-only access


### Step 3: Handle Admin Consent (If Required)

If your organization requires admin approval for third-party applications, you'll see an "Approval required" screen after logging in:

1. **Enter the business justification** in the text box, such as:
   - "Required for recruiting communications via email through Wintro"
2. Click **"Request approval"**

Once an administrator approves your request, you'll receive an email notification and can return to complete the integration process.


#### For IT Administrators

If you're an IT admin reviewing this request, verify the application ID matches: `d70347e7-f4d1-4323-93a4-760a6a6c1d91`

1. Go to **Microsoft Entra Admin Center**
2. Navigate to **Enterprise Applications** > **Admin consent requests**
3. Review the Wintro application request
4. **Approve** the request


### Step 4: Verify Connection

Once permissions are granted:

1. You'll be redirected back to Wintro
2. Your integration status should show as **"Connected"**
3. You should see your Microsoft account email displayed
4. When using email as your preferred channel, you can select "Personal Outlook" as your email provider

### Using Outlook as Your Email Provider

After connecting Outlook, you can set it as your preferred email provider:

1. Go to **Settings** > **Communication**
2. Select **Email** as your preferred channel
3. In the **Email Provider** section, choose **Personal Outlook**
4. Your nudges will now be sent from your Outlook email address

### Security & Data Handling

**How we protect your credentials:**
- Your Microsoft access tokens are encrypted at rest using AES-256 encryption
- Tokens are automatically refreshed and old tokens are invalidated
- We never store your Microsoft password - authentication is handled entirely by Microsoft
- Tokens are immediately deleted when your Wintro account is deleted

**How disconnecting works:**
- You can disconnect at any time from Wintro settings
- Disconnecting immediately removes all stored tokens from our systems
- You can also revoke access from your [Microsoft account security settings](https://account.microsoft.com/privacy/app-access)

### Troubleshooting

**Connection expired?**
If your connection shows as disconnected, simply click "Connect" again. This can happen if:
- Your Microsoft password was changed
- Your organization's IT admin revoked the app permissions
- The refresh token expired (rare, typically after 90 days of inactivity)

**Permission denied errors?**
Contact your IT administrator - your organization may have policies that restrict third-party app access. Share this documentation page with them for context on what permissions Wintro requires and why.
