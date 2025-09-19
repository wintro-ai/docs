---
title: Microsoft Entra ID - SSO
description: Configure SAML 2.0 Single Sign-On (SSO) with Microsoft Entra ID for secure and seamless authentication to Wintro.
---

This guide walks you through configuring SAML 2.0 Single Sign-On (SSO) between Microsoft Entra ID (formerly Azure Active Directory) and Wintro. SSO allows your employees to access Wintro using their Microsoft corporate credentials, enhancing security and user experience.

> **Note**: SSO configuration for Wintro requires coordination with our support team. After configuring your Identity Provider, you'll need to share your metadata with us to complete the setup.

### Prerequisites

Before starting the SSO configuration, ensure you have:

- **Admin access** to your Microsoft Entra ID tenant
- **Admin access** to your Wintro company account
- Microsoft Entra ID Premium license (P1 or P2) for SAML-based SSO
- Contact with Wintro support team to complete the configuration

### Step 1: Add Wintro to Enterprise Applications

1. Sign in to the [Microsoft Entra admin center](https://entra.microsoft.com)
2. Navigate to **Identity** > **Applications** > **Enterprise applications**
3. Click **+ New application**
4. Select **+ Create your own application**
5. Enter "Wintro" as the application name
6. Select **Integrate any other application you don't find in the gallery (Non-gallery)**
7. Click **Create**
<div style="box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06); border-radius: 16px; overflow: hidden; margin: 40px 0;">

![Add Enterprise Application](/sso-azure-step-01.png)

</div>
<div style="box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06); border-radius: 16px; overflow: hidden; margin: 40px 0;">

![Choose to create own Application](/sso-azure-step-02.png)

</div>

<!-- Screenshot needed: Microsoft Entra admin center showing the "Create your own application" dialog with "Wintro" entered as the name and "Non-gallery" option selected -->

### Step 2: Configure SAML Single Sign-On

1. In your newly created Wintro application, go to **Single sign-on** from the left menu
2. Select **SAML** as the single sign-on method
3. Click **Edit** in the Basic SAML Configuration section

#### Basic SAML Configuration

Configure the following settings with Wintro's SAML 2.0 endpoints:

- **Identifier (Entity ID)**: `https://oqwjnxpmowajlgwaoqcs.supabase.co/auth/v1/sso/saml/metadata`
- **Reply URL (Assertion Consumer Service URL)**: `https://oqwjnxpmowajlgwaoqcs.supabase.co/auth/v1/sso/saml/acs`
- **Sign on URL**: `https://wintro.app/auth/login`
- **Relay State**: `https://oqwjnxpmowajlgwaoqcs.supabase.co` (Optional but recommended)
- **Logout URL**: (Leave blank)

<div style="box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06); border-radius: 16px; overflow: hidden; margin: 40px 0;">

![SAML Configuration](/sso-azure-step-2-1.png)

</div>

<!-- Screenshot needed: Basic SAML Configuration panel showing all the URLs filled in as specified above -->

Click **Save** after entering all URLs.

### Step 3: Configure User Attributes & Claims

1. In the **Attributes & Claims** section, click **Edit**
2. Ensure the following claims are configured:

| Claim Name | Source Attribute |
|------------|------------------|
| Unique User Identifier (Name ID) | user.mail |
| emailaddress | user.mail |
| givenname | user.givenname |
| surname | user.surname |
| name | user.displayname |

3. To add or edit a claim:
   - Click **+ Add new claim**
   - Enter the claim name
   - Leave namespace blank
   - Select **Attribute** as the source
   - Choose the appropriate source attribute
   - Click **Save**

### Step 4: Download Federation Metadata

1. In the **SAML Certificates** section, locate **Federation Metadata XML**
2. Click **Download** to save the metadata file
3. Alternatively, copy the **App Federation Metadata URL** to share with Wintro support

<div style="box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06); border-radius: 16px; overflow: hidden; margin: 40px 0;">

![SAML Certificate Download](/sso-azure-step-4-1.png)

</div>

<!-- Screenshot needed: SAML Certificates section showing the Federation Metadata XML download option and App Federation Metadata URL -->

### Step 5: Share Metadata with Wintro Support

After configuring your Microsoft Entra ID application:

1. **Contact Wintro Support** via:
   - Email: support@wintro.ai
   - Or through your dedicated Slack/Teams channel

2. **Share your metadata** using one of these methods:
   - **Option A**: Send the downloaded Federation Metadata XML file
   - **Option B**: Share the App Federation Metadata URL from Microsoft Entra ID

3. **Provide additional information**:
   - Your company domain (e.g., yourcompany.com)
   - List of email domains that should use SSO
   - Whether you want to enforce SSO for all users or make it optional

4. **Wintro Support will**:
   - Configure your SSO settings on our end
   - Provide you with a test account for validation
   - Schedule a brief call to walk through the testing process if needed

> **Timeline**: SSO configuration typically takes 1-2 business days after receiving your metadata.

### Step 6: Assign Users and Groups

Back in the Microsoft Entra admin center:

1. Go to your Wintro application
2. Select **Users and groups** from the left menu
3. Click **+ Add user/group**
4. Select the users or groups who should have access to Wintro
5. Click **Assign**

**Best Practice**: Create a dedicated security group (e.g., "Wintro Users") and assign it to the application for easier management.

### Step 7: Test the SSO Connection

After Wintro Support confirms your SSO configuration is complete:

#### Test from Microsoft Entra ID:
1. In the Wintro application, go to **Single sign-on**
2. Scroll to the **Test single sign-on with Wintro** section
3. Click **Test**
4. Select **Sign in as current user** or test with a specific user
5. Verify successful authentication

#### Test from Wintro:
1. Open a new incognito/private browser window
2. Navigate to `https://wintro.app/auth/login`
3. Click **Sign in with SSO**
4. Enter your company email address
5. You should be redirected to Microsoft login
6. After authentication, you should be logged into Wintro

#### IdP-Initiated Login (Optional):
1. Navigate to [myapps.microsoft.com](https://myapps.microsoft.com)
2. Find and click the Wintro application tile
3. You should be automatically logged into Wintro

### Step 8: Roll Out to Your Organization

Once testing is successful, coordinate with Wintro Support to:

1. **Enable SSO enforcement** (if desired) - requiring all users to authenticate via SSO
2. **Set up auto-provisioning rules** - automatically creating accounts for new employees
3. **Configure session policies** - timeout settings and remember me options
4. **Schedule employee communication** - we can help with announcement templates

### Troubleshooting

#### Common Issues and Solutions

**"Invalid SAML Response" Error**
- Verify the Reply URL in Entra ID matches exactly: `https://oqwjnxpmowajlgwaoqcs.supabase.co/auth/v1/sso/saml/acs`
- Ensure you've shared the correct metadata with Wintro Support
- Check that the Name ID format is set to email address (user.mail)

**"User Not Found" Error**
- Confirm the email claim is properly mapped to user.mail
- Check that the user's email in Entra ID matches their email in Wintro
- Enable auto-provisioning if users don't exist in Wintro yet

**"Access Denied" After Successful Authentication**
- Verify the user is assigned to the Wintro application in Entra ID
- Check that the user has an active Wintro license
- Confirm the default role setting if auto-provisioning is enabled

**Users Can't Find SSO Login Option**
- Ensure SSO is enabled in Wintro authentication settings
- Verify the correct domain is configured for SSO
- Check that users are entering their full email address

#### Getting Help

If you encounter issues not covered in this guide:
1. Review the sign-in logs in Microsoft Entra ID for authentication failures
2. Check browser console for any error messages
3. Contact Wintro support (support@wintro.ai) with:
   - Your company domain
   - Screenshot of the error message
   - Time and date of the failed attempt
   - User email that experienced the issue

### Security Considerations

- **Certificate Rotation**: Microsoft Entra ID certificates expire every 3 years. When rotation is needed, share the new metadata with Wintro Support
- **Conditional Access**: Consider implementing Conditional Access policies in Entra ID for additional security (MFA, device compliance, location restrictions)
- **Regular Audits**: Review SSO access logs monthly and remove access for terminated employees promptly
- **Backup Authentication**: Wintro Support can help configure emergency access procedures if needed

### Next Steps

After successfully configuring SSO:
- Consider setting up [SCIM provisioning](/integrations/microsoft-entra-id-scim) for automated user management
- Configure [Microsoft Teams integration](/integrations/microsoft-teams) for seamless collaboration
- Review and adjust session management settings for optimal security and user experience
- Train your IT helpdesk on the new SSO login process

### Important URLs Reference

For your reference, here are the Wintro SAML 2.0 endpoints:

- **ACS URL**: `https://oqwjnxpmowajlgwaoqcs.supabase.co/auth/v1/sso/saml/acs`
- **Metadata URL**: `https://oqwjnxpmowajlgwaoqcs.supabase.co/auth/v1/sso/saml/metadata`
- **Relay State URL**: `https://oqwjnxpmowajlgwaoqcs.supabase.co`
- **Sign-on URL**: `https://wintro.app/auth/login`

---

With SSO configured, your employees can now access Wintro securely using their Microsoft credentials, eliminating password fatigue and enhancing your organization's security posture.