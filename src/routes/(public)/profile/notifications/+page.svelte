<script>
	import FilterPanel from './filters/FilterPanel.svelte';
	import NotificationItem from './notification-item/NotificationItem.svelte';
	import { notificationList, loading } from '$lib/globalStore';
	import { t } from '$lib/translations/i18n.js';
	import Preloader from '../../../../lib/components/Preloader.svelte';
</script>

<svelte:head>
	<title>{$t('NOTIFICATIONS')}</title>
	<meta name="description" content={$t('NOTIFICATIONS')} />
</svelte:head>

<div class="d-flex justify-sb flex-wrap align-center relative nowrap">
	<div class="text-3 title">{$t('SETTINGS.NOTIFICATIONS_AND_NEWS')}</div>
	<FilterPanel />
</div>
{#if $loading}
	<div class="notifications__empty box_shadow-medium mt-1_25 b-radius-8">
		<Preloader loaderWidth={2} loaderHeight={2} borderWidth={0.2} />
	</div>
{:else if !$notificationList.length}
	<div class="notifications__empty box_shadow-medium mt-1_25 b-radius-8">
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
