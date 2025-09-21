<script lang="ts">
	import VisibilityProvider from "$lib/providers/VisibilityProvider.svelte";
	import MainCrafting from "./components/crafting/Index.svelte";
</script>

<VisibilityProvider>
	<main
		data-theme="Eclipse"
		class="w-full items-center justify-center flex bg-transparent"
	>
		<MainCrafting />
	</main>
</VisibilityProvider>

<style>
	@reference "tailwindcss";
	main {
		height: 100vh;
	}
</style>
