<script>
	import '../../app.css';
	import Loader from '$lib/components/Loader.svelte';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import { globalData } from '$lib/globalStore';
	import BlockedHeader from './header/BlockedHeader.svelte';
	let loading = true;
	export let data;
	const { general } = data;

	onMount(() => {
		$globalData = general;
		if ($globalData) {
			loading = false;
		}
	});
</script>

<svelte:head>
	<link href="https://fonts.googleapis.com/css?family=Gelasio" rel="stylesheet" />
	<meta name="viewport" content="width=device-width; initial-scale=1.0;" />
</svelte:head>

<main>
	{#if !loading}
		<div class="main-body">
			<BlockedHeader
				status={$globalData.data.currentSubscription.status}
				statusId={$globalData.data.currentSubscription.statusId}
			/>
			<slot />
		</div>

		<img
			in:fade
			class="logo_bg"
			src="https://assets-global.website-files.com/6089254f4962ce24139217ac/62fb58aa7d076b85fe8a58bf_WarmDevs_Logo_Horizontal.svg"
			alt="esi logo"
		/>
	{:else}
		<Loader />
	{/if}
</main>

<style>
	main {
		flex: 1;
		display: flex;
		width: 100%;
		margin: 0 auto;
		min-height: 100vh;
		box-sizing: border-box;
		background: var(--body--bg);
	}

	.main-body {
		padding-top: 0.5rem;
		overflow: auto;
		padding-bottom: 1rem;
		width: 100%;
	}

	.main-body {
		padding-right: 1.25rem;
		padding-left: 1.25rem;
	}
	/* Hide scrollbar for Chrome, Safari and Opera */
	.main-body::-webkit-scrollbar {
		display: none;
	}

	/* Hide scrollbar for IE, Edge and Firefox */
	.main-body {
		-ms-overflow-style: none; /* IE and Edge */
		scrollbar-width: none; /* Firefox */
	}
	.logo_bg {
		position: fixed;
		top: 270px;
		left: 68px;
		z-index: -1;
	}

	@media only screen and (max-width: 991px) {
		.logo_bg {
			display: none;
		}
		main {
			display: block;
		}
		.main-body {
			max-height: 100%;
			overflow: visible;
		}
	}
</style>
