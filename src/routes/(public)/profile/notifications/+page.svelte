<script>
	import FilterPanel from './filters/FilterPanel.svelte';
	import NotificationItem from './notification-item/NotificationItem.svelte';
	import { notificationList } from './notificationsStore';
	import { fade } from 'svelte/transition';
	import { t } from '$lib/translations/i18n.js';

	export let data;

	//data from globalStore
	$notificationList = data.general.data.notifications.data;
</script>

<svelte:head>
	<title>{$t('NOTIFICATIONS')}</title>
	<meta name="description" content={$t('NOTIFICATIONS')} />
</svelte:head>

<div class="d-flex justify-sb flex-wrap align-center relative nowrap">
	<div class="text-3 title">{$t('SETTINGS.NOTIFICATIONS_AND_NEWS')}</div>
	<FilterPanel />
</div>

{#if !$notificationList.length}
	<div in:fade class="notifications__empty box_shadow-medium mt-1_25 b-radius-8">
		{$t('SETTINGS.NO_NOTIFICATIONS')}
	</div>
{:else}
	<ul id="notifications">
		{#each $notificationList as item}
			<NotificationItem objAttributes={item} />
		{/each}
	</ul>
{/if}

<style>
	.notifications__empty {
		padding: 24px 32px;
		background-color: var(--white);
		margin-bottom: 10px;
	}
	@media only screen and (max-width: 991px) {
		.title {
			position: absolute;
			top: 20px;
			padding-right: 80px;
			font-size: var(--text-font-small);
		}
		ul {
			margin-bottom: 4rem;
		}
	}
	@media only screen and (min-width: 992px) and (max-width: 1199px) {
		.nowrap {
			flex-wrap: nowrap;
		}
	}
</style>
