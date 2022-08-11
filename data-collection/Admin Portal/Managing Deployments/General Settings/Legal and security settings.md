---
sidebar_position: 6
title: Legal and security settings 
---
# Legal and security settings
**User**: Super Admin, Huma Support, Account Manager, Organisation Owner, Organisation Editor.

Huma takes security seriously and uses 2-factor authentication to log users in. First, we authenticate the user from their password and then via a verification code sent to their mobile. This adds an extra layer of protection in the event of a compromised password.

Make sure your users are always informed of how you are using their data by adding your privacy policy, EULA and T&Cs to your deployment. You can also make these a part of your onboarding if needed.
## How it works​
When configuring a new deployment, you can set up authentication and legal documents in the **Deployment config** tab.

![image](https://user-images.githubusercontent.com/110832367/183863087-16a04c48-73f6-471a-8d90-afe165a84bfd.png)

### Authentication
In the **Deployment config** settings, ensure the **Multi-factor authentication** checkbox is checked. 

![image](https://user-images.githubusercontent.com/110832367/184100176-ab700390-df91-4d80-8ad7-b2509def8790.png)

> 
> 🛑 **IMPORTANT**: In line with data protection regulations, you should not disable multi-factor authentication on the Clinician Portal which contains patient data.   

Patients can turn 2-step authentication on or off using a toggle in the account settings on the **Profile** page. 

Huma also offers the possibility of biometric login using biometric data such as fingerprints or facial recognition. This avoids issues with users forgetting passwords. Patients can activate biometric data when setting up Two-step verification. The data requested will depend on the functionality of the device they are using to access the app.

### Legal Documents
In this area, you can upload or link to your legal documents: **Privacy policy**, **End-User Licence Agreement (EULA)** and **Terms and conditions** (the same link as the  EULA). Make sure the documents correspond to the documents you include as part of the onboarding modules.

Choose between **URL** and **Upload**. If using the URL option, add links to these pages on your website or wherever they are located.

![image](https://user-images.githubusercontent.com/110832367/183863489-caf4cd75-5ac0-4ce6-a6dd-9be99cd39eee.png)

If you choose the **Upload** option, click the file icon at the end of each line to upload your documents.

![image](https://user-images.githubusercontent.com/110832367/183863334-bb0565c9-32b9-43f7-89c8-09206e57c0ac.png)

**Related articles**: [Data consent](https://github.com/huma-engineering/huma-docs/blob/f2e1d56f1301e07007649fb81070a705a6d6fa1c/data-collection/AdminPortal/Managing%20Deployments/Configuring%20the%20user%20onboarding/Data%20consent.md); [eConsent](https://github.com/huma-engineering/huma-docs/blob/f2e1d56f1301e07007649fb81070a705a6d6fa1c/data-collection/AdminPortal/Managing%20Deployments/Configuring%20the%20user%20onboarding/eConsent.md);
