<script>
	import { goto } from '$app/navigation';
	import VerifyEmail from '$lib/components/forms/verify/inputs/VerifyEmail.svelte';
	import { t } from '$lib/translations/i18n.js';
	import ChangePassForm from '$lib/components/forms/ChangePassForm.svelte';
	import VerifyCodeForm from '$lib/components/forms/VerifyCodeForm.svelte';
	import SuccessModal from '$lib/components/modals/SuccessModal.svelte';
	let verifyBtnText = $t('RESET_PASSWORD');
	let formStep = 1;
	let email;
	$: formStep;
	let successFormStatus = false;
	function returnToLogin() {
		goto('/auth/login');
	}
	function verifyEmail() {
		formStep = 2;
	}
	function verifyCode() {
		formStep = 3;
	}
	function submitNewPassword() {
		successFormStatus = true;
	}
</script>

<div class="verify_wrapper">
	{#if formStep === 1}
		<VerifyEmail submitBtnText={verifyBtnText} sendVerifyCallback={verifyEmail} userIsAuth={false} bind:importedEmail={email}/>
	{:else if formStep === 2}
		<VerifyCodeForm submitVerificationCode={verifyCode} emailValue={email} userIsAuth={false}/>
	{:else if formStep === 3}
		<ChangePassForm {submitNewPassword} emailValue={email} userIsAuth={false}/>
	{/if}
	{#if successFormStatus}
		<SuccessModal
			closeModals={returnToLogin}
			mainText={$t('PROFILE_PW_CHANDED')}
			btnText={$t('BACK')}
		/>
	{/if}
</div>

<style>
	.verify_wrapper {
		width: 100%;
		max-width: 360px;
	}
</style>
