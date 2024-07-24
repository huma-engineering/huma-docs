/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Huma documentation',
  tagline: 'Find the latest user guides, developer guides, API references, tutorials, and more.',
  url: 'https://docs.huma.com',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'huma-engineering', // Usually your GitHub org/user name.
  projectName: 'huma-docs', // Usually your repo name.
  customFields: {
    authors: {
      team: {
        name: 'Huma team',
        link: 'https://twitter.com/humaforhealth',
        title: 'Developer, Manager',
        image: 'sample-profile-img.jpg'
      }
    }
  },
  themeConfig: {
    docs: {
      sidebar: {
        autoCollapseCategories: true
      }
    },
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
    },
    navbar: {
      title: '',
      logo: {
        alt: 'Huma Therapeutics Ltd',
        src: '../img/huma_logo_black.svg',
      },
      items: [
        {
          type: 'doc',
          position: 'left',
          label: 'Product',
          docsPluginId: 'data-collection',
          docId: 'index',
        },
        {
          type: 'dropdown',
          position: 'left',
          label: 'Developer Resources',
          items: [
            {
              label: 'API',
              to: "api-data-collection",
              docsPluginId: 'api-data-collection',
            },
            {
              type: 'doc',
              label: 'SDK',
              docsPluginId: 'sdk',
              docId: 'intro',
            },
          ],
        },
        {
          position: 'left',
          type: 'doc',
          label: 'Trust & Security',
          docsPluginId: 'trust-security',
          docId: 'index',
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
        {
          type: 'docsVersionDropdown',
          docsPluginId: 'sdk',
          position: 'right',
        },
        {
          href: 'https://github.com/huma-engineering/huma-docs',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
        },
      ],
    },
    prism: {
      additionalLanguages: ['kotlin']
    }
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        pages: {
          path: 'src/pages',
        },
        docs: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
    [
      'redocusaurus',
      {
        specs: [{
          id: 'api-data-collection',
          route: 'api-data-collection',
          spec: 'api-data-collection/documentations-huma.json',
        }]
      }
    ]
  ],
  plugins: [
    [
      require.resolve('docusaurus-lunr-search'), {
        // languages: ['en', 'fr']
        languages: ['en']
      }
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'data-collection',
        path: 'data-collection',
        routeBasePath: 'data-collection',
        editUrl: 'https://github.com/huma-engineering/huma-docs/edit/master',
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'api-integration',
        path: 'api-integration',
        routeBasePath: 'api-integration',
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'sdk',
        path: 'sdk',
        routeBasePath: 'sdk',
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'trust-security',
        path: 'trust-security',
        routeBasePath: 'trust-security',
        editUrl: 'https://github.com/huma-engineering/huma-docs/edit/master',
      },
    ],
    ['docusaurus-node-polyfills', { excludeAliases: ['console'] }]
  ],
  i18n: {
    defaultLocale: 'en',
    //locales: ['en', 'fr'],
    locales: ['en']
  },
};
