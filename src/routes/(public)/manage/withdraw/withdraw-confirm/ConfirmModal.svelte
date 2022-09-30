<script>
	import { globalData } from '$lib/globalStore';
	import greenLogo from '$lib/assets/img/logo-green.svg';
	import Modal, { getModal } from '$lib/components/Modal.svelte';
	import WithdrawFooter from '../withdraw-footer/WithdrawFooter.svelte';
	import { modalClassName, confirmModalState, withdrawContribution } from '../withdrawStore';
	import { fade } from 'svelte/transition';
	import closeIcon from '$lib/assets/img/close.svg';
	import VerifyCodeForm from '$lib/components/forms/VerifyCodeForm.svelte';
	import { t } from '$lib/translations/i18n.js';
	import VerifyEmail from '$lib/components/forms/verify/inputs/VerifyEmail.svelte';
	import WithdrawsMethods from './WithdrawsMethods.svelte';
	import AddWithdrawMethod from './add-withdraw-method/AddWithdrawMethod.svelte';
	import SuccessModal from '$lib/components/forms/SuccessModal.svelte';

	export let withdrawMethods, timeToTransfer, withdrawOfTotal, feeSum;
	let formStep = 1,
		successFormStatus = false, withdrawRequestProcessed = false;
	$: formStep, successFormStatus;
	const submitEmailOrPhone = () => (formStep = 2);
	const submitVerificationCode = () => {
		formStep = 3
	};
	const closeModals = (modalId) => {
		$confirmModalState = false;
		formStep = 1;
		getModal(modalId).close();
	};
	const closeAllModals = () => {
		successFormStatus = false;
		withdrawRequestProcessed = false;
		closeModals('withdraw');
	};
	const confirmWithdraw = ()=>{
		$confirmModalState = false;
		successFormStatus = true;
	}
</script>

<Modal id="withdraw" className={$modalClassName} resetModalState={() => (formStep = 1)}>
	<div class="modal_main text-center">
		<img src={greenLogo} alt="esi logo img" />

		<div class="modal_head_medium text-1">{$t('WITHDRAW')}</div>

		<div class="modal_main-row ">
			{#if formStep < 3}
				<div class=" mt-1">{$t('VERIFY_ACCOUNT')}</div>
			{/if}

			{#if formStep === 1}
				<VerifyEmail sendVerifyCallback={submitEmailOrPhone} />
			{:else if formStep === 2}
				<VerifyCodeForm {submitVerificationCode} />
			{/if}
		</div>
		<div class="withdraw__row">
			{#if formStep === 3}
				<WithdrawsMethods bind:formStep {withdrawMethods} />
			{:else if formStep === 4}
				<AddWithdrawMethod bind:withdrawRequestProcessed/>
			{/if}
		</div>
	</div>
</Modal>
{#if $confirmModalState}
	<div class="form__wrapper" out:fade={{ delay: 50, duration: 110 }}>
		<div class="confirm__form text-center">
			<img src={greenLogo} alt="esi logo img" />
			<div class="modal_head_medium text-1">{$t('WITHDRAW')}</div>
			<div class="text-xsm last__step--subhead mb-1_5">
				{$t('WHERE_WITHDRAW')}*
			</div>
			<div class="last__step--body">
				<div>
					{$t('SAFE_PLAN_BIG')}:
					<span class="text-green mobile-block"
						>{$globalData.data.currency.symbol}{$withdrawContribution.safeValue}</span
					>
					<div class="inline">
						{$t('ADVENTURE_BIG')}:
						<span class="text-green mobile-block"
							>{$globalData.data.currency.symbol}{$withdrawContribution.adventureValue}</span
						>
					</div>

					{$t('FOUNDER_BIG')}:<span class="text-green mobile-block"
						>{$globalData.data.currency.symbol}{$withdrawContribution.founderValue}</span
					>
				</div>
				<div class="line mt-1_5 mb-1_5" />
				<WithdrawFooter
					btnAligment={'justify-cc'}
					confirmBtn={'confirm'}
					bind:formStep
					{closeModals}
					{withdrawMethods}
					{feeSum}
					{timeToTransfer}
					{withdrawOfTotal}
					{confirmWithdraw}
				/>
			</div>
			<img
				class="close_icon"
				on:click={() => closeModals('withdraw')}
				src={closeIcon}
				alt="esi close icon"
			/>
		</div>
	</div>
{/if}
{#if successFormStatus}
	<SuccessModal
		closeModals={closeAllModals}
		mainText={$t('MANAGE_WITHDRAW_CONFIRMED')}
		btnText={$t('BACK')}
	/>
{/if}
{#if withdrawRequestProcessed}
	<SuccessModal
		closeModals={closeAllModals}
		mainText={$t('MANAGE_WITHDRAW_PROCESSED')}
		btnText={$t('BACK')}
	/>
{/if}

<style>
	.modal_main {
		margin: 0 auto;
	}

	.form__wrapper {
		z-index: 999;
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		width: 100%;
		height: 100%;
		padding: 2rem;
		background: #4448;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.confirm__form {
		position: relative;
		border-radius: 10px;
		background: white;
		padding: 2.125rem;
		width: 100%;
		max-width: 950px;
		min-height: 584px;
	}
	.close_icon {
		position: absolute;
		top: 34px;
		right: 34px;
		width: 24px;
		height: 24px;
		cursor: pointer;
		transition: transform 0.3s;
	}
	.close_icon:hover {
		transform: scale(1.2);
	}
	.modal_main.confirm__withdraw {
		padding-top: 33px;
		padding-bottom: 99px;
	}
	.modal_main .modal_head_medium {
		color: var(--green-dark-color);
		margin-top: 2.5rem;
	}
	.modal_main-row {
		max-width: 360px;
		margin: 0 auto 0 auto;
		color: #000;
	}

	.btn {
		width: 218px;
		margin: 2.125rem auto 0 auto;
		transition: none;
	}
	input {
		transition: none;
	}
	.last__step--subhead {
		margin-top: 0.625rem;
	}

	.last__step--body .text-green {
		font-weight: var(--font-weight-bolder);
	}
	.last__step--body .inline {
		padding: 0 0.625rem;
	}
	.last__step--body {
		margin: 0 auto;
		max-width: 632px;
	}

	.line {
		width: 100%;
		height: 1px;
		background: var(--grey-color);
	}
	.withdraw__row {
		max-width: 100%;
		padding: 0 1rem;
	}
	@media only screen and (max-width: 480px) {
		.form__wrapper {
			padding: 0;
		}
		.confirm__form{
			max-height: 100vh;
			border-radius: 0;
			height: 100%;
			margin: 0;
		}
	}
</style>
