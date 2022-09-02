
<script>
	import GeneralPlan from './GeneralPlan.svelte';
	import MembershipMain from './membership-chart/MembershipMain.svelte';
	import SaveProjectionChart from './projection-chart/SaveProjectionChart.svelte';
	import WithdrawMain from './withdraw-chart/WithdrawMain.svelte'
	export let data;
	console.log(data)
</script>

<svelte:head>
	<title>General</title>
	<meta name="description" content="General page" />
</svelte:head>

<div class="grid-3 mb-2">
	<GeneralPlan
		className="safe"
		planName="SAFE PLAN"
		currencySymbol="$"
		contribution="2,500"
		revenue="126"
		totalSafe="2,626"
	/>
	<GeneralPlan
		className="adventure"
		planName="SAFE PLAN"
		currencySymbol="$"
		contribution="2,500"
		revenue="126"
		totalSafe="2,626"
	/>
	<GeneralPlan
		className="founder"
		planName="SAFE PLAN"
		currencySymbol="$"
		contribution="2,500"
		revenue="126"
		totalSafe="2,626"
	/>
</div>
<div class="grid-2">
	<div class="saving-projection p-2 b-radius-8 box_shadow-medium">
		<div class="saving-projection-wrapper">
			<SaveProjectionChart />
		</div>
	</div>
	<div class="membership-status p-2  b-radius-8 box_shadow-medium">
		<MembershipMain />
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
