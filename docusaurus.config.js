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
        link: 'https://twitter.com/huma',
        title: 'Developer, Manager',
        image: 'sample-profile-img.jpg'
      }
    }
  },
  themeConfig: {
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
          label: 'Docs',
          items: [
            {
              type: 'doc',
              label: 'Platform play',
              docsPluginId: 'platformplay',
              docId: 'intro',
            },
          ],
        },
        {
          type: 'dropdown',
          position: 'left',
          label: 'API',
          items: [
            {
              label: 'Platform Play',
              to: "api-platformplay",
              docsPluginId: 'api-platformplay',
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
          type: 'docsVersionDropdown',
          docsPluginId: 'platformplay',
          position: 'right',
        },
        {
          type: 'docsVersionDropdown',
          docsPluginId: 'sdk',
          position: 'right',
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
      ],
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
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
          id: 'api-platformplay',
          routePath: 'api-platformplay',
          spec: 'api-platformplay/documentations-huma.json',
        }],
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
        id: 'platformplay',
        path: 'platformplay',
        routeBasePath: 'platformplay',
        editUrl: 'https://github.com/facebook/docusaurus/edit/master/website/',
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
  ],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr'],
  },
};
