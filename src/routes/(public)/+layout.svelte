<script>
	import greenLogo from '$lib/assets/img/logo-green.svg';
	import Modal, { getModal } from '$lib/components/Modal.svelte';
	import Header from '$lib/header/Header.svelte';
	import Sidebar from '$lib/sidebar/Sidebar.svelte';
	import '../../app.css';
	import logoForBg from '$lib/assets/img/logo-big.svg';
	import { t } from '$lib/translations/i18n.js';
	import Loader from '$lib/components/Loader.svelte';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import {
		notificationList,
		globalData,
		notificationSettings,
		selectedNotification
	} from '$lib/globalStore';

	// set general data to store
	export let data;
	$globalData = data.general;
	console.log($globalData)

	let loading = true;

	onMount(async () => {
		if ($globalData) {
			loading = false;
			$notificationList = data.general.data.notifications.data;
			$notificationSettings = data.general.data.notificationSettings;
		}
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
		<Modal id="notification">
			<div class="notification_modal text-center">
				<img src={greenLogo} alt="esi logo img" />
				<div class="modal_head_medium mt-2">
					{$selectedNotification.head}
				</div>
				<div class="text-4 mt-1">{$selectedNotification.body}</div>
				<div class="mt-2 d-flex justify-cc">
					<button class="btn confirm " on:click={() => getModal('notification').close()}
						>{$t('CLOSE')}</button
					>
				</div>
			</div>
		</Modal>
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
	.notification_modal {
		padding-top: 6rem;
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
	@media only screen and (min-width: 992px) {
		.main-content {
			width: calc(100% - 237px - 1.25rem);
		}
	}
</style>
