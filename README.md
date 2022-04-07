# Huma API Documentation Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

## Installation

This website is using our [Github Package](https://github.com/huma-engineering/huma-redoc) for OpenAPI Integration. To install our Github Package, You need to add the `.npmrc` file to your project so that all requests to install packages will go through GitHub Packages.

### Authenticate to GitHub Packages.

You need an access token to publish, install, and delete packages.

You can use a personal access token (PAT) to authenticate to GitHub Packages or the GitHub API. When you create a personal access token, you can assign the token different scopes depending on your needs. For more information about packages-related scopes for a PAT, see [About permissions for GitHub Packages](https://docs.github.com/en/packages/learn-github-packages/about-permissions-for-github-packages#about-scopes-and-permissions-for-package-registries).

To authenticate by adding your personal access token to your `.npmrc` file, edit the `.npmrc` file for your project to include the following 2 lines, replacing `GITHUB_TOKEN` with your personal access token. Create a new `.npmrc` file if one doesn't exist.

```
//npm.pkg.github.com/:_authToken=GITHUB_TOKEN
@huma-engineering:registry=https://npm.pkg.github.com
```

Otherwise, You can add the environment variable to your current bash or terminal.

```
export GITHUB_TOKEN=blabla
```

### Install the packages

```
yarn install
```

## Local Development

```
yarn start
```

or 

```
make serve
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Additionally used plugins:

- [docusaurus-lunr-search](https://github.com/lelouch77/docusaurus-lunr-search)
Offline Search for Docusaurus V2
- [huma-redoc](https://github.com/huma-engineering/huma-redoc)
Tool for generating documentation from OpenAPI (fka Swagger) definitions
- [redocusaurus](https://github.com/rohit-gohri/redocusaurus)
A content plugin that creates pages from your OpenAPI files or URLs and rendered using the Redoc component from the theme.

### docusaurus-lunr-search

Docusaurus search information can only be generated from a production build. Local development is currently not supported. 

### redocusaurus

The multiple specifications can be added to the docusaurus.config.js:

```js
// docusaurus.config.js
   module.exports = {
     // ...
     presets: [
        // ...
        [
        'redocusaurus',
            {
            specs: [{
                    id: 'api-platformplay',
                    routePath: 'api-platformplay',
                    spec: 'api-platformplay/documentations.json',
                }],
            }
        ]
        // ...
     ]
     // ...
};
```

## Versions

### Our current versioned instances:

- sdk

### Versioned paths

Each plugin instance will store versioned docs in a distinct folder.

- `website/[pluginId]_versions.json`
- `website/[pluginId]_versioned_docs`

The instance paths will be simpler, and retro-compatible with a single-instance setup.

### Tagging new versions

Each plugin instance will have its own cli command to tag a new version. They will be displayed if you run:

```bash npm2yarn
yarn docusaurus -- --help
```

To version platformplay docs plugin instance:

```bash npm2yarn
yarn docusaurus docs:version:platformplay 1.16.0
```

## Theme Components
This section includes a list of important theme components:

### Redoc
RedocStandalone with dark mode support, matching docusaurus classic theme. This component is used to share props from the docusaurus theme to the redoc.

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
