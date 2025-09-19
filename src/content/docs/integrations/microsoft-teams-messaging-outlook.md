---
title: Teams Messaging & Outlook
description: Connect your Microsoft Teams and Outlook to send messages and emails directly from Wintro
---

This guide walks you through connecting your Microsoft Teams and Outlook accounts to Wintro, enabling you to send Teams messages and emails directly from the platform without switching between applications.

### Prerequisites

Before starting the integration, ensure you have:

- **Active Microsoft 365 account** with Teams and Outlook access
- **Recruiter account** in Wintro with appropriate permissions
- **Organization permissions** to connect third-party applications (some organizations may require admin approval)

### How It Works

The Teams Messaging & Outlook integration uses Microsoft Graph API to:
- Send direct messages and channel messages in Microsoft Teams
- Send emails through your Outlook account
- Access your Teams channels and contacts for seamless communication
- Maintain your identity when sending messages (recipients see messages from you, not Wintro)

### Step 1: Access Integration Settings

1. Log in to your Wintro account
2. Navigate to **Recruiter Settings**
3. Look for **Integrations** section
4. Find **Microsoft Teams & Outlook** integration
5. Click **Connect**

### Step 2: Microsoft OAuth Authentication

When you click to connect, you'll be redirected to Microsoft's secure login page:

1. **Sign in** with your Microsoft 365 credentials
2. **Review permissions** that Wintro is requesting:
   - Send messages on your behalf in Teams
   - Send emails through Outlook
   - Read your Teams channels and contacts
   - Access your basic profile information

3. Click **Accept** to grant permissions


### Step 3: Handle Admin Consent (If Required)

If your organization requires admin approval for third-party applications, you'll see an "Approval required" screen after logging in:

1. **Enter the business justification** in the text box, such as:
   - "Required for recruiting communications via Teams and Outlook through Wintro"
2. Click **"Request approval"**

Once an administrator approves your request, you'll receive an email notification and can return to complete the integration process.


#### For IT Administrators:
If you're an IT admin reviewing this request:

1. Go to **Microsoft Entra Admin Center**
2. Navigate to **Enterprise Applications** > **Admin consent requests**
3. Review the Wintro application request
4. **Approve** the request


### Step 4: Verify Connection

Once permissions are granted:

1. You'll be redirected back to Wintro
2. Your integration status should show as **"Connected"**
3. You should see your Microsoft account email displayed
4. Test the connection by sending a test message to a colleague
