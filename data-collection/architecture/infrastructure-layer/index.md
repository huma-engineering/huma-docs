---
sidebar_position: 4
title: Infrastructure Layer
---

# Managed Infrastructure Layer


The Managed Infrastructure Layer is responsible for the provisioning and management of essential backend resources. This layer supports multi-tenancy, enabling multiple applications and services to operate independently and securely within the same platform operating on isolated and dedicated infrastructure, even across different countries.

<br></br>

![Infrastructure Image](./assets/infra_img.png)

<br></br>

Key services and plugins for infrastructure provisioning and management include:

- **Cluster Management Plugin**: Manages Kubernetes clusters, supporting different ingress classes, domain selection, TLS, and GPU out-of-the-box.
- **Workflow Automation Plugin**: Inspired by GitHub actions, it defines plugin flow with YAML files. 6 of 9 Customer Apps on Huma Cloud Platform - Deployment Model Private & Confidential
- **Infrastructure Provisioning Plugin**: With the Huma Cloud CLI and tools like Huma Compose, developers can manage resources and deployments seamlessly. This includes provisioning databases (e.g., PostgreSQL, MongoDB), storage (e.g., S3, Google Cloud Storage), and compute resources, as well as deploying applications in various environments. The CLI supports automation of these processes, enabling continuous integration and delivery (CI/CD) pipelines that ensure your apps are always up-todate and functioning optimally. The infrastructure management capabilities also include monitoring and logging solutions, making it easier to maintain and scale applications.
- **Docker Stack Plugin**: Allows writing infrastructure as code using Docker-Compose format.
- **Health Services**: Includes auth services, vital collection, AI-powered diagnosis and recommendations, integration with health devices and third-parties, medication and symptom tracking.
- **Data Lake**: The Huma Cloud Platform's Data Lake can effectively support your data requirements by centralising various data sources, thereby enhancing data accessibility and processing efficiency. In addition to existing standard data pipelines, you can add your own custom pipelines, enabling tailored data workflows. The platform allows for seamless integration with your analytics and BI tools using Google Cloud Storage (GCS) or BigQuery as the data source, facilitating comprehensive data analysis and robust reporting capabilities. A high-level overview of the Data Lake is illustrated in the following diagram.

<br></br>

![Infrastructure Image 2](./assets/infra_img2.png)

<br></br>