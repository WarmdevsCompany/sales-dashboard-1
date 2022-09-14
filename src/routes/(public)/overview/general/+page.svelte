<script>
	import GeneralPlan from './GeneralPlan.svelte';
	import MembershipMain from './membership-chart/MembershipMain.svelte';
	import SaveProjectionChart from './projection-chart/SaveProjectionChart.svelte';
	import WithdrawMain from './withdraw-chart/WithdrawMain.svelte';
	import { globalData } from '$lib/globalStore';
	import { t } from '$lib/translations/i18n.js';
</script>

<svelte:head>
	<title>{$t('GENERAL')}</title>
	<meta name="description" content="General page" />
</svelte:head>

<div class="grid-3 mb-2">
	<GeneralPlan
		className="safe"
		planName={$t('SAFE_PLAN_BIG')}
		currencySymbol={$globalData?.data?.currencySymbol}
		contribution={$globalData.data.contributions.safePlan.contribution}
		revenue={$globalData.data.contributions.safePlan.revenue}
		totalSafe={$globalData.data.contributions.safePlan.totalSafe}
	/>
	<GeneralPlan
		className="adventure"
		planName={$t('ADVENTURE_BIG')}
		currencySymbol={$globalData?.data?.currencySymbol}
		contribution={$globalData.data.contributions.adventurePlan.contribution}
		revenue={$globalData.data.contributions.adventurePlan.revenue}
		totalSafe={$globalData.data.contributions.adventurePlan.totalSafe}
	/>
	<GeneralPlan
		className="founder"
		planName={$t('FOUNDER_BIG')}
		currencySymbol={$globalData?.data?.currencySymbol}
		contribution={$globalData.data.contributions.founderPlan.contribution}
		revenue={$globalData.data.contributions.founderPlan.revenue}
		totalSafe={$globalData.data.contributions.founderPlan.totalSafe}
	/>
</div>
<div class="grid-2">
	<div class="saving-projection p-2 b-radius-8 box_shadow-medium">
		<div class="saving-projection-wrapper">
			<SaveProjectionChart
				yearsArray={[2022, 2023, 2024, 2025, 2026, 2027]}
				currentTraject={[0, 1200, 13437, 19437, 23437, 30437]}
				prevTraject={[0, 282, 502, 635, 24437, 33437]}
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
		/>
	</div>
</div>
<WithdrawMain />

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
