---
title: Linking your Cornerstone TalentLink account
description: How to link your Cornerstone TalentLink account to Wintro?
---

### Prerequisites

You will need to have **admin access** to set up this integration.

To ensure you have the required permissions, please double-check that you can view both the **User Management** and the **Integrations Marketplace** pages in your TalentLink settings, as shown below.  
![](https://help.kombo.dev/hc/article_attachments/24082794123153)

### Overview

Fundamentally, there are two steps you have to complete to set up the integration:

1.  You create a new user for the **username** and **password**
2.  You create an integration for the **API key**

**Note: For sandbox integrations, creating the integration and assigning the user is instant. For production integrations, there is an approval process with Cornerstone TalentLink.  
  
**

That's it! The rest of this document is a step-by-step walkthrough of everything you need to know and do to set up the integration.

### Creating the User

1.  Open the **User Management** page in the settings menu  
      
    ![](https://help.kombo.dev/hc/article_attachments/24082809743505)
2.  Click on **Create User  
      
    ![](https://help.kombo.dev/hc/article_attachments/24082794133009)  
      
    **
3.  Fill out the form
    *   Make sure that you select **API access  
          
        ![](https://help.kombo.dev/hc/article_attachments/24082809752209)  
          
          
        **
    *   Make sure that under **Assigned Roles**, you assign the
        *   **Webservices** role for the organization for which you want to share data
        *   **Basic access, Functional manager, and Standard Recruiter** roles for the organization for which you want to share data
4.  Copy the **username** and **password** into the connection flow

### Creating the Integration

1.  Open the **Integrations Marketplace** page in the settings menu  
      
    ![](https://help.kombo.dev/hc/article_attachments/24082809755409)
2.  Click on **Add New Integration  
      
    ![](https://help.kombo.dev/hc/article_attachments/24082847228049)  
      
    **
3.  Fill out the form
    *   Make sure that under **Integration Prerequisites**, you enter a description of what the integration should be able to do. For example, for a common job-portal use case, this would be:  
          
        _Reading positions, job adverts, applications, and candidates via the REST API.  
        __Posting application submissions and attachments to adverts via the Apply API.  
          
        _
    *   Make sure that you click on **\+ assign integration user** to assign the user created in the previous step
4.  Copy the **API key** into the connection flow