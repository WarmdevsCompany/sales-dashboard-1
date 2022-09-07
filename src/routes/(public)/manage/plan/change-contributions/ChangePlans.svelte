<script>
	import { beforeUpdate, afterUpdate } from 'svelte';
	import {
		planData,
		contributionData,
		allocatedContributions,
		errorMessageState,
		subscribeAllState
	} from './planStore';
	import ChangePlanItem from './ChangePlanItem.svelte';
	import SubscribeAllIco from '$lib/components/icons/plan-icons/SubscribeAllIco.svelte';
	import MediaQuery from '$lib/components/MediaQuery.svelte';
	import { t } from '$lib/translations/i18n.js';

	let savePercentages;

	let errorMessage;
	let sumOfPlans;
	let allowPercentageVal;

	savePercentages = [...planData];

	let safePrice = 0,
		adventurePrice = 0,
		founderPrice = 0;

	let savePlan = 'safe',
		advPlan = 'adventure',
		foundPlan = 'founder';

	let activeDropdownSave = false;
	let activeDropdownAdv = false;
	let activeDropdownFound = false;

	$: allowPercentageVal =
		100 -
		$allocatedContributions.safe -
		$allocatedContributions.adventure -
		$allocatedContributions.founder;

	$: savePercentages, errorMessage, sumOfPlans;

	let current = savePlan;

	beforeUpdate(() => {
		safePrice = ($allocatedContributions.safe * $contributionData.monthlyValue) / 100;
		adventurePrice = ($allocatedContributions.adventure * $contributionData.monthlyValue) / 100;
		founderPrice = ($allocatedContributions.founder * $contributionData.monthlyValue) / 100;

		activeDropdownSave = false;
		activeDropdownAdv = false;
		activeDropdownFound = false;
	});
	function subscribeAllPlans() {
		if (!$subscribeAllState) {
			$allocatedContributions.safe = 25;

			$allocatedContributions.adventure = 50;

			$allocatedContributions.founder = 25;
			$subscribeAllState = true;
		} else {
			$allocatedContributions.safe = 0;

			$allocatedContributions.adventure = 0;

			$allocatedContributions.founder = 0;

			$subscribeAllState = false;
		}
	}
	afterUpdate(() => {
		sumOfPlans =
			$allocatedContributions.safe +
			$allocatedContributions.adventure +
			$allocatedContributions.founder;
		if (sumOfPlans > 99 && sumOfPlans <= 100) {
			$errorMessageState = false;
			$subscribeAllState = true;
		}
	});
</script>

<div class="plans__wrapper">
	<div class="plans__wrapper__head">
		<h3 class="h3-sv desktop">
			{#if sumOfPlans < 100}
				Please allocate <span class="plan_percentage_val" class:error={$errorMessageState}
					>{100 - sumOfPlans}%</span
				> of your contribution between our plans
			{:else if sumOfPlans === 100}
				You have allocated all of your <span class="green">contribution!</span>
			{/if}
		</h3>

		<div class="mob__plan__h2">Select plans</div>
		<div class="subscribe__all" on:click={subscribeAllPlans}>
			<div class="subscribe__checkbox">
				<SubscribeAllIco className={$subscribeAllState ? 'active__cb' : ''} />
			</div>
			<MediaQuery query="(min-width: 992px)" let:matches>
				{#if matches}
					<div class="subscribe__text">Subscribe to All Plan</div>
				{:else}
					<div class="subscribe__text">All Plan</div>
				{/if}
			</MediaQuery>
		</div>
	</div>
	<h3 class="h3-sv mob">
		{#if sumOfPlans < 100}
			Please allocate <span class="plan_percentage_val" class:error={$errorMessageState}
				>{100 - sumOfPlans}%</span
			> of your contribution
		{:else if sumOfPlans === 100}
			You have allocated all of your <span class="green">contribution!</span>
		{/if}
	</h3>

	<div class="plans__items">
		<ChangePlanItem
			{current}
			currentPlan={savePlan}
			className="safe"
			label={$t('MANAGE_SAFE')}
			{allowPercentageVal}
			{savePercentages}
			currentPrice={safePrice}
			activeClass={'activeDropdownSave'}
			activeState={activeDropdownSave}
			btnText={'Green Safe info'}
			btnClass={'blue'}
		/>
		<ChangePlanItem
			{current}
			currentPlan={advPlan}
			className="adventure"
			label={$t('MANAGE_ADVENTURE')}
			{allowPercentageVal}
			{savePercentages}
			currentPrice={adventurePrice}
			activeClass={'activeDropdownAdv'}
			activeState={activeDropdownAdv}
			btnText={'Green Adventure info'}
			btnClass={'green'}
		/>
		<ChangePlanItem
			{current}
			currentPlan={foundPlan}
			className="founder"
			label={$t('MANAGE_FOUNDER')}
			{allowPercentageVal}
			{savePercentages}
			currentPrice={founderPrice}
			activeClass={'activeDropdownFound'}
			activeState={activeDropdownFound}
			btnText={'Green Founder info'}
			btnClass={'violet'}
		/>
	</div>
</div>

<style>
	.plan_percentage_val {
		font-size: var(--h2-size);
		line-height: var(--h2-line-height);
		color: var(--plan-adventure-bg);
		font-weight: var(--font-weight-bold);
	}
	.plan_percentage_val.error {
		color: var(--red-color);
	}
	.relative__wrapper {
		position: relative;
	}
	.bottom__btns {
		position: relative;
	}
	.green {
		color: var(--color-dark-st2);
	}
	h3 {
		margin: 0;
	}
	.subscribe__all {
		display: flex;
		align-items: center;
		justify-content: flex-end;
		cursor: pointer;
		min-width: 200px;
		margin-left: 10px;
		margin-bottom: 10px;
	}
	.subscribe__checkbox {
		width: 24px;
		height: 24px;
		position: relative;
		background: var(--white-color);
		border: 1px solid var(--border-color);
		border-radius: 3px;
	}

	.subscribe__text {
		margin-left: 8px;
		font-weight: var(--font-weight-bold);
		color: var(--color-dark-st5);
	}
	.plans__wrapper {
		margin-top: 32px;
	}
	.plans__wrapper__head {
		display: flex;
		justify-content: space-between;
		align-items: flex-end;
	}

	.plans__main {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		position: relative;
	}
	.mob__plan__h2,
	.main__mob_h2,
	.h3-sv.mob {
		display: none;
	}
	.plans__items {
		margin-top: 16px;
		display: flex;
		align-items: stretch;
	}

	@media only screen and (max-width: 1100px) {
		.plans__items {
			justify-content: center;
		}
	}
	@media only screen and (max-width: 991px) {
		.mob__plan__h2 {
			display: none;
		}
		.subscribe__all {
			margin-bottom: 0;
		}
		.h3-sv {
			display: block;
			font-weight: var(--font-weight-medium);
			font-size: var(--h3-size);
			line-height: 32px;
			color: var(--main-text-color);
		}
		.mob__plan__h2 {
			font-weight: var(--font-weight-medium);
			font-size: var(--h3-size);
			line-height: 32px;
			color: var(--main-text-color);
		}
		.plans__items {
			margin-top: 20px;
			display: block;
		}
		.plans__wrapper__head,
		h3.h3-sv.desktop {
			padding: 0;
			font-weight: normal;
		}
		h3.h3-sv.desktop {
			font-size: var(--text-font-xsmall);
		}
		.subscribe__all {
			font-size: var(--text-font-small);
			margin-bottom: auto;
		}
	}
	@media only screen and (max-width: 768px) {
		.main__mob_h2 {
			margin-top: 8px;
			display: block;
			font-weight: var(--font-weight-medium);
			font-size: var(--text-size-smaller);
			line-height: 18px;
			color: var(--main-text-color);
		}
		.h3-sv {
			font-size: 21px;
			line-height: 28px;
			padding: 16px 16px 0 16px;
		}
		.plan_percentage_val {
			font-size: 26px;
			line-height: 32px;
			bottom: -2px;
		}
		.mob__plan__h2 {
			white-space: nowrap;
		}
		.main__mob_h2 span {
			font-size: var(--text-size-smaller);
			line-height: 18px;
		}
		.plans__wrapper {
			margin-top: 20px;
		}
		.plans__top,
		.plans__wrapper__head {
			padding: 0 16px;
		}
	}
	@media only screen and (max-width: 480px) {
		.mob__plan__h2 {
			font-size: var(--text-font-normal);
			line-height: var(--text-line-height);
		}
		.h3-sv {
			font-size: var(--text-size-small);
			line-height: 21px;
			padding: 5px 16px 0px 16px;
		}
		.h3-sv span.green {
			font-size: var(--text-size-small);
			line-height: 21px;
		}
		.plan_percentage_val {
			font-size: var(--text-font-normal);
			line-height: var(--text-line-height);
			bottom: -1px;
		}

		.subscribe__all {
			min-width: 150px;
			margin-left: 5px;
		}
		.subscribe__checkbox {
			width: 16px;
			height: 16px;
			display: flex;
		}
		.subscribe__text {
			font-size: var(--text-size-smaller);
			font-weight: var(--font-weight-normal);
			line-height: var(--small-text-line-height);
		}
	}
</style>
