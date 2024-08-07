---
sidebar_position: 4
title: Client Integration Guide
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Overview

This guide provides step-by-step instructions to integrate our product into your system.

### Prerequisites

- Access to our cloud portal.
- Your system's ability to make HTTP requests.
- Huma Android/iOS SDK integrated in your project.

### Steps to Integrate

#### 1. Obtain and Configure API Domain and Client Details

1. Log in to the [Cloud Portal](https://your-cloud-portal-url.com).
2. Navigate to the **API Keys** section.
3. Copy the secret key provided for your integration.
4. Configure the API domain, projectId, and clientId you will use for authentication.

The default values are:

- Domain: `https://api.default-domain.com`
- Project ID: `p1`
- Client ID: `c1` (for iOS) and `c2` (for Android)

#### 2. User Authentication

User authentication should be handled via your original endpoints. The "Get Huma Token" endpoint (`{domain}/private/huma-token`) should be protected and based on the current authenticated user, perform the requests to Huma backend.

### Custom Endpoint Implementation Example
To implement the `private/huma-token` endpoint:

1. Attempt to sign in the user using the `/auth/v1/private/signin` endpoint.
2. If the user does not exist (returns a 403 status), sign them up using the `/auth/v1/private/signup` endpoint.
3. Return the tokens and user ID (uid) received from the Huma backend.

The following example demonstrates how to implement the `private/huma-token` endpoint.

<Tabs>
<TabItem value="python" label="Python">

```py
import requests
from flask import Flask, request, jsonify

app = Flask(__name__)

HUMA_URL = 'https://api.default-domain.com'
VERIFICATION_TOKEN = 'YOUR_SECRET_FROM_CLOUD_PORTAL'
client_id = 'c1'
project_id = 'p1'

@app.route('/private/huma-token', methods=['POST'])
def get_huma_token():
    user_email = request.json['email']
    first_name = request.json.get('firstName', '')
    last_name = request.json.get('lastName', '')
    activation_code = request.json.get('activationCode', '')

    # Try to sign in the user
    signin_url = f"{HUMA_URL}/auth/v1/private/signin"
    signin_data = {
        "method": 4,
        "email": user_email,
        "clientId": client_id,
        "projectId": project_id
    }
    headers = {"verification-token": VERIFICATION_TOKEN}
    signin_response = requests.post(signin_url, json=signin_data, headers=headers)

    if signin_response.status_code == 200:
        return jsonify(signin_response.json())
    elif signin_response.status_code == 403:
        # If user doesn't exist, sign them up
        signup_url = f"{HUMA_URL}/auth/v1/private/signup"
        signup_data = {
            "method": 4,
            "email": user_email,
            "userAttributes": {
                "familyName": first_name,
                "givenName": last_name
            },
            "validationData": {
                "activationCode": activation_code
            },
            "clientId": client_id,
            "projectId": project_id
        }
        signup_response = requests.post(signup_url, json=signup_data, headers=headers)
        if signup_response.status_code == 200:
            return jsonify(signup_response.json())
        else:
            return jsonify({"error": "Failed to sign up user"}), signup_response.status_code
    else:
        return jsonify({"error": "Failed to sign in user"}), signin_response.status_code

if __name__ == '__main__':
    app.run(debug=True)
```

</TabItem>
<TabItem value="go" label="Go">

```go
package main

import (
    "encoding/json"
    "fmt"
    "net/http"
    "bytes"
    "io/ioutil"
    "log"

    "github.com/gin-gonic/gin"
)

const (
    HUMA_URL            = "https://api.default-domain.com"
    VERIFICATION_TOKEN  = "YOUR_SECRET_FROM_CLOUD_PORTAL"
    CLIENT_ID           = "c1"
    PROJECT_ID          = "p1"
)

type SignInRequest struct {
    Method    int    `json:"method"`
    Email     string `json:"email"`
    ClientID  string `json:"clientId"`
    ProjectID string `json:"projectId"`
}

type SignUpRequest struct {
    Method         int               `json:"method"`
    Email          string            `json:"email"`
    UserAttributes map[string]string `json:"userAttributes"`
    ValidationData map[string]string `json:"validationData"`
    ClientID       string            `json:"clientId"`
    ProjectID      string            `json:"projectId"`
}

func main() {
    router := gin.Default()

    router.POST("/private/huma-token", func(c *gin.Context) {
        var requestBody map[string]interface{}
        if err := c.BindJSON(&requestBody); err != nil {
            c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid request"})
            return
        }

        userEmail := requestBody["email"].(string)
        firstName := requestBody["firstName"].(string)
        lastName := requestBody["lastName"].(string)
        activationCode := requestBody["activationCode"].(string)

        // Try to sign in the user
        signinReq := SignInRequest{
            Method:    4,
            Email:     userEmail,
            ClientID:  CLIENT_ID,
            ProjectID: PROJECT_ID,
        }
        signinReqBody, _ := json.Marshal(signinReq)

        signinURL := fmt.Sprintf("%s/auth/v1/private/signin", HUMA_URL)
        req, _ := http.NewRequest("POST", signinURL, bytes.NewBuffer(signinReqBody))
        req.Header.Set("Content-Type", "application/json")
        req.Header.Set("verification-token", VERIFICATION_TOKEN)

        client := &http.Client{}
        signinResp, err := client.Do(req)
        if err != nil {
            c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to sign in user"})
            return
        }
        defer signinResp.Body.Close()

        if signinResp.StatusCode == http.StatusOK {
            body, _ := ioutil.ReadAll(signinResp.Body)
            var responseBody map[string]interface{}
            json.Unmarshal(body, &responseBody)
            c.JSON(http.StatusOK, responseBody)
        } else if signinResp.StatusCode == http.StatusForbidden {
            // If user doesn't exist, sign them up
            signupReq := SignUpRequest{
                Method:    4,
                Email:     userEmail,
                UserAttributes: map[string]string{
                    "familyName": firstName,
                    "givenName":  lastName,
                },
                ValidationData: map[string]string{
                    "activationCode": activationCode,
                },
                ClientID:  CLIENT_ID,
                ProjectID: PROJECT_ID,
            }
            signupReqBody, _ := json.Marshal(signupReq)

            signupURL := fmt.Sprintf("%s/auth/v1/private/signup", HUMA_URL)
            req, _ := http.NewRequest("POST", signupURL, bytes.NewBuffer(signupReqBody))
            req.Header.Set("Content-Type", "application/json")
            req.Header.Set("verification-token", VERIFICATION_TOKEN)

            signupResp, err := client.Do(req)
            if err != nil {
                c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to sign up user"})
                return
            }
            defer signupResp.Body.Close()

            if signupResp.StatusCode == http.StatusOK {
                body, _ := ioutil.ReadAll(signupResp.Body)
                var responseBody map[string]interface{}
                json.Unmarshal(body, &responseBody)
                c.JSON(http.StatusOK, responseBody)
            } else {
                c.JSON(signupResp.StatusCode, gin.H{"error": "Failed to sign up user"})
            }
        } else {
            c.JSON(signinResp.StatusCode, gin.H{"error": "Failed to sign in user"})
        }
    })

    router.Run(":8080")
}
```

</TabItem>
</Tabs>

### Authentication Example

To authenticate the user and obtain a Huma token, you need to implement a function that sends a POST request to the private/huma-token endpoint with the user's email. The endpoint should return the tokens and user ID (uid) if the authentication is successful.

<Tabs>
<TabItem value="python" label="Python">

```py
import requests

get_huma_token_url = "https://api.default-domain.com/private/huma-token"
secret = 'YOUR_SECRET_FROM_CLOUD_PORTAL'

def get_huma_token(user_email):
    headers = {
        'Content-Type': 'application/json',
        'Authorization': f'Bearer {secret}'
    }
    payload = {
        'email': user_email,
        'projectId': 'p1',
        'clientId': 'c1'
    }
    response = requests.post(get_huma_token

_url, json=payload, headers=headers)

    if response.status_code != 200:
        raise Exception('Failed to get Huma token')

    return response.json()  # Contains tokens and uid
```

</TabItem>
<TabItem value="javascript" label="JavaScript">

```js
const getHumaTokenUrl = 'https://api.default-domain.com/private/huma-token';
const secret = 'YOUR_SECRET_FROM_CLOUD_PORTAL';

async function getHumaToken(userEmail) {
  const response = await fetch(getHumaTokenUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${secret}`
    },
    body: JSON.stringify({
      email: userEmail,
      projectId: 'p1',
      clientId: 'c1'
    })
  });

  if (!response.ok) {
    throw new Error('Failed to get Huma token');
  }

  const data = await response.json();
  return data; // Contains tokens and uid
}

// Example of usage
getHumaToken('user@example.com')
  .then(data => console.log(data))
  .catch(error => console.error(error));
```

</TabItem>
</Tabs>

### SDK Integration Examples

<Tabs>
<TabItem value="android" label="Android">

```java
// Assuming you have received authToken, refreshToken, and uid from the previous step
HumaSDK.initialize(context, authToken, refreshToken, uid);
```

</TabItem>
<TabItem value="ios" label="iOS">

```swift
// Assuming you have received authToken, refreshToken, and uid from the previous step
HumaSDK.initialize(context: self, authToken: authToken, refreshToken: refreshToken, uid: uid);
```

</TabItem>
</Tabs>

### Conclusion

By following these steps, you can integrate our product seamlessly into your system. If you have any questions or need further assistance, please contact our support team.
