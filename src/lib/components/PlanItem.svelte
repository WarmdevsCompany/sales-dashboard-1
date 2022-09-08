<script>
	import { t } from '$lib/translations/i18n.js';
</script>

<div
	class="plan__item b-radius-8 p-1_5 box_shadow-medium text-white {$$props.planClass} {$$props.planFontClass}"
>
	<div class="d-flex justify-sb">
		<div class="text-3 plan_name">{$$props.planName}</div>
		<div class="text-2 plan_money">${$$props.planMoney}</div>
	</div>
	<div class="d-flex justify-sb">
		<div class="text-xsm contr">{$t('CONTRIBUTION')}</div>
		<div class="text-3 plan_persentage">{$$props.planPersentage}%</div>
	</div>
</div>

<style>
	.plan__item.small .plan_name {
		font-size: var(--text-font-small);
		line-height: var(--text-line-height-small);
	}
	.plan__item.small .plan_money {
		font-size: var(--text-size-big);
		line-height: var(--text-line-big);
	}
	.plan__item.small .plan_persentage {
		font-size: var(--text-font-xsmall);
		line-height: var(--text-line-height-xsmall);
	}
	.plan__item.small .contr {
		margin-bottom: 0;
	}
	.plan__item div:first-child {
		margin-bottom: 0.7rem;
	}
	.plan__item.safe {
		background: var(--primary-color);
	}
	.plan__item.adventure {
		background: var(--secondary-color);
	}
	.plan__item.founder {
		background: var(--third-color);
	}
</style>
