<script>
	import { fade } from 'svelte/transition';
	import clickOutside from '$lib/functions/clickOutside';
	import { modalClassName } from '../../general-info/profileStore';
	import { notificationList, loading } from '$lib/globalStore';
	import { t } from '$lib/translations/i18n.js';
	import { getGeneralData } from '$lib/api/axios';

	let active = false;

	function show() {
		active = true;
	}

	function hide() {
		active = false;
	}
	let newData = {};

	function handleClickOnTooltip() {
		$modalClassName = 'greenForm';
		hide();
	}

	async function filterByDefault() {
		$loading = true;
		newData = await getGeneralData();
		$notificationList = newData.data.notifications.data;
		$loading = false;
	}

	function sortByDate() {
		$notificationList.sort(function (a, b) {
			return new Date(b.date) - new Date(a.date);
		});
		$notificationList = $notificationList;
	}

	function sortByReadItems() {
		$notificationList.sort(function (a, b) {
			return a.viewed === b.viewed ? 0 : a ? -1 : 1;
		});
		$notificationList = $notificationList;
	}

	function sortByUnreadItems() {
		$notificationList.sort(function (a, b) {
			return a.viewed === b.viewed ? 0 : a ? 1 : -1;
		});
		$notificationList = $notificationList;
	}
</script>

<div on:click={show}>
	<slot />
</div>

{#if active}
	<div
		use:clickOutside
		on:click_outside={hide}
		on:click={() => handleClickOnTooltip()}
		in:fade={{ duration: 200 }}
		class="tooltip text-sm b-radius-8 d-flex justify-sb align-center"
		style="width: {$$props.width}px; left: -{$$props.width + 10}px"
	>
		<ul>
			<li on:click={() => filterByDefault()}>{$t('SETTINGS.ALL_NOTIFICATIONS')}</li>
			<li on:click={() => sortByDate()}>{$t('SETTINGS.DATE_ADDED')}</li>
			<li on:click={() => sortByReadItems()}>{$t('SETTINGS.READ')}</li>
			<li on:click={() => sortByUnreadItems()}>{$t('SETTINGS.UNREAD')}</li>
		</ul>
	</div>
{/if}

<style>
	.tooltip {
		box-shadow: 0px 14px 30px rgba(0, 0, 0, 0.14);
		background: var(--white);
		padding: 1.875rem 1.5rem;
		position: absolute;
		top: -50px;
		z-index: 3;
		width: auto;
		color: var(--black);
	}
	ul li:hover {
		cursor: pointer;
		text-decoration: underline;
	}
	ul li:not(:last-child) {
		margin-bottom: 15px;
	}

	@media only screen and (max-width: 1130px) and (min-width: 991px) {
		.tooltip {
			width: 200px;
			top: -60px;
		}
	}
</style>
