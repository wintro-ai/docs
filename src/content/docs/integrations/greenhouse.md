---
title: Linking your Greenhouse account
description: How to link your Greenhouse account to Wintro?
---
### Prerequisites

Before getting started, please **carefully read** the following to make sure you fulfill all requirements for the integration to work:

*   Greenhouse user permissions required:
    *   Developer Permissions
        *   **Manage ALL organization's API Credentials**
    *   User-Specific Permissions
        *   **Manage CRM (Only if candidate source writing is enabled)**  
            
*   [Your **Greenhouse admin**](#who-is-your-greenhouse-account-administrator) can grant you the appropriate permissions.

1.  Log in to Greenhouse, then click on the cog in the top right corner:![](https://help.kombo.dev/hc/article_attachments/17652241451537)  
      
    
2.  Go to **"Dev Center"** in the left menu:![](https://help.kombo.dev/hc/article_attachments/17652267705745)  
      
    
3.  In order to be able to complete the setup process, you should be able to see the "**API Credential Management"** item:  
    ![](https://help.kombo.dev/hc/article_attachments/17655145359377)  
      
    
4.  If you can not see this item, [ask your Greenhouse account admin](#who-is-your-greenhouse-account-administrator) to take over the setup process, or to grant your user the "**Manage ALL organization's API Credentials"** permission. Without this permission, the setup process can not be completed.

### Who is your Greenhouse account Administrator?

1.  Go to the main Greenhouse dashboard.
2.  Click on **"Email Your In-House Contacts"** under **"Helpful Links"**:  
    ![](https://help.kombo.dev/hc/article_attachments/17655618275601)

### Generate your API credentials

1.  Log into your Greenhouse account and click on the cog in the top right corner:  
    ![](https://help.kombo.dev/hc/article_attachments/17652241451537)  
      
    
2.  Go to the **"Dev Center"**:  
    ![](https://help.kombo.dev/hc/article_attachments/17652267705745)  
      
    
3.  Click on **"API Credential Management"**:  
    ![](https://help.kombo.dev/hc/article_attachments/17655164380817)  
      
    
4.  Click on **"Create New Api Key"**:
    ![](https://help.kombo.dev/hc/article_attachments/17652712383633)  
      
5.  Enter the following details:
    *   **API Type:** Harvest
    *   **Partner:** Custom
    *   **Description:** \*Your Integration Name\* (Preferably the value you copied earlier)  
        ![](https://help.kombo.dev/hc/article_attachments/17653390724881)  
          
        
6.  Copy your created API key and the paste the value into the connection flow:  
    ![](https://help.kombo.dev/hc/article_attachments/17653479409297)  
      
    
7.  Next, under **"Manage** **permissions**", select all the required permissions.  
    ![](https://help.kombo.dev/hc/article_attachments/17653589314833)  
      
    You can find all the required permissions listed in the connection flow:  
    ![](https://help.kombo.dev/hc/article_attachments/17704610914193)  
    _The list of permissions here is only an example. Please check your own permissions in the connection flow._  
      
    Once you filled in all the required permissions in Greenhouse, press **"Save".**