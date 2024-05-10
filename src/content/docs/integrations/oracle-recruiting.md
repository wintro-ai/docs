---
title: Linking your Oracle Recruiting account
description: How to link your Oracle Recruiting account to Wintro?
---

### Prerequisites

Before getting started, please **carefully read** the following to make sure you fulfill all requirements for the integration to work:

To set up this integration, you must have the necessary permissions to access the "**Security Console**." To find out how to access the "**Security Console**," please follow the first steps under **Permissions** below.

If you don't have access, please contact whoever has the necessary permissions in your company before continuing.  

### Overview

_Estimated overall setup time: 30 minutes._

There are two steps you have to complete to set up the integration:

1.  You have to create a new user
2.  You have to assign the required roles to the user  
    

That's it! The rest of this document is a step-by-step walkthrough of everything you need to know and do to set up the integration.  

### Find you Oracle Recruiting Cloud Address

1.  Log into your Oracle Recruiting Cloud instance.
2.  Copy the value of the URL, everything from **"https://"** to the first **"/"** and paste it into the connection flow.

![](https://help.kombo.dev/hc/article_attachments/18718145935249)

### Permissions

1.  Click on the 3-bar menu in the top left of your Oracle Recruiting Cloud instance:  
    ![](https://help.kombo.dev/hc/article_attachments/18717990383249)  
      
    
2.  Next, scroll down to **"Tools"** open the menu, then go to **"Security Console":****  
    ![](https://help.kombo.dev/hc/article_attachments/18718397681681)  
    **Note: If you don't see the **"Security Console"** setting, you don't have the right permissions to complete the connection.  
      
    
3.  Search for the role "recruiter" in the search as pictured:  
    ![](https://help.kombo.dev/hc/article_attachments/23439526115217) 
4.  Next, under "**ORA\_IRC\_RECRUITER\_JOB**", click "**Copy Role**":  
    ![](https://help.kombo.dev/hc/article_attachments/23439518080785)  
    When prompted, click on "**Copy Role**":  
    ![](https://help.kombo.dev/hc/article_attachments/23439518083345)
5.  Under "**Role Name**" and "**Role Code**", fill in the following details:  
    ![](https://help.kombo.dev/hc/article_attachments/23439518085777)  
    Role Name: **RecruiterGSEIntegration**  
    Role Code: **IRC\_RECRUITER\_JOB\_GSE\_INTEGRATION**
6.  Simply click "**Next**" until the end, then "**Submit and Close**" as pictured:  
    ![](https://help.kombo.dev/hc/article_attachments/23439518086545)  
    ![](https://help.kombo.dev/hc/article_attachments/23439518091153)
7.  Next, go to **"Users"** then **"Add User Account"**  
    ![](https://help.kombo.dev/hc/article_attachments/18762539107089)  
      
    
8.  Fill in the necessary information, saving the **"User Name"** and **"Password"** for later:  
    ![](https://help.kombo.dev/hc/article_attachments/18763221490193)
9.  Next, click on **"Add Role"**:  
    ![](https://help.kombo.dev/hc/article_attachments/18763674821905)  
    **Note: Save the Username and Password, as you'll need it later.**  
      
    
10.  Next, for each required role, search for the role, select the role, and then add the role:  
    ![](https://help.kombo.dev/hc/article_attachments/18765182623889)  
      
    Select all the required roles, then add them to the user.  
    **Note: This will look different in each case, please add the roles found in your connection flow:  
    **![](https://help.kombo.dev/hc/article_attachments/18765339969041)  
      
    
11.  Once you have added all the required roles to the user, press **"Save and Close".  
      
    **
12.  In the right top menu, click on "**Setup and Maintenance**":  
    ![](https://help.kombo.dev/hc/article_attachments/23439526146961)  
      
    
13.  Click on the box on the right side:  
    ![](https://help.kombo.dev/hc/article_attachments/23439526153361)  
      
    
14.  Click on "**Search**":  
    ![](https://help.kombo.dev/hc/article_attachments/23439518107665)  
      
    
15.  Search for "**Manage Data Role and Security Profiles**" in the search bar, press enter and select the entry as pictured:  
    ![](https://help.kombo.dev/hc/article_attachments/23439526165521)  
      
    
16.  Search for the role you created earlier i.e. (**RecruiterGSEIntegration**):  
    ![](https://help.kombo.dev/hc/article_attachments/23439526166545)  
      
    
17.  Select the entry as it appears, and select "**Edit**":  
    ![](https://help.kombo.dev/hc/article_attachments/23439518115345)  
      
    Click "**Yes**" when prompted.  
      
    
18.  Simply click "**Next**" to go to step 2:  
    ![](https://help.kombo.dev/hc/article_attachments/23439518117137)  
      
    
19.  Under "**Job Requisition**", select "**View All Job Requisitions**" (or, whichever criteria is relevant for the integration):  
    ![](https://help.kombo.dev/hc/article_attachments/23439530175505)  
      
    
20.  For the other security criteria, select the relevant option for the integration.  
      
    
21.  Hit next until your reach the "**Review**" step.  
    Finally hit "**Submit**":  
    ![](https://help.kombo.dev/hc/article_attachments/23439526178961)