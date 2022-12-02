<script>
	import Modal, { getModal } from '$lib/components/Modal.svelte';
	import { modalClassName, confirmModalState } from '../securityStore';
	import LoginPassForm from '$lib/components/forms/LoginPassForm.svelte';
	import VerifyCodeForm from '$lib/components/forms/VerifyCodeForm.svelte';
	import ChangePassForm from '$lib/components/forms/ChangePassForm.svelte';
	import { t } from '$lib/translations/i18n.js';
	import SuccessModal from '$lib/components/modals/SuccessModal.svelte';
	import VerifyEmail from '$lib/components/forms/verify/inputs/VerifyEmail.svelte';
	import VerifyPhone from '$lib/components/forms/verify/inputs/VerifyPhone.svelte';
	let formStep = 1;
	let heading = $t('CHANGE_PASSWORD');

	$: {
		formStep;
		if (formStep === 4) {
			heading = $t('NEW_PASSWORD');
		}
	}
	const login = () => (formStep = 2);
	const submitVerificationCode = () => {};
	const submitNewPassword = () => {
		$confirmModalState = true;
	};
	const closeChangePassModal = () => {
		$confirmModalState = false;
		formStep = 1;
		getModal('change-password').close();
	};
</script>

<Modal id="change-password" className={$modalClassName} resetModalState={() => (formStep = 1)}>
	<div class="modal_main text-center">
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
				<div class=" mt-1">{$t('VERIFY_ACCOUNT')}</div>
				<div class="modal_main-row">
					<VerifyCodeForm submitVerificationCode={() => (formStep = 4)} />
				</div>
			{:else if formStep === 4}
				<div class="modal_main-row">
					<ChangePassForm {submitNewPassword} />
				</div>
			{/if}
		</div>
	</div>
</Modal>
{#if $confirmModalState === true}
	<SuccessModal
		closeModals={closeChangePassModal}
		mainText={$t('PROFILE_PW_CHANDED')}
		btnText={$t('BACK')}
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
