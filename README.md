# Huma API Documentation Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

## Installation

This website is using our [Github Package](https://github.com/huma-engineering/huma-redoc) for OpenAPI Integration. To install our Github Package, You need to add the `.npmrc` file to your project so that all requests to install packages will go through GitHub Packages.

### Authenticate to GitHub Packages.

To authenticate by adding your personal access token to your `.npmrc` file, edit the `.npmrc` file for your project to include the following 2 lines, replacing `GITHUB_TOKEN` with your personal access token. Create a new `.npmrc` file if one doesn't exist.

```
//npm.pkg.github.com/:_authToken=GITHUB_TOKEN
@huma-engineering:registry=https://npm.pkg.github.com
```

### Install the packages

```
yarn install
```

## Local Development

```
yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

```
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

```console
GIT_USER=<Your GitHub username> USE_SSH=true yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
