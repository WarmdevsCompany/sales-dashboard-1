
<script>
	import GeneralPlan from './GeneralPlan.svelte';
	import MembershipMain from './membership-chart/MembershipMain.svelte';
	import SaveProjectionChart from './projection-chart/SaveProjectionChart.svelte';
	import WithdrawMain from './withdraw-chart/WithdrawMain.svelte'
	import {globalData} from '$lib/globalStore'
</script>

<svelte:head>
	<title>General</title>
	<meta name="description" content="General page" />
</svelte:head>

<div class="grid-3 mb-2">
	<GeneralPlan
		className="safe"
		planName="SAFE PLAN"
		currencySymbol={$globalData.data.currencySymbol}
		contribution={$globalData.data.contributions.safePlan.contribution}
		revenue={$globalData.data.contributions.safePlan.revenue}
		totalSafe={$globalData.data.contributions.safePlan.totalSafe}
	/>
	<GeneralPlan
		className="adventure"
		planName="Adventure PLAN"
		currencySymbol={$globalData.data.currencySymbol}
		contribution={$globalData.data.contributions.adventurePlan.contribution}
		revenue={$globalData.data.contributions.adventurePlan.revenue}
		totalSafe={$globalData.data.contributions.adventurePlan.totalSafe}
	/>
	<GeneralPlan
		className="founder"
		planName="Founder PLAN"
		currencySymbol={$globalData.data.currencySymbol}
		contribution={$globalData.data.contributions.founderPlan.contribution}
		revenue={$globalData.data.contributions.founderPlan.revenue}
		totalSafe={$globalData.data.contributions.founderPlan.totalSafe}
	/>
</div>
<div class="grid-2">
	<div class="saving-projection p-2 b-radius-8 box_shadow-medium">
		<div class="saving-projection-wrapper">
			<SaveProjectionChart yearsArray={[2022, 2023, 2024, 2025, 2026, 2027]} currentTraject={[0, 1200, 13437, 19437, 23437, 30437]} prevTraject={[0, 282, 502, 635, 24437, 33437]}/>
		</div>
	</div>
	<div class="membership-status p-2  b-radius-8 box_shadow-medium">
		<MembershipMain seedVal={33} seedTotal={400}  eucalyptusVal={67} eucalyptusTotal={800} sequoiaVal={0} sequoiaTotal={0}/>
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
</style>
