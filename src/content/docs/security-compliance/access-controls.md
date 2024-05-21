---
title: Access Controls
description: How a user can access Wintro
---

At this time, we support Single Sign-On (SSO) authentication from the following providers:

*   [Google Workspace](https://workspace.google.com/)
*   [Microsoft Entra ID](https://www.microsoft.com/en-us/security/business/identity-access/microsoft-entra-id) (previously Azure AD)
*   [Okta](https://www.okta.com/)

### Authentication

[JSON Web Tokens](https://en.wikipedia.org/wiki/JSON_Web_Token) is open standard for authentication and is used for all Wintro services (internal and external). The backend generates a token that encrypts the user identity and sends it to the client. The client will use that token for every subsequent request to the API, that can read the token and verify the identity of the user.

### Authorization

Authorization within Wintro is managed on two levels:

1. **Role-Based Authorization:** This foundational level involves assigning specific roles to users within a workspace, dictating the range of actions they are authorized to perform. These roles and permissions are configurable within the Wintro platform by the workspace administrators and described below.

2. **Tenant-Specific Authorization:** This type of authorization is only applicable to organisations who have set this up in their ATS as well and is applicable only for organizations that choose to enable it. For vacancy-related data, organizations must explicitly opt-in to allow Wintro to access and sync vacancy information. This ensures that only authorized data is accessed according to the permissions granted by the organization.

   For the Messaging system, permissions are initiated individually by each recruiter. This means that a recruiter's ability to send messages through Wintro will mirror their permissions in the external messaging system (e.g., Slack or Teams). For instance, if a recruiter can only send messages to a specific group of employees outside Wintro, the same restrictions apply within Wintro.

### Roles

Wintro supports the following roles, on a per workspace basis, going from most to least privileged:

*   **Admin**: access to all company settings, synced vacancies and generated matches
*   **Recruiter**: access to all assigned synced vacancies and generated matches
*   **Employee**: access to enabled vacancies and only his/her connected generated matches

Typically, admin and recruiters roles are granted by a Wintro employee during the set-up of the workspace.
