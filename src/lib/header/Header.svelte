<script>
	import allSumIcon from '$lib/assets/img/money.svg';
	import monthlyContributionIcon from '$lib/assets/img/contribution-icon.svg';
	import nextContributionIcon from '$lib/assets/img/next-contribution.svg';
	import StatusIcon from '$lib/components/icons/StatusIcon.svelte';
	import Status from '$lib/components/Status.svelte';
	import Notification from '$lib/components/icons/Notification.svelte';
	import ThreeDotsIcon from '$lib/components/icons/ThreeDotsIcon.svelte';
	import MediaQuery from '$lib/components/MediaQuery.svelte';
	import { globalData } from '$lib/globalStore';
	import NotificationsTooltip from '../components/NotificationsTooltip.svelte';
	import HeaderPagesTooltip from '../components/HeaderPagesTooltip.svelte';
	export let currencySymbol = $globalData.data.currencySymbol,
		allMoney = '7,437',
		monthlyContribution = 500,
		nextContributionDate = '01 Jul 22';
</script>

<header class="d-flex justify-sb b-radius-8 align-center text-white">
	<div class="d-flex justify-cc header__left--column">
		<div class="contribution__data d-flex justify-sb relative">
			<div class="contribution__data--item d-flex align-top text-big">
				<div class="d-flex align-center">
					<img src={allSumIcon} alt="all money" />
					{currencySymbol}{allMoney}
				</div>

				<StatusIcon bgColor="white" />
			</div>
			<div class="contribution__data--item d-flex align-top text-big">
				<div class="d-flex align-center">
					<img src={monthlyContributionIcon} alt="all money" />
					{currencySymbol}{monthlyContribution}
				</div>

				<StatusIcon bgColor="white" />
			</div>
			<div class="contribution__data--item d-flex align-top text-big">
				<div class="d-flex align-center">
					<img src={nextContributionIcon} alt="all money" />
					{nextContributionDate}
				</div>

				<StatusIcon bgColor="white" />
			</div>
			<div class="contribution__data--item">
				<Status status="active" iconColor="white" />
			</div>
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
	.contribution__data--item img {
		margin-right: 0.5rem;
	}
	.contribution__data--item > :first-child {
		margin-right: 0.5rem;
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
		.contribution__data--item {
			width: 100%;
			margin-bottom: 1rem;
		}
		.contribution__data--item:last-child {
			position: absolute;
			right: 0;
			left: auto;
			width: auto;
			margin-top: 1rem;
		}
	}
</style>
