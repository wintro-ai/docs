---
title: Access Controls
description: How a user can access Wintro
---

At this time, we support Single Sign-On authentication from the following providers:

*   Google Sign-In (including [Cloud Identity](https://cloud.google.com/identity))
*   Microsoft Single Sign-On (including [Microsoft Entra ID](https://www.microsoft.com/en-us/security/business/identity-access/microsoft-entra-id)).

### Authentication

[JSON Web Tokens](https://en.wikipedia.org/wiki/JSON_Web_Token) is open standard for authentication and is used for all Wintro services (internal and external). The backend generates a token that encrypts the user identity and sends it to the client. The client will use that token for every subsequent request to the API, that can read the token and verify the identity of the user.

### Authorization

Authorization happens on two levels within Wintro. The first level is role based, where a user is assigned a role in a workspace which determines what actions they can perform. This can be managed within Wintro.

The second level is based on the tenant Wintro is integrated with and is only applicable if the organization opted to have this enabled. Permissions from the Messaging system can be mirrored, meaning recruiters that can send messages to only a subset of employees, will only be able to send messages to that subset of employees from inside Wintro.

### Roles

Wintro supports the following roles, on a per workspace basis, going from most to least privileged:

*   **Recruiter**: access to all synced vacancies and generated matches
*   **Employee**: access to only his/her connected generated matches

Typically, recruiter role is granted by a Wintro employee during the set-up of the workspace.
