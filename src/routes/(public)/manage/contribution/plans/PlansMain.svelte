<script>
	import PlanItem from '$lib/components/PlanItem.svelte';
	import { t } from '$lib/translations/i18n.js';
	import { globalData } from '$lib/globalStore';
</script>

<div class="plan__items grid-3 mt-2">
	<PlanItem
		planClass={'safe'}
		planName={$t('SAFE_PLAN_BIG')}
		planMoney={$globalData.data.current_contribution?.greenSafeTotal || 0}
		planPersentage={$globalData.data.current_contribution?.greenSafe || 0}
	/>
	<PlanItem
		planClass={'adventure'}
		planName={$t('ADVENTURE_BIG')}
		planMoney={$globalData.data.current_contribution?.greenAdventureTotal || 0}
		planPersentage={$globalData.data.current_contribution?.greenAdventure || 0}
	/>
	<PlanItem
		planClass={'founder'}
		planName={$t('FOUNDER_BIG')}
		planMoney={$globalData.data.current_contribution?.greenFounderTotal || 0}
		planPersentage={$globalData.data.current_contribution?.greenFounder || 0}
	/>
</div>
