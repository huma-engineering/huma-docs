---
sidebar_position: 2
title: Default roles and permissions
---
# Default roles and permissions
**User**: Admin; Access Controller

The Huma Portal is one easy-to-use interface for all care team and administrative users to easily view and track patient data, contact patients and/or to manage other users and their roles. 

The portal has a number of default user roles which can be assigned to users via invitation. Some of these roles (Admin and Access Controller) can also be invited from the Admin Portal. 

The following table shows the specific permissions associated with each of these roles.
## Huma Portal user roles and permissions

|                          | Contributor | Admin | Organisation Staff | Deployment Staff | Access Controller |
| ------------------------ | ----------- | ----- | ------------------ | ---------------- | ----------------- |
| View staff list          | ---         | ✓     | ✓                  | ✓                | ✓                 |
| View patient data        | ✓           | ✓     | ✓                  | ✓                | ✓                 |
| Manage patient data      | ---         | ---   | ---                | ✓                | ✓                 |
| Edit patient data        | ---         | ---   | ---                | ✓                | ✓                 |
| Contact patient          | ---         | ---   | ---                | ✓                | ✓                 |
| View patient identifiers | ✓           | ---   | ---                | ✓                | ✓                 |
| Offboard patient         | ---         | ---   | ✓                  | ✓                | ✓                 |
| Invite proxy             | ✓           | ---   | ---                | ✓                | ✓                 |
| View own data            | ✓           | ✓     | ✓                  | ✓                | ✓                 |
| Manage own data          | ✓           | ✓     | ✓                  | ✓                | ✓                 |
| Manage labels            | ---         | ✓     | ✓                  | ---              | ✓                 |

All the above permissions can be combined into specific configurations to create custom roles. Please see the article on [Creating custom roles](./creating-custom-roles.md). 

## Who invites who?
- Only Admins can invite other Admins and Contributors.
- Both Admins and Access Controllers can invite Organisation Staff and Access Controllers.

**Related articles**: [Inviting staff and assigning roles](./inviting-staff-and-assigning-roles.md); [Creating custom roles](./creating-custom-roles.md); [Inviting Deployment Admins](../../admin-portal/managing-deployments/tools-and-navigation/inviting-deployment-admins.md)
