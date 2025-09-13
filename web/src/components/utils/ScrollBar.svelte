<!-- CustomScroll.svelte -->
<script lang="ts">
	type ITheme = "gamespot" | "dark" | "light";

	export let height = "400px";
	export let width = "100%";
	export let theme: ITheme = "gamespot";

	// Função para gerar estilos inline baseados no tema
	function getScrollbarStyles(theme: ITheme) {
		const themes = {
			gamespot: {
				thumb: "#e52629",
				track: "#2c2c2c",
				thumbHover: "#ff3b3f",
			},
			dark: {
				thumb: "#555",
				track: "#1a1a1a",
				thumbHover: "#777",
			},
			light: {
				thumb: "#ccc",
				track: "#f1f1f1",
				thumbHover: "#aaa",
			},
		};

		const colors = themes[theme] || themes.gamespot;

		return `
      scrollbar-width: thin;
      scrollbar-color: ${colors.thumb} ${colors.track};
    `;
	}
</script>

<div class="scroll-container" style="width: {width}; height: {height}">
	<div
		class="scroll-inner"
		style="{getScrollbarStyles(theme)} 
           --scroll-thumb: {theme === 'gamespot'
			? '#e52629'
			: theme === 'dark'
				? '#555'
				: '#ccc'};
           --scroll-track: {theme === 'gamespot'
			? '#2c2c2c'
			: theme === 'dark'
				? '#1a1a1a'
				: '#f1f1f1'};
           --scroll-thumb-hover: {theme === 'gamespot'
			? '#ff3b3f'
			: theme === 'dark'
				? '#777'
				: '#aaa'};"
	>
		<div class="scroll-content">
			<slot></slot>
		</div>
	</div>
</div>

<style>
	.scroll-container {
		overflow: auto;
		position: relative;
	}

	.scroll-inner {
		width: 100%;
		height: 100%;
		overflow: auto;
		padding-right: 5px;
	}

	.scroll-content {
		padding: 10px;
	}

	/* Estilos base para WebKit (Chrome, Safari) */
	.scroll-inner::-webkit-scrollbar {
		width: 14px;
	}

	.scroll-inner::-webkit-scrollbar-track {
		background: var(--scroll-track, #2c2c2c);
		border-radius: 0px;
	}

	.scroll-inner::-webkit-scrollbar-thumb {
		background: var(--scroll-thumb, #e52629);
		border-radius: 0px;
		border: 3px solid var(--scroll-track, #2c2c2c);
	}

	.scroll-inner::-webkit-scrollbar-thumb:hover {
		background: var(--scroll-thumb-hover, #ff3b3f);
	}
</style>
