// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	app: {
		baseURL: "/signature-app/",
		head: {
			//Adobe Fonts
			link: [
				{ rel: "stylesheet", href: "https://use.typekit.net/cii6xud.css" },
			],
		},
	},
	ssr: false,
});
