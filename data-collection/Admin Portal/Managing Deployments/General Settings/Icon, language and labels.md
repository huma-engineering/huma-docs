---
sidebar_position: 3
title: Icon, language and labels 
---
# Icon, language and labels
**User**: Super Admin, Huma Support, Account Manager, Organisation Owner, Organisation Editor

When setting up multiple deployments for different user groups, the Huma platform makes it possible to differentiate each deployment, not only by customising the features, but also by adding specific branding and language configurations.
## How it works​
In the **Deployment config** tab, you can configure each individual deployment’s look and feel.

![image](https://user-images.githubusercontent.com/110832367/183860504-9471a286-9b5a-48e9-9412-6fb0c577c9bf.png)

## General
- **Icon** - You can upload an icon for your deployment. This will appear on the Huma App home screen (either Track or To do). Just click **Browse** and select the file you want to upload.

![image](https://user-images.githubusercontent.com/110832367/183860618-f0a4cf35-6ce7-4fb1-a8d3-b48712d1db1a.png)

> ⚠️ **INFO**: 
> Use a high resolution client logo with transparent background.
> Size: min 800x800px; 
> Format: png


- **Name** - Give your deployment a name to differentiate it from other deployments in the same organisation
## Languages
The Languages section will list the different language configurations available in your deployment. 
To add new languages to your deployment, the **Generate file to translate** link will generate a json file with all the code from your deployment. 

![image](https://user-images.githubusercontent.com/110832367/183860710-67093534-9bd1-4d8f-bd57-8255b65938f8.png)

To add a new language, you will need to translate all the text into the new language and then upload the localization file by clicking the **upload** link.

![image](https://user-images.githubusercontent.com/110832367/183860877-43b1159a-fe3c-4493-90b6-15a879a17c18.png)

> 🛑 **IMPORTANT**: Once you have downloaded the localisation file, your deployment configuration will be locked and you won’t be able to make any changes. For the full procedure, please refer to [this documentation](https://humatherapeutics.atlassian.net/wiki/spaces/DO/pages/3298689083/How-To+Log+a+Translation+Request).

## Labels*
At the bottom of the **Deployment Config** page, you can find the labels toggle. Enable this feature to assign tags to patients. Once enabled, this will appear as a column in the Patient List. Clinicians will be able to add labels to patients in order to help with filtering.

![image](https://user-images.githubusercontent.com/110832367/184095786-902e8c27-f323-4a2a-902e-005a588fcbf5.png)

<sub>*Will become available once Class IIb Medical Device Certification has been attained.</sub>

**Related articles**: [Exporting the configuration or translation files](https://github.com/huma-engineering/huma-docs/blob/e2aa925bcd1d612cb1107dd53b54b7a7a39272da/data-collection/AdminPortal/Managing%20Deployments/Tools%20and%20Navigation/Exporting%20the%20configuration%20or%20localization%20files.md)
