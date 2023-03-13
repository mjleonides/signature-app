// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	app: {
		baseURL: "/signature-app/",
		head: {
			//Adobe Fonts
			link: [
				{ rel: "stylesheet", href: "https://use.typekit.net/cii6xud.css" },
			],
			script: [
				{
					src: "https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js",
				},
				{ src: "/placeholder.js" },
				{
					src: "https://kit.fontawesome.com/bc55df093a.js",
					crossorigin: "anonymous",
				},
			],
		},
	},
	ssr: false,
});
