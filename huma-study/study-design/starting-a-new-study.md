---
sidebar_position: 1
title: Starting a New Study
---
import CreateStudyField from '../assets/create-study.png'
import CreateSite from '../assets/site-info.png'

# Starting a New Study
1. From your **dashboard**, select **Create study** in the menu.  
2. A setup flow will guide you through the required fields.
![](../assets/study-create.png)
---
## Study & Site Information

- **Study name**  
  The full title of your study (e.g., *Postoperative Recovery Monitoring Study*).

- **Abbreviation**  
  A short version of the study name, typically 3–5 characters.  
  This will be used in exports and table views.
  
  <img src={CreateStudyField} alt="" width="572" height="438"/> 
- **Site name**  
  The full title of your site.

- **Trial Registry ID** *(optional)*  
  Add a registry reference ID (e.g., NCT number) for easier tracking.

- **Country of your site**  
  This determines where your study data will be hosted.
  <img src={CreateSite} alt="" width="572" height="438"/>  
## Study Type
Choose how this study will be used:
- **Production** – For real patient data and live deployments.
- **Test** – For internal testing or training purposes.

> 🔍 You can later archive or delete test studies, but production studies follow stricter audit and compliance protocols.

