<div class="plan__item b-radius-8 p-1_5 box_shadow-medium text-white {$$props.planClass}">
	<div class="d-flex justify-sb">
		<div class="text-3 uppercase">{$$props.planName}</div>
		<div class="plan__item--medium">{$$props.planPersentage}%</div>
	</div>
	<div class="d-flex justify-sb align-center w_113 plan__item--current">
		<div class="text-12px">current:</div>
		<div class="plan__item--medium">${$$props.planCurrentMoney}</div>
	</div>
	<div class="d-flex justify-sb align-center">
		<div class="text-xsm">Contribution</div>
		<div class="d-flex justify-sb align-center w_113">
			<div class="text-12px">new:</div>
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
		width: 113px;
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
