<script>
	import  VerifyPhone from '$lib/components/forms/verify/inputs/VerifyPhone.svelte';
	import greenLogo from '$lib/assets/img/logo-green.svg';
	import Modal, { getModal } from '$lib/components/Modal.svelte';
	import { modalClassName, confirmModalState } from '../../security/securityStore';
	import LoginPassForm from '$lib/components/forms/LoginPassForm.svelte';
	import VerifyCodeForm from '$lib/components/forms/VerifyCodeForm.svelte';
	import { t } from '$lib/translations/i18n.js';
	import { verificationId } from '$lib/globalStore.js';
	import ClosingAccountModal from './ClosingAccountModal.svelte';
	import { closeAccount } from '$lib/api/axios.js';
	let formStep = 1;
	let heading = $t('SETTINGS_VERIFY_CHANGES');

	$: {
		formStep;
		if (formStep === 3) {
			heading = $t('SETTINGS.CLOSING_AN_ACCOUNT');
		}
	}
	const login = () => (formStep = 2);
	const submitVerificationCodeAndCloseAccount = async () => {
		const res = await closeAccount($verificationId);
		if (res.status) {
			$confirmModalState = true;
		}else if(res.errorMessage === 'PROFILE_ALREADY_FROZEN_CLOSED'){
			$confirmModalState = true;
		}
	};
	const closeChangePassModal = () => {
		$confirmModalState = false;
		formStep = 1;
		getModal('close_account').close();
	};
</script>

<Modal id="close_account" className={$modalClassName} resetModalState={() => (formStep = 1)}>
	<div class="modal_main text-center">
		<img src={greenLogo} alt="esi logo img" />
		<div class="modal_head_medium text-1">{heading}</div>
		<div class="modal_main-body ">
			{#if formStep === 1}
				<div class=" mt-1">{$t('VERIFY_ACCOUNT')}</div>
				<LoginPassForm authDataCallback={login} />
			{:else if formStep === 2}
				<div class="mt-1">{$t('VERIFY_ACCOUNT')}</div>
				<div class="modal_main-row">
					<VerifyPhone sendVerifyCallback={() => (formStep = 3)} />
				</div>
			{:else if formStep === 3}
				<div class=" mt-1">{$t('ACCOUNT_CLOSE_VERIFY')}</div>
				<div class="modal_main-row">
					<VerifyCodeForm submitVerificationCode={submitVerificationCodeAndCloseAccount} />
				</div>
			{/if}
		</div>
	</div>
</Modal>
{#if $confirmModalState === true}
	<ClosingAccountModal
		closeModals={closeChangePassModal}
		mainText={$t('SETTINGS.CLOSING_AN_ACCOUNT')}
		mainContent={$t('ACCOUNT_CLOSE_REQUEST_SENT')}
		btnText={$t('CLOSE')}
	/>
{/if}

<style>
	.modal_main {
		margin: 0 auto;
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
</style>
