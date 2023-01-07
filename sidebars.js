/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
    // By default, Docusaurus generates a sidebar from the docs folder structure
    sidebar: [
        'getting-started',
        {
            type: 'category',
            label: '快速入门',
            collapsed: false,
            link: {
                type: 'generated-index',
                description: '快速入门',
                slug: '/quick-start',
            },
            items: [
                'quick-start/introduction',
                //'quick-start/concepts',
                'quick-start/try-out-install',
                'quick-start/try-manual-install',
                'quick-start/compatibility',
                'quick-start/jdbc',
                'quick-start/a-basic-project',
            ]
        },
        {
            type: 'category',
            label: '进阶',
            collapsed: false,
            link: {
                type: 'generated-index',
                description: '高级玩法',
                slug: '/advanced',
            },
            items: [
                'advanced/json-structure',
                'advanced/technology',
                'advanced/custom',
                'advanced/environment',
                'advanced/publish',
                'advanced/server',
            ]
        },
        'comparison',
        'benefit-profit',
        'source',
        'changelog',
        'faq',

    ],
};

module.exports = sidebars;
