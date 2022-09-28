<script>
	import { globalData } from '$lib/globalStore.js';
	import WithdrawChart from './WithdrawChart.svelte';
	import { t } from '$lib/translations/i18n.js';
	export let withdrawals, currencySymbol;
	$: if (withdrawals.sum === null) {
		withdrawals.sum = 0;
	}
</script>

<div class="withdraw__body white_box d-flex justify-sb mt-2">
	<WithdrawChart withdrawalsList={withdrawals.list} />
	<div class="withdraw">
		<div class="text-3 ">{$t('OVERVIEW_WITHDRAWS_DETAILS')}</div>
		<div class="text-2 mt-1 sum">{currencySymbol}{withdrawals.sum}</div>
		<div class="text-sm">{$t('OVERVIEW_TOTAL')}</div>
	</div>
</div>

<style>
	.sum {
		font-weight: var(--font-weight-bold);
	}
	.withdraw__body {
		padding: 1.5rem 2rem 2rem 2rem;
	}
	.withdraw {
		color: var(--text-secondary-color);
		text-align: right;
	}

	@media only screen and (max-width: 991px) {
		.withdraw__body {
			display: block;
			margin-bottom: 4rem;
			padding-left: 1rem;
			padding-right: 1rem;
		}
	}
	@media only screen and (max-width: 1199px) {
	}
	@media only screen and (min-width: 992px) and (max-width: 1200px) {
		.withdraw {
			max-width: 50%;
		}
	}
</style>
