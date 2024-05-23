---
title: Integrations
description: How Wintro integrates with external tools
---

Wintro provides three types of integrations:

1. **Messaging Integrations**: These include connections with Teams and Slack, and enable recruiters to send messages straight from Wintro, using the OAuth 2.0 protocol for secure authorization and data access.

2. **ATS (Applicant Tracking System) Integrations**: These integrations enable fetching vacancies from and pushing referred candidates back in your ATS. For secure authentication and authorization, these offer flexibility, either employing API keys and user credentials or the OAuth 2.0 protocol.

3. **LinkedIn Integration**: This integration enables the authorized action on LinkedIn of fetching network data. This unique integration utilizes an authorization cookie captured by the Wintro extension.

### General Integration Setup

Only users with recruiter privileges on Wintro can set up ATS and messaging integrations. The ATS integration has to be set up only once by an authorized recruiter and can be done in the Settings view in Wintro. The Messaging and LinkedIn integrations have to be set up by each recruiter, and can also be done in the Settings view. Each employee can choose on how to connect their personal network data, either through a connected recruiter's account, through a manual upload of downloaded LinkedIn data or by installing the Wintro Companion Chrome Extension themselves.

Messaging integrations with Teams and Slack use the [OAuth 2.0 protocol](https://oauth.net/2/). OAuth 2.0 is an industry-standard protocol for authorization, providing secure, scoped access. The refresh and access tokens are encrypted via AES-256-CBC encryption, with each workspace assigned a unique key. User and group information related to these integrations is also securely stored.

ATS integrations may use either OAuth 2.0 or API keys with additional user data. Similarly, this data is encrypted and stored using the same secure encryption standard.

The LinkedIn integration uses a different approach. Our Wintro extension captures an authorization cookie to establish a connection, enabling actions on the user's LinkedIn account. This unique integration requires capturing specific data to authenticate and authorize these actions. All cookie data is encrypted and stored using the same secure AES-256-CBC encryption standard.

For detailed information on data processing and storage, see [Data Processing](/security-compliance/data-processing/ "Data Processing").

Please refer to the specific documentation pages for each supported integration to understand the setup and requested scopes. These can be found in the the left sidebar under _Integrations_.

<!-- ### Data Exfiltration Risk

Enabling download functionality in Wintro allows users to download content to their local workstations. This may lead to a possible elevation of permissions if users only have read permissions in the source system. Carefully consider this risk before enabling download functionality. -->
