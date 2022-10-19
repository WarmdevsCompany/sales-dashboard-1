<script>
	export let planInputValue;
	import { checkInputNumber } from '$lib/functions/checkInputNumber.js';
	var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
	function checkInputValue() {
		if(isSafari){
			this.value = this.value.replace(/[^0-9]/g, '');
		}
		if (this.value.length > this.maxLength) {
			this.value = this.value.slice(0, this.maxLength);
		} 
	}
</script>

<div
	class="plan__item b-radius-8 box_shadow-medium text-white d-flex flex-col justify-sb {$$props.planClass}"
>
	<div class="d-flex justify-sb">
		<div class="text-3 plan_name">{$$props.planName}</div>
		<div class=" plan_persentage d-flex align-center">
			<div>{$$props.planPersentage}%</div>
		</div>
	</div>
	<div class="d-flex justify-sb align-base">
		<div class="text-xsm contr">{$$props.planAvailable}</div>
		<div class="text-3 plan_money" class:error={planInputValue > $$props.planAvailableMoney}>
			{$$props.planCurrencySymbol}{$$props.planAvailableMoney}
		</div>
	</div>

	<input
		class="withdraw__amount mt-1"
		type="number"
		placeholder="0"
		maxlength="6"
		disabled={$$props.planInputState}
		on:keydown={checkInputNumber}
		on:keyup={checkInputNumber}
		on:input={checkInputValue}
		step="any"
		bind:value={planInputValue}
		on:mousewheel={(e) => {
			e.target.blur();
		}}
		class:error={$$props.planInputsErrorState || planInputValue > $$props.planAvailableMoney}
	/>
</div>

<style>
	.plan__item {
		padding: 1rem 1rem 2.125rem 1rem;
	}
	.plan_name {
		padding-right: 5px;
	}

	.plan_money {
		font-weight: var(--font-weight-bolder);
	}
	.plan_money.error {
		opacity: 0.9;
		color: var(--red-color);
	}
	.plan_persentage {
		font-weight: var(--font-weight-bold);
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
		color: #113535;
		width: 100%;
		padding: 13px 28px;
		height: 50px;
	}
	input.withdraw__amount:disabled {
		background: #e8e8e8;
		color: #113535;
		width: 100%;
		padding: 13px 28px;
		height: 50px;
	}
</style>
