<script>
	import LoginPassForm from '$lib/components/forms/LoginPassForm.svelte';
	import { makeWithdrawal, updateGlobalDataObj } from '$lib/api/axios.js';
	import { globalData, verificationId } from '$lib/globalStore';

	import Modal, { getModal } from '$lib/components/Modal.svelte';
	import WithdrawFooter from '../withdraw-footer/WithdrawFooter.svelte';
	import {
		modalClassName,
		confirmModalState,
		withdrawContribution,
		withdrawBalance
	} from '../withdrawStore';
	import { fade } from 'svelte/transition';
	import closeIcon from '$lib/assets/img/close.svg';
	import VerifyCodeForm from '$lib/components/forms/VerifyCodeForm.svelte';
	import { t } from '$lib/translations/i18n.js';
	import WithdrawsMethods from './WithdrawsMethods.svelte';
	import AddWithdrawMethod from './add-withdraw-method/AddWithdrawMethod.svelte';
	import SuccessWithdrawModal from '$lib/components/modals/SuccessWithdrawModal.svelte';
	import VerifyPhone from '$lib/components/forms/verify/inputs/VerifyPhone.svelte';

	export let withdrawMethods, timeToTransfer, withdrawOfTotal, selectedPaymentMethod;
	let formStep = 1,
		successFormStatus = false;
	$: formStep, successFormStatus, withdrawMethods;
	console.log(withdrawMethods);
	const submitEmailOrPhone = () => (formStep = 4);

	const closeModals = (modalId) => {
		$confirmModalState = false;
		formStep = 1;
		getModal(modalId).close();
	};
	const closeAllModals = () => {
		successFormStatus = false;
		closeModals('withdraw');
	};
	const confirmWithdraw = () => {
		$confirmModalState = false;
		if (!withdrawMethods || withdrawMethods === null) {
			formStep = 2;
			selectedPaymentMethod = 'ADD_NEW_ITEM';
		}
		getModal('withdraw').open();
	};
	const confirmLogin = () => {
		formStep = 3;
	};
	const makeWithdrawalFromDB = async (withdrawMethod) => {
		let body = {
			paymentMethodTypeId: null,
			currencyId: null,
			countryId: null,
			fullName: null,
			firstName: null,
			lastName: null,
			routingNumber: null,
			sortCode: null,
			accountNumber: null,
			accountTypeId: null,
			state: null,
			zipcode: null,
			city: null,
			address: null,
			verificationId: $verificationId,
			withdrawalMethodId: withdrawMethod.idobject,
			amount: $withdrawBalance,
			greenSafe: $withdrawContribution.safeValue,
			greenAdventure: $withdrawContribution.adventureValue,
			greenFounder: $withdrawContribution.founderValue
		};
		const res = await makeWithdrawal(body);
		if (res.status) {
			await updateGlobalDataObj();
			selectedPaymentMethod = res.data;
			successFormStatus = true;
		}
	};

	const submitVerificationCode = async () => {
		if (selectedPaymentMethod === 'ADD_NEW_ITEM') {
			formStep = 5;
		} else if (selectedPaymentMethod && selectedPaymentMethod != 'ADD_NEW_ITEM') {
			await makeWithdrawalFromDB(selectedPaymentMethod);
		}
	};
</script>

<Modal id="withdraw" className={$modalClassName} resetModalState={() => (formStep = 1)}>
	<div class="modal_main text-center">
		<div class="modal_head_medium text-1">{$t('WITHDRAW')}</div>
		{#if formStep === 1}
			<div class="withdraw__row">
				<WithdrawsMethods
					bind:formStep
					bind:successFormStatus
					{withdrawMethods}
					bind:selectedPaymentMethod
				/>
			</div>
		{:else if formStep === 2}
			<div class="modal_main-body ">
				<div class=" mt-1">{$t('VERIFY_ACCOUNT')}</div>
				<LoginPassForm authDataCallback={confirmLogin} />
			</div>
		{:else if formStep === 3}
			<div class="modal_main-row ">
				<div class=" mt-1">{$t('VERIFY_ACCOUNT')}</div>
				<VerifyPhone sendVerifyCallback={submitEmailOrPhone} />
			</div>
		{:else if formStep === 4}
			<div class="modal_main-row ">
				<div class=" mt-1">{$t('VERIFY_ACCOUNT')}</div>

				<VerifyCodeForm {submitVerificationCode} />
			</div>
		{:else if formStep === 5}
			<div class="withdraw__row">
				<AddWithdrawMethod bind:successFormStatus bind:selectedPaymentMethod />
			</div>
		{/if}
	</div>
</Modal>
{#if $confirmModalState}
	<div class="form__wrapper" out:fade={{ delay: 50, duration: 110 }}>
		<div class="confirm__form text-center">
			<div class="overflow_wrapper">
				<div class="modal_head_medium mt-2  text-1">{$t('WITHDRAW')}</div>
				<div class="text-xsm last__step--subhead mb-1_5">
					{$t('WHERE_WITHDRAW')}*
				</div>
				<div class="last__step--body">
					<div class="last__step--flex">
						<div class="inline">
							{$t('SAFE_PLAN_BIG')}:
							<span class="text-green mobile-block"
								>{$globalData.data.currency.symbol}{$withdrawContribution.safeValue}</span
							>
						</div>
						<div class="inline">
							{$t('ADVENTURE_BIG')}:
							<span class="text-green mobile-block"
								>{$globalData.data.currency.symbol}{$withdrawContribution.adventureValue}</span
							>
						</div>
						<div class="inline">
							{$t('FOUNDER_BIG')}:
							<span class="text-green mobile-block"
								>{$globalData.data.currency.symbol}{$withdrawContribution.founderValue}</span
							>
						</div>
					</div>
					<div class="line mt-1_5 mb-1_5" />
					<WithdrawFooter
						btnAligment={'justify-cc'}
						confirmBtn={'confirm'}
						{withdrawMethods}
						{timeToTransfer}
						{withdrawOfTotal}
						{confirmWithdraw}
					/>
				</div>
				<div class="close_icon--wrapper">
					<img
						class="close_icon"
						on:click={() => closeModals('withdraw')}
						src={closeIcon}
						alt="esi close icon"
					/>
				</div>
			</div>
		</div>
	</div>
{/if}
{#if successFormStatus}
	<SuccessWithdrawModal
		closeModals={closeAllModals}
		mainText={$t('MANAGE_WITHDRAW_CONFIRMED')}
		btnText={$t('BACK')}
		{selectedPaymentMethod}
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
		margin-left: 257px;
	}
	.close_icon--wrapper {
		position: absolute;
		top: 15px;
		right: 15px;
		width: 34px;
		height: 34px;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.close_icon {
		position: relative;
		width: 24px;
		height: 24px;
		cursor: pointer;
		transition: transform 0.3s;
	}
	.close_icon--wrapper:before {
		content: '';
		position: absolute;
		width: 34px;
		height: 34px;
		background-color: #fff;
		border-radius: 50%;
		margin: auto;
		transform: translate(50% 50%);
	}
	.close_icon:hover {
		transform: scale(1.2);
	}
	.modal_main-body {
		max-width: 587px;
		margin: 0 auto;
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
		max-width: 650px;
	}
	.last__step--flex {
		display: flex;

		justify-content: space-around;
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
	@media only screen and (max-width: 1080px) {
		.close_icon--wrapper {
			right: 0;
		}
	}
	@media only screen and (max-width: 991px) {
		.confirm__form {
			min-height: 65vh;
			margin-left: 0px;
		}
		.overflow_wrapper {
			height: 100vh;
			padding: 30px 0 170px 0;
			overflow: auto;
			position: relative;
		}
		/* Hide scrollbar for Chrome, Safari and Opera */
		.overflow_wrapper::-webkit-scrollbar {
			display: none;
		}
		.last__step--flex {
			display: block;
		}

		/* Hide scrollbar for IE, Edge and Firefox */
		.overflow_wrapper {
			-ms-overflow-style: none; /* IE and Edge */
			scrollbar-width: none; /* Firefox */
		}
	}
	@media (orientation: landscape) and (max-width: 991px) {
		.close_icon--wrapper {
			top: 60px;
		}
		.overflow_wrapper {
			padding: 70px 0 100px 0;
		}
	}
	@media only screen and (max-width: 480px) {
		.form__wrapper {
			padding: 0;
		}
		.confirm__form {
			max-height: 100vh;
			border-radius: 0;
			height: 100%;
			margin: 0;
		}
	}
</style>
