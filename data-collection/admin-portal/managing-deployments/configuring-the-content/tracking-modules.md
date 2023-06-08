---
sidebar_position: 2
title: Tracking modules 
---
# Tracking modules
**User**: Super Admin, Huma Support, Account Manager, Organisation Owner, Organisation Editor

The Huma App collects data from patients based on a number of purpose-built modules to track different data points or patient-reported qualitative data. 
## How it works
You can add modules from the **Track** tab of your Deployment configuration. Just click **Add track module** and select from the list on the **Modules** dropdown or enter a search term to find the module you’re looking for.

![image](./assets/TrackModules01.png)

## Modules list
This is the full list of modules available for tracking health data. Configuration is similar for each module although the RAG thresholds are not available for all of them. Modules that use RAG will be labelled **Threshold** and those that do not will be labelled **Static**. The only exception to this would be the **Symptoms** module, which is explained in more detail in the **Configuration** section.

Some modules also permit different collection methods. Patients can either enter their data manually or sync the app with other tracking devices or apps to log it automatically e.g. heart rate monitors, step counters. 

Other modules require qualitative data, such as the **Photos** and **Journal** modules. Journal entries are submitted via free text from the patient and photos can be captured easily from within the app.

The table below shows which modules have the threshold option and what data entry methods are available.

| Module Name | Thresholds | Data collection | 
|--- | --- | --- | 
| [Air Quality Module](../../../modules/general/air-quality.md) | Yes | Manual or Breezeometer, followed by calculated |
| [Blood Glucose](../../../modules/physiological/blood-glucose.md) | Yes | Manual | 
| [Blood Pressure](../../../modules/physiological/blood-pressure.md) | Yes | Manual |
| [Body Measurement](../../../modules/physiological/body-measurement.md) | No | Manual or collect from camera (from BVI) | 
| [Electrocardiograph](../../../modules/physiological/ecg.md) | No | Sync (from Kardia) |
| [Heart rate](../../../modules/physiological/heart-rate.md) | Yes | Manual; Camera (from Happitech); Sync (from Apple Health, Google Fit) | 
| [Journal](../../../modules/general/journal.md) | No | Manual | 
| [Medications](../../../modules/general/medications.md) | No | Manual | 
| [Oxygen Saturation](../../../modules/physiological/oxygen-saturation.md) | Yes | Manual | 
| [Peak Flow](../../../modules/physiological/peak-flow.md) | Yes | Manual, followed by calculated | 
| [Photos](../../../modules/general/photos.md) | No | Manual |
| [Respiratory Rate](../../../modules/physiological/respiratory-rate.md) | Yes | Manual |
| [Sleep](../../../modules/physiological/sleep.md) | Yes | Sync (from Apple Health, Google Fit) |
| [Steps](../../../modules/physiological/steps.md) | No | Sync (from Apple Health or Google Fit) | 
| [Symptoms](../../../modules/general/symptoms.md) | Yes | Manual | 
| [Temperature](../../../modules/physiological/temperature.md) | Yes | Manual |
| [Weight](../../../modules/physiological/weight.md) | Yes | Manual | 
| [Weight & BMI](../../../modules/physiological/bmi.md) | Yes | Manual, followed by calculated |

## Configuring the module
From the modules list, click the ![image](./assets/Edit.png) icon at the end of the row to configure the module.

![image](./assets/TrackModules02.png)

### Settings
- **Name** - You will not be able to change the default name but you can add a custom name which will appear on the module overview screen.
- **About** - This is a description of the module that the patient will see on the module overview screen.  
- **Custom unit** - Indicate the unit of measurement you want to use for this data point. These will be used as defaults but can be changed by the user:
    - **Weight**: Kilograms (kg) / Pounds (lb) / Stones (st lb)
    - **Body Measurements**: Centimeters/centimeters (cm) / Inches (in)
    - **Temperature**: Celcius (°C) / Fahrenheit (°F)
    - **Blood Glucose**: Milligrams per decilitre (mg/dL) / Millimoles per litre (mmol/L)
    - **Height**: Centimeters/centimeters (cm) / Feet and inches (ft in)

![image](./assets/TrackModules03.png)

- **Schedule** - For data points that need to be collected on a regular basis, you can set a recommended schedule for the patient. Set the **ISO duration** and the **Times per duration** to indicate to users how long and how many times they will need to submit data to this module. Check the checkbox to let the patient know what times of day they need to submit their data. If you don’t select any option, the patient will be told to submit their data 'as needed'.

![image](./assets/TrackModules04.png)

- **Device sync** - If the data point can be collected via a device or smartphone, you can indicate which collection methods are available here. For example, patients can collect their heart rate variability reading using their phone camera.
 
- **Learn** - You have the option to associate configured Learn articles to the modules. Check the box to open a list of articles that you have already added to your Deployment, then just select the ones that link to this module. When the patient opens this module, they will be able to access the article.

![image](./assets/TrackModules05.png)

- **Push notifications** - Check the box to create your own custom push notifications for the module. Add a title and description to match the data you want to collect and remind the patient of any important information they might need at this time. This will overwrite the default notification. Patients will be able to customise the frequency and timings of the notifications.

![image](./assets/TrackModules06.png)

- **Footnote text** - Check the box to enter some footnote text to the module. This will appear in the module overview for the patient and can be used to remind them of any important clinical advice, disclaimers, or trademark text.

![image](./assets/TrackModules07.png)

### RAG thresholds 
When the clinician is reviewing the patient data, they can be informed of potentially dangerous readings through a red-amber-green (RAG) flag system. On the **RAG thresholds** tab, you can configure the thresholds that will be used to determine the severity levels of the submitted patient data. Just select the severity level from the dropdown and enter the min and max values of the thresholds. For readings that are outside the specified thresholds, they will appear in the portal without a colour.

You can add as many thresholds as you need with the **Add threshold** link at the bottom. For example, a very high or a very low temperature reading would be considered dangerous so you would need to add thresholds for both high and low readings.

![image](./assets/TrackModules08.png)

Red, amber and grey flag notifications will show on the Clinician Portal for all newly entered data in line with the severity settings you enter here: red flags indicate high severity data points, amber flags indicate moderate severity data points and grey shows low severity and non-RAG configured data. 

### Static modules
Bear in mind that not all health vitals can be measured and assigned risk levels. In some cases, patient data will have to be reviewed manually to determine
whether it is dangerous or not. For example, in the case of the Steps module, the number of steps considered healthy would vary from patient to patient. 
Modules that do not include RAG thresholds are labelled **Static**.

![image](./assets/TrackModules09.png)

### Symptoms
The **Symptoms** module lets you track specific symptoms for different health trials that you might be running. Each Deployment can be configured to track a completely different set of symptoms. The care team will be able to view the evolution of different symptoms amongst a cohort of patients e.g. muscle pain, insomnia, headaches, etc.

Go to the **Symptoms** tab and click the button **Add symptom**. To configure the symptom, just enter a name and then set the RAG thresholds.

![image](./assets/TrackModules10.png)

When you have finished editing the module, make sure you click **Save changes**.
If you have entered incomplete data in the **Settings** tab, you will be notified with a red dot on the tab. Go back and make sure you have included all the required information and saved your changes.

![image](./assets/TrackModules11.png)

Related articles: [Tracking questionnaires](./tracking-questionnaires.md); [Preferred Units](../configuring-the-user-onboarding/preferred-units.md); [Track modules](../../../huma-app/features/track-modules.md); 
