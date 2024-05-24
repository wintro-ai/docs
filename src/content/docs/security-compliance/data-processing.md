---
title: Data Processing
description: How Wintro processes data
---

At Wintro, we prioritize security and privacy when processing your data. This document outlines our data processing practices and the architecture we use to ensure the protection and efficient management of your information.

Wintro uses a combination of cloud-based services to process and store data securely. Our infrastructure leverages the strengths of AWS, Vercel, Supabase, and Azure AI Services to offer scalable and secure data handling.

<br></br>
![image](/data_processing.png)
<br></br>

### Cloud Services

- **AWS**: We use AWS for backend services that require robust compute capabilities and secure network configurations. Critical components are hosted within an AWS Virtual Private Cloud (VPC) in the EU (specifically in the Central EU - Frankfurt region), ensuring enhanced security and data sovereignty.

- **Vercel**: Front-end applications and some serverless backend functions are hosted on Vercel. Vercel provides automatic scaling and managed deployments, which, while not within a traditional VPC, are protected by advanced security protocols and run on AWS.

- **Supabase**: Our primary database services are managed by Supabase, which offers a scalable PostgreSQL solution which is an abstraction of AWS RDS. Supabase ensures data isolation and security through encryption and managed access, providing similar protections to those offered by a VPC and runs on AWS.

- **Azure AI Services**: We utilize OpenAI's GPT models hosted on Azure to enhance our vacancy-candidate matchmaking algorithms and to generate engaging messages for employee referrals. This integration allows us to leverage cutting-edge AI capabilities while maintaining data privacy and security.

### Data Input

Data enters our system through various channels including direct user inputs, integrations with public data platforms, and interactions with client's Applicant Tracking Systems (ATS). Here’s how we handle the different types of data:


1. **Public Data Platforms**: We aggregate public data to enrich the profiles within our system, enhancing the matchmaking process between candidates and vacancies.

2. **Client's ATS**: Wintro reads vacancy (and optionally applicant data) from ATS integrations, storing this data securely to cross-reference while matching candidates with vacancies. ATS API integrations are established through [Kombo](https://kombo.dev), except for Lever and Recruitee for which we 
have established our own integrations. Check the [Integrations](/security-compliance/integrations) section for supported ATS systems.

1. **Personal Networks**: Users leverage their personal LinkedIn networks to enhance the referral process. This data is handled with the utmost care, ensuring that personal contacts are anonymized before processing to maintain confidentiality and integrity. See the [LinkedIn Data](#linkedin-data) section.

#### Storage Layers

Data is stored across multiple secure layers:

1. **Object Storage**: AWS S3 buckets store larger data objects like documents and images. Each bucket is secured with AES-256 encryption using tenant-specific keys.

2. **Relational Database**: User data, permissions, and other application data are stored in Supabase-managed PostgreSQL databases (through AWS RDS).

### Messaging and Communication

Wintro integrates with corporate messaging platforms such as Slack, Microsoft Teams and Google Chat. These integrations are used exclusively for sending messages to employees to engage them in the referral process. Within Wintro, these messages can be tailored using Azure AI's GPT models to enhance effectiveness. We do not access or store message history or any other communications data.

### LinkedIn Data

To sync users' LinkedIn network data, users can either download their connections data from LinkedIn and upload manually to Wintro in the Settings view, install the [Wintro Companion Chrome Extension](https://chromewebstore.google.com/detail/wintro-companion/iclolnbldkiggoimcopffojpgcpneikn) to have this done automatically or let their network data be synced through a connected recruiter's account who has installed the [Wintro Companion Chrome Extension](https://chromewebstore.google.com/detail/wintro-companion/iclolnbldkiggoimcopffojpgcpneikn). Wintro uses cookies so that users do not need to enter their usernames and passwords at each visit and in order to facilitate exchanges.

### Data Processing

After receiving ATS vacancies and LinkedIn network data, Wintro cross-references it against our knowledge graph, matching potential candidates based on their name or LinkedIn profile slug. If the candidate is not yet in our graph, they are created. Ownership of query data remains private to Wintro. Once Wintro generates matches for a specific vacancy, matched candidates' profile data are enriched using GPT-models and a ranking of top scoring candidates is returned to the recruiter, and a ranking of to their connected candidates to the employee. A personalized link is then created for the employee to send to a candidate, when they acknowledge they know this person well enough. By opening this link, a candidate is then allowed to enter personal data (e.g. email, phone number), give consent to the company's privacy policy and ultimately apply to this vacancy. Consequentially, this data is pushed into the company's ATS, completing the referral cycle. Aside from referring, an employee can also recommend or decline a candidate match. Such actions are kept within Wintro.

Wintro stores only public candidate information such as name, work experience, and education in our database for referral reward purposes. Private details like phone numbers, emails, and CV files are not stored by Wintro; they are directly transmitted to the relevant Applicant Tracking System (ATS) during the application process. For more details, refer to [our privacy notice](https://www.wintro.ai/privacy-notice).

### Security and Compliance

To protect data in transit and at rest, we use HTTPS for secure communications, alongside OAuth 2.0 for authentication and authorization. Wintro adheres to GDPR and other stringent data protection regulations, ensuring all data is handled with the highest level of security.

### Data Retention and Deletion

Data is retained only as long as necessary to serve its intended purpose. Upon termination of services, all client-specific data is retained in secure backups for up to 90 days before being securely deleted, ensuring compliance with legal and regulatory requirements.

### Data Backups

Wintro ensures a robust and secure data backup strategy utilizing Supabase's automated daily backup system. This approach is crucial for disaster recovery and maintains data integrity over time. Here’s how our data backup process works:

We automatically generate backups of all data daily. These backups include everything stored in our relational databases—such as user data, permissions, and vacancy details—ensuring that we can recover from potential data loss scenarios without any disruption to our services.

In the event of data loss or corruption, our system administrators can access backups from the last 7 days. This short retention period is designed to balance between having recent data for recovery and minimizing storage costs. Backups are stored securely within the EU, adhering to the same strict security protocols that govern our active databases.
