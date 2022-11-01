<script>
	import { isFetching } from '$lib/globalStore.js';
	import { verificationId } from '$lib/globalStore.js';
	import { verifyCode, verifyCodeForgotPassword } from '$lib/api/axios.js';
	import { createForm } from 'svelte-forms-lib';
	import { slide } from 'svelte/transition';
	import * as yup from 'yup';
	import { t } from '$lib/translations/i18n.js';
	import {checkInputNumber} from '$lib/functions/checkInputNumber.js'
	export let userIsAuth = true;
	export let phoneValue = null;
	let submitBtnText = $t('CONTINUE');
	let isLoading = false;
	const { form, errors, state, handleChange, handleSubmit } = createForm({
		initialValues: {
			code: ''
		},
		validationSchema: yup.object().shape({
			code: yup.string().required($t('ENTER_CODE'))
		}),
		onSubmit: async (value) => {
			isLoading = true;
			submitBtnText = `${$t('LOADING')}...`;
			$isFetching = true
			if (userIsAuth) {
				const res = await verifyCode(value.code);
				if (res.status) {
					$verificationId = res.data?.verificationId;
					await $$props.submitVerificationCode();
				} else if (res.errorMessage === 'INTERNAL_VERIFICATION_ERROR') {
					$errors['code'] = $t('WRONG_CODE');
				}
			} else {
				const res = await verifyCodeForgotPassword(value.code, phoneValue);
				if (res.status) {
					$verificationId = res.data?.verificationId;
					await $$props.submitVerificationCode();
				} else if (res.errorMessage === 'INTERNAL_VERIFICATION_ERROR') {
					$errors['code'] = $t('WRONG_CODE');
				}
			}
			$isFetching = false
			isLoading = false;
			submitBtnText = $t('CONTINUE');
		}
	});
	const onFocus = (item) => {
		$errors[item] = '';
	};


</script>

<form on:submit|preventDefault={handleSubmit} class="mt-1_5">
	<input
		type="number"
		placeholder={$t('SETTINGS_VERIFY_CODE')}
		class:error={$errors.code}
		autocomplete
		on:mousewheel={(e) => {
			e.target.blur();
		}}
		on:keydown={checkInputNumber}
		on:keyup={checkInputNumber}
		on:change={handleChange}
		on:focus={() => onFocus('code')}
		bind:value={$form.code}
		disabled={isLoading}
	/>
	{#if $errors.code}
		<small transition:slide|local class="error_text last">{$errors.code}</small>
	{/if}
	<button class="btn _218" class:is_fetching={$isFetching}>{submitBtnText}</button>
</form>
