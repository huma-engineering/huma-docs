---
sidebar_position: 3
title: ID verification 
---
## Identity verification
**User**: Super Admin, Huma Support, Account Manager, Organisation Owner, Organisation Editor

When collecting personal health data for clinical trials in a digital environment and requesting consent on how data is used, it is a regulatory requirement to ensure the participant is who they say they are. Electronic ID verification is possible through the Huma App onboarding process.
## How it works​
As part of a new deployment, Admin users can add the **Identity verification** module as part of the user onboarding. 

![image](https://user-images.githubusercontent.com/110832367/183849597-c632a714-5dff-4f8b-85cf-818bd6af8dad.png)

Click the **Edit✎** icon at the end of the row to configure the module.

![image](https://user-images.githubusercontent.com/110832367/183849363-37855c8b-c58c-4b30-aef0-91c96e984958.png)

- **User types** - If your deployment allows user proxies to help patients input their data, they should be required to identify themselves, just as the patient. Check **User** to require identification from the patient and check **Proxy** to require it from their helper.

>
>  ⚠️ If **Proxy** is selected here, you must ensure the proxy field is also checked in the **App Features**
>  

- **Onfido reports** - In this section you can choose how you want the user to verify their identity. Check **Document**, if you require they verify using an official form of ID documentation, and check **Facial similarity photo** if you want them to identify by taking a photograph of their face. Of course, the most secure way is to require both.

![image](https://user-images.githubusercontent.com/110832367/183849679-4c8c9592-aa18-4e9e-9ed5-46e4aa6713bc.png)

## Patient experience 
Patient identification takes place quite seamlessly as part of their onboarding experience. Using the camera on their device, users will be able to take a photo of their identity document and then take a photo of themselves. It will take around 60 seconds for them to be verified in the app and then they can continue to the next step of their onboarding.

**Related articles**: [eConsent](https://github.com/huma-engineering/huma-docs/blob/baf6584b5f17a3684f7c06b76afe575bf60791ea/data-collection/AdminPortal/Managing%20Deployments/Configuring%20the%20user%20onboarding/eConsent.md); [Helper Agreement](https://github.com/huma-engineering/huma-docs/blob/baf6584b5f17a3684f7c06b76afe575bf60791ea/data-collection/AdminPortal/Managing%20Deployments/Configuring%20the%20user%20onboarding/Helper%20agreement.md); [App features](https://github.com/huma-engineering/huma-docs/blob/baf6584b5f17a3684f7c06b76afe575bf60791ea/data-collection/AdminPortal/Managing%20Deployments/General%20Settings/App%20features.md)