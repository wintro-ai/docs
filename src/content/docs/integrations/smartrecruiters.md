---
title: Linking your SmartRecruiters account
description: How to link your SmartRecruiters account to Wintro?
---

### Prerequisites

Before getting started, please **carefully read** the following to make sure you fulfill all requirements for the integration to work:

*   You should have **"Admin Access"** to your SmartRecruiters instance.  
    If your account does not have the assigned User role of **"Admin"** you won't be allowed to create the necessary credentials.

1.  Log into SmartRecruiters and go to **"Settings"** in the top right corner:![](https://help.kombo.dev/hc/article_attachments/17651124882833)
2.  Ensure that your account is labled with **"Admin Access"** underneath your account name:![image (10).png](https://help.kombo.dev/hc/article_attachments/17651308572049)

### Sign in with SmartRecruiters

1.  Click on the "**Sign in with SmartRecruiters**" button:  
    ![](https://help.kombo.dev/hc/article_attachments/23064057684497)  
      
    
2.  Log in to SmartRecruiters. On the next screen, click on "**ALLOW ACCESS**":  
    ![](https://help.kombo.dev/hc/article_attachments/23064057707793)

### Screening questions

SmartRecruiters is currently moving from an API key based authentication model to an OAuth (user login) flow. You completed the OAuth flow in the previous step.

Currently, the OAuth flow does not support reading or writing of screening questions. An additional API key has to be provided for this functionality to be available. If you do not see the prompt below you can skip this step.

![](https://help.kombo.dev/hc/article_attachments/24492143854225)

To set up an API key follow the steps below:

1.  Open [this configuration page](https://www.smartrecruiters.com/settings/administration/app-management/custom-applications) in SmartRecruiters (Settings > Administration: Apps & Integrations > Credentials).
2.  Click on "**New Credential**".![](https://help.kombo.dev/hc/article_attachments/24492143884049)
3.  Select "**API key**" and click "**Next**".![](https://help.kombo.dev/hc/article_attachments/24492143895313)
4.  Enter a name and description for the new credentials. For the System role select "**Extended**". Then press "**Generate**" to create the API key.![](https://help.kombo.dev/hc/article_attachments/24492125450513)
5.  To complete the API key setup, copy the key from the window that opens and paste it into the connection flow.![](https://help.kombo.dev/hc/article_attachments/24492143927697)

### Hiring source

The last step in the connection process is optional. If you are asked to set up a source, please follow the instructions in the connection flow.