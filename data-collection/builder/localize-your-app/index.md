---
sidebar_position: 10
title: Localize your app
---

Huma app builder has a **Hybrid** approach to localization and translation.

1. **Huma-managed texts**: Some texts, such as licensed questionnaires, static texts within the app, and more, are
   handled by Huma. Huma will take care of their translation.
2. **Widget-specific texts**: You are responsible for translating the texts you configure in your widgets via the
   localization section in the settings.

There are two ways to localize the widgets

#### 1. Through the Huma Panel

- Any text you configure in your panel like the title and description here:

  ![alt text](<../assets/localization-builder-config.png>)
- Will appear in the localization settings of your app. Go to the settings and switch to the localization tab:

  ![alt text](<../assets/localization-settings.png>)
- Add a new language you want to add support for (Click "Create")

  ![alt text](<../assets/localization-new-lang.png>)
- Start translating, Then if your user has their selected language (OS language) set in the selected language they
  will see your localization instead:

  ![alt text](<../assets/localization-localize.png>)
- Once done click save, and preview the changes in the app.

> **INFO**: Any missing localization will default to your **app default language**.

#### 2. Import/Export

You can import and export, localizations as well in order to for example outsource the translation process

- Click on the three dots of a language that is fully translated
  ![alt text](<../assets/localization-export-import.png>)

- Extract the file and you see this file structure like so

  ![alt text](<../assets/localization-export-content.png>)

And the content of the file would we somthing similar to this, You shouldn't change the keys, only the values
![alt text](<../assets/localization-export-file-content.png>)

> **INFO**: The zip name is not important when uploading but the `lang` folder and files names are relevant so keep them
> consistent. You should rename the file to other valid language codes, do the translation and then import it to the
> panel.

- And once you are done with localization go ahead to import it, from the modal pick the language you want to be
  exported from the zip file
  ![alt text](<../assets/localization-import-dialogue.png>)

> **INFO**: If a localization for that language already exists, the uploaded file will be merged to what is already
> there and translate.
