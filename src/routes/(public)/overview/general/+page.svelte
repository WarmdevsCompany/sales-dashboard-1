<script>
	import { generateYearsArray } from '$lib/functions/generateYearsArray.js';
	import { scrollToTop } from '$lib/functions/scrollToTop.js';
	import GeneralPlan from './GeneralPlan.svelte';
	import MembershipMain from './membership-chart/MembershipMain.svelte';
	import SaveProjectionChart from './projection-chart/SaveProjectionChart.svelte';
	import WithdrawMain from './withdraw-chart/WithdrawMain.svelte';
	import { globalData } from '$lib/globalStore';
	import { t } from '$lib/translations/i18n.js';

	let currentAmount, previousAmount, currentTrajectory = [0],  previousTrajectory = [0];
	const saving_projection = $globalData.data.saving_projection;
	const yearsArray = generateYearsArray(6);

	saving_projection.forEach((item) => {
		if (item.active) {
			currentAmount = item.amount;
		} else {
			previousAmount = item.amount;
		}
	});

	// generate currentTrajectory
	let currentAmountCounter = currentAmount * 12;
	let previousAmountCounter = previousAmount * 12;

	if (previousAmount || previousAmount != null) {
		yearsArray.forEach(() => {
			currentTrajectory = [...currentTrajectory, currentAmountCounter];
			currentAmountCounter = currentAmountCounter + currentAmountCounter;

			previousTrajectory = [...previousTrajectory, previousAmountCounter];
			previousAmountCounter = previousAmountCounter + previousAmountCounter;
		});
	} else {
		yearsArray.forEach(() => {
			currentTrajectory = [...currentTrajectory, currentAmountCounter];
			currentAmountCounter = currentAmountCounter + currentAmountCounter;
		});
		previousTrajectory = false;
	}

	scrollToTop();
</script>

<svelte:head>
	<title>{$t('GENERAL')}</title>
	<meta name="description" content="General page" />
</svelte:head>

<div class="grid-3 mb-2">
	<GeneralPlan
		className="safe"
		planName={$t('SAFE_PLAN_BIG')}
		currencySymbol={$globalData?.data?.currency.symbol}
		contribution={$globalData.data.contributions.safePlan.contribution}
		revenue={$globalData.data.contributions.safePlan.revenue}
		totalSafe={$globalData.data.contributions.safePlan.totalSafe}
	/>
	<GeneralPlan
		className="adventure"
		planName={$t('ADVENTURE_BIG')}
		currencySymbol={$globalData?.data?.currency.symbol}
		contribution={$globalData.data.contributions.adventurePlan.contribution}
		revenue={$globalData.data.contributions.adventurePlan.revenue}
		totalSafe={$globalData.data.contributions.adventurePlan.totalSafe}
	/>
	<GeneralPlan
		className="founder"
		planName={$t('FOUNDER_BIG')}
		currencySymbol={$globalData?.data?.currency.symbol}
		contribution={$globalData.data.contributions.founderPlan.contribution}
		revenue={$globalData.data.contributions.founderPlan.revenue}
		totalSafe={$globalData.data.contributions.founderPlan.totalSafe}
	/>
</div>
<div class="grid-2">
	<div class="saving-projection p-2 b-radius-8 box_shadow-medium">
		<div class="saving-projection-wrapper">
			<SaveProjectionChart
				{yearsArray}
				currentTraject={currentTrajectory}
				prevTraject={previousTrajectory}
			/>
		</div>
	</div>
	<div class="membership-status p-2  b-radius-8 box_shadow-medium">
		<MembershipMain
			seedVal={$globalData.data.membershipStatus.seed}
			seedTotal={$globalData.data.membershipStatus.seedTotal}
			eucalyptusVal={$globalData.data.membershipStatus.eucalyptus}
			eucalyptusTotal={$globalData.data.membershipStatus.eucalyptusTotal}
			sequoiaVal={$globalData.data.membershipStatus.sequoia}
			sequoiaTotal={$globalData.data.membershipStatus.sequoiaTotal}
			status={$globalData.data.membershipStatus.status}
			sinceDate={$globalData.data.membershipStatus.createDate}
		/>
	</div>
</div>
<WithdrawMain
	withdrawals={$globalData.data.withdrawals}
	currencySymbol={$globalData.data.currency.symbol}
/>

<style>
	.saving-projection {
		background: #287393;
		min-height: 391px;
		overflow: hidden;
	}
	.membership-status {
		background: rgba(95, 133, 117, 0.14);
		min-height: 391px;
		overflow: hidden;
	}
	@media only screen and (max-width: 1199px) {
		.saving-projection,
		.membership-status {
			padding: 2rem 1rem;
		}
	}
</style>
