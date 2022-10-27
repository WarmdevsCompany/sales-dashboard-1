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
	let loading = true;
	export let data;

	onMount(async () => {
		$globalData = data.general
		if ($globalData ) {
			console.log($globalData);
			loading = false;
			$notificationList = $globalData.data.notifications.data;
			$notificationSettings = $globalData.data.notificationSettings;
		}
	});
</script>

<svelte:head>
	<link href="https://fonts.googleapis.com/css?family=Gelasio" rel="stylesheet" />
	<meta name="viewport" content="width=device-width; initial-scale=1.0;" />
</svelte:head>

<main>
	{#if !loading}
		<div class="sidebar_wrapper">
			<Sidebar />
		</div>

		<div in:fade class="main-content">
			<div class="header_wrapper">
				<Header
					currencySymbol={$globalData.data.currency.symbol}
					allMoney={$globalData.data.currentSubscription?.balance || 0}
					monthlySubscriptionText={$globalData.data.currentSubscription?.subscriptionText || 0}
					nextContributionDate={$globalData.data.currentSubscription?.nextDate || 0}
					status={$globalData.data.currentSubscription?.status}
					statusId={$globalData.data.currentSubscription?.statusId}
				/>
			</div>

			<div class="main-body">
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
		padding: 0.5rem 0rem 0 1.25rem;
		width: 100%;
		margin: 0 auto;
		min-height: 100vh;
		box-sizing: border-box;
		background: var(--body--bg);
	}
	.sidebar_wrapper {
		padding-bottom: 0.5rem;
	}
	.main-content {
		width: 100%;
	}
	.main-body {
		padding-top: 2rem;
		max-height: calc(100vh - 75px - 0.5rem);
		overflow: auto;
		padding-bottom: 1rem;
	}
	.header_wrapper,
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
	.notification_modal {
		padding-top: 6rem;
	}
	@media only screen and (max-width: 991px) {
		.logo_bg {
			display: none;
		}
		main {
			display: block;
			padding-right: 1.25rem;
		}
		.main-body {
			max-height: 100%;
			overflow: visible;
		}
		.sidebar_wrapper {
			width: 100%;
		}
		.main-content {
			margin: 0;
		}
		.header_wrapper,
		.main-body {
			padding-right: 0rem;
			padding-left: 0rem;
		}
	}
	@media only screen and (min-width: 992px) {
		.main-content {
			width: calc(100% - 237px);
		}
	}
</style>
