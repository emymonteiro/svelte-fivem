<script lang="ts">
	type itemTypes =
		| "Equippable"
		| "Consumable"
		| "Material"
		| "Quest"
		| "Miscellaneous";

	const item:
		| {
				name: string;
				description: string;
				type: itemTypes;
				img: string;
				rarity: string;
				requirements: { name: string; value: number }[];
				ingredients: { name: string; quantity: number; img: string }[];
		  }
		| undefined = {
		name: "Espada de Aço",
		description: "Uma espada forjada com aço de alta qualidade.",
		type: "Equippable" as itemTypes,
		img: "espada_aço.webp",
		rarity: "rare",
		requirements: [
			{ name: "Nível", value: 10 },
			{ name: "Força", value: 15 },
		],
		ingredients: [
			{ name: "Aço", quantity: 10, img: "espada_aço.webp" },
			{ name: "Madeira", quantity: 5, img: "espada_aço.webp" },
			{ name: "Couro", quantity: 2, img: "espada_aço.webp" },
		],
	};
</script>

<main
	class="flex flex-col w-3xl min-w-xl h-full items-center justify-center p-8"
>
	{#if !item}
		<div
			class="text-lg italic opacity-60 flex items-center gap-2 font-bold"
		>
			<span class="loading loading-bars loading-lg"></span>
			<span> Carregando </span>
			<span class="loading loading-bars loading-lg"></span>
		</div>
	{:else}
		<section
			class="flex flex-col w-full h-full bg-primary border-y-2 border-secondary p-4 gap-2"
		>
			<div class="flex w-full gap-4">
				<div class="flex flex-col w-2/3 p-4">
					<div class="flex flex-row w-full text-sm">
						<div class="flex flex-col flex-1">
							<h1 class="font-bold text-lg">{item?.name}</h1>
							<p class="text-light text-xs">
								{item?.description}
							</p>
							<span class="mt-auto">{item?.type}</span>
						</div>
						<img
							class="w-25 h-25"
							src={item?.img}
							alt={item?.name}
						/>
					</div>
					<div class="flex flex-col w-full">
						<div class="h-8"></div>
						<div
							class="drop-shadow-xl"
							class:text-epic={item?.rarity === "epic"}
							class:text-rare={item?.rarity === "rare"}
							class:text-common={item?.rarity === "common"}
							class:text-uncommon={item?.rarity === "uncommon"}
							class:text-legendary={item?.rarity === "legendary"}
							class:drop-shadow-epic={item?.rarity === "epic"}
							class:drop-shadow-rare={item?.rarity === "rare"}
							class:drop-shadow-common={item?.rarity === "common"}
							class:drop-shadow-uncommon={item?.rarity ===
								"uncommon"}
							class:drop-shadow-legendary={item?.rarity ===
								"legendary"}
						>
							<span class="text-xs font-bold">
								{item?.rarity}
							</span>
							<div
								class="divider divider-start p-0 m-0 h-0"
								class:before:bg-epic={item?.rarity === "epic"}
								class:after:bg-epic={item?.rarity === "epic"}
								class:before:bg-rare={item?.rarity === "rare"}
								class:after:bg-rare={item?.rarity === "rare"}
								class:before:bg-common={item?.rarity ===
									"common"}
								class:after:bg-common={item?.rarity ===
									"common"}
								class:before:bg-uncommon={item?.rarity ===
									"uncommon"}
								class:after:bg-uncommon={item?.rarity ===
									"uncommon"}
								class:before:bg-legendary={item?.rarity ===
									"legendary"}
								class:after:bg-legendary={item?.rarity ===
									"legendary"}
							></div>
						</div>

						<div class="text-xs py-4">
							<div>
								<span class="font-bold">40</span>
								<span>Custo de Mana</span>
							</div>
							<div class="divider w-5"></div>
							<div>
								<span class="font-bold text-light"
									>Lorem ipsum dolor sit amet, consectetur
									adipiscing elit, sed do eiusmod tempor
									incididunt ut labore et dolore magna aliqua.
									Ut enim ad minim veniam, quis nostrud
									exercitation ullamco laboris nisi ut aliquip
									ex ea commodo consequat.
								</span>
							</div>
							<div class="divider w-5"></div>
							<div class="text-light">
								<span class="text-[0.6rem]">No Inventário:</span
								>
								<span class="font-bold text-sm">0</span>
							</div>
						</div>
					</div>
				</div>
				<div class="flex flex-col w-1/3 gap-4 p-4">
					<div class="flex flex-col gap-2">
						<h2 class="text-xs">Requisitos:</h2>
						<ul
							class="text-[0.65rem] flex flex-col text-light gap-1"
						>
							{#each item.requirements as req}
								<li class="flex items-center gap-2">
									<div
										class="bg-base-200-40 w-7 h-7 p-1 rounded-md"
									></div>
									{req.name} - {req.value}
								</li>
							{/each}
						</ul>
					</div>
					<div class="flex flex-col gap-2">
						<h2 class="text-xs">Ingredientes:</h2>
						<ul
							class="text-[0.65rem] flex flex-col text-light gap-1"
						>
							{#each item.ingredients as ingredient}
								<li class="flex items-center gap-2">
									<div
										class="bg-base-200-40 w-7 h-7 p-1 rounded-md"
									>
										<img
											src={ingredient.img}
											alt={ingredient.name}
										/>
									</div>
									{ingredient.name} - {ingredient.quantity}
								</li>
							{/each}
						</ul>
					</div>
				</div>
			</div>
			<div class="mt-auto flex flex-col items-center justify-center">
				<div class="divider h-0 p-0"></div>
				<div>
					<button
						class="btn btn-soft btn-primary m-0 p-1 text-light text-[0.65rem]"
					>
						<div class="flex justify-center items-center gap-1">
							<kbd class="kbd kbd-xs">espace</kbd>
							<span>craftar</span>
						</div>
					</button>
					<button
						class="btn btn-soft btn-primary m-0 p-1 text-light text-[0.65rem]"
					>
						<div class="flex justify-center items-center gap-1">
							<kbd class="kbd kbd-xs">t</kbd>
							<span>craftar todos</span>
						</div>
					</button>
					<button
						class="btn btn-soft btn-primary m-0 p-1 text-light text-[0.65rem]"
					>
						<div class="flex justify-center items-center gap-1">
							<kbd class="kbd kbd-xs">R</kbd>
							<span>craftar 10</span>
						</div>
					</button>
				</div>
			</div>
		</section>
	{/if}
</main>

<style>
	.bg-base-200-40 {
		background-color: rgba(11, 9, 8, 0.4);
	}
</style>
