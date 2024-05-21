---
title: Data Processing
description: How Wintro processes data
---

At Wintro, we prioritize security and privacy when processing your data. This document outlines our data processing practices and the architecture we use to ensure the protection and efficient management of your information.

Wintro uses a combination of cloud-based services to process and store data securely. Our infrastructure leverages the strengths of AWS, Vercel, Supabase, and Azure AI Services to offer scalable and secure data handling.

<br></br>
![image](/public/data_processing.png)
<br></br>

### Cloud Services

- **AWS**: We use AWS for backend services that require robust compute capabilities and secure network configurations. Critical components are hosted within an AWS Virtual Private Cloud (VPC) in the EU (specifically in the Central EU - Frankfurt region), ensuring enhanced security and data sovereignty.

- **Vercel**: Front-end applications and some serverless backend functions are hosted on Vercel. Vercel provides automatic scaling and managed deployments, which, while not within a traditional VPC, are protected by advanced security protocols.

- **Supabase**: Our primary database services are managed by Supabase, which offers a scalable PostgreSQL solution. Supabase ensures data isolation and security through encryption and managed access, providing similar protections to those offered by a VPC.

- **Azure AI Services**: We utilize OpenAI's GPT models hosted on Azure to enhance our vacancy-candidate matchmaking algorithms and to generate engaging messages for employee referrals. This integration allows us to leverage cutting-edge AI capabilities while maintaining data privacy and security.

### Data Input

Data enters our system through various channels including direct user inputs, integrations with public data platforms, and interactions with client's Applicant Tracking Systems (ATS). Here’s how we handle the different types of data:


1. **Public Data Platforms**: We aggregate public data to enrich the profiles within our system, enhancing the matchmaking process between candidates and vacancies.

2. **Client's ATS**: We integrate with clients' ATS via the ATS' secure APIs to synchronize vacancy and applicant data, which helps in providing tailored recommendations and facilitating the recruitment process. Wintro reads vacancy (and optionally applicant data) from ATS integrations, storing this data securely to cross-reference while matching candidates with vacancies. Check the Integrations section for supported ATS systems.

#### Storage Layers

Data is stored across multiple secure layers:

1. **Object Storage**: AWS S3 buckets store larger data objects like documents and images. Each bucket is secured with AES-256 encryption using tenant-specific keys.

2. **Relational Database**: User data, permissions, and other application data are stored in Supabase-managed PostgreSQL databases, encrypted at rest to ensure data security.

### Messaging and Communication

Wintro integrates with corporate messaging platforms such as Slack and Microsoft Teams. These integrations are used exclusively for:

- **Sending Messages**: Automated, AI-generated messages are sent to employees to engage them in the referral process. These messages are tailored using Azure AI's GPT models to enhance effectiveness.
  
- **Receiving User Inputs**: We only read possible receivers' information to direct messages appropriately. We do not access or store message history or any other communications data.

### Security and Compliance

To protect data in transit and at rest, we use HTTPS for secure communications, alongside OAuth 2.0 for authentication and authorization. Wintro adheres to GDPR and other stringent data protection regulations, ensuring all data is handled with the highest level of security.

### Data Retention and Deletion

Data is retained only as long as necessary to serve its intended purpose. Upon termination of services, all client-specific data is retained in secure backups for up to 90 days before being securely deleted, ensuring compliance with legal and regulatory requirements.

### Data Backups

Automated daily backups are performed by Supabase, capturing all relational data. These backups are accessible by our system administrators for up to 7 days, facilitating quick recovery in the event of data loss.

By combining advanced cloud technologies with strict security practices, Wintro maintains a resilient and compliant data processing environment, capable of efficiently handling and protecting your data.




###############################


---
title: Data Processing
description: How Wintro processes data
---

To begin with, Wintro recognizes the sensitivity of your data and handles it with the utmost care. This page outlines how Wintro processes and stores your data. Our approach is to privately store only relevant data to suggest the best candidates for your open vacancies.

When data arrives within the Wintro Virtual Private Cloud (VPC) on AWS, it is processed and stored securely in the EU (more specifically, the _Central EU (Frankfurt) (eu-central-1)_ AWS region). Wintro uses its AWS infrastructure for general data processing and storage and Azure for cognitive services (i.e. GPT models).

To securely retrieve data, we access refresh and access tokens from our secure token vault. The information is accessed using OAuth 2.0 via HTTPS, as explained in the [Integrations](/security-compliance/integrations/ "Integrations") section.

<br></br>
![image](/public/data_processing.png)
<br></br>

Below are the storage layers, explaining how data is processed and stored in each one.

### Storage Layers

Data is stored in two encrypted storage layers:

1. **Object Storage**: AWS S3 buckets are used for storing blobs (e.g., temporary candidate documents), encrypted via AES-256 using tenant-specific keys.
2. **Relational Database**: An AWS RDS instance stores application data (e.g., users, permissions, vacancies), encrypted via tenant-specific keys and managed by Supabase.

Single-tenant relational databases can be requested at custom pricing.

### Applicant Tracking System (ATS) Data

Wintro reads vacancy (and optionally applicant data) from ATS integrations, storing this data securely to cross-reference while matching candidates with vacancies. ATS API integrations are established through [Kombo](https://kombo.dev). Check the [Integrations](/security-compliance/integrations) section for supported ATS systems.

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

### Data Backups

Wintro ensures a robust and secure data backup strategy utilizing Supabase's automated daily backup system. This approach is crucial for disaster recovery and maintains data integrity over time. Here’s how our data backup process works:

We automatically generate backups of all data daily. These backups include everything stored in our relational databases—such as user data, permissions, and vacancy details—ensuring that we can recover from potential data loss scenarios without any disruption to our services.

In the event of data loss or corruption, our system administrators can access backups from the last 7 days. This short retention period is designed to balance between having recent data for recovery and minimizing storage costs. Backups are stored securely within the EU, adhering to the same strict security protocols that govern our active databases.
