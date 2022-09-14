<script>
	import allSumIcon from '$lib/assets/img/money.svg';

	import StatusIcon from '$lib/components/icons/StatusIcon.svelte';
	import Status from '$lib/components/Status.svelte';
	import Notification from '$lib/components/icons/Notification.svelte';
	import ThreeDotsIcon from '$lib/components/icons/ThreeDotsIcon.svelte';
	import MediaQuery from '$lib/components/MediaQuery.svelte';
	import { globalData } from '$lib/globalStore';
	import NotificationsTooltip from '../components/NotificationsTooltip.svelte';
	import HeaderPagesTooltip from '../components/HeaderPagesTooltip.svelte';
	import { createPopperActions } from 'svelte-popperjs';
	import WalletValue from './header-items/WalletValue.svelte';
	import NextContribution from './header-items/NextContribution.svelte';
	import NextContrDate from './header-items/NextContrDate.svelte';
import SubscriptionStatus from './header-items/SubscriptionStatus.svelte';

	let currencySymbol = $globalData.data.currencySymbol,
		allMoney = $globalData.data.currentSubscription.balance,
		monthlySubscriptionText = $globalData.data.currentSubscription.subscriptionText,
		nextContributionDate = $globalData.data.currentSubscription.nextDate.substring(0, 10);
</script>

<header class="d-flex justify-sb b-radius-8 align-center text-white">
	<div class="d-flex justify-cc header__left--column">
		<div class="contribution__data d-flex justify-sb relative">
			<WalletValue {allMoney} {currencySymbol} />
			<NextContribution {currencySymbol} {monthlySubscriptionText} />
			<NextContrDate {nextContributionDate} />
			<SubscriptionStatus status={$globalData.data.currentSubscription.status.toLowerCase()}/>
		</div>
	</div>
	<MediaQuery query="(min-width: 992px)" let:matches>
		{#if matches}
			<div class="d-flex header__rigth--column">
				<div class="relative">
					<NotificationsTooltip width={300}>
						<div class="mr-1 pointer">
							<Notification bgColor="white" />
						</div>
					</NotificationsTooltip>
				</div>

				<div class="relative">
					<HeaderPagesTooltip
						><div class="pointer"><ThreeDotsIcon bgColor="white" /></div></HeaderPagesTooltip
					>
				</div>
			</div>
		{/if}
	</MediaQuery>
</header>

<style>
	header {
		box-shadow: 0px 6px 14px rgba(3, 22, 2, 0.14), 0px 3px 6px rgba(3, 22, 2, 0.24);
		background: var(--green-dark-color);
		padding: 1.375rem 2rem 1.437rem 7.8125rem;
	}
	.header__left--column {
		width: 100%;
		max-width: 900px;
		margin-right: auto;
	}
	.header__rigth--column {
		margin-left: 5vw;
	}
	.contribution__data {
		width: 100%;
		max-width: 792px;
	}
	:global(.contribution__data--item img) {
		margin-right: 0.5rem;
	}
	:global(.contribution__data--item > :first-child) {
		margin-right: 0.5rem;
	}
	
	:global(.header__tooltip) {
		padding: 0.625rem 0.625rem 0.625rem 0.625rem;
		background: var(--white);
		z-index: 10;
		color: #5f5f5f;
		min-width: 150px;
		font-weight: var(--font-weight-normal);
		text-align: center;
		box-shadow: 0px 25px 35px rgba(0, 0, 0, 0.15);
	}

	:global(.header__tooltip::after) {
		content: '';
		position: absolute;
		top: -5px;
		right: 45%;
		border-radius: 2px;
		transform: rotate(45deg);
		border-top: 7px solid white;
		border-bottom: 7px solid transparent;
		border-left: 7px solid white;
		border-right: 7px solid transparent;
	}

	@media only screen and (max-width: 1280px) {
		header {
			padding: 1.375rem 1.5rem 1.437rem 4.8125rem;
		}
	}
	@media only screen and (max-width: 991px) {
		header {
			padding: 1rem;
			flex-wrap: wrap;
		}
		.contribution__data {
			flex-wrap: wrap;
		}
		:global(.contribution__data--item) {
			width: 100%;
			margin-bottom: 1rem;
		}
		:global(.contribution__data--item:last-child) {
			position: absolute;
			right: 0;
			left: auto;
			width: auto;
			margin-top: 1rem;
		}
	}
	@media only screen and (min-width: 992px) and (max-width: 1199px) {
		header {
			padding: 1.375rem 1.5rem;
		}
	}
</style>
