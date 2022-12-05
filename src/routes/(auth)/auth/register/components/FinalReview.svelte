<script>
	import { contributionData, allocatedContributions } from '../stores/contributionsStore';
	import { infoFormData } from '../stores//infoStore';
	import { confirmPopUpState, clickOnPrevBtn } from '../stores/infoStore';
	import { headSteps, incrementStep, stepCounter, popUpHeight } from '../stores/store';
	import { beforeUpdate } from 'svelte';
	import { fade } from 'svelte/transition';
	import StepContribution_ico from '../../public/images/StepContribution_ico.svelte';
	import StepPlan_ico from '../../public/images/StepPlan_ico.svelte';
	import StepLegal_ico from '../../public/images/StepLegal_ico.svelte';
	import LegalCheckbox_ico from '../../public/images/LegalCheckbox_ico.svelte';
	import StepInformation_ico from '../../public/images/StepInformation_ico.svelte';
	import OpenAcount_ico from '../../public/images/OpenAcount_ico.svelte';
	import { priceConvertation } from '../functions/priceConvertation';
	import { scrollToTop } from '../functions/scrollToTop';
	import Preloader from './Preloader.svelte';
	import { createUserInDB } from './createUserInDB';

	let changeCounter = 0;

	let preloaderState = false;

	let confirmAllData = async () => {
		preloaderState = true;

		const userData = {
			username: $infoFormData.userName,
			phoneCode: $contributionData.country.phoneCode,
			phoneNumber: $infoFormData.phone,
			email: $infoFormData.email,
			password: $infoFormData.password,
			countryId: $contributionData.country.countryId,
			periodId: $contributionData.period.periodId,
			amount: $contributionData.amount,
			greenSafe: $allocatedContributions.safe,
			greenAdventure: $allocatedContributions.adventure,
			greenFounder: $allocatedContributions.founder
		};

		const status = await createUserInDB(userData);
		if (status) {
			$confirmPopUpState = false;
			$headSteps.fifthStep = true;
			if (changeCounter === 0) {
				incrementStep();
				changeCounter += 1;
			}
			scrollToTop();

			localStorage.setItem('userName', userData.username);
		}
		preloaderState = false;
	};
	let closePopUp = () => {
		$confirmPopUpState = false;
	};

	let changeStep = (stepNum) => {
		$confirmPopUpState = false;
		$stepCounter = stepNum;
		if (stepNum === 4) {
			$clickOnPrevBtn = true;
		}
		scrollToTop();
	};
	let safePrice = 0,
		adventurePrice = 0,
		founderPrice = 0;

	beforeUpdate(() => {
		safePrice = ($allocatedContributions.safe * $contributionData.monthlyValue) / 100;
		adventurePrice = ($allocatedContributions.adventure * $contributionData.monthlyValue) / 100;
		founderPrice = ($allocatedContributions.founder * $contributionData.monthlyValue) / 100;
	});
</script>

<div class="pop__up" in:fade bind:clientHeight={$popUpHeight}>
	<div class="pop__up__wrapper">
		<div class="pop__up__head">
			<div class="pop__up_head__text">
				{$infoFormData.userName} LET'S MAKE SURE WE'VE GOT EVERYTHING RIGHT!
			</div>
			<div class="pop__up__close" on:click={closePopUp}><span /></div>
		</div>
		<div class="pop__up__body">
			<h3>Review - Change - Confirm</h3>
			<div class="pop__up__items">
				<div class="pop__up__item">
					<div class="item__head">
						<div class="step">
							<div class="step__icon">
								<StepContribution_ico />
							</div>
							<div class="step__name">Contribution</div>
						</div>
						<div
							class="change__btn"
							on:click={() => {
								changeStep(1);
							}}
						>
							Change
						</div>
					</div>
					<div class="item__body">
						<div class="text">
							{$contributionData.country.currency.symbol}{priceConvertation(
								$contributionData.monthlyValue
							)}
							{$contributionData.country.currency.code} per Month Starting {$contributionData
								.nextPaymentDate.day}th
							{$contributionData.nextPaymentDate.month}
							{$contributionData.nextPaymentDate.year}
						</div>
					</div>
				</div>
				<div class="pop__up__item">
					<div class="item__head">
						<div class="step">
							<div class="step__icon">
								<StepPlan_ico />
							</div>
							<div class="step__name">Plan</div>
						</div>
						<div
							class="change__btn"
							on:click={() => {
								changeStep(2);
							}}
						>
							Change
						</div>
					</div>
					<div class="item__body">
						<div class="item__plan save">
							<div class="name">Plan 1</div>
							<div class="persentage">{$allocatedContributions.safe}%</div>
							<div class="money">
								{$contributionData.country.currency.symbol}{priceConvertation(
									Math.round(safePrice)
								)}
							</div>
						</div>
						<div class="item__plan adventure">
							<div class="name">Plan 2</div>
							<div class="persentage">{$allocatedContributions.adventure}%</div>
							<div class="money">
								{$contributionData.country.currency.symbol}{priceConvertation(
									Math.round(adventurePrice)
								)}
							</div>
						</div>
						<div class="item__plan founder">
							<div class="name">Plan 3</div>
							<div class="persentage">{$allocatedContributions.founder}%</div>
							<div class="money">
								{$contributionData.country.currency.symbol}{priceConvertation(
									Math.round(founderPrice)
								)}
							</div>
						</div>
					</div>
				</div>
				<div class="pop__up__item">
					<div class="item__head">
						<div class="step">
							<div class="step__icon">
								<StepLegal_ico />
							</div>
							<div class="step__name">Legal</div>
						</div>
					</div>
					<div class="item__body">
						<div class="legal__item">
							<LegalCheckbox_ico />
							<div class="text">
								You agreed to all Terms & Conditions, Contract Agreement, Privacy & Cookie
							</div>
						</div>
					</div>
				</div>
				<div class="pop__up__item">
					<div class="item__head">
						<div class="step">
							<div class="step__icon">
								<StepInformation_ico />
							</div>
							<div class="step__name">Information</div>
						</div>
						<div
							class="change__btn"
							on:click={() => {
								changeStep(4);
							}}
						>
							Change
						</div>
					</div>
					<div class="item__body">
						<div class="text">N: {$infoFormData.userName}</div>
						<div class="text">P: {$infoFormData.phone}</div>
						<div class="text">E: {$infoFormData.email}</div>
					</div>
				</div>
			</div>
			<button class="submt__btn {preloaderState ? 'disabled_sb' : ''}" on:click={confirmAllData}>
				{#if preloaderState}
					<div class="preload_btn_wrapper">
						<Preloader loaderWidth={1.5} loaderHeight={1.5} borderWidth={0.3} />
					</div>
				{/if}
				<span>Confirm</span><OpenAcount_ico /></button
			>
		</div>
	</div>
</div>

<style>
	.pop__up {
		position: absolute;
		top: 0;
		z-index: 10;
		width: 100%;
		height: auto;
		padding: 0;
		background-color: rgba(0, 0, 0, 0.5);
	}
	.pop__up__wrapper {
		border-radius: 10px;
		background: var(--white-color);
		box-shadow: 0px 25px 35px rgba(0, 0, 0, 0.15), inset 0px 0px 35px rgba(255, 255, 255, 0.15);
		backdrop-filter: blur(5px);
		margin: 0 auto;
		max-width: 999px;
		font-size: var(--text-size-small);
		line-height: 21px;
		margin: 120px auto;
	}
	.pop__up__head {
		width: 100%;
		padding: 35px;
		/* dark-green */
		background: linear-gradient(249.52deg, var(--color-grad-dark) 0%, var(--color-grad-light) 100%);
		position: relative;
		border-top-left-radius: 9px;
		border-top-right-radius: 9px;
	}
	.pop__up_head__text {
		font-weight: var(--font-weight-medium);
		font-size: 20px;
		line-height: 30px;
		color: var(--white-color);
		text-transform: uppercase;
		text-align: center;
	}
	.pop__up__close {
		width: 24px;
		height: 24px;
		position: absolute;
		right: 24px;
		top: 24px;
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: 3;
		cursor: pointer;
	}
	.pop__up__close span {
		position: relative;
		width: 21px;
		height: 1.9px;
		background: var(--white-color);
		transform: rotate(45deg);
	}
	.pop__up__close span:after {
		content: '';
		position: absolute;
		top: 0;
		right: 0;
		width: 21px;
		height: 1.9px;
		background: inherit;
		transform: rotate(90deg);
	}
	.pop__up__body {
		width: 100%;
		max-width: 539px;
		padding: 32px 20px 100px 20px;
		margin: 0 auto;
	}
	h3 {
		font-weight: var(--font-weight-medium);
		font-size: var(--h3-size);
		line-height: var(--h3-line-height);
		text-align: center;
		margin-bottom: 34px;
	}
	.pop__up__item {
		border: 1px solid var(--grey-color_2);
		border-radius: 4px;
		overflow: hidden;
		margin-bottom: 24px;
	}
	.pop__up__item:last-child {
		margin-bottom: 34px;
	}
	.item__head {
		background: var(--grey-color_2);
		border-radius: 4px;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.step {
		display: flex;
		align-items: center;
		padding: 13px 20px;
	}
	.step__icon {
		margin-right: 6px;
		width: 24px;
		height: 24px;
	}
	.step__name {
		font-weight: var(--font-weight-medium);
		color: var(--color-dark-st5);
	}
	.change__btn {
		width: 121px;
		height: 100%;
		font-weight: var(--font-weight-medium);
		color: var(--btn-color);
		text-align: center;
		cursor: pointer;
	}
	.change__btn:hover {
		color: var(--color-dark-st5);
	}
	.item__body {
		padding: 14px 20px 24px 20px;
	}
	.text {
		color: var(--black-color);
	}
	.item__plan {
		border-radius: 4px;
		padding: 10px 24px;
		color: var(--btn-color);
		border: 1px solid var(--btn-color);
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		grid-column-gap: 10px;
		margin-bottom: 8px;
	}
	.item__plan:last-child {
		margin: 0;
	}
	.persentage {
		text-align: center;
	}
	.money {
		text-align: end;
	}
	.adventure {
		color: var(--plan-adventure-bg);
		border: 1px solid var(--plan-adventure-bg);
	}
	.founder {
		color: var(--plan-founder-popup-bg);
		border: 1px solid var(--plan-founder-popup-bg);
	}
	.legal__item {
		display: flex;
	}
	.legal__item .text {
		max-width: 336px;
		margin-left: 12px;
	}
	.submt__btn {
		padding: 21px 32px;
		background: var(--btn-color);
		border-radius: 10px;
		font-weight: var(--font-weight-bolder);
		text-align: center;
		color: var(--white-color);
		border: none;
		margin: 0 auto;
		display: flex;
		align-items: center;
		cursor: pointer;
		position: relative;
		overflow: hidden;
	}
	.submt__btn .preload_btn_wrapper {
		position: absolute;
		top: 0%;
		left: 0%;
		width: 100%;
		height: 100%;
		background: var(--btn-color);
		z-index: 2;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.submt__btn.disabled_sb {
		pointer-events: none;
	}
	.submt__btn:hover {
		background: var(--btn-color-hover);
	}
	.submt__btn:active {
		background: var(--btn-color-active);
	}

	@media only screen and (max-width: 768px) {
		.pop__up__wrapper {
			margin: 70px 0 0 0;
			border-radius: 0;
		}
		.pop__up__head {
			border-radius: 0;
		}
		.pop__up__close {
			width: 24px;
			height: 24px;
			position: absolute;
			right: 15px;
			top: 15px;
		}
	}
</style>
