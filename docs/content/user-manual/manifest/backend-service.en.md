List of all available properties for a `'Backend Service'` manifest.

???+ note "Sample manifest for an api service"

    ```yaml
    # Your service name will be used in naming your resources like log groups, ECS services, etc.
    name: api
    type: Backend Service

    variables:
      LOG_LEVEL: info
    secrets:
      GITHUB_TOKEN: GITHUB_TOKEN

    ```

<a id="name" href="#name" class="field">`name`</a> <span class="type">String</span>
The name of your service.

<div class="separator"></div>

<a id="type" href="#type" class="field">`type`</a> <span class="type">String</span>  
The architecture type for your service. [Backend Services](../overview/#installing) are not reachable from the internet

{% include 'common-svc-fields.md' %}
