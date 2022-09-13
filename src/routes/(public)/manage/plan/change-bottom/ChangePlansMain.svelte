<script>
	import { allocatedContributions } from './../change-contributions/planStore.js';
	import PlanItem from './ChangePlanitem.svelte';
	import { t } from '$lib/translations/i18n.js';
	import { globalData } from '../../../../../lib/globalStore.js';
</script>

<div class="text-sm change__bottom">{$t('MANAGE_CHANGED')}:</div>
<div class="plan__items grid-3 mobile-block">
	<PlanItem
		planClass={'safe'}
		planName={$t('SAFE_PLAN_BIG')}
		planCurrentMoney={$globalData.data.current_contribution.greenSafeTotal}
		planNewMoney={($allocatedContributions.safe * $globalData.data.current_contribution.amount) / 100}
		planPersentage={$allocatedContributions.safe}
	/>
	<PlanItem
		planClass={'adventure'}
		planName={$t('ADVENTURE_BIG')}
		planCurrentMoney={$globalData.data.current_contribution.greenAdventureTotal}
		planNewMoney={($allocatedContributions.adventure * $globalData.data.current_contribution.amount) / 100}
		planPersentage={$allocatedContributions.adventure}
	/>
	<PlanItem
		planClass={'founder'}
		planName={$t('FOUNDER_BIG')}
		planCurrentMoney={$globalData.data.current_contribution.greenFounderTotal}
		planNewMoney={($allocatedContributions.founder * $globalData.data.current_contribution.amount) / 100}
		planPersentage={$allocatedContributions.founder}
	/>
</div>

<style>
	.change__bottom {
		margin-top: 2.5rem;
	}
	.plan__items {
		margin-top: 0.57rem;
	}
	@media only screen and (max-width: 1280px) {
		.grid-3 {
			grid-template-columns: 1fr 1fr;
		}
	}
	@media only screen and (max-width: 991px) {
		.plan__items {
			margin-bottom: 50px;
		}
	}
</style>
