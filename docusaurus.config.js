// @ts-check

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'DevilLib Docs',
    tagline: 'Dinosaurs are cool',
    favicon: 'img/favicon.ico',

    future: {
        v4: true,
    },

    url: 'https://docs.devilbots.org/',
    baseUrl: '/',

    // GitHub pages deployment config.
    organizationName: 'UWST-Robotics',
    projectName: 'DevilBots-Docs',

    onBrokenLinks: 'throw',
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
                    sidebarPath: './sidebars.js',
                    editUrl: 'https://github.com/UWST-Robotics/DevilLib-Docs/',
                },
                theme: {
                    customCss: './src/css/custom.css',
                },
            }),
        ],
    ],

    themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            // Replace with your project's social card
            image: 'img/og-image.png',
            colorMode: {
                respectPrefersColorScheme: true,
            },
            navbar: {
                title: 'DevilLib Docs',
                logo: {
                    alt: 'My Site Logo',
                    src: 'img/logo.svg',
                },
                items: [
                    {
                        type: 'docSidebar',
                        sidebarId: 'gettingStartedSidebar',
                        position: 'left',
                        label: 'Getting Started',
                    },
                    {
                        href: 'https://github.com/UWST-Robotics/DevilLib-Docs',
                        label: 'GitHub',
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
                                label: 'Getting Started',
                                to: '/docs/getting-started',
                            },
                        ],
                    },
                    {
                        title: 'Community',
                        items: [
                            {
                                label: 'Instagram',
                                href: 'https://www.instagram.com/devilbots.vexu/',
                            },
                            {
                                label: 'YouTube',
                                href: 'https://www.youtube.com/@StoutDevilBots',
                            }
                        ],
                    },
                    {
                        title: 'More',
                        items: [
                            {
                                label: 'GitHub',
                                href: 'https://github.com/UWST-Robotics/DevilLib-Docs',
                            },
                        ],
                    },
                ],
            },
            prism: {
                theme: prismThemes.github,
                darkTheme: prismThemes.dracula,
            },
        }),
};

export default config;
