<script>
	import greenLogo from '$lib/assets/img/logo-green.svg';
	import Modal, { getModal } from '$lib/components/Modal.svelte';
	import { modalClassName, confirmModalState, profileEditForm } from '../profileStore';
	import { fade } from 'svelte/transition';
	import closeIcon from '$lib/assets/img/close.svg';
	import FirstNameForm from './update-forms/FirstAndLastNamesForm.svelte';
	import UserNameForm from './update-forms/UserNameForm.svelte';
	import EmailForm from './update-forms/EmailForm.svelte';
	import GenderForm from './update-forms/GenderForm.svelte';
	import DateOfBirthForm from './update-forms/DateOfBirthForm.svelte';
	import LoginPassForm from '$lib/components/forms/LoginPassForm.svelte';
	import VerifyCodeForm from '$lib/components/forms/VerifyCodeForm.svelte';
	import { t } from '$lib/translations/i18n.js';
	import SuccessModal from '$lib/components/forms/SuccessModal.svelte';
	import VerifyEmail from '$lib/components/forms/verify/inputs/VerifyEmail.svelte';
	import FirstAndLastNamesForm from './update-forms/FirstAndLastNamesForm.svelte';

	let formStep = 1;

	$: formStep;
	const login = () => (formStep = 2);
	const submitVerificationCode = () => {};
	const submitNewName = () => {
		$confirmModalState = true;
	};
	const closeGeneralModal = () => {
		$confirmModalState = false;
		formStep = 1;
		getModal('general-info').close();
	};
</script>

<Modal id="general-info" className={$modalClassName} resetModalState={()=> formStep = 1}>
	<div class="modal_main text-center">
		<img src={greenLogo} alt="esi logo img" />
		<div class="modal_head_medium text-1">{$t('WELCOME')}</div>
		<div class="modal_main-body ">
			{#if formStep === 1}
				<div class=" mt-1">{$t('VERIFY_ACCOUNT')}</div>

				<LoginPassForm authDataCallback={login} />
			{:else if formStep === 2}
				<div class="mt-1">{$t('VERIFY_ACCOUNT')}</div>
				<div class="modal_main-row">
					<VerifyEmail sendVerifyCallback={() => (formStep = 3)} />
				</div>
			{:else if formStep === 3}
				<div class=" mt-1">{$t('VERIFY_ACCOUNT')}</div>
				<div class="modal_main-row">
					<VerifyCodeForm submitVerificationCode={() => (formStep = 4)} />
				</div>
			{:else if formStep === 4}
				{#if $profileEditForm === 'userName'}
					<UserNameForm submitChanges={submitNewName} />
				{:else if $profileEditForm === 'firstAndLastName'}
					<FirstAndLastNamesForm submitChanges={submitNewName} />
				{:else if $profileEditForm === 'gender'}
					<GenderForm submitChanges={submitNewName} />
				{:else if $profileEditForm === 'dob'}
					<DateOfBirthForm submitChanges={submitNewName} />
				{:else if $profileEditForm === 'email'}
					<EmailForm submitChanges={submitNewName} />
				{/if}
			{/if}
		</div>
	</div>
</Modal>
{#if $confirmModalState === true}
	<SuccessModal closeModals={closeGeneralModal} />
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

	input {
		transition: none;
	}
</style>
