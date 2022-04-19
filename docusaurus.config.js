/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Huma documentation',
  tagline: 'Find the latest user guides, developer guides, API references, tutorials, and more.',
  url: 'https://docs.huma.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
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
    autoCollapseSidebarCategories: true,
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
          type: 'dropdown',
          position: 'left',
          label: 'Products ',
          items: [
            {
              type: 'doc',
              label: 'Platform',
              docsPluginId: 'huma-apps',
              docId: 'huma-platform/index',
            },
            {
              type: 'doc',
              label: 'Modules',
              docsPluginId: 'huma-apps',
              docId: 'modules/index',
            },
            {
              type: 'doc',
              label: 'ePROS / Licensed Questionnaires',
              docsPluginId: 'huma-apps',
              docId: 'ePROS/index',
            },
            {
              type: 'doc',
              label: 'Features',
              docsPluginId: 'huma-apps',
              docId: 'features/index',
            },
          ],
        },
        {
          type: 'dropdown',
          position: 'left',
          label: 'API',
          items: [
            {
              label: 'Data collection',
              to: "api-data-collection",
              docsPluginId: 'api-data-collection',
            },
            {
              type: 'doc',
              label: 'Integration',
              docsPluginId: 'api-integration',
              docId: 'intro',
            },
          ],
        },
        {
          type: 'doc',
          position: 'left',
          label: 'SDK',
          docsPluginId: 'sdk',
          docId: 'intro',
        },
        {
          type: 'dropdown',
          position: 'left',
          label: 'Resources',
          items: [
            {
              type: 'doc',
              label: 'Trust & Security',
              docsPluginId: 'trust-security',
              docId: 'index',
            },
          ],
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
          routePath: 'api-data-collection',
          spec: 'api-data-collection/documentations-huma.json',
        }]
      }
    ]
  ],
  plugins: [
    [
      require.resolve('docusaurus-lunr-search'), {
        languages: ['en', 'fr']
      }
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'huma-apps',
        path: 'huma-apps',
        routeBasePath: 'huma-apps',
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
  ],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr'],
  },
};
