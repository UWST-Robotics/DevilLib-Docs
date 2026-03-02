// @ts-check

import {themes as prismThemes} from 'prism-react-renderer';
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'DevilLib',
    tagline: 'Building bots, raising hell',
    favicon: 'img/favicon.ico',
    future: {v4: true},

    // Deployment Config
    url: 'https://docs.devilbots.org/',
    baseUrl: '/',
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
                    routeBasePath: '/',
                    sidebarPath: './sidebars.js',
                    editUrl: 'https://github.com/UWST-Robotics/DevilLib-Docs/',

                    // Applied KaTEX Plugin
                    remarkPlugins: [remarkMath],
                    rehypePlugins: [rehypeKatex],
                },
                theme: {
                    customCss: './src/css/custom.css',
                },
            }),
        ],
    ],

    stylesheets: [
        // Applies KaTEX Stylesheet
        {
            href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
            type: 'text/css',
            integrity:
                'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
            crossorigin: 'anonymous',
        },
    ],

    themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            image: 'img/og-image.png',
            colorMode: {
                respectPrefersColorScheme: true,
            },
            navbar: {
                title: 'DevilLib',
                logo: {
                    alt: 'DevilLib Logo',
                    src: 'img/logo.png',
                },
                items: [
                    {
                        href: 'https://github.com/UWST-Robotics/DevilLib',
                        position: 'right',
                        className: 'navbar-github-link',
                    },
                ],
            },
            footer: {
                style: 'dark',
                links: [
                    {label: "DevilLib", href: "/"},
                    {label: "GitHub", href: "https://github.com/UWST-Robotics/DevilLib"},
                    {label: "Email", href: "mailto:robotics@uwstout.edu"}
                ]
            },
            prism: {
                theme: prismThemes.github,
                darkTheme: prismThemes.dracula,
            }
        }),
};

export default config;
