<script>
	import { t } from '$lib/translations/i18n.js';
</script>

<div class="plan__item b-radius-8 p-1_5 box_shadow-medium text-white {$$props.planClass}">
	<div class="d-flex justify-sb">
		<div class="text-3 uppercase">{$$props.planName}</div>
		<div class="plan__item--medium">{$$props.planPersentage}%</div>
	</div>
	<div class="d-flex justify-sb align-base w_113 plan__item--current">
		<div class="text-12px">{$t('MANAGE_PLAN_CURRENT')}:</div>
		<div class="plan__item--medium">${$$props.planCurrentMoney}</div>
	</div>
	<div class="d-flex justify-sb align-center">
		<div class="text-xsm">{$t('CONTRIBUTION')}</div>
		<div class="d-flex justify-sb align-base w_113">
			<div class="text-12px">{$t('MANAGE_PLAN_NEW')}:</div>
			<div class="text-3 semi-bold">${$$props.planNewMoney}</div>
		</div>
	</div>
</div>

<style>
	.plan__item.safe {
		background: var(--primary-color);
	}
	.plan__item.adventure {
		background: var(--secondary-color);
	}
	.plan__item.founder {
		background: var(--third-color);
	}
	.text-12px {
		font-size: 12px;
		line-height: 18px;
	}
	.w_113 {
		width: max-content;
	}
	.w_113 > *:first-child {
		margin-right: 25px;
	}
	.plan__item--medium {
		font-weight: var(--font-weight-medium);
	}
	.plan__item--current {
		margin: 2px 0 0 auto;
	}
	@media only screen and (max-width: 991px) {
		.plan__item {
			margin-bottom: 1rem;
		}
	}
</style>
