<script>
	import { changePassword, setNewAuthHeaders, changeForgotPassword, updateGlobalDataObj } from '$lib/api/axios.js';
	import { isFetching } from '$lib/globalStore.js';
	import { slide } from 'svelte/transition';
	import { createForm } from 'svelte-forms-lib';
	import { globalData, verificationId } from '$lib/globalStore';
	import * as yup from 'yup';
	import EyePwIco from '$lib/components/icons/EyePW_ico.svelte';
	import { validatePasswordType } from '$lib/functions/validatePasswordType';
	import { t } from '$lib/translations/i18n.js';
	export let userIsAuth = true;
	export let phoneValue = null;
	export let submitBtnText = $t('CONTINUE');
	let isLoading = false;
	let verifyId = $verificationId;
	$: verifyId;


	const passwordRegEx = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
	const { form, errors, state, handleChange, handleSubmit } = createForm({
		initialValues: {
			password: '',
			confirmPassword: ''
		},
		validationSchema: yup.object().shape({
			password: yup
				.string()
				.min(8, $t('PW_RANGE'))
				.max(16, $t('PW_RANGE'))
				.matches(passwordRegEx, $t('PW_CHARS'))
				.required($t('ENTER_USER_PW')),
			confirmPassword: yup
				.string()
				.min(8, $t('PW_RANGE'))
				.max(16, $t('PW_RANGE'))
				.matches(passwordRegEx, $t('PW_CHARS'))
				.required($t('ENTER_USER_PW'))
				.oneOf([yup.ref('password')], $t('PW_NOT_MATCH'))
		}),
		onSubmit: async (value) => {
			isLoading = true;
			submitBtnText = `${$t('LOADING')}...`;
			$isFetching = true
			if (userIsAuth) {
				const res = await changePassword(value.password, verifyId);
				if (res.status) {
					setNewAuthHeaders(res.data.token);
					await updateGlobalDataObj()
					$$props.submitNewPassword();
				} else {
					$errors.confirmPassword = res.errorMessage;
				}
			} else {
				const res = await changeForgotPassword(phoneValue, value.password, verifyId);
				if (res.status) {
					$$props.submitNewPassword();
				} else {
					$errors.confirmPassword = res.errorMessage;
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
	<div class="input__wrapper">
		<div class="eyeWrapper" on:click|capture={validatePasswordType}>
			<EyePwIco class={$errors.password ? 'error' : ''} />
		</div>
		<input
			type="password"
			class="mb-0_625"
			placeholder={$t('NEW_PASSWORD')}
			class:error={$errors.password}
			autocomplete
			on:change={handleChange}
			on:focus={() => onFocus('password')}
			bind:value={$form.password}
			disabled={isLoading}
		/>
	</div>
	{#if $errors.password}
		<small transition:slide|local class="error_text ">{$errors.password}</small>
	{/if}
	<div class="input__wrapper">
		<div class="eyeWrapper" on:click|capture={validatePasswordType}>
			<EyePwIco class={$errors.password ? 'error' : ''} />
		</div>
		<input
			type="password"
			placeholder={$t('REPEAT_PASSWORD')}
			class:error={$errors.confirmPassword}
			autocomplete
			on:change={handleChange}
			on:focus={() => onFocus('confirmPassword')}
			bind:value={$form.confirmPassword}
			disabled={isLoading}
		/>
	</div>
	{#if $errors.confirmPassword}
		<small transition:slide|local class="error_text last">{$errors.confirmPassword}</small>
	{/if}
	<button class="btn _218" class:is_fetching={$isFetching}>{submitBtnText}</button>
</form>
