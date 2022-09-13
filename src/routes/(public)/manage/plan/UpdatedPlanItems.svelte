<script>
	import PlanItem from '$lib/components/PlanItem.svelte';
	import { t } from '$lib/translations/i18n.js';
	import { globalData } from '$lib/globalStore';
	import { allocatedContributions } from './change-contributions/planStore';
	allocatedContributions;
</script>

<div class="plan__items grid-3 mt-2">
	<PlanItem
		planClass={'safe'}
		planName={$t('MANAGE_SAFE')}
		planMoney={$globalData.data.current_contribution.greenSafeTotal}
		planPersentage={$globalData.data.current_contribution.greenSafe}
		planFontClass="small"
	/>
	<PlanItem
		planClass={'adventure'}
		planName={$t('MANAGE_ADVENTURE')}
		planMoney={$globalData.data.current_contribution.greenAdventureTotal}
		planPersentage={$globalData.data.current_contribution.greenAdventure}
		planFontClass="small"
	/>
	<PlanItem
		planClass={'founder'}
		planName={$t('MANAGE_FOUNDER')}
		planMoney={$globalData.data.current_contribution.greenFounderTotal}
		planPersentage={$globalData.data.current_contribution.greenFounder}
		planFontClass="small"
	/>
</div>
