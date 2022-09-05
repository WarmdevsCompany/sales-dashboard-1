<script>
	import Header from '$lib/header/Header.svelte';
	import Sidebar from '$lib/sidebar/Sidebar.svelte';
	import '../../app.css';
	import logoForBg from '$lib/assets/img/logo-big.svg';
	import Loader from '$lib/components/Loader.svelte';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	import { locale } from "$lib/translations/i18n.js";
	import { globalData } from '$lib/globalStore';
	
	// set general data to store
	export let data;
	$globalData = data.general;
  
	let loading = true;

	onMount(() => {
		let lang = localStorage.getItem('lang');
		locale.set(lang || 'english');
		loading = false;
	});
</script>

<svelte:head>
	<link href="https://fonts.googleapis.com/css?family=Gelasio" rel="stylesheet" />
</svelte:head>

<main>
	{#if !loading}
		<Sidebar />
		<div in:fade class="main-content ml-1_25">
			<Header />
			<div class="mt-3">
				<slot />
			</div>
		</div>
		<img in:fade class="logo_bg" src={logoForBg} alt="esi logo" />
	{:else}
		<Loader />
	{/if}
</main>

<style>
	main {
		flex: 1;
		display: flex;
		padding: 0.5rem 1.25rem;
		width: 100%;
		margin: 0 auto;
		min-height: 100vh;
		box-sizing: border-box;
	}
	.main-content {
		width: 100%;
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
			flex-wrap: wrap;
		}
		.main-content {
			margin: 0;
		}
	}
</style>
