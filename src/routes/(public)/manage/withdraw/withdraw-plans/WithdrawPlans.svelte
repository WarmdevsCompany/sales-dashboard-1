<script>
	import { globalData } from '$lib/globalStore';
	import {
		withdrawMethod,
		withdrawBalance,
		withdrawFormState,
		withdrawContribution
	} from './../withdrawStore.js';
	import WithdrawPlanItem from './WithdrawPlanItem.svelte';
	import { t } from '$lib/translations/i18n.js';
	import { roundNumber, round } from '$lib/functions/roundNumber.js';

	export let current_contribution;
	export let currentSymbol;

	let planInputsErrorState = false,
		withdrawMaxSum;

	function setDataAsCurrentContr() {
		$withdrawContribution.safePercentage = current_contribution.greenSafe;
		$withdrawContribution.adventurePercentage = current_contribution.greenAdventure;
		$withdrawContribution.founderPercentage = current_contribution.greenFounder;

		$withdrawContribution.safeValue = round(
			($withdrawContribution.safePercentage * $withdrawBalance) / 100, 2
		);
		$withdrawContribution.adventureValue = round(
			($withdrawContribution.adventurePercentage * $withdrawBalance) / 100,2
		);
		$withdrawContribution.founderValue = round(
			($withdrawContribution.founderPercentage * $withdrawBalance) / 100,2 
		);
	}
	function setDataEqually() {
		$withdrawContribution.safePercentage = 33.34;
		$withdrawContribution.adventurePercentage = 33.33;
		$withdrawContribution.founderPercentage = 33.33;

		const oneItemSum = roundNumber($withdrawBalance * 33.33 / 100);
		const remainderFromDivision = roundNumber($withdrawBalance - (oneItemSum * 3));
		$withdrawContribution.safeValue = roundNumber(oneItemSum + remainderFromDivision);
		$withdrawContribution.adventureValue = roundNumber(oneItemSum);
		$withdrawContribution.founderValue = roundNumber(oneItemSum);

	}

	$: {
		if ($withdrawMethod === '0') {
			setDataAsCurrentContr();
		} else if ($withdrawMethod === '1') {
			setDataEqually();
		} else if ($withdrawMethod === '2') {
			withdrawMaxSum = Math.round($globalData.data.currentSubscription.balance);
			$withdrawBalance = Math.round(
				$withdrawContribution.safeValue +
					$withdrawContribution.adventureValue +
					$withdrawContribution.founderValue
			);
			if (
				$withdrawContribution.safePercentage === 33.34 &&
				$withdrawContribution.adventurePercentage === 33.33 &&
				$withdrawContribution.founderPercentage === 33.33
			) {
				setDataAsCurrentContr();
			}
			if ($withdrawBalance > withdrawMaxSum) {
				$withdrawFormState = true;
				planInputsErrorState = true;
			} else {
				$withdrawFormState = false;
				planInputsErrorState = false;
				$withdrawContribution.safePercentage = Math.round(
					($withdrawContribution.safeValue * 100) / $withdrawBalance
				);
				$withdrawContribution.adventurePercentage = Math.round(
					($withdrawContribution.adventureValue * 100) / $withdrawBalance
				);
				$withdrawContribution.founderPercentage = Math.round(
					($withdrawContribution.founderValue * 100) / $withdrawBalance
				);
			}
		}
	}
</script>

<div class="plan__items grid-3 mt-2">
	<WithdrawPlanItem
		planClass={'safe'}
		planName={$t('SAFE_PLAN_BIG')}
		planAvailable={$t('MANAGE_AV_AM')}
		planMoney={$withdrawContribution.safeValue || 0}
		planPersentage={$withdrawContribution.safePercentage}
		planInputState={$withdrawMethod != '2'}
		bind:planInputValue={$withdrawContribution.safeValue}
		planCurrencySymbol={currentSymbol}
		{planInputsErrorState}
	/>
	<WithdrawPlanItem
		planClass={'adventure'}
		planName={$t('ADVENTURE_BIG')}
		planAvailable={$t('MANAGE_AV_AM')}
		planMoney={$withdrawContribution.adventureValue || 0}
		planPersentage={$withdrawContribution.adventurePercentage}
		planInputState={$withdrawMethod != '2'}
		bind:planInputValue={$withdrawContribution.adventureValue}
		planCurrencySymbol={currentSymbol}
		{planInputsErrorState}
	/>
	<WithdrawPlanItem
		planClass={'founder'}
		planName={$t('FOUNDER_BIG')}
		planAvailable={$t('MANAGE_AV_AM')}
		planMoney={$withdrawContribution.founderValue || 0}
		planPersentage={$withdrawContribution.founderPercentage}
		planInputState={$withdrawMethod != '2'}
		bind:planInputValue={$withdrawContribution.founderValue}
		planCurrencySymbol={currentSymbol}
		{planInputsErrorState}
	/>
</div>
