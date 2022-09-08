<script>
	import WithdrawPlanItem from './WithdrawPlanItem.svelte';
	import { t } from '$lib/translations/i18n.js';
</script>

<div class="plan__items grid-3 mt-2">
	<WithdrawPlanItem
		planClass={'safe'}
		planName={$t('MANAGE_SAFE')}
		planAvailable={$t('MANAGE_AV_AM')}
		planMoney={400}
		planPersentage={50}
	/>
	<WithdrawPlanItem
		planClass={'adventure'}
		planName={$t('MANAGE_ADVENTURE')}
		planAvailable={$t('MANAGE_AV_AM')}
		planMoney={200}
		planPersentage={25}
	/>
	<WithdrawPlanItem
		planClass={'founder'}
		planName={$t('MANAGE_FOUNDER')}
		planAvailable={$t('MANAGE_AV_AM')}
		planMoney={200}
		planPersentage={25}
	/>
</div>
