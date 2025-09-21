// tailwind.config.ts
import type { Config } from "tailwindcss";

export default {
	content: [
		"./src/**/*.{html,js,svelte,ts}",
		"./dist/index.html", // ← Alterado para dist/
	],
	plugins: [require("daisyui")],
} satisfies Config;
