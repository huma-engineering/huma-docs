---
sidebar_position: 11
title: HSP
---

# What is Huma HSP?

HSP (Huma Server Platform) is a cli tool to create and manage Huma backend project.

```shell
$ hsp --help

Usage: hsp [OPTIONS] COMMAND [ARGS]...

Options:
  --help Show this message and exit.

Commands:
    create-project Create a new server project
    deploy Deploy the image to the server
    install-dependencies Install dependencies
    migrate
    plugin-add Add an plugin to config
    plugin-create Create a new plugin
    plugin-remove Remove an plugin from config
    push-image Push the image to the registry
    run-server Run the server
    sync Clone, Fetch, Checkout repos

```

## Installation

In order to install the package use `pip`

```shell
  pip install git+https://github.com/huma-engineering/huma-server-platform.git@v1.0.0#egg=huma-server-platform
```

:::info
You can change to a different version from `v1.0.0`
:::

and then

 ```bash
 hsp --help
 ```

:::note
If you need your virtual env to reside inside the project install hsp system-wide then create a virtual env after
project creation you can specify `--install_dependencies false` on `create-project` to avoid installation of basic
requirements into the global pip
:::

### Create a project

To see the possible options issue a `--help` command

   ```bash
   hsp create-project --help 
   ```

:::important
`create-project` will install new packages onto your virtualenv if this is undesired
use `--install_dependencies false`. You can install dependencies with `python manage.py install-dependencies`
:::

:::note
Every project gets its version of HSP which is accessible through `python manage.py`
:::

```bash
hsp create-project -n sampleproject --server_version 1.0.0 --sdk_version master --python_version 3.11.7 --hsp_version v1.0.0
```

:::note
Now that you have created the project you can switch to using the `manage.py` file inside the project
:::

change into the new directory and run the project with

```bash
cd sampleproject && python manage.py run-server
```

:::important
It was assumed the `hsp` command would be just used for creating project. To issue any other command you should
switch to `python manage.py` instead of hsp
:::

## Notable Commands

### `run-server`

```bash
python manage.py run-server
```

### `sync`

In order to pull the changes from server for the repositories configured in `hsp-config`

``` bash
python manage.py sync
```

### `install-dependencies`

Will install `requirements.txt` listed inside registered libraries in `libs/*/requirements.txt`. When issued hsp will
merge all the requirement.txt into one file and issue a pip install on it and then remove that file

### `plugin-add`, `plugin-remove`, `plugin-create`

Are available to add, remove and create new entities.
different types of plugin are

- Components
- Modules
- Widgets
  Which will be passed to these commands using `--type/-t` for example

```bash
python manage.py plugin-create --type components --name MySampleComponent
```

Which will create the appropriate component inside the `app` folder at the root of the project

## Configurations

There is a file called `hsp-config.yaml` which specifies which version of which component should be used after
changing it to your liking use [sync](#sync) and [`install-dependencies`](#install-dependencies) in conjunction to
update your local
environment

A sample for RESPI project can be
found [huma-respi-server](https://github.com/huma-engineering/huma-respi-server/blob/master/hsp-config.yaml)

## Providers

If you want to customize component / server config consumption look into `hspproviders`
folder, [example](https://github.com/huma-engineering/huma-respi-server/tree/master/hspproviders)

:::note
Not a bad idea to look into [their parents](https://github.com/huma-engineering/huma-server-platform/tree/master/framework/server/hsp_providers.py) definition to see what
you can do
:::

1. [PhoenixServerProvider](https://github.com/huma-engineering/huma-server-platform/tree/master/framework/templates/project/template/hspproviders/component_provider.py)

   Need to customise celery worker? add new stuff this is the place to customise
2. [ComponentProvider](https://github.com/huma-engineering/huma-server-platform/tree/master/framework/templates/project/template/hspproviders/phoenix_server_provider.py)

   Need to supply new argument in hsp config to your component, change argument rendering logic this is the place to
   look and change

