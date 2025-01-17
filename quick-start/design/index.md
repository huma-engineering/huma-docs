---
sidebar_position: 5
title: Design guildline
---


## Overview

This guideline provides a comprehensive framework for companies and organizations integrating their health devices with our digital platform. By following these design principles, you can ensure a seamless and user-friendly experience for your customers while leveraging the full potential of our technology.
Our goal is to create a consistent, intuitive interface that aligns with your brand and optimally engages end-users. This document outlines the essential components for designing and customizing screens within our platform, including:

### Consistency:

  Adhering to established design patterns for a unified user experience.
### Integration:

 Providing clear instructions for incorporating your device data with our system.


![config_file.png](../../assets/overview-design-guide.png)



#### 1. Header

The title is a concise text that highlights the most important information or step within a section.


#### 2. Image

A visual representation, such as a photo, illustration, or diagram, used to clarify concepts, demonstrate functionality, or provide context.


#### 3. Title

A secondary text providing additional context or a brief explanation of the title.

#### 4. Instructional text

Clear and actionable steps that guide the user through a process.


#### 5. button

Interactive elements that trigger actions when clicked or tapped.



## Header

The title is a concise text that highlights the most important information or step within a section. 
### Purpose

To grab the user’s attention and provide clear context for what follows.
### Guildline
*  Use a maximum of 3-5 words.

*  Avoid technical jargon; prioritize clarity.


### Example



## Image

A visual representation, such as a photo, illustration, or diagram, used to clarify concepts, demonstrate functionality, or provide context.
### Purpose

To help users better understand instructions or information by showing the product or process in a clear and relatable way.
### Guildline
*  Use high-resolution images for clarity.

*  Keep the visuals simple and focused on the key elements being explained.

*  Ensure images are responsive and accessible (e.g., provide alt text for screen readers).


### Example
1. Log in to the [Huma Workspace](https://workspace.huma.com/).
2. Download the [huma-config.json](https://workspace-gcp-uk.api.huma.com/api/integration/v1/configs/backend) file with secrets provided for your integration.
3. Add it to your project directory.



4. Install python client

```bash
pip install huma_python_client
```

#### 2. Initialize library

Basic initialization is pretty simple, just provide the path to your `huma-config.json` and your deployment id.

```python
from huma_python_client import HumaApiClient, ClientType

client = HumaApiClient(config_file="config.json")

# Register a new user
response = client.register(
    email="user@example.com",
    first_name="FirstName",
    last_name="LastName",
    client_type=ClientType.IOS,
    deployment_id="5d386cc6ff885918d96edb3a"
)
print(response)

# Login a user
response = client.login(
    email="user@example.com",
    client_type=ClientType.IOS,
    deployment_id="5d386cc6ff885918d96edb3a"
)
print(response)
```

### Endpoint Implementation Example

User authentication should be handled via your original endpoints. The "Get Huma Token" endpoint (for example: `{domain}/private/huma-token`) should be protected and based on the current authenticated user, perform the requests to Huma backend.

To implement the `private/huma-token` endpoint:

1. Attempt to sign in the user using the `client.login()` method.
2. If the user does not exist (returns a 403 status), sign them up using the `client.register()` method.
3. Return the tokens and user ID (uid) received from the Huma backend.

The following example demonstrates how to implement the `private/huma-token` endpoint.

```py
from fastapi import APIRouter, Depends
from huma_python_client.client import HumaApiClient
from huma_python_client.exceptions import UserDoesNotExistError as HumaUserNotExistError

from app.dependencies import authenticate
from app.models.database import User
from app.models.responses import HumaTokenResponse
from app.models.user import HumaTokenRequestBody

router = APIRouter(prefix="/private", dependencies=[Depends(authenticate)], tags=['Huma'])


@router.get("/huma-token")
def get_huma_token(request_body: HumaTokenRequestBody = Depends(), current_user: User = Depends(authenticate)) -> HumaTokenResponse:
    """
    Interacts with Huma backend to auth the user and provide the auth and refresh tokens for Huma sdk.
    """
    huma_deployment_id = "***PUT YOUR DEPLOYMENT ID HERE***"
    huma_client = HumaApiClient(config_file="huma-config.json")
    try:
        rsp_json = huma_client.login(current_user.email, request_body.client_type, huma_deployment_id)
    except HumaUserNotExistError:
        rsp_json = huma_client.register(current_user.email, current_user.firstName, current_user.lastName, request_body.client_type, huma_deployment_id)
    return HumaTokenResponse(**rsp_json)
```

### Conclusion

By following these steps, you can integrate our product seamlessly into your system. If you have any questions or need further assistance, please contact our support team.