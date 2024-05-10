---
title: Linking your Workday account
description: How to link your Workday account to Wintro?
---

### Prerequisites

*   Ensure you are an admin of your Workday account before starting.
    1.  After logging into Workday, search for **"View API Clients"**
    2.  If you can not see this menu item, you are not an admin of the Workday account.  
        ![Workday_find_Service_URL.png](https://help.kombo.dev/hc/article_attachments/14442192822161)
    3.  If you do not see this menu item, figure out who your Workday Admin is and ask them to give your account sufficient permissions or to take over the integration process.

### Overview

_Estimated, overall setup time: 30 minutes._

Fundamentally, there are 3 main steps you have to complete to set up the integration:

1\. You have to create a new integration system user and security group for that user, 

2\. You have to assign the required permissions to the security group and activate the changes,

3\. (Optional, rarely needed: You have to generate a new API client.)   
  

That's it! The rest of this document is a step-by-step walkthrough of everything you need to know and do to set up the integration.

### Find your Workday Service URL

1.  Click on the "**Search**" field at the top and enter "**View API Clients**"
2.  Click on the task **"View API Clients"** that just appeared![Workday_find_Service_URL.png](https://help.kombo.dev/hc/article_attachments/14442192822161)
3.  At the top of the page that just appeared find and copy the **"Workday REST API Endpoint"![Workday_see_Service_URL.png](https://help.kombo.dev/hc/article_attachments/14461586975377)**

### Add an integration system user (ISU)

1.  Click on the "**Search**" field at the top and enter "**Create Integration System User**"
2.  Click on the task "**Create Integration System User**" that just appeared![Workday_create_ISU.png](https://help.kombo.dev/hc/article_attachments/14371697439889)
3.  In the dialog that just opened, enter a username and generate a secure password.  
    You can leave the other fields untouched
4.  At the bottom of the dialog, click "OK"![Workday_configure_ISU.png](https://help.kombo.dev/hc/article_attachments/14371695658897)

### Add the ISU to your list of system users

While the newly created ISU will work for linking your Workday account, its password will expire after some time unless you add it to your list of system users.

### Create a security group and assign the ISU to it

1.  Click on the "**Search**" field at the top and enter "**Create Security Group**"
2.  Click the task "**Create Security Group**" that just appeared![Workday_create_security_group.png](https://help.kombo.dev/hc/article_attachments/14439978282513)
3.  On the page that just appeared locate the **dropdown** "**Type of Tenanted Security Group"** and select "**Integration System Security Group (Unconstrained)**"
4.  For the **"Name"** enter the value of the **"User Name"** when creating the ISU earlier (in this case it would be _test\_isu_, but yours will be different)
5.  At the bottom of the page, click "OK"![Workday_configure_security_group.png](https://help.kombo.dev/hc/article_attachments/14440201626385)
6.  On the next page, the only thing you have to do is go to the field **"Integration System Users"** and add the user you created earlier. You can do this by clicking on the field and typing in the name of the ISU (in this case "test\_isu_"_)
7.  After that, go ahead and click "OK"![Workday_edit_security_group.png](https://help.kombo.dev/hc/article_attachments/14440486943505)

### Add the required permissions to the security group

1.  Click on the **"Search"** field at the top and enter **"Maintain Permission for Security Group"**
2.  Click on the task **"Maintain Permission for Security Group"** that just appeared![Workday_maintain_permissions_of_security_gruop.png](https://help.kombo.dev/hc/article_attachments/14440751396497)
3.  In the window that just appeared, make sure you have the option **"Maintain"** selected
4.  Click the field **"Source Security Group"**, enter the name of the group (in this case _test\_isu)_ and hit enter. Then click on the security group to select it.
5.  Click **"OK"**![Workday_select_security_group_to_maintain.png](https://help.kombo.dev/hc/article_attachments/14440981671185)
6.  In the window that just appeared, you can add the permissions you want for the ISU. You can find the list of permissions needed in the connection flow.  
    ![Workday](https://help.kombo.dev/hc/article_attachments/16398826334481)_  
    **  
    The list of permissions here is only an example. Please check your own permissions in the connection flow.**  

**For each permission, repeat** the following process:  
    1.  Make sure the tab **"Domain Security Policy Permissions"** is selected
    2.  Click on the icon with the **"+"** on it![Workday_add_new_domain_security_permission.png](https://help.kombo.dev/hc/article_attachments/14441170631441)
    3.  Click on the cell in the column **"View/Modify Access"![Workday](https://help.kombo.dev/hc/article_attachments/16398892511761)**  
        If the permission says "**Get:**", select "**Get Only**". Otherwise select "**Get and Put**"  
        ![Workday](https://help.kombo.dev/hc/article_attachments/16398841932433)
    4.  Click on the cell in the column "**Domain Security Policy"**,  
        ![Workday](https://help.kombo.dev/hc/article_attachments/16398892513297)  
        type in the name of the policy (i.e. "**Integration: Build"**), hit enter and click on the item that just appeared in a list![Workday](https://help.kombo.dev/hc/article_attachments/16398826343697)

### Activate your changes

After making any changes to your Workday security policy settings, make sure to apply those changes by executing the **"Activate Pending Security Policy Changes"** task. Without that, none of your changes with take effect.

1.  Click on the "**Search**" field at the top and enter "**Activate Pending Security Policy Changes**"
2.  Click on the task **"Activate Pending Security Policy Changes"** that just appeared![Workday_activate_pending_security_changes_task.png](https://help.kombo.dev/hc/article_attachments/14647562265233)
3.  In the window that just appeared, add any **comment** for applying the changes (i.e. **"Grant ISU _test\_isu_ necesssary permissions for integratons"**
4.  Click **"OK"****![Workday_activate_pending_security_task_comment.png](https://help.kombo.dev/hc/article_attachments/14647573329553)**
5.  In the new window, check the box **"Confirm"**
6.  Click **"OK"![Workday_activate_pending_security_policy_changes_confirm.png](https://help.kombo.dev/hc/article_attachments/14647666232849)**

### Create an API client

If you want to read/write absence (time off) data from your Workday instance (most of the time this isn't the case), you will need also to follow these additional setup steps. **In case this is necessary, the connection flow will explicitly prompt you for absences data ("Absence Management via REST API"), and you will also get an appropriate error message if you need to set it up but haven't**.  
**In all other cases you can skip the steps below.**

1.  Click on the "**Search**" field at the top and enter "**Register API Client for Integrations**"
2.  Click on the task **"Register API Client for Integrations"** that just appeared![Workday_create_API_client_task.png](https://help.kombo.dev/hc/article_attachments/14648600075665)
3.  In the window that just appeared, enter a **"Client Name"**, i.e. _"test\_isu API client"_
4.  Make sure the option **"Non-Expiring Refresh Tokens"** is turned on
5.  For the field **"Scope (Functional Areas)"**, enter the values  
    **Tenant Non-Configurable  
    Staffing**  
    **Time Off and Leave****  
    System**
6.  Click **"OK"![](https://help.kombo.dev/hc/article_attachments/17343707733649)**
7.  In the new window, copy the **Client ID** and **Client Secret** for later use, then **do not click** **"Done"![Workday_create_API_client_show_token.png](https://help.kombo.dev/hc/article_attachments/14648907487249)**
8.  **Still on the same page**, click the three dots at the top, then **"API Client" > "Manage Refresh Tokens for Integrations"![Workday_create_API_client_find_manage_refresh_token.png](https://help.kombo.dev/hc/article_attachments/14648963263633)**
9.  In the new window, enter the name of the [ISU that you created earlier](#create-a-security-group-and-assign-the-isu-to-it)
10.  Click **"OK"![Workday_create_API_client_refresh_token_for_ISU.png](https://help.kombo.dev/hc/article_attachments/14649020864785)**
11.  In the new window, check the box for **"Generate New Refresh Token"**
12.  Click **"OK"![Workday_create_API_client_confirm_regenerate_refresh_token.png](https://help.kombo.dev/hc/article_attachments/14649122837009)**
13.  In the new window, copy the refresh token and store it for later use![Workday_create_API_client_show_refresh_token.png](https://help.kombo.dev/hc/article_attachments/14649129491345)

### Troubleshooting "Invalid username or password!" issues

If you are experiencing trouble logging in due to an error "Invalid username or password!", try the following:

1.  Search for "**Manage Authentication Policies**" in the top bar.
2.  Click on "**Edit**" next to the policy
3.  Create a new "**Authentication Rule**" by clicking on the **+** in the top left
4.  Assign the **Security Group** that was made earlier to this new rule, and name the rule something relevant.
5.  Click the **+** next to "**Authentication Condition Name**", name it something relevant.
6.  Ensure that the "Allowed Authentication Types" is either set to "**Specific: User Name Password"**, or "**Any**".
7.  Finally, search for "**Activate All Pending Authentication Policy Changes**" in the top bar, then confirm the changes made.