// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import rehypeBaseLinks from './src/plugins/rehype-base-links.mjs';

// GitHub Pages address. For https://<name>.github.io/<repo>/ set `site` to
// https://<name>.github.io and `base` to /<repo>. Both must match the real
// account and repo, or the published site loads without its styling.
const GITHUB_NAME = 'biomedrive';
const REPO_NAME = 'nodecraft-docs';
const BASE = `/${REPO_NAME}`;

// https://astro.build/config
export default defineConfig({
	site: `https://${GITHUB_NAME}.github.io`,
	base: BASE,
	markdown: {
		// Lets pages link as `/guides/themes/`; the base path is added at build time.
		rehypePlugins: [[rehypeBaseLinks, { base: BASE }]],
	},
	integrations: [
		starlight({
			title: 'NodeCraft',
			description:
				'Documentation for NodeCraft, the Unreal Engine plugin that themes the Blueprint and Material graph editors.',
			logo: { src: './src/assets/nodecraft-logo.png', alt: 'NodeCraft' },
			favicon: '/favicon.png',
			customCss: [
				'@fontsource-variable/inter',
				'@fontsource-variable/space-grotesk',
				'@fontsource-variable/jetbrains-mono',
				'./src/styles/custom.css',
			],
			social: [{ icon: 'discord', label: 'Discord', href: 'https://discord.gg/FEvBNh3Xd9' }],
			sidebar: [
				{
					label: 'Getting started',
					items: ['getting-started/installation', 'getting-started/quick-start'],
				},
				{
					label: 'Guides',
					items: ['guides/themes', 'guides/wire-routing', 'guides/customizing-themes'],
				},
				{
					label: 'Reference',
					items: ['reference/theme-settings', 'reference/project-settings'],
				},
				{
					label: 'Help',
					items: ['help/faq', 'help/support'],
				},
				{ label: 'Changelog', slug: 'changelog' },
			],
		}),
	],
});
