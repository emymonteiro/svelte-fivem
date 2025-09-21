<script lang="ts">
	import VisibilityProvider from "$lib/providers/VisibilityProvider.svelte";
	import { onMount } from "svelte";
	import MainCrafting from "./components/crafting/Index.svelte";
	onMount(() => {
		document.documentElement.setAttribute("data-theme", "Eclipse");
	});
</script>

<VisibilityProvider>
	<main class="w-full items-center justify-center flex bg-transparent">
		<MainCrafting />
	</main>
</VisibilityProvider>

<style>
	main {
		height: 100vh;
	}
</style>
