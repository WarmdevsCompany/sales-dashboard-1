<script>
	import { onMount } from 'svelte';
	import Preloader from '../../../../lib/components/Preloader.svelte';
	const sleep = (ms) => new Promise((f) => setTimeout(f, ms));
	let loading = false;

	onMount(async () => {
		await sleep(1); // simulate network delay
		(await import('./bundle.css')).default;
		(await import('./bundle')).default;
		loading = false;
	});
</script>

<div class="wrapper">
	<div id="app" />
	{#if loading}
		<div class="absolute_loader">
			<Preloader loaderWidth={10} loaderHeight={10} borderWidth={0.8} />
		</div>
	{/if}
</div>

<style>
	.wrapper {
		padding-top: 30px;
		position: relative;
	}
	.absolute_loader {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: #fff;
		z-index: 999;
		height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
