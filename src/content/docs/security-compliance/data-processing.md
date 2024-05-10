---
title: Data Processing
description: How Wintro processes data
---

To begin with, Wintro recognizes the sensitivity of your data and handles it with the utmost care. This page outlines how Wintro processes and stores your data. Our approach is to privately store only relevant data to suggest the best candidates for your open vacancies.

When data arrives within the Wintro Virtual Private Cloud (VPC) on AWS, it is processed and stored securely in the EU (more specifically, the _Central EU (Frankfurt) (eu-central-1)_ AWS region). Wintro uses its AWS infrastructure for general data processing and storage and Azure for cognitive services (i.e. GPT models).

To securely retrieve data, we access refresh and access tokens from our secure token vault. The information is accessed using OAuth 2.0 via HTTPS, as explained in the [Integrations](/security-compliance/integrations/ "Integrations") section.

![image](https://docs.uman.ai/images/architecture/data-processing.png)

Below are the storage layers, explaining how data is processed and stored in each one.

### Storage Layers

Data is stored in two encrypted storage layers:

1. **Object Storage**: AWS S3 buckets are used for storing blobs (e.g., temporary candidate documents), encrypted via AES-256 using tenant-specific keys.
2. **Relational Database**: An AWS RDS instance stores application data (e.g., users, permissions, vacancies), encrypted via tenant-specific keys and managed by Supabase.

Single-tenant relational databases can be requested at custom pricing.

### Applicant Tracking System (ATS) Data

Wintro reads vacancy (and optionally applicant data) from ATS integrations, storing this data securely to cross-reference while matching candidates with vacancies. Check the [Integrations](/security-compliance/integrations) section for supported ATS systems.

### LinkedIn Data

To sync users' LinkedIn network data, users can either download their connections data from LinkedIn and upload manually to Wintro in the Settings view, or they can install the [Wintro Companion Chrome Extension](https://chromewebstore.google.com/detail/wintro-companion/iclolnbldkiggoimcopffojpgcpneikn) to have this done automatically. Wintro uses cookies so that users do not need to enter their usernames and passwords at each visit and in order to facilitate exchanges.

### Data Processing

After receiving ATS vacancies and LinkedIn network data, we cross-reference it against our knowledge graph, matching candidates based on their name or LinkedIn profile slug. If the candidate is not yet in our graph, they are created. Ownership of query data remains private to Wintro. Once a recruiter generates matches for a specific vacancy, matched candidates' profile data are enriched using GPT-models and a ranking of top scoring candidates is returned to the recruiter, and a ranking of connected candidates to the employee. A personalized link is then created for the employee to send to a candidate, when they acknowledge they know this person well enough. By opening this link, a candidate is then allowed to enter personal data (e.g. email, phone number), give consent to the company's privacy policy and ultimately apply to this vacancy. Consequentially, this data is pushed into the company's ATS, completing the referral cycle.

### Data Storage

Temporary candidate references (email, phone number, CV) are stored in the relational database or object storage and exclusively used to send to the company's ATS. After completing this action, this data is then deleted in perpetuity.

### Messaging System Data

A connection with your Slack or Teams is required to send messages to employees straight from Wintro. These connections are exclusively used to send messages. No conversation data is ever read by Wintro. Refer to the [Integrations](/security-compliance/integrations/ "Integrations") section for more information.

### Data Deletion and Retention

Upon termination of services, all vacancies, matches and other company-specific data is retained in backups for up to 90 days, and then deleted in perpetuity.
