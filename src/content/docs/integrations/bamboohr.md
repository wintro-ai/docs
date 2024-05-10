---
title: Linking your BambooHR account
description: How to link your BambooHR account to Wintro?
---

Finding your subdomain
----------------------

1.  Log into BambooHR.
2.  View your subdomain in the URL bar in the form of https://**yourdomain**.bamboohr.com:  
    ![](https://help.kombo.dev/hc/article_attachments/23347392916625)

Permissions
-----------

**The permissions of BambooHR's API key depends on the "Access Levels" of the user who creates the API key.  
**

**This means that if you only want minimal permissions, you need to create a new user and assign that user to a newly created access level.  
  
**In order to create a new user, go to People, and then click on "New Employee":**  
![](https://help.kombo.dev/hc/article_attachments/23347384200081)  
**Enter a valid email address for the user that you can access.  
Further, ensure that you select "Allow Access to BambooHR"  
![](https://help.kombo.dev/hc/article_attachments/23347384202129)

Next, click on save to save the user.  
  
To configure the permissions of the user, you will need to edit the settings of the **"Access Level"** that the user belongs in and then add them to that access level. In order to do this:

1.  Navigate to the top right part of the screen in BambooHR, and click on the **"cog"** button:![SCR-20231018-jfhh.png](https://help.kombo.dev/hc/article_attachments/23347392925585)
2.  Locate "Access Levels" in the sidebar on the left side of the screen in the **"Settings"** page, and click on it:  
    ![SCR-20231018-jfxg.png](https://help.kombo.dev/hc/article_attachments/23347384206225)
3.  To edit the permission of the user, you will need to find the level that the user is in, or create a new level and assign the user to it. Click on the **"plus"** button to create a new access level:  
    ![SCR-20231018-jhqc.png](https://help.kombo.dev/hc/article_attachments/23347384210193)  
    \* Make sure that the you select "**Custom Access Level**" when creating a new access level:  
    ![SCR-20231221-qlhv.png](https://help.kombo.dev/hc/article_attachments/23347384210833)  
      
    
4.  Check the relevant permissions for the integration in accordance to the connection flow:  
    ![](https://help.kombo.dev/hc/article_attachments/23347392933009)  
    Note: The above screenshot is strictly an example.  
      
    Select the relevant permissions in BambooHR:  
    ![](https://help.kombo.dev/hc/article_attachments/23347384214929)  
    If you do not want the integration to have access to any employee data, select the option "Direct Reports" in step 3 under "What this Access Level Can See":  
    ![](https://help.kombo.dev/hc/article_attachments/23347392936337)
5.  Next, add the relevant employee for the integration to the access level:  
    ![](https://help.kombo.dev/hc/article_attachments/23347392937105)  
    Select the employee and press "Done":  
    ![](https://help.kombo.dev/hc/article_attachments/23347384218129)

Creating an API key
-------------------

1.  Log into BambooHR with the user you want to use for the integration and for which you set up the necessary access level.
2.  Click on the BambooHR logo in the top right corner, then click on the **"API Keys"** item:  
    ![](https://help.kombo.dev/hc/article_attachments/23347384219409)
3.  Click on **"Add New Key"** to create a new API key:  
    ![](https://help.kombo.dev/hc/article_attachments/23347384220177)
4.  Name your key anything, then click **"Generate Key."**
5.  Press **"COPY KEY"** to copy the value of the key:  
    ![](https://help.kombo.dev/hc/article_attachments/23347384224657)