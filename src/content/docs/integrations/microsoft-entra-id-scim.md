---
title: Microsoft Entra ID - SCIM
description: Configure automatic user provisioning (SCIM) with Microsoft Entra ID to sync users between Azure and Wintro.
---

This guide outlines the steps for setting up automatic user provisioning between Microsoft Entra ID (formerly Azure Active Directory) and Wintro using SCIM 2.0. With SCIM configured, user accounts are automatically created, updated, and deactivated in Wintro based on changes in your Microsoft Entra ID.

> **Note**: SCIM provisioning syncs every 40 minutes. Initial provisioning may take up to 40 minutes to reflect in Wintro.

#### Prerequisites

Before starting the SCIM configuration, ensure you have:

- **Admin access** to your Microsoft Entra ID tenant
- **Admin access** to your Wintro company account (Recruiter role)
- Microsoft Entra ID Premium P1 or P2 license (required for provisioning)
- Users in Microsoft Entra ID with complete profiles (email, first name, last name, display name)

#### Important Limitations

- **Groups are NOT supported** - Users must be assigned individually
- **Required fields for all users**:
  - Valid email address (used as primary username)
  - First name (given name)
  - Last name (family name)
  - Display name
- Users missing any required fields will fail to provision

#### Step 1: Create Enterprise Application for Provisioning

1. Sign in to the [Microsoft Azure Portal](https://portal.azure.com)
2. Navigate to **Microsoft Entra ID** > **Enterprise applications**
3. Click **+ New application**
4. Select **Create your own application**
5. Configure the application:
   - **Name**: Enter "Wintro-SCIM" or "Wintro" (if using both SSO and SCIM)
   - **Type**: Select "Integrate any other application you don't find in the gallery (Non-gallery)"
6. Click **Create**

<div style="box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06); border-radius: 16px; overflow: hidden; margin: 40px 0;">

![Enterprise Applications](/scim-step-1-1.png)

</div>

<div style="box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06); border-radius: 16px; overflow: hidden; margin: 40px 0;">

![Create Enterprise Application](/scim-step-1-2.png)

</div>

<!-- Screenshot needed: Azure portal showing "Create your own application" dialog with "Wintro-SCIM" entered as name and Non-gallery option selected -->

> **Tip**: If you're implementing both SSO and SCIM, you can use the same application. Name it "Wintro" for clarity.

### Step 2: Generate SCIM Token in Wintro

Before configuring provisioning in Azure, you need to generate a SCIM token in Wintro:

1. Log in to [Wintro](https://wintro.app) as an admin
2. Navigate to **Settings** > **Security** > **SCIM Configuration**
3. Click **Generate SCIM Token**
4. **Copy and securely save this token** - you won't be able to see it again
5. Keep this browser tab open while you configure Azure

<!-- <div style="box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06); border-radius: 16px; overflow: hidden; margin: 40px 0;">

![Generate SCIM Token](/wintro-scim-token.png)

</div> -->

<!-- Screenshot needed: Wintro Settings > Security > SCIM Configuration page showing the Generate SCIM Token button and a sample generated token (blur the actual token) -->

### Step 3: Configure Provisioning in Microsoft Entra ID

1. In your Wintro enterprise application, navigate to **Provisioning** in the sidebar
2. Click **Get started**
3. Under **Provisioning Mode**, select **Automatic**
4. Expand the **Admin Credentials** section and enter:
   - **Tenant URL**: `https://www.wintro.app/api/scim/v2`
   - **Secret Token**: Paste the token generated from Wintro
5. Click **Test Connection**
6. Wait for the success message: "The supplied credentials are authorized to enable provisioning"
7. Click **Save**

<div style="box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06); border-radius: 16px; overflow: hidden; margin: 40px 0;">

![Get started with application provisioning](/scim-step-2-1.png)

</div>
<div style="box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06); border-radius: 16px; overflow: hidden; margin: 40px 0;">

![New provisioning configuration](/scim-step-2-2.png)

</div>

<!-- Screenshot needed: Provisioning configuration page showing Tenant URL and Secret Token fields filled in, with successful test connection message -->

##### Troubleshooting Connection Issues

If the connection test fails:
- Verify the Tenant URL is exactly: `https://www.wintro.app/api/scim/v2`
- Ensure you copied the entire token from Wintro
- Check that the token hasn't expired (tokens are valid for 1 year)
- Generate a new token in Wintro if needed

### Step 4: Configure Attribute Mappings

Microsoft Entra ID needs to know how to map user attributes to Wintro's expected format.

1. In the Provisioning section, click on **Provisioning** again to see the full configuration
2. Under **Mappings**, click **Provision Microsoft Entra ID Users**
3. Ensure the following attributes are mapped:

| Microsoft Entra ID Attribute | Wintro Attribute | Required |
|------------------------------|------------------|----------|
| userPrincipalName | userName | Yes |
| mail | emails[type eq "work"].value | Yes |
| givenName | name.givenName | Yes |
| surname | name.familyName | Yes |
| displayName | displayName | Yes |
| Switch([IsSoftDeleted]...) | active | Yes |

##### Configure the Active Status Expression

The "active" attribute requires a special expression to handle account states properly:

1. Find the **active** attribute mapping
2. Click on it to edit
3. Set **Mapping type** to **Expression**
4. In the **Expression** field, enter:
   ```
   IIF([IsSoftDeleted]="True", "False", IIF([accountEnabled]="False", "False", "True"))
   ```
5. Click **OK** to save

<div style="box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06); border-radius: 16px; overflow: hidden; margin: 40px 0;">

![Attribute Mappings](/scim-step-4-1.png)

</div>
<div style="box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06); border-radius: 16px; overflow: hidden; margin: 40px 0;">

![Edit Mapping](/scim-step-4-2.png)

</div>
<div style="box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06); border-radius: 16px; overflow: hidden; margin: 40px 0;">

![Edit Attribute](/scim-step-4-3.png)

</div>

<!-- Screenshot needed: Attribute mappings page showing the list of mapped attributes with the active attribute expression visible -->

This expression ensures:
- Soft-deleted users in Entra ID are marked as inactive in Wintro
- Disabled accounts in Entra ID are marked as inactive in Wintro
- All other users are marked as active

### Step 5: Assign Users for Provisioning

> **Important**: Groups are not supported. Users must be assigned individually.

1. Navigate to **Users and groups** in the application sidebar
2. Click **+ Add user/group**
3. Click **None Selected** under Users
4. Search for and select individual users to provision
5. Click **Select**
6. Click **Assign**

<div style="box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06); border-radius: 16px; overflow: hidden; margin: 40px 0;">

![Assign Users](/scim-step-3-1.png)

</div>

<!-- Screenshot needed: Users and groups page showing several individual users assigned (no groups) -->

##### User Requirements

Before assigning users, verify they have all required fields in Microsoft Entra ID:
- Email address (mail attribute)
- First name (givenName)
- Last name (surname)
- Display name (displayName)

Users missing any of these fields will fail to provision.

### Step 6: Configure Provisioning Settings

1. Return to the **Provisioning** page
2. Click **Edit provisioning**
3. Expand the **Settings** section
4. Configure the following:
   - **Scope**: "Sync only assigned users and groups"
   - **Provisioning Status**: Leave as "Off" for now
   - **Email Notification**: Enter your email for error notifications
   - **Prevent accidental deletion**: Enable and set threshold (e.g., 500)

### Step 7: Start Automatic Provisioning

1. On the Provisioning overview page, click **Start provisioning**
2. The initial sync will begin immediately
3. Subsequent syncs occur every 40 minutes

<div style="box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06); border-radius: 16px; overflow: hidden; margin: 40px 0;">

![Start Provisioning](/scim-step-5-1.png)

</div>

<!-- Screenshot needed: Provisioning overview page with "Start provisioning" button highlighted and provisioning status showing as "On" -->

### Monitoring Provisioning

##### View Provisioning Logs

1. In the Provisioning section, click **Provisioning logs**
2. Here you can see:
   - Successfully provisioned users
   - Failed provisioning attempts with error details
   - Update operations
   - Deactivation events

##### Common Log Entries

- **Create**: New user created in Wintro
- **Update**: Existing user information updated
- **Disable**: User marked as inactive (account disabled or deleted in Entra ID)
- **Skip**: User already exists and no changes needed

### How Provisioning Works

##### Initial Sync
- All assigned users are evaluated
- New users are created in Wintro
- Existing users (matched by email) are updated with Entra ID data
- Takes up to 40 minutes for initial sync

##### Incremental Syncs
- Run every 40 minutes automatically
- Only process changed users
- Updates include:
  - Name changes
  - Email updates
  - Account status (active/inactive)

##### User Matching
- Users are matched between systems using email address
- Prevents duplicate accounts
- Existing Wintro users get updated with Entra ID data

### Troubleshooting

##### Users Not Provisioning

**Check User Assignment**
- Verify users are assigned to the application
- Confirm users aren't in groups (individual assignment required)

**Verify Required Fields**
- Check users have email, first name, last name, and display name in Entra ID
- Review provisioning logs for specific field errors

**Token Issues**
- Regenerate SCIM token in Wintro if expired
- Update token in Azure provisioning settings

##### Provisioning Delays

- Initial sync can take up to 40 minutes
- Incremental syncs run every 40 minutes
- Check provisioning logs for processing status
- Large user volumes may take longer

##### Users Not Deactivating

- Verify the active attribute expression is configured correctly
- Check that account is actually disabled in Entra ID
- Allow 40 minutes for sync to occur

##### Duplicate Users

This shouldn't occur as matching is done by email. If you see duplicates:
- Check if users have different email addresses in each system
- Contact Wintro support for manual consolidation

### Best Practices

##### Before Going Live

1. **Test with a small group** - Start with 5-10 test users
2. **Verify all attributes** - Ensure names and emails sync correctly
3. **Check existing users** - Confirm updates work for existing Wintro users
4. **Document your setup** - Keep notes on token generation date and configuration

##### Ongoing Management

- **Monitor provisioning logs** weekly for errors
- **Review inactive users** monthly
- **Update SCIM token** annually (before expiration)
- **Audit user assignments** quarterly

##### Security Considerations

- **Protect SCIM tokens** - Treat as passwords
- **Limit admin access** - Only necessary personnel should manage provisioning
- **Enable notifications** - Get alerts for provisioning errors
- **Regular audits** - Review who has access to provisioning configuration

### Combining with SSO

If you're using both SSO and SCIM:

1. **Use the same app** - One "Wintro" enterprise application for both
2. **Configure SSO first** - Set up authentication before provisioning
3. **Test separately** - Verify each works independently
4. **Coordinate rollout** - Enable SSO, then add provisioning

### Next Steps

After successfully configuring SCIM:
- [Configure SSO](/integrations/microsoft-entra-id-sso) if not already done
- Set up [Microsoft Teams integration](/integrations/microsoft-teams)
- Train HR team on the automated provisioning process
- Document your organization's onboarding/offboarding procedures

---

With SCIM configured, your user management is now automated. New employees will automatically get Wintro access, and departing employees will be deactivated, ensuring your Wintro user base stays synchronized with your Microsoft Entra ID directory.