<script>
	import FilterPanel from './filters/FilterPanel.svelte';
	import NotificationItem from './notification-item/NotificationItem.svelte';
	import { notificationList } from './notificationsStore';
	import { fade } from 'svelte/transition';
	import { t } from '$lib/translations/i18n.js';

	//mocks data
	$notificationList = [
		{
			id: 1,
			name: 'Payment Sussessfull',
			description:
				'Your December bi-monthly contribution was successfully charged. Go to your Wallet to monitor the amount or money you saved',
			date: 'Jan 12th, 2022',
			status: 'unreaded'
		},
		{
			id: 2,
			name: 'Referral Program',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mus aliquet in et quam non morbiaenean. Diam 1 ipsum pellentesque fermentum consequat varius dui, aliquet.',
			date: 'Jan 12th, 2022',
			status: 'unreaded'
		},
		{
			id: 3,
			name: 'Payment Sussessfull',
			description:
				'Your December bi-monthly contribution was successfully charged. Go to your Wallet to monitor the amount or money you saved',
			date: 'Jan 12th, 2022',
			status: 'readed'
		},
		{
			id: 4,
			name: 'Save the Planet!',
			description:
				'Your December bi-monthly contribution was successfully charged. Go to your Wallet to monitor the amount or money you saved',
			date: 'Jan 12th, 2022',
			status: 'readed'
		},
		{
			id: 5,
			name: 'Payment Sussessfull',
			description:
				'Your December bi-monthly contribution was successfully charged. Go to your Wallet to monitor the amount or money you saved',
			date: 'Jan 12th, 2022',
			status: 'readed'
		},
		{
			id: 6,
			name: 'Referral Program',
			description:
				'Your December bi-monthly contribution was successfully charged. Go to your Wallet to monitor the amount or money you saved',
			date: 'Jan 12th, 2022',
			status: 'readed'
		}
	];
</script>

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
