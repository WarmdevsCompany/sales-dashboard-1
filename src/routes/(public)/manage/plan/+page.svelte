<script>
	import { scrollToTop } from '$lib/functions/scrollToTop.js';
	import { globalData, isFetching } from '$lib/globalStore';
	import {
		allocatedContributions,
		errorMessageState,
		sumOfPlans,
		subscribeAllState
	} from './change-contributions/planStore.js';
	import { changeContributionPlan } from '$lib/api/axios.js';
	import { fade } from 'svelte/transition';
	import Modal, { getModal } from '$lib/components/Modal.svelte';
	import PlansMain from './change-bottom/ChangePlansMain.svelte';
	import ChangePlans from './change-contributions/ChangePlans.svelte';
	import { t } from '$lib/translations/i18n.js';
	import UpdatedPlanItems from './UpdatedPlanItems.svelte';
	let confirmButtonText = $t('CONFIRM_CHANGES');

	const updateGlobalContribution = () => {
		// safe
		$globalData.data.current_contribution.greenSafeTotal =
			($allocatedContributions.safe * $globalData.data.current_contribution.amount) / 100;
		$globalData.data.current_contribution.greenSafe = $allocatedContributions.safe;
		// adv
		$globalData.data.current_contribution.greenAdventureTotal =
			($allocatedContributions.adventure * $globalData.data.current_contribution.amount) / 100;
		$globalData.data.current_contribution.greenAdventure = $allocatedContributions.adventure;
		// founder
		$globalData.data.current_contribution.greenFounderTotal =
			($allocatedContributions.founder * $globalData.data.current_contribution.amount) / 100;
		$globalData.data.current_contribution.greenFounder = $allocatedContributions.founder;
	};
	const resetContributionData = () => {
		$subscribeAllState = false;
	};

	const changeContributionData = async () => {
		if ($sumOfPlans < 100) {
			$errorMessageState = true;
		} else {
			confirmButtonText = `${$t('LOADING')}...`;
			$isFetching = true;
			let res = await changeContributionPlan(
				$allocatedContributions.safe,
				$allocatedContributions.adventure,
				$allocatedContributions.founder
			);
			if (res.status) {
				updateGlobalContribution();
				getModal('confirmPlan').open();
				confirmButtonText = $t('CONFIRM_CHANGES');
				resetContributionData();
			}
			$isFetching = false;
		}
	};
	scrollToTop();
</script>

<svelte:head>
	<title>{$t('PLAN')}</title>
	<meta name="description" content="Plan page" />
	{#if !window['lottie-player']}
		<script
			src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
	{/if}
</svelte:head>

<ChangePlans
	isDisebled={$globalData.data.currentSubscription.statusId === 5236999 ||
		$globalData.data.currentSubscription.statusId === 5237000 ||
		$globalData.data.currentSubscription.statusId === 5237002}
/>
<div class="d-flex justify-cc">
	<button
		class="btn confirm mt-1_5 box_shadow-medium"
		on:click={changeContributionData}
		class:is_fetching={$isFetching}
		disabled={$globalData.data.currentSubscription.statusId === 5236999 ||
			$globalData.data.currentSubscription.statusId === 5237000 ||
			$globalData.data.currentSubscription.statusId === 5237002}
		>{confirmButtonText}
	</button>
</div>

<Modal id="confirmPlan">
	<div class="modal_main confirm text-center">
		<img
			src="https://assets-global.website-files.com/6089254f4962ce24139217ac/62fb58aa7d076b85fe8a58bf_WarmDevs_Logo_Horizontal.svg"
			alt=""
		/>
		<div class="modal_head_medium mt-2">{$t('MANAGE_UPDATED')}</div>
		<div class="modal_main-row d-flex justify-cc ">
			<div class="text-xsm d-flex align-base">
				{$t('MANAGE_NEW_CONTRIBUTION')}:
				<span class="text-3 text-blue">
					{$globalData.data.currency.symbol}
					{$globalData.data.currentSubscription.subscriptionText}
				</span>
			</div>
		</div>
		<div class="updated__items">
			<UpdatedPlanItems />
		</div>
		<button class="btn" on:click={() => getModal('confirmPlan').close()}>{$t('CLOSE')}</button>
	</div>
</Modal>

<div in:fade out:fade={{ delay: 0, duration: 100 }}>
	<PlansMain />
</div>

<style>
	.modal_main {
		max-width: 816px;
		margin: 0 auto;
	}
	.modal_main.confirm {
		padding-top: 33px;
		padding-bottom: 50px;
	}
	.modal_main .modal_head_medium {
		color: var(--green-dark-color);
	}
	.modal_main-row {
		max-width: 507px;
		margin: 1.5rem auto 0 auto;
		color: #000;
	}
	.modal_main-row span {
		margin-left: 0.25rem;
	}
	.btn {
		margin: 2.625rem auto 0 auto;
		transition: none;
	}
	@media only screen and (max-width: 991px) {
		.btn {
			margin-top: 24px;
		}
	}
</style>
