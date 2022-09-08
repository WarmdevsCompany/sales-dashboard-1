<script>
	import PlanItem from '$lib/components/PlanItem.svelte';
	import { t } from '$lib/translations/i18n.js';
</script>

<div class="plan__items grid-3 mt-2">
	<PlanItem
		planClass={'safe'}
		planName={$t('MANAGE_SAFE')}
		planMoney={400}
		planPersentage={50}
		planFontClass="small"
	/>
	<PlanItem
		planClass={'adventure'}
		planName={$t('MANAGE_ADVENTURE')}
		planMoney={200}
		planPersentage={25}
		planFontClass="small"
	/>
	<PlanItem
		planClass={'founder'}
		planName={$t('MANAGE_FOUNDER')}
		planMoney={200}
		planPersentage={25}
		planFontClass="small"
	/>
</div>
