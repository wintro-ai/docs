---
title: Architecture
description: Wintro's IT architecture explained
---

The Wintro platform is built on top of [Amazon Web Services](https://aws.amazon.com) for our core infrastructure, and uses [Azure AI Services](https://azure.microsoft.com/en-us/products/ai-services)' [OpenAI Service](https://azure.microsoft.com/en-us/products/ai-services/openai-service) for enhancing Wintro with LLM capabilities.

The following diagram depicts the high-level architecture with its main components:

<br/><br/>
![image](/architecture.png)
<br/><br/>

*   **Frontend**: provides the user the web application HTML and scripts, hosted on [Vercel](https://vercel.com/).
*   **Web application firewall (WAF)**: helps protect the application against denial of service and web attacks. [Vercel Firewall](https://vercel.com/docs/security/vercel-firewall) is leveraged here to benefit from DDoS protection and WAF at AWS scale. This includes mitigation against OWASP Top 10 risks.
*   **API Gateway**: protects and monitors the backend API, both to endpoints of [Vercel Functions](https://vercel.com/docs/functions) and [Supabase](https://supabase.com/)  API endpoints. Incoming traffic is protected based on the OpenAPI specification of the backend APIs, meaning that only the specified routes are accepted by the gateway. [Kong](https://docs.konghq.com) is used in combination with [Supabase](https://supabase.com) to host the database API Gateway.
*   **Backend**: provides the necessary information and search results. Serverless technology, [Supabase](https://supabase.com/) and [Vercel](https://vercel.com/), are leveraged to host the microservices-oriented backend services.
*   **Token Storage**: stores integration-related tokens in a secure vault, [Supabase Vault](https://supabase.com/docs/guides/database/vault), with very limited access. Runtime secrets are stored in [Vercel Environment Variables](https://vercel.com/docs/projects/environment-variables), encrypted at rest and visible to any user that has access to the Project.
*   **Object Storage**: stores objects in buckets on [AWS S3 Storage](https://aws.amazon.com/s3/) that are not publicly accessible. Each tenant has its own storage bucket.
*   **Relational Database**: stores application-wide (e.g. users, workspaces) information and serves as the application backend database, hosted on [AWS RDS](https://aws.amazon.com/rds/) and managed by [Supabase](https://supabase.com).
*   **AI Services**: provide the LLM capabilities of our platform, for which we use [Azure AI Services](https://azure.microsoft.com/en-us/products/ai-services)' [OpenAI Service](https://azure.microsoft.com/en-us/products/ai-services/openai-service).
<!-- *   **Elasticsearch**: stores the minimal information relevant for search and retrieves the search results for a given search query. [Elastic Cloud](https://www.elastic.co/cloud/) is leveraged for a mananaged Elasticsearch stack. -->

The environment is hosted in the [AWS Region](https://aws.amazon.com/about-aws/global-infrastructure/regions_az/) eu-central-1, which is located in Frankfurt, Germany.

### Multitenancy

The architecture is multi-tenant, meaning that a single instance of the software and its supporting infrastructure serves multiple customers. Please note that data privacy is respected at all times and is not affected by multi-tenancy.

### Data isolation

In the multi-tenant architecture, the data is logically separated in the backend layer.

In general, the user is authenticated via the JSON Web Tokens (JWT) and data is restricted to the tenant scope.

For more information on how the data is stored, see [Storage layers](/security-compliance/data-processing/#storage-layers "Storage Layers").

### More information

For more information on how integrations are set up, see [Integrations](/security-compliance/integrations/ "Integrations").

For more information on how data gets processed and stored, see [Data Processing](/security-compliance/data-processing/ "Data Processing").

For more information on authentication and authorization, see [Access Controls](/security-compliance/access-controls/ "Data Processing").
