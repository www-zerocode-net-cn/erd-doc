// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'ERD Online',
  tagline: '全球第一个开源、免费在线数据建模、元数据管理平台',
  url: 'https://erdonline.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'www-zerocode-net-cn', // Usually your GitHub org/user name.
  projectName: 'erd-docs', // Usually your repo name.

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
          editUrl: 'https://gitee.com/www-zerocode-net-cn/erd-docs/blob/master',

        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'hhttps://gitee.com/www-zerocode-net-cn/erd-docs/blob/master',

        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:{
    docs:{
      sidebar:{
        autoCollapseCategories: true
      }
    },
    metadata: [{name: 'keywords', content: 'erd, online, customization, documentation, blog'},
      {name: 'author', content: 'ERD Online'}],
    image: 'img/erd-online-full.png',
    navbar: {
      title: 'ERD Online',
      logo: {
        alt: 'ERD Online Logo',
        src: 'img/erd-online.png',
      },
      items: [
        {
          type: 'doc',
          docId: 'getting-started',
          position: 'left',
          label: '文档',
        },
        // { to: '/blog', label: '博客', position: 'left' },

        {
          href: 'https://erd.zerocode.net.cn',
          label: '登录ERD',
          position: 'right',
        },
        {
          href: 'https://www.zerocode.net.cn',
          label: '社区',
          position: 'right',
        },
        {
          href: 'https://gitee.com/MARTIN-88/erd-online',
          label: 'Gitee',
          position: 'right',
          className: "header-icon-link header-github-link",

        },
        {
          href: 'https://github.com/www-zerocode-net-cn/ERD-Online',
          label: 'Github',
          position: 'right',
          className: "header-icon-link header-github-link",

        },
      ],
    },
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    announcementBar: {
      id: 'supportus',
      content:
          '⭐️ If you like ERD Online, give it a star on <a target="_blank" rel="noopener noreferrer" href="https://github.com/www-zerocode-net-cn/ERD-Online">Github</a>! ⭐️',
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '文档',
          items: [
            {
              label: '开始使用',
              to: '/docs/getting-started',
            },
            {
              label: '快速入门',
              to: '/docs/quick-start',
            },

            {
              label: 'FAQ',
              to: '/docs/faq',
            },
          ],
        },
        {
          title: '社区',
          items: [
            {
              label: '社区论坛',
              href: 'https://www.zerocode.net.cn',
            },
            {
              label: '文档资料',
              href: 'https://gitee.com/www-zerocode-net-cn/erd-docs',
            },
          ],
        },
        {
          title: '零代社区',
          items: [
            {
              html: `
                    <img src="/img/wechat-qr.jpg" alt="零代社区小程序" />
                `,
            },
          ],
        },
        {
          title: '联系我们',
          items: [
            {
              html: `
                    <img src="/img/concat-qr.jpg" alt="微信群" />
                `,
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} <a href="https://www.zerocode.net.cn">ERD Online</a> <a href="https://beian.miit.gov.cn/" target="_blank">京ICP备2021023488号-2</a>`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
    algolia: {
      appId: 'EFSAFGZNMV',
      apiKey: 'd851167656b54ffe39b34f0465b8e273',
      indexName: 'zerocode',
    },
  },

  plugins: [
    [
      require("./src/plugins/plugin-baidu-analytics"),
      {trackingID: "e8a81379854e343d9335a9cb66dc3b80"},
    ],
  ],
};

module.exports = config;
