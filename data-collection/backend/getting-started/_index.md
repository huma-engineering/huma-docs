---
sidebar_position: 1
title: Getting started
---

# Getting started

We'll go through the steps to create your own project that used Huma backend [SDK](/data-collection/backend/sdk/). You
can think of Huma backend SDK as a python library. We'll use a cli tool called [HSP](/data-collection/backend/hsp/) to
simplify this process.

## Installation

In order to install the package use `pip`

```shell
  pip install git+https://github.com/huma-engineering/huma-server-platform.git@v1.0.0#egg=huma-server-platform
```

:::note
We'd recommend setting up a virtual env before creating the project
:::

### Create a project

And then to create a Project

```bash
hsp create-project -n sampleproject
```

You will be prompted for the necessary detail. and then you can `cd sampleproject`.

:::note
Once inside the project you should use the `manage.py` script to interact with `hsp` instead.
:::

### Run the project

```bash
python manage.py run-server
```

## Create your own plugin

There are multiple choice of plugin
types [Components](/data-collection/backend/sdk/#components), [Modules](/data-collection/backend/sdk/#modules)
and [Widgets](/data-collection/backend/sdk/#widgets), here we'll create a component.

```bash
python manage.py plugin-create --type components --name mycomponent

```

and you should see an empty component created in `app/components/mycomponent` ready for you to be implemented.
