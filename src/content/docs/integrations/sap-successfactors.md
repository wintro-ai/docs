---
title: Linking your SAP SuccessFactors account
description: How to link your SAP SuccessFactors account to Wintro?
---

### Prerequisites

Please **carefully read** the following to make sure you are able to complete the setup:

*   You are an **Admin** of your SAP SuccessFactors instance. If you are not an admin, you won't even be able to search for and access the configuration pages that are described later on.
    *   Alternatively: Please **contact your SuccessFactors Admin** and have them take over the integration setup process.
*   The **OData v2 API** is available and enabled on your SuccessFactors instance (it is by default, so this is usually not something to worry about).

### Overview

_Estimated, overall setup time: 30 minutes.  
_

Fundamentally, there are 3 main steps you have to complete to set up the integration:

1\. You have to create a new user and permission group for that user,

2\. You have to create a new permission role and then assign that to the newly-created permission group,

3\. You have to generate the API credentials for that permission role.
  

That's it! The rest of this document is a step-by-step walkthrough of everything you need to know and do to set up the integration.

### Find your API domain

Your API domain will depend on which region you are based in. To find it, you have to:

1.  Open the [SuccessFactors API URLs list](https://help.sap.com/docs/SAP_SUCCESSFACTORS_PLATFORM/2abbb39286994389bb0f1f4418773a7c/af2b8d5437494b12be88fe374eba75b6.html?locale=en-US#api-servers).
2.  Filter for production environments (_unless you're trying to connect a preview instance_) ![SuccessFactors](https://help.kombo.dev/hc/article_attachments/16400132565137)
3.  Once the filter is applied, find your location and select the API domain. If you are, for example, based in Germany, your production URL would be https://api012.successfactors.eu/![SuccessFactors](https://help.kombo.dev/hc/article_attachments/16400080600593)  
    **Hint:** The resulting “API Server” URL will often look quite similar to the SuccessFactors domain you log in on (the API for _pmsalesdemo8.successfactors.com_ is, for example, located at _apisalesdemo8.successfactors.com_)

Please note that this is a workaround as there is no direct way to get the API domain via the SuccessFactors UI on your own. SAP shares in their [help center](https://help.sap.com/docs/SAP_SUCCESSFACTORS_PLATFORM/2abbb39286994389bb0f1f4418773a7c/14b197d25b3f401ebeaa11216d62a759.html?locale=en-US#api-endpoints) that you should reach out to your SAP consultant to get the proper API domain.

_Your API endpoint will depend on where your SAP SuccessFactors instance is located. It can be in one of several data centers. Please contact your SAP SuccessFactors representative if you are unsure of which data center to use. You'll find the endpoints in the Related Information section._

### Find your Company ID

1.  Click on the **profile picture in the top right** and then on "**Show version information"**:  
    ![SuccessFactors](https://help.kombo.dev/hc/article_attachments/16225072560529)
2.  Copy the value right next to **Company ID**:  
    ![SuccessFactors](https://help.kombo.dev/hc/article_attachments/16225033993233)

### Create a new user

1.  In the admin center, go to the search console and type in "**Import Employee Data"  
    **Click on the action that just appeared:  
    ![SuccessFactors](https://help.kombo.dev/hc/article_attachments/16225078892433)
2.  Click on "**Import data"** and then select "**Download Template"**:  
    ![SuccessFactors](https://help.kombo.dev/hc/article_attachments/16225050019345)
3.  Click on the field next to **"Select an entity"** and then on "**Basic Import**":  
    ![SuccessFactors](https://help.kombo.dev/hc/article_attachments/16225033997585)
4.  Click on the **"Generate Template"** button  
    ![SuccessFactors](https://help.kombo.dev/hc/article_attachments/16225078897681)
5.  You will receive a .csv file to download. It likely contains two rows.
6.  Add an additional row and fill out at least these fields  
    \- **Status**: active  
    \- **User ID**: SFAPI\_INTEGRATION (for example, any value possible)  
    \- **Username**: SFAPI\_INTEGRATION (for example, any value possible)  
    \- **First name**: API (for example, any value possible)  
    \- **Last name**: Integration (for example, any value possible)  
    \- **Email**: [integration+user@example.com](mailto:integration+user@example.com) (any value possible - doesn't have to be a valid email)  
    \- **Manager**: NO\_MANAGER  
    \- **HR**: NO\_HR  
    \- **Default locale**: en\_US  
      
    Your CSV should now look something like this [example CSV.](https://docs.google.com/spreadsheets/d/1AiR8SRvZm3BQZdHuWTMQ0GpmmClNNmxkz_DUda7YopA/edit?usp=sharing)  
      
    ![](https://help.kombo.dev/hc/article_attachments/22504844520337)  
      
    It's important that you generate your own .csv template and don't download this example as your SuccessFactors instance will be configured differently  
    
7.  Now click on "**Download Template**" and then on **"Import Data"** to switch back  
    ![SuccessFactors](https://help.kombo.dev/hc/article_attachments/16225072568849)
8.  Click on the field next to "**Select an entity**" and then on "**Basic Import**"  
    ![SuccessFactors](https://help.kombo.dev/hc/article_attachments/16225034000017)
9.  Click on the "**Browse**" and select your .csv file to upload
10.  Click on the "**Validate Import File Data"** button  
    ![SuccessFactors](https://help.kombo.dev/hc/article_attachments/16225086829841)
11.  If you see the **"Validation Successful"** dialog, click on the **"Import"** button  
    ![SuccessFactors](https://help.kombo.dev/hc/article_attachments/16225072579601)
12.  You should now see this success dialog ![SuccessFactors](https://help.kombo.dev/hc/article_attachments/16225066942737)
13.  Please keep the .csv file open in the background, as you will need to reference it later.
14.  You can ensure the creation succeeded by searching for the employee name (first name and last name) or username and seeing it under the **"People"** section. Don't be confused if the new user doesn't show up immediately, it can sometimes take a few minutes for the user to show up in the search!  ![SuccessFactors](https://help.kombo.dev/hc/article_attachments/16225078913809)
15.  Once the user shows up as described in step 12, you can move on to creating the permissions group. 

### Create a permissions group

1.  Go to your search bar and enter "**Manage Permission Groups**"  
    Click on the Action  
    ![SuccessFactors](https://help.kombo.dev/hc/article_attachments/16225072586385)
2.  On the new page, click the **"Create New"** button  
    ![SuccessFactors](https://help.kombo.dev/hc/article_attachments/16225034011025)
3.  Give the group a "**name**" and click on "**Pick a category**"  
    Select the category option "**Username"**  
    ![SuccessFactors](https://help.kombo.dev/hc/article_attachments/16225078917521)
4.  Search for your user (to learn how to create a new one, [click here](#create-a-new-user)) by entering its username and **tick the box** next to it
5.  Click "**Done**"  
    ![SuccessFactors](https://help.kombo.dev/hc/article_attachments/16225050048145)
6.  You should now see your user in the people pool
7.  Click "**Done**"  
    ![SuccessFactors](https://help.kombo.dev/hc/article_attachments/16225034014353)

### Create a permission role

1.  Go to the search bar and enter "**Manage Permission Roles**"   
    Then click on the action with the same name  
    ![SuccessFactors](https://help.kombo.dev/hc/article_attachments/16225078923025)
2.  On the new page, click on **"Create New"**  
    ![SuccessFactors](https://help.kombo.dev/hc/article_attachments/16225050055825)
3.  Enter a **name** for the permission role
4.  Click on the **"Permission"** button  
    ![SuccessFactors](https://help.kombo.dev/hc/article_attachments/16225034023185)
5.  Now you have to assign the correct permissions to the permission group. To do this, go through the following steps:
    1.  See the needed permissions in the connection flow![](https://help.kombo.dev/hc/article_attachments/21047991610257)  
        This is just an example. To see the scopes that are required for you, open the connection flow yourself.  
          
        
    2.  For each Bullet, find the permission category in the sidebar. I.e. for "Manage System Properties", find the corresponding permission group in the sidebar of the SF UI  
        You can find these more easily by pressing **STRG + F** and pasting the permission there  
        ![SCR-20230719-nbml.png](https://help.kombo.dev/hc/article_attachments/17113160629521)![SCR-20230719-nczp.png](https://help.kombo.dev/hc/article_attachments/17113196593169)
    3.  Now for each sub-bullet, click the right permission in the category![SCR-20230719-nbpd.png](https://help.kombo.dev/hc/article_attachments/17113196596113)![SCR-20230719-ndhx.png](https://help.kombo.dev/hc/article_attachments/17113196597649)
6.  When you checked all necessary permissions, click "**Done**"  
    ![SuccessFactors](https://help.kombo.dev/hc/article_attachments/16225066970001)
7.  Now click on the **"Add"** button under section 3![SuccessFactors](https://help.kombo.dev/hc/article_attachments/16225078936849)
8.  In the new window, click on the **"Select"** button![SuccessFactors](https://help.kombo.dev/hc/article_attachments/16225050064529)
9.  Enter the name of your permission group (if you haven't created one yet, [click here](#h_01H329B5004DSB5Q4W87F2E120)) and **select it**
10.  Click **"Done"**  
    ![SuccessFactors](https://help.kombo.dev/hc/article_attachments/16225034031121)
11.  You should now see your permission group
12.  Click **"Done"** again  
    ![SuccessFactors](https://help.kombo.dev/hc/article_attachments/16225086865425)
13.  At last, click **"Save Changes"**![SuccessFactors](https://help.kombo.dev/hc/article_attachments/16225072609297)

### Generate new OAuth2 client credentials

1.  Go to your search bar and enter "**Manage OAuth2 Client Applications**"  
    Click on the action  
    ![SuccessFactors](https://help.kombo.dev/hc/article_attachments/16225034035217)
2.  In the new window, click on "**Register Client Application**"![SuccessFactors](https://help.kombo.dev/hc/article_attachments/16225078947985)
3.  In the new window enter a **name** and a **valid URL** (this can be literally **any URL**, you can enter any value you want - it should start with ) for the application, then click the "**Bind to Users**" checkbox and click "**OK**"  
    ![](https://help.kombo.dev/hc/article_attachments/20637741179537)
4.  Enter the **USERID of the user** that [you created earlier](/hc/en-us/articles/16225034050961#h_01H329BZ2S9KRTBZVYZR3J5H5C)   ![](https://help.kombo.dev/hc/article_attachments/20637741179921)
5.  **Do not click "Generate X.509 Certificate"** but instead, "**C****opy"** the certificate from the connection flow:  
    ![](https://help.kombo.dev/hc/article_attachments/18591002146193)
6.  Paste the certificate and click **"Register"  
    ![](https://help.kombo.dev/hc/article_attachments/20637865386385)**
7.  Now click on **"View"** in the row at the very top  
    ![SuccessFactors](https://help.kombo.dev/hc/article_attachments/16225034039441)
8.  Get the API key![SuccessFactors](https://help.kombo.dev/hc/article_attachments/16225078951825)
9.  Now paste the API key and the name of the [API user](#create-a-new-user) into the connection flow
10.  Click on "**Set up integration"**  
    ![SuccessFactors](https://help.kombo.dev/hc/article_attachments/16225072620049)