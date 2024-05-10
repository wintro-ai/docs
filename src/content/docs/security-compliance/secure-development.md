---
title: Secure Development
description: How Wintro handle's it's development securely
---

As we handle sensitive data, the development processes are handled in accordance. Below we outline the most important principles regarding our secure development policy.

### Internal InfoSec policy

At Wintro we have an internal information security policy. This policy handles best practices with regards to managing passwords, multi-factor authentication, information storage, etc. This policy is part of the onboarding and is reviewed periodically.

### Staff Training and Awareness

As a first line of defense against cyber threats, staff receive regular training in information security topics such as phishing, incident reporting, privacy regulation, information classification, information handling etc.

Technical staff receive more extensive training in secure development practices and web application security such as the OWASP Top 10 list. Furthermore technical staff have proven technical skills on Google Cloud in the form of Google Cloud certifications.

### Identity and Access Management

Access to systems is provided to staff according to the principle of least privilege.

User authentication to high value systems is protected with two-factor authentication.

### Technical Measures

Wintro implements several technical measures to ensure the security of our development processes, described below.

#### Staging environments don’t have production data

The staging environments, which are intended for developing the Wintro platform, don’t have a copy of the production data. These environments work with dummy data to avoid exposing sensitive information to Wintro developers.

We do have an isolated environment next to production, which is solely intended for developments related to search. Only the search engineers have access to this isolated environment.

#### Private-first

Our cloud infrastructure is set up following the private-first approach. This means that all services and machines that don’t need to be exposed to the public internet are kept private.

#### Least privilege access

Systems are designed following the least privilege access principle, they have the minimum set of permissions they require to function.

#### Penetration Tested

Periodically, penetration tests are performed to ensure the application security. These tests are performed by an independent third party.

#### Continuous delivery

Whenever there is an intent to merge or release code, an advanced continuous delivery process kicks in. This process guarantees:

*   Automated checks (e.g. linting, testing, vulnerability scan)
*   Peer reviews
*   Auditable changelog

#### AWS

The Wintro platform is hosted on AWS. It uses the same secure-by-design infrastructure, built-in protection, and global network that Amazon, Netflix, LinkedIn, Facebook etc. were built upon.

AWS regularly undergoes independent verification of security, privacy, and compliance controls, achieving certification against global standards.

Wintro is making an effort to align its system architecture with the recommendations specified in the [CIS AWS Benchmark](https://www.cisecurity.org/benchmark/amazon_web_services).

#### Azure

Wintro leverages Azure for its cognitive services and robust security features and compliance standards. Azure ensures data security through encrypted storage solutions, advanced threat protection, and a wide range of compliance certifications. We adhere to Azure's security best practices and utilize Azure Policy to enforce security standards and compliance.

#### Vercel

Vercel provides a streamlined platform for deploying front-end applications with built-in security features like SSL by default, immutable deploys, and serverless functions that follow security best practices. Wintro uses Vercel to ensure that our client-side applications are delivered securely and efficiently.

#### Supabase

Supabase, hosted on AWS infrastructure, offers managed Postgres databases that comply with modern security standards and ensure low-latency access. Wintro uses Supabase to handle database operations securely, benefiting from its integration with other Supabase services like auto-generated APIs and real-time capabilities.
