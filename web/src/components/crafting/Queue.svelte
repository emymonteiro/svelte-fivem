<script lang="ts">
	import Icon from "@iconify/svelte";

	const queue = [
		{ id: 1, name: "Espada de aço", img: "espada_aço.webp", progress: 50 },
		{
			id: 2,
			name: "Escudo de madeira",
			img: "espada_aço.webp",
		},
		{ id: 3, name: "Arco longo", img: "espada_aço.webp" },
		{ id: 4, name: "Arco longo", img: "espada_aço.webp" },
		{ id: 5, name: "Arco longo", img: "espada_aço.webp" },
		{ id: 6, name: "Arco longo", img: "espada_aço.webp" },
		{ id: 7, name: "Arco longo", img: "espada_aço.webp" },
		{ id: 8, name: "Arco longo", img: "espada_aço.webp" },
		{ id: 9, name: "Arco longo", img: "espada_aço.webp" },
		{ id: 10, name: "Arco longo", img: "espada_aço.webp" },
		{ id: 11, name: "Arco longo", img: "espada_aço.webp" },
		{ id: 12, name: "Arco longo", img: "espada_aço.webp" },
		{ id: 13, name: "Arco longo", img: "espada_aço.webp" },
		{ id: 14, name: "Arco longo", img: "espada_aço.webp" },
		{ id: 15, name: "Arco longo", img: "espada_aço.webp" },
		{ id: 16, name: "Arco longo", img: "espada_aço.webp" },
		{ id: 17, name: "Arco longo", img: "espada_aço.webp" },
		{ id: 18, name: "Arco longo", img: "espada_aço.webp" },
		{ id: 19, name: "Arco longo", img: "espada_aço.webp" },
		{ id: 20, name: "Arco longo", img: "espada_aço.webp" },
	];
</script>

<main class="flex flex-col max-w-sm h-full p-8 overflow-hidden">
	<section class="flex flex-col w-full overflow-hidden">
		<ul
			class="relative list bg-primary shadow-md border-x-2 border-secondary overflow-auto z-10"
		>
			{#each queue as item (item.id)}
				<div
					class:sticky={item.progress !== undefined}
					class:top-0={item.progress !== undefined}
					class:bg-primary={item.progress !== undefined}
					class:z-10={item.progress !== undefined}
				>
					{#if item.id === queue[0].id}
						<li class="p-4 pb-2 text-xs tracking-wide">
							Craftings em andamento
						</li>
					{/if}

					<li class="list-row flex flex-col">
						<div class="flex w-full justify-between items-center">
							<div class="flex items-center gap-3">
								<img class="size-8" src={item.img} alt="img" />
								<div>{item.name}</div>
							</div>
							<div>
								<button
									class="btn btn-soft btn-primary btn-square btn-ghost"
								>
									<Icon
										class="size-5"
										icon="game-icons:trash-can"
									/>
								</button>
							</div>
						</div>
						{#if item.progress !== undefined}
							<progress
								class="progress progress-secondary w-full"
								value={item.progress}
								max="100"
							></progress>
						{/if}
					</li>
				</div>
			{/each}
		</ul>
		<div
			class="sticky bottom-[0] p-4 bg-primary w-full drop-shadow-2md drop-shadow-highlight"
		>
			{#if queue[0]}
				<div class="mb-2 text-[0.6rem] opacity-60 tracking-wide">
					Craftando item: <strong
						class="text-xs text-neutral-content text-shadow-md text-shadow-highlight"
						>{queue[0].name}</strong
					>
				</div>
			{/if}
			<span
				class="text-light text-[0.6rem] opacity-60 tracking-wide mb-2 block"
			>
				Processando {queue.length} item{queue.length !== 1 ? "s" : ""} na
				fila
			</span>
			<button
				class="btn btn-soft btn-primary m-0 p-1 text-accent text-[0.65rem] w-full"
			>
				<div class="flex justify-center items-center gap-1">
					<kbd class="kbd kbd-xs">Q</kbd>
					<span>Limpar fila</span>
				</div>
			</button>
		</div>
	</section>
</main>
