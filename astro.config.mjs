import { defineConfig } from "astro/config";
import vue from "@astrojs/vue";
import tailwind from "@astrojs/tailwind";
import compress from "astro-compress";
import sitemap from "@astrojs/sitemap";
import robots from "astro-robots";
import unfonts from "unplugin-fonts/astro"; // optional
import netlify from "@astrojs/netlify"; // optional

export default defineConfig({
	site: "https://example.com", // ← update later
	output: "static",
	integrations: [
		vue(),
		tailwind(),
		compress({ html: true, img: true }),
		sitemap(),
		robots(),
		unfonts({
			google: { families: ["Inter:400,700"] }, // sample config
		}),
	],
	adapter: netlify(),
});
