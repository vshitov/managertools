module.exports = {
  title: 'Инструменты менеджера',
  tagline: 'Собрали информацию со всего интернета',
  url: 'https://vshitov.github.io/',
  baseUrl: '/managertools/',
  onBrokenLinks: 'log',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'vshitov', // Usually your GitHub org/user name.
  projectName: 'managertools', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Manager Tools',
      logo: {
        alt: 'Manager Tools',
        src: 'img/logo.svg',
      },
      items: [
        {
          href: 'https://github.com/vshitov/managertools',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [],
      copyright: `Copyright © ${new Date().getFullYear()} Manager Tools, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/vshitov/managertools/edit/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
