<script>
	import PlanModal from './components/plans/PlanModal.svelte';
	import Contribution from './components/contributions/Contribution.svelte';
	import { onDestroy } from 'svelte';
	import HeadSteps from './components/HeadSteps.svelte';
	import Plan from './components/plans/Plan.svelte';
	import FinalReview from './components/FinalReview.svelte';
	import { stepCounter, popUpHeight } from './stores/store';
	import Legal from './components/legal/Legal.svelte';
	import Information from './components/information/Information.svelte';
	import Billing from './components/billing/Billing.svelte';
	import { confirmPopUpState } from './stores/infoStore';
	import { fade } from 'svelte/transition';
	import { plansModalState } from './stores/plansStore';
	import './styles/global.css';
	let stepCountValue;
	let mainHeight = 'auto';
	const unsubscribe = stepCounter.subscribe((value) => {
		stepCountValue = value;
	});

	$: {
		if ($confirmPopUpState === true) {
			mainHeight = $popUpHeight - 100 + 'px';
		} else {
			mainHeight = 'auto';
		}
	}
	onDestroy(unsubscribe);
</script>

<svelte:head>
	<link rel="stylesheet" href="https://unpkg.com/mono-icons@1.0.5/iconfont/icons.css" />
</svelte:head>

<main style="height: {mainHeight}">
	<div class="container__form">
		<div class="wrapper">
			<HeadSteps />
			<div class="step__content">
				{#if stepCountValue === 1}
					<div class="component__wrapper" in:fade={{ duration: 500 }}>
						<Contribution />
					</div>
				{:else if stepCountValue === 2}
					<div class="component__wrapper" in:fade={{ duration: 500 }}>
						<Plan />
					</div>
				{:else if stepCountValue === 3}
					<div class="component__wrapper" in:fade={{ duration: 500 }}>
						<Legal />
					</div>
				{:else if stepCountValue === 4}
					<div class="component__wrapper" in:fade={{ duration: 500 }}>
						<Information />
					</div>
				{:else if stepCountValue === 5}
					<div class="component__wrapper" in:fade={{ duration: 500 }}>
						<Billing />
					</div>
				{/if}
			</div>
		</div>
	</div>
</main>
{#if $confirmPopUpState === true}
	<FinalReview />
{/if}
{#if $plansModalState}
	<div in:fade>
		<PlanModal />
	</div>
{/if}

<style>
	@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');
	.component__wrapper {
		width: 100%;
	}
	:global(.input-sv:not(.error)::placeholder) {
		color: #000000;
	}
	:global(.input-sv.error) {
		border: 1px solid #ff2e00;
		color: #ff2e00;
	}
	:global(.select-sv.error) {
		border: 1px solid #ff2e00;
		color: #ff2e00;
	}
	:global(.input-sv.error::placeholder) {
		color: #ff2e00;
	}
	:global(.error__message) {
		font-size: 12px;
		line-height: 24px;
		color: #ff2e00;
	}
	:global(.input-sv::placeholder) {
		color: #000000;
		font-size: var(--text-size-normal);
	}
	.container__form {
		max-width: 1360px;
		margin-right: auto;
		margin-left: auto;
		padding-right: 40px;
		padding-left: 40px;
	}
	.step__content {
		display: flex;
		min-height: 75vh;
		background: rgba(255, 255, 255, 0.8);
		box-shadow: 0px 25px 35px rgba(0, 0, 0, 0.15), inset 0px 0px 35px rgba(255, 255, 255, 0.15);
		backdrop-filter: blur(5px);
		border-radius: 0px 0px 10px 10px;
		padding: 40px;
	}
	:global(.bottom__btns) {
		margin-top: 20px;
		width: 100%;
		display: flex;
		justify-content: space-between;
	}
	@media only screen and (max-width: 768px) {
		.container__form {
			padding: 0 6.5px;
		}
		.step__content {
			padding: 20px 0;
			min-height: auto;
		}
		:global(.bottom__btns) {
			padding: 0 16px;
		}
	}
</style>
