<script lang="ts">
	import VisibilityProvider from "$lib/providers/VisibilityProvider.svelte";
</script>

<VisibilityProvider>
	<main data-theme="coffee">
		<h1 class="text-3xl font-bold underline">
			Main template with tailwind and daisyUI
		</h1>
	</main>
</VisibilityProvider>

<style>
	main {
		height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;
	}
</style>
