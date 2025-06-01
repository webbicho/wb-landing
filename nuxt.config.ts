// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: [
		'@nuxt/content',
		'@nuxt/eslint',
		'@nuxt/fonts',
		'@nuxt/icon',
		'@nuxt/image',
		'@nuxt/scripts',
		'@nuxt/ui',
		'@nuxtjs/i18n',
		'@nuxthub/core'
	],
	devtools: { enabled: true },
	css: ['~/assets/css/main.css'],
	colorMode: {
		preference: 'system',
		fallback: 'light'
	},
	compatibilityDate: '2025-05-15',
	eslint: {
		config: {
			stylistic: true
		}
	},
	i18n: {
		locales: [
			{
				code: 'pt-BR',
				name: 'Português - Brasil',
				file: 'pt-BR.json'
			}
		],
		defaultLocale: 'pt-BR',
		detectBrowserLanguage: false
	}
});
