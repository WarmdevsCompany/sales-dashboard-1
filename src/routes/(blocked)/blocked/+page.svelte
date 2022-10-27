<script>
	import { generateYearsArray } from '$lib/functions/generateYearsArray.js';
	import { scrollToTop } from '$lib/functions/scrollToTop.js';
	import GeneralPlan from './GeneralPlan.svelte';
	import MembershipMain from './membership-chart/MembershipMain.svelte';
	import SaveProjectionChart from './projection-chart/SaveProjectionChart.svelte';
	import WithdrawMain from './withdraw-chart/WithdrawMain.svelte';
	import { globalData } from '$lib/globalStore';
	import { t } from '$lib/translations/i18n.js';
	import BlockedModal from './BlockedModal.svelte';

	let currentAmount,
		previousAmount,
		currentTrajectory = [0],
		previousTrajectory = [0];
	const saving_projection = [{ active: true, amount: 500 }];
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

	if (previousAmount && previousAmount != null && previousAmount != currentAmount) {
		yearsArray.forEach(() => {
			currentTrajectory = [...currentTrajectory, currentAmountCounter];
			currentAmountCounter = currentAmountCounter + currentAmount * 12;

			previousTrajectory = [...previousTrajectory, previousAmountCounter];
			previousAmountCounter = previousAmountCounter + previousAmount * 12;
		});
	} else {
		yearsArray.forEach(() => {
			currentTrajectory = [...currentTrajectory, currentAmountCounter];
			currentAmountCounter = currentAmountCounter + currentAmount * 12;
		});
		previousTrajectory = false;
	}

	scrollToTop();
</script>

<svelte:head>
	<title>{$t('GENERAL')}</title>
	<meta name="description" content="General page" />
</svelte:head>
<div class="relative mt-3">
	<div class="grid-3 mb-2 ">
		<GeneralPlan
			className="safe"
			planName={$t('SAFE_PLAN_BIG')}
			currencySymbol="$"
			contribution="500"
			revenue="50"
			totalSafe="550"
		/>
		<GeneralPlan
			className="adventure"
			planName={$t('ADVENTURE_BIG')}
			currencySymbol="$"
			contribution="500"
			revenue="50"
			totalSafe="550"
		/>
		<GeneralPlan
			className="founder"
			planName={$t('FOUNDER_BIG')}
			currencySymbol="$"
			contribution="500"
			revenue="50"
			totalSafe="550"
		/>
	</div>
	<div class="grid-2">
		<div class="saving-projection p-2 b-radius-8 box_shadow-medium">
			<div class="saving-projection-wrapper">
				<SaveProjectionChart
					{yearsArray}
					currentTraject={currentTrajectory}
					prevTraject={previousTrajectory}
					currencySymbol="$"
				/>
			</div>
		</div>
		<div class="membership-status p-2  b-radius-8 box_shadow-medium">
			<MembershipMain
				seedVal="0"
				seedTotal="0"
				eucalyptusVal="0"
				eucalyptusTotal="0"
				sequoiaVal="0"
				sequoiaTotal="0"
				status="0"
				sinceDate="0"
			/>
		</div>
	</div>
	<WithdrawMain withdrawals={null} currencySymbol="$" />
	<BlockedModal statusId={$globalData.data.currentSubscription.statusId} />
</div>

<style>
	.relative{
	 padding: 2px;
	}
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
