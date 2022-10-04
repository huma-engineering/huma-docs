#!/usr/bin/env python3

#### Instruction
# NOTE: Prior to running the following steps, make sure to have python3 (>= 3.7) and pip on your system.
# 1. Install dependencies
#    $ pip install requests mohawk
# 2. Set AUTH_ID, AUTH_KEY, DEPLOYMENT_ID in code and call export.py:
#    $ python3 export.py
# 3. Or alternatively to step 2, set the env variable and call export.py
#    $ AUTH_ID=<ID> AUTH_KEY=<KEY> DEPLOYMENT_ID=<DEP_ID> python3 export.py
# 
# Step 2 or 3 will generate an export.json based on the input parameters.

import os
import json
import requests
from datetime import datetime
from typing import Dict
from mohawk import Sender

HOST = "https://demoapi.humaapp.io"
START_DATE = "2021-07-15"
END_DATE = "2021-08-12"
OUTPUT = "export.json"

# Put your credentials here
AUTH_ID = os.environ.get("AUTH_ID") or ""
AUTH_KEY = os.environ.get("AUTH_KEY") or ""
DEPLOYMENT_ID = os.environ.get("DEPLOYMENT_ID") or ""

def generate_request_headers(url: str, method: str, content: Dict, auth_id: str, auth_key: str) -> str:
    sender = Sender(
        {
            "id": auth_id,
            "key": auth_key,
            "algorithm": "sha256"
        },
        url=url,
        method=method,
        content=json.dumps(content).encode('utf-8'),
        content_type="application/json"
    )

    return sender.request_header


def export_deployment(
        host,
        auth_id,
        auth_key,
        deployment_id: str = None,
        start_date: str = None,
        end_date: str = None
):
    export_url = f"{host}/api/extensions/v1beta/export/"

    export_request_data = {
        "userExportProfile": False,
        "deIdentified": True,
        "excludedModuleNames": ["Step"],
        "binaryOption": "NONE",
        "includeNullFields": False,
        "format": "JSON",
        "singleFileResponse": True,
        "fromDate": start_date,
        "toDate": end_date,
        "deploymentId": deployment_id,
        }
    export_request_data = {k: v for k, v in export_request_data.items() if v is not None}
    headers = generate_request_headers(
        url=export_url,
        method="POST",
        content=export_request_data,
        auth_id=auth_id,
        auth_key=auth_key
    )
    response = requests.post(url=export_url, json=export_request_data, headers={"Authorization": headers})
    if not response.status_code == 200:
        raise Exception(f"{response.content}")
    print(f"Successfully exported deployment[{deployment_id}]")
    with open(OUTPUT, "w") as f:
        f.write(json.dumps(response.json(), indent=2))


if __name__ == "__main__":
    try:
        export_deployment(
            deployment_id=DEPLOYMENT_ID,
            start_date=START_DATE,
            end_date=END_DATE,
            auth_id=AUTH_ID,
            auth_key=AUTH_KEY,
            host=HOST
        )

    except Exception as e:
        print(f"Something went wrong: {str(e)}")