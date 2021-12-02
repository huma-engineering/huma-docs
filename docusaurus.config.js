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
  themeConfig: {
    navbar: {
      title: '',
      logo: {
        alt: 'Huma Therapeutics Ltd',
        src: 'img/huma_logo_black.svg',
      },
      items: [
        {
          type: 'dropdown',
          position: 'left',
          label: 'Api',
          items: [
            {
              type: 'doc',
              label: 'Api 1',
              docsPluginId: 'api',
              docId: 'intro',
            },
          ],
        },
        {
          type: 'dropdown',
          position: 'left',
          label: 'Docs',
          items: [
            {
              type: 'doc',
              label: 'Clinician Portal',
              docsPluginId: 'portal',
              docId: 'intro',
            },
            {
              type: 'doc',
              label: 'Huma Mobile App',
              docsPluginId: 'mobile',
              docId: 'intro',
            },
            {
              type: 'doc',
              label: 'Admin Portal',
              docsPluginId: 'admin',
              docId: 'intro',
            },
          ],
        },
        {
          type: 'dropdown',
          position: 'left',
          label: 'Guide',
          items: [
            {
              to: 'guide-1',
              label: 'Guide 1',
            },
            {
              to: 'guide-2',
              label: 'Guide 2',
            },
            {
              to: 'guide-3',
              label: 'Guide 3',
            },
          ],
        },
        {
          type: 'docsVersionDropdown',
          docsPluginId: 'portal',
          position: 'right',
        },
        {
          type: 'docsVersionDropdown',
          docsPluginId: 'mobile',
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
        id: 'portal',
        path: 'portal',
        routeBasePath: 'portal',
        sidebarPath: require.resolve('./sidebarsPortal.js'),
        editUrl: 'https://github.com/facebook/docusaurus/edit/master/website/',
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'mobile',
        path: 'mobile',
        routeBasePath: 'mobile',
        sidebarPath: require.resolve('./sidebarsMobile.js'),
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'admin',
        path: 'admin',
        routeBasePath: 'admin',
        sidebarPath: require.resolve('./sidebarsAdmin.js'),
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'api',
        path: 'api',
        routeBasePath: 'api',
        sidebarPath: require.resolve('./sidebarsApi.js'),
      },
    ],
  ],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr'],
  },
};
