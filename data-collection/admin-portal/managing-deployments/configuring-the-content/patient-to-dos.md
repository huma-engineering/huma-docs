---
sidebar_position: 4
title: To dos 
---
# Patient To dos
**User**: Super Admin, Huma Support, Account Manager, Organisation Owner, Organisation Editor

Part of the Huma methodology is providing patients with a clear pathway for what needs to be done and when. To do items are a way of telling a user to perform a certain action at a certain date and time. An item becomes active and completable on the date it is due. A push notification will be sent to the user at the date and time specified (provided the user has push notifications enabled). 
## How it works​
To dos are linked to **Modules** or **Questionnaires** and remind users when they need to complete them. This can all be configured with a completion date and notification schedule as part of the Deployment configuration.
Go to the **To do** tab on the **App Components** list and click to **Add key action**.

![image](./assets/Todo01.png)

Configure the to-do action by filling in the fields:
- **Title** - Add a name e.g. Take heart rate. This will also be used as the title for the push notification and the card on the To-do page.
- **Type** - Select from **Learn** or **Module**, depending on what you want the patient to do.
- **Module / Learn** - Depending on the type selected above, choose from the list of modules or Learn content that you want the patient to complete as part of the to-do.

![image](./assets/Todo02.png)

- **Trigger** - Choose whether the trigger for the to-do appearing on the patient timeline is as soon as they sign up (**Sign Up**) or according to a scheduled surgery date (**Surgery**). If selecting surgery as the trigger, you must ensure that **Surgery date and time** is checked in the Profile configuration.  

![image](./assets/Todo03.png)

- **Description** - Add a description for the to-do. This will be the content of the push notification e.g. It’s time to take your blood pressure.
- **Number of notifications** - Add a value for the total number of notifications that you want to go out between the start date and end date. Usually, this is calculated based on the frequency and duration you have set, but you can add a lower value here in order to limit the total number of notifications.
- **Delta from trigger time** - This sets the start date for when you want your to-do to become active and is relative to the trigger event. If you want the notifications to start before the trigger event, the value you enter should be a minus e.g. -14 (notifications start 2 weeks before).
- **Duration from trigger time** - This sets the period of time that the to-do will remain active on the user’s timeline. Work out your end date and calculate the distance from the start date (Delta from trigger time).
- **Instance expires in** - This indicates how long a task (or subtask) should remain on the to-do list before it expires. 
- **Notify every** - If a task remains incomplete on the patient’s to-do list, you can send out reminders. Set the frequency of the reminders here e.g. “1 Day(s)” sends one daily notification; “2 Hour(s)” sends one notification every two hours, etc. This frequency will continue until the task is either completed or expires.
- **Duration ISO** - This is the active duration of the task or subtask (the length of time it will remain on the user's timeline). If you don’t want to create any subtasks, just set the duration to the same value you entered in **Duration from trigger time**.
In the following two dropdowns, you can set the day and time that you would like the task or subtask to be pushed to the timeline. For example, select 10 hours, 30 minutes to send the subtask at 10:30am. 

![image](./assets/Todo04.png)

Click to **Save changes**. 
Your new action will now appear on the list along with all your other to-dos for this Deployment. 

**Related articles**: [Tracking questionnaires](./tracking-questionnaires.md); [Tracking modules](./tracking-modules.md); [Patient to do list](../../../huma-app/features/to-dos.md)
