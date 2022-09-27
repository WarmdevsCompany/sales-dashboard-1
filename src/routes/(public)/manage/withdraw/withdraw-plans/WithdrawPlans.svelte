<script>
	import { globalData } from '$lib/globalStore';
	import { withdrawMethod, withdrawBalance, withdrawFormState } from './../withdrawStore.js';
	import WithdrawPlanItem from './WithdrawPlanItem.svelte';
	import { t } from '$lib/translations/i18n.js';
	export let current_contribution;
	export let currentSymbol;
	let contribution = {
		safePercentage: '',
		safeValue: '',
		adventurePercentage: '',
		adventureValue: '',
		founderPercentage: '',
		founderValue: ''
	};

	let sumOfAllContributions, withdrawMaxSum;

	function roundDown(number, decimals) {
		decimals = decimals || 0;
		return Math.floor(number * Math.pow(10, decimals)) / Math.pow(10, decimals);
	}

	$: {
		if ($withdrawMethod === '0') {
			contribution.safePercentage = current_contribution.greenSafe;
			contribution.adventurePercentage = current_contribution.greenAdventure;
			contribution.founderPercentage = current_contribution.greenFounder;

			contribution.safeValue = Math.round((contribution.safePercentage * $withdrawBalance) / 100);
			contribution.adventureValue = Math.round(
				(contribution.adventurePercentage * $withdrawBalance) / 100
			);
			contribution.founderValue = Math.round(
				(contribution.founderPercentage * $withdrawBalance) / 100
			);
		} else if ($withdrawMethod === '1') {
			contribution.safePercentage = 33.3;
			contribution.adventurePercentage = 33.4;
			contribution.founderPercentage = 33.3;

			contribution.safeValue = roundDown((contribution.safePercentage * $withdrawBalance) / 100, 1);
			contribution.adventureValue = roundDown(
				(contribution.adventurePercentage * $withdrawBalance) / 100, 1
			);
			contribution.founderValue = roundDown(
				(contribution.founderPercentage * $withdrawBalance) / 100, 1
			);
		} else if ($withdrawMethod === '2') {
			withdrawMaxSum = Math.round($globalData.data.currentSubscription.balance);
			$withdrawBalance = Math.round(
				contribution.safeValue + contribution.adventureValue + contribution.founderValue
			);


			if ($withdrawBalance > withdrawMaxSum) {
				$withdrawFormState = true;
			} else {
				$withdrawFormState = false;
			}
		}
	}
</script>

<div class="plan__items grid-3 mt-2">
	<WithdrawPlanItem
		planClass={'safe'}
		planName={$t('MANAGE_SAFE')}
		planAvailable={$t('MANAGE_AV_AM')}
		planMoney={contribution.safeValue || 0}
		planPersentage={contribution.safePercentage}
		planInputState={$withdrawMethod != '2'}
		bind:planInputValue={contribution.safeValue}
		planCurrencySymbol={currentSymbol}
	/>
	<WithdrawPlanItem
		planClass={'adventure'}
		planName={$t('MANAGE_ADVENTURE')}
		planAvailable={$t('MANAGE_AV_AM')}
		planMoney={contribution.adventureValue || 0}
		planPersentage={contribution.adventurePercentage}
		planInputState={$withdrawMethod != '2'}
		bind:planInputValue={contribution.adventureValue}
		planCurrencySymbol={currentSymbol}
	/>
	<WithdrawPlanItem
		planClass={'founder'}
		planName={$t('MANAGE_FOUNDER')}
		planAvailable={$t('MANAGE_AV_AM')}
		planMoney={contribution.founderValue || 0}
		planPersentage={contribution.founderPercentage}
		planInputState={$withdrawMethod != '2'}
		bind:planInputValue={contribution.founderValue}
		planCurrencySymbol={currentSymbol}
	/>
</div>
