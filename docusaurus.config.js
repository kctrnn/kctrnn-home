// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const customFields = {
  name: 'Kim Chan',
  username: 'kctrnn',
  imageUrl: 'https://github.com/kctrnn.png',
  productionUrl: 'https://kctrnn.vercel.app',

  github: 'https://github.com/kctrnn',
  linkedin: 'https://www.linkedin.com/in/kctrnn',
  facebook: 'https://www.facebook.com/kctrnn',
  twitter: 'https://twitter.com/kctrnn',
};

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'kctrnn',
  tagline: 'I love building products and learning much knowledge.',
  favicon: 'img/monkey.svg',
  customFields,

  // Set the production url of your site here
  url: customFields.productionUrl,
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'projects',
        path: 'projects',
        routeBasePath: 'projects',
        sidebarPath: require.resolve('./sidebarsProject.js'),
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      // image: 'img/docusaurus-social-card.jpg',

      navbar: {
        title: 'kctrnn',
        logo: {
          alt: 'My Site Logo',
          src: 'img/monkey.svg',
          style: { borderRadius: 4 },
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            label: 'Docs',
          },
          {
            to: '/blog',
            label: 'Blog',
          },
          {
            type: 'docSidebar',
            sidebarId: 'projects',
            docsPluginId: 'projects',
            label: 'Projects',
          },
          {
            href: customFields.github,
            position: 'right',
            className: 'header-github-link',
          },
        ],
      },

      footer: {
        style: 'dark',
        links: [
          {
            title: 'Blog',
            items: [],
          },
          {
            title: 'Project',
            items: [],
          },
          {
            title: 'Be my friend on',
            items: [
              { label: 'Github', to: customFields.github },
              { label: 'Twitter', to: customFields.twitter },
              { label: 'LinkedIn', to: customFields.linkedin },
              { label: 'Facebook', to: customFields.facebook },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} kctrnn, Inc. Built with Docusaurus.`,
      },

      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
