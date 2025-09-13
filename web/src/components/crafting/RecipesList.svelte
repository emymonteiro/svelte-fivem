<script lang="ts">
	import { onMount } from "svelte";
	import { writable } from "svelte/store";
	import { slide } from "svelte/transition";
	import Icon from "@iconify/svelte";

	type Categories = "Weapons" | "Food" | "Drinks" | "Materials";

	const categoriesDetails: Record<
		Categories,
		{ icon: string; label: string }
	> = {
		["Weapons"]: {
			label: "Armas",
			icon: "game-icons:sword-wound",
		},
		["Food"]: {
			label: "Comidas",
			icon: "game-icons:chicken-leg",
		},
		["Drinks"]: {
			label: "Bebidas",
			icon: "game-icons:wine-glass",
		},
		["Materials"]: {
			label: "Materiais",
			icon: "game-icons:metal-bar",
		},
	};

	const recipes: {
		id: number;
		name: string;
		category: Categories;
		img: string;
	}[] = [
		{
			id: 1,
			name: "Recipe 1",
			category: "Weapons",
			img: "espada_aço.webp",
		},
		{
			id: 2,
			name: "Recipe 2",
			category: "Food",
			img: "espada_aço.webp",
		},
		{
			id: 3,
			name: "Recipe 3",
			category: "Drinks",
			img: "espada_aço.webp",
		},
		{
			id: 4,
			name: "Recipe 4",
			category: "Materials",
			img: "espada_aço.webp",
		},
		{
			id: 5,
			name: "Recipe 5",
			category: "Weapons",
			img: "espada_aço.webp",
		},
		{
			id: 6,
			name: "Recipe 6",
			category: "Food",
			img: "espada_aço.webp",
		},
		{
			id: 7,
			name: "Recipe 7",
			category: "Drinks",
			img: "espada_aço.webp",
		},
		{
			id: 8,
			name: "Recipe 8",
			category: "Materials",
			img: "espada_aço.webp",
		},
		{
			id: 1,
			name: "Recipe 1",
			category: "Weapons",
			img: "espada_aço.webp",
		},
		{
			id: 2,
			name: "Recipe 2",
			category: "Food",
			img: "espada_aço.webp",
		},
		{
			id: 3,
			name: "Recipe 3",
			category: "Drinks",
			img: "espada_aço.webp",
		},
		{
			id: 4,
			name: "Recipe 4",
			category: "Materials",
			img: "espada_aço.webp",
		},
		{
			id: 5,
			name: "Recipe 5",
			category: "Weapons",
			img: "espada_aço.webp",
		},
		{
			id: 6,
			name: "Recipe 6",
			category: "Food",
			img: "espada_aço.webp",
		},
		{
			id: 7,
			name: "Recipe 7",
			category: "Drinks",
			img: "espada_aço.webp",
		},
		{
			id: 8,
			name: "Recipe 8",
			category: "Materials",
			img: "espada_aço.webp",
		},
		{
			id: 1,
			name: "Recipe 1",
			category: "Weapons",
			img: "espada_aço.webp",
		},
		{
			id: 2,
			name: "Recipe 2",
			category: "Food",
			img: "espada_aço.webp",
		},
		{
			id: 3,
			name: "Recipe 3",
			category: "Drinks",
			img: "espada_aço.webp",
		},
		{
			id: 4,
			name: "Recipe 4",
			category: "Materials",
			img: "espada_aço.webp",
		},
		{
			id: 5,
			name: "Recipe 5",
			category: "Weapons",
			img: "espada_aço.webp",
		},
		{
			id: 6,
			name: "Recipe 6",
			category: "Food",
			img: "espada_aço.webp",
		},
		{
			id: 7,
			name: "Recipe 7",
			category: "Drinks",
			img: "espada_aço.webp",
		},
		{
			id: 8,
			name: "Recipe 8",
			category: "Materials",
			img: "espada_aço.webp",
		},
		{
			id: 1,
			name: "Recipe 1",
			category: "Weapons",
			img: "espada_aço.webp",
		},
		{
			id: 2,
			name: "Recipe 2",
			category: "Food",
			img: "espada_aço.webp",
		},
		{
			id: 3,
			name: "Recipe 3",
			category: "Drinks",
			img: "espada_aço.webp",
		},
		{
			id: 4,
			name: "Recipe 4",
			category: "Materials",
			img: "espada_aço.webp",
		},
		{
			id: 5,
			name: "Recipe 5",
			category: "Weapons",
			img: "espada_aço.webp",
		},
		{
			id: 6,
			name: "Recipe 6",
			category: "Food",
			img: "espada_aço.webp",
		},
		{
			id: 7,
			name: "Recipe 7",
			category: "Drinks",
			img: "espada_aço.webp",
		},
		{
			id: 8,
			name: "Recipe 8",
			category: "Materials",
			img: "espada_aço.webp",
		},
		{
			id: 1,
			name: "Recipe 1",
			category: "Weapons",
			img: "espada_aço.webp",
		},
		{
			id: 2,
			name: "Recipe 2",
			category: "Food",
			img: "espada_aço.webp",
		},
		{
			id: 3,
			name: "Recipe 3",
			category: "Drinks",
			img: "espada_aço.webp",
		},
		{
			id: 4,
			name: "Recipe 4",
			category: "Materials",
			img: "espada_aço.webp",
		},
		{
			id: 5,
			name: "Recipe 5",
			category: "Weapons",
			img: "espada_aço.webp",
		},
		{
			id: 6,
			name: "Recipe 6",
			category: "Food",
			img: "espada_aço.webp",
		},
		{
			id: 7,
			name: "Recipe 7",
			category: "Drinks",
			img: "espada_aço.webp",
		},
		{
			id: 8,
			name: "Recipe 8",
			category: "Materials",
			img: "espada_aço.webp",
		},
		{
			id: 1,
			name: "Recipe 1",
			category: "Weapons",
			img: "espada_aço.webp",
		},
		{
			id: 2,
			name: "Recipe 2",
			category: "Food",
			img: "espada_aço.webp",
		},
		{
			id: 3,
			name: "Recipe 3",
			category: "Drinks",
			img: "espada_aço.webp",
		},
		{
			id: 4,
			name: "Recipe 4",
			category: "Materials",
			img: "espada_aço.webp",
		},
		{
			id: 5,
			name: "Recipe 5",
			category: "Weapons",
			img: "espada_aço.webp",
		},
		{
			id: 6,
			name: "Recipe 6",
			category: "Food",
			img: "espada_aço.webp",
		},
		{
			id: 7,
			name: "Recipe 7",
			category: "Drinks",
			img: "espada_aço.webp",
		},
		{
			id: 8,
			name: "Recipe 8",
			category: "Materials",
			img: "espada_aço.webp",
		},
	];

	const expandedCategories = writable<Record<string, boolean>>({});
	const selectedCategory = writable<string | null>(null);
	const categories = Array.from(new Set(recipes.map((r) => r.category)));
	onMount(() => {
		// Fetch recipes from an API or store if needed
		expandedCategories.set(
			Object.fromEntries(categories.map((cat) => [cat, true])),
		);
	});

	function toggleCategory(cat: string) {
		expandedCategories.update((current) => ({
			...current,
			[cat]: !current[cat],
		}));
	}
	function filterByCategory(cat: string) {
		selectedCategory.update((current) => (current === cat ? null : cat));

		expandedCategories.update((current) => ({
			...current,
			[cat]: true,
		}));
	}
</script>

<main class="flex flex-col max-w-sm h-full p-8 pr-0 overflow-hidden">
	<div class="flex flex-row w-full h-full overflow-y-auto gap-4 relative">
		<ul class="menu max-w-28 p-0 sticky top-0">
			{#each categories as category}
				<li>
					<div class="tooltip tooltip-bottom">
						<div class="tooltip-content">
							<div
								class="animate-bounce text-secondary text-[0.5rem] font-black"
							>
								{categoriesDetails[category]?.label}
							</div>
						</div>
						<button
							onclick={() => filterByCategory(category)}
							aria-pressed={$selectedCategory === category}
							class={`flex items-center justify-center w-full h-full cursor-pointer hover:text-neutral-content`}
						>
							<div
								class={`flex items-center gap-2 text-neutral-content ${$selectedCategory === category ? " drop-shadow-md drop-shadow-highlight" : ""}`}
							>
								{recipes.filter((r) => r.category === category)
									.length}
								<Icon
									class="drop-shadow-2xl drop-shadow-highlight"
									icon={categoriesDetails[category]?.icon}
								/>
							</div>
						</button>
					</div>
				</li>
			{/each}
		</ul>
		<div class="w-xl max-w-[calc(100%-6rem)] flex flex-col">
			{#each categories as category}
				{#if !$selectedCategory || $selectedCategory === category}
					<div
						transition:slide
						class="flex flex-col min-w-full w-full gap-2 pb-2"
					>
						<button
							class="flex min-w-full w-full items-center gap-2 text-xs text-neutral-content py-2 cursor-pointer hover:text-light"
							onclick={() => toggleCategory(category)}
						>
							<Icon
								class="w-4 h-4"
								icon={categoriesDetails[category]?.icon}
							/>
							{categoriesDetails[category]?.label}
						</button>
						<ul class="flex flex-col gap-1 w-full">
							{#if $expandedCategories[category]}
								<div
									transition:slide
									class="flex flex-col gap-1"
								>
									{#each recipes.filter((r) => r.category === category) as recipe}
										<button
											class="text-sm border-l-2 bg-primary/60 cursor-pointer hover:bg-primary/80 border-primary hover:border-secondary rounded-r-md w-full"
										>
											<li
												class="flex w-full items-center gap-2 px-3 py-1 justify-between"
											>
												<div
													class="flex max-w-[80%] gap-4 items-center"
												>
													<img
														class="h-5 w-5"
														src={recipe.img}
														alt="sword"
													/>
													<span class="truncate">
														{recipe.name}
														fsdfsdfsd fsd fsdf sd fsd
														fsdfsdfsd fsd fsdsffsdfsdfsd
														fsdfsdfsdf asda dassda das
														fsdfsdfsd fsd fsdf sd fsd
														fsdfsdfsd fsd fsdsffsdfsdfsd
														fsdfsdfsdf asda dassda das
														fsdfsdfsd fsd fsdf sd fsd
														fsdfsdfsd fsd fsdsffsdfsdfsd
														fsdfsdfsdf asda dassda das
													</span>
													<span
														class="text-[0.5rem] whitespace-nowrap"
													>
														x 100</span
													>
												</div>
												<div>
													<span
														class="indicator-item indicator-end badge badge-sm badge-primary/60 text-[0.65rem] border-none"
													>
														2
													</span>
												</div>
											</li>
										</button>
									{/each}
								</div>
							{/if}
						</ul>
					</div>
				{/if}
			{/each}
		</div>
	</div>
</main>
