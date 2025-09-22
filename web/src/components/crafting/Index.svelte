<script>
	import { isEnvBrowser } from "$lib/utils/misc";
	import NavBar from "./NavBar.svelte";
	import background from "../../assets/background.jpg";
	import RecipesList from "./RecipesList.svelte";
	import ItemCard from "./ItemCard.svelte";
	import Queue from "./Queue.svelte";
</script>

<main class="flex w-full h-full max-h-full flex-col relative overflow-hidden">
	{#if isEnvBrowser()}
		<img
			class="absolute w-full h-full object-cover"
			src={background}
			alt="RedM"
		/>
	{/if}
	<div
		class="h-full w-full bg-accent-20 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-100"
	>
		<NavBar />

		<div
			class="flex w-full h-[calc(100%-4rem)] max-h-full flex-1 flex-row justify-between blur-none z-10 bg-200-60"
		>
			<RecipesList />
			<ItemCard />
			<Queue />
		</div>
	</div>
</main>

<style>
	.bg-accent-20 {
		backdrop-filter: blur(8px);
		background-color: rgba(248, 248, 248, 0.2);
	}
	.bg-200-60 {
		background-color: rgba(11, 9, 8, 0.6);
	}
</style>
