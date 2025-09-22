// tailwind.config.ts
import type { Config } from "tailwindcss";

export default {
	content: [
		"./src/**/*.{html,js,svelte,ts}",
		"./dist/index.html", // ← Alterado para dist/
	],
	plugins: [require("daisyui")],
	theme: {
		opacity: {
			// Desabilita o color-mix com oklab
			mode: "alpha",
		},
		// Ou configure para usar srgb especificamente
		mix: {
			mode: "srgb",
		},
	},
} satisfies Config;
