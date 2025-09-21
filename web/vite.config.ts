// vite.config.ts
import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
	plugins: [svelte(), tailwindcss()],
	base: "./",
	build: {
		outDir: "dist", // ← Isso já é o padrão, mas explicitando
	},
	resolve: {
		alias: {
			$lib: "/src/lib",
			src: "/src",
		},
	},
});
