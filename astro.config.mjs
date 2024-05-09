import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://docs.wintro.ai',
	redirects: {
		'/' : '/intro-to-wintro/what-is-wintro',
	},
	// base: 'docs',
	integrations: [
		starlight({
			title: 'Docs',
			logo: {
				light: './src/assets/logo_full_light.png',
				dark: './src/assets/logo_full_dark.png',
			},
			favicon: './src/assets/favicon.ico',
			customCss: [
				// Add custom CSS to the docs.
				'./src/custom.css'
			],
			social: {
				linkedin: 'https://www.linkedin.com/company/wintroai/',
				// github: 'https://www.github.com/wintro-ai/docs/',
				rss: 'https://www.wintro.ai/',
			},
			sidebar: [
				{
					label: 'Intro to Wintro',
					// autogenerate: { directory: 'intro-to-wintro' }
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'What is Wintro?', link: '/intro-to-wintro/what-is-wintro' },
					],
				},
				{
					label: 'For Recruiters',
					autogenerate: { directory: 'recruiters' },
				},
				{
					label: 'For Employees',
					autogenerate: { directory: 'employees' },
				},
				{
					label: 'Security & Compliance',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'General', link: '/security-compliance/general' },
						{ label: 'Architecture', link: '/security-compliance/architecture' },
						{ label: 'Integrations', link: '/security-compliance/integrations' },
						{ label: 'Cognitive Services', link: '/security-compliance/cognitive-services' },
						{ label: 'Data Processing', link: '/security-compliance/data-processing' },
						{ label: 'GDPR', link: '/security-compliance/gdpr' },
						{ label: 'Data Inquiry', link: '/security-compliance/data-inquiry' },
						{ label: 'Access Controls', link: '/security-compliance/access-controls' },
						{ label: 'Secure Development', link: '/security-compliance/secure-development' },
					]
				},
			],
		}),
	],
});
