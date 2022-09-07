<script>
	import PlanItem from './ChangePlanitem.svelte';
	import { t } from '$lib/translations/i18n.js';
</script>

<div class="text-sm change__bottom">{$t('MANAGE_CHANGED')}:</div>
<div class="plan__items grid-3 mobile-block">
	<PlanItem
		planClass={'safe'}
		planName={$t('SAFE_PLAN_BIG')}
		planCurrentMoney={400}
		planNewMoney={500}
		planPersentage={50}
	/>
	<PlanItem
		planClass={'adventure'}
		planName={$t('ADVENTURE_BIG')}
		planCurrentMoney={200}
		planNewMoney={250}
		planPersentage={25}
	/>
	<PlanItem
		planClass={'founder'}
		planName={$t('FOUNDER_BIG')}
		planCurrentMoney={200}
		planNewMoney={250}
		planPersentage={25}
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
