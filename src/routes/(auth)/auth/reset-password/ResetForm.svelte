<script>
	import { goto } from '$app/navigation';
	import { t } from '$lib/translations/i18n.js';
	import ChangePassForm from '$lib/components/forms/ChangePassForm.svelte';
	import VerifyCodeForm from '$lib/components/forms/VerifyCodeForm.svelte';
	import SuccessModal from '$lib/components/modals/SuccessModal.svelte';
	import VerifyPhone from '$lib/components/forms/verify/inputs/VerifyPhone.svelte';
	let verifyBtnText = $t('RESET_PASSWORD');
	let formStep = 1;
	let phone;
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
		<VerifyPhone submitBtnText={verifyBtnText} sendVerifyCallback={verifyEmail} userIsAuth={false} bind:importedPhone={phone}/>
	{:else if formStep === 2}
		<VerifyCodeForm submitVerificationCode={verifyCode} phoneValue={phone} userIsAuth={false}/>
	{:else if formStep === 3}
		<ChangePassForm {submitNewPassword} phoneValue={phone} userIsAuth={false}/>
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
