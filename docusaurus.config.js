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
              type: 'doc',
              label: 'Platform Play',
              docsPluginId: 'api-platformplay',
              docId: 'intro',
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
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        // docs: {
        //   path: 'portal',
        //   routeBasePath: 'portal',
        //   sidebarPath: require.resolve('./sidebarsPortal.js'),
        //   editUrl: 'https://github.com/facebook/docusaurus/edit/master/website/',
        // },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        pages: {
          path: 'src/pages',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [
    require.resolve('docusaurus-lunr-search'),
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'platformplay',
        path: 'platformplay',
        routeBasePath: 'platformplay',
        sidebarPath: require.resolve('./sidebarsPortal.js'),
        editUrl: 'https://github.com/facebook/docusaurus/edit/master/website/',
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'api-platformplay',
        path: 'api-platformplay',
        routeBasePath: 'api-platformplay',
        sidebarPath: require.resolve('./sidebarsApiPlatformPlay.js'),
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'api-integration',
        path: 'api-integration',
        routeBasePath: 'api-integration',
        sidebarPath: require.resolve('./sidebarsApiIntegration.js'),
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'sdk',
        path: 'sdk',
        routeBasePath: 'sdk',
        sidebarPath: require.resolve('./sidebarsSdk.js'),
      },
    ],
  ],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr'],
  },
};
