<div class="plan__item b-radius-8 box_shadow-medium text-white {$$props.planClass}">
	<div class="d-flex justify-sb">
		<div class="text-3 plan_name">{$$props.planName}</div>
		<div class="plan_money">${$$props.planPersentage}</div>
	</div>
	<div class="d-flex justify-sb align-base">
		<div class="text-xsm contr">{$$props.planAvailable}</div>
		<div class="text-3 plan_persentage">{$$props.planMoney}%</div>
	</div>

	<input class="withdraw__amount mt-1" type="text" placeholder="0" />
</div>

<style>
	.plan__item {
		padding: 1rem 1rem 2.125rem 1rem;
	}

	.plan_money {
		font-weight: var(--font-weight-bold);
	}
	.plan_persentage {
		font-weight: var(--font-weight-bolder);
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
	input.withdraw__amount {
		background: #e8e8e8;
		color: #113535;
		width: 100%;
		padding: 13px 28px;
		height: 50px;
	}
</style>
