<script>
	import { globalData } from '$lib/globalStore';
	import { withdrawMethod, withdrawBalance, withdrawFormState, withdrawContribution } from './../withdrawStore.js';
	import WithdrawPlanItem from './WithdrawPlanItem.svelte';
	import { t } from '$lib/translations/i18n.js';
	import { roundNumber } from '$lib/functions/roundNumber.js';

	
	export let current_contribution;
	export let currentSymbol;

	let planInputsErrorState = false, withdrawMaxSum;


	function setDataAsCurrentContr() {
		$withdrawContribution.safePercentage = current_contribution.greenSafe;
		$withdrawContribution.adventurePercentage = current_contribution.greenAdventure;
		$withdrawContribution.founderPercentage = current_contribution.greenFounder;

		$withdrawContribution.safeValue = Math.round(($withdrawContribution.safePercentage * $withdrawBalance) / 100);
		$withdrawContribution.adventureValue = Math.round(
			($withdrawContribution.adventurePercentage * $withdrawBalance) / 100
		);
		$withdrawContribution.founderValue = Math.round(
			($withdrawContribution.founderPercentage * $withdrawBalance) / 100
		);
	}
	function setDataEqually() {
		$withdrawContribution.safePercentage = 33.3;
		$withdrawContribution.adventurePercentage = 33.4;
		$withdrawContribution.founderPercentage = 33.3;

		$withdrawContribution.safeValue = roundNumber(($withdrawContribution.safePercentage * $withdrawBalance) / 100, 2);
		$withdrawContribution.adventureValue = roundNumber(
			($withdrawContribution.adventurePercentage * $withdrawBalance) / 100,
			2
		);
		$withdrawContribution.founderValue = roundNumber(
			($withdrawContribution.founderPercentage * $withdrawBalance) / 100,
			2
		);
	}

	$: {
		if ($withdrawMethod === '0') {
			setDataAsCurrentContr();
		} else if ($withdrawMethod === '1') {
			setDataEqually();
		} else if ($withdrawMethod === '2') {
			withdrawMaxSum = Math.round($globalData.data.currentSubscription.balance);
			$withdrawBalance = Math.round(
				$withdrawContribution.safeValue + $withdrawContribution.adventureValue + $withdrawContribution.founderValue
			);
			if (
				$withdrawContribution.safePercentage === 33.3 &&
				$withdrawContribution.adventurePercentage === 33.4 &&
				$withdrawContribution.founderPercentage === 33.3
			) {
				setDataAsCurrentContr();
			}
			if ($withdrawBalance > withdrawMaxSum) {
				$withdrawFormState = true;
				planInputsErrorState = true

			} else {
				$withdrawFormState = false;
				planInputsErrorState = false
				$withdrawContribution.safePercentage = Math.round(($withdrawContribution.safeValue * 100)/ $withdrawBalance)
				$withdrawContribution.adventurePercentage = Math.round(($withdrawContribution.adventureValue * 100)/ $withdrawBalance)
				$withdrawContribution.founderPercentage = Math.round(($withdrawContribution.founderValue * 100)/ $withdrawBalance)
			}
		}
	}
</script>

<div class="plan__items grid-3 mt-2">
	<WithdrawPlanItem
		planClass={'safe'}
		planName={$t('MANAGE_SAFE')}
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
		planName={$t('MANAGE_ADVENTURE')}
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
		planName={$t('MANAGE_FOUNDER')}
		planAvailable={$t('MANAGE_AV_AM')}
		planMoney={$withdrawContribution.founderValue || 0}
		planPersentage={$withdrawContribution.founderPercentage}
		planInputState={$withdrawMethod != '2'}
		bind:planInputValue={$withdrawContribution.founderValue}
		planCurrencySymbol={currentSymbol}
		{planInputsErrorState}
	/>
</div>
