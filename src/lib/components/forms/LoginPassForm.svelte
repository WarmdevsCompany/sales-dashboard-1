<script>
	import { goto } from '$app/navigation';
	import { verifyAccount } from '$lib/api/axios.js';
	import { validatePasswordType } from '$lib/functions/validatePasswordType';
	import { fade, slide } from 'svelte/transition';
	import EyePwIco from '../icons/EyePW_ico.svelte';
	import { createForm } from 'svelte-forms-lib';
	import * as yup from 'yup';
	import { t } from '$lib/translations/i18n.js';
	import { isFetching } from '$lib/globalStore.js';
	let buttonText = $t('LOGIN');
	let isLoading = false;
	let errorMessages = null;
	const { form, errors, state, handleChange, handleSubmit } = createForm({
		initialValues: {
			userName: '',
			password: ''
		},
		validationSchema: yup.object().shape({
			userName: yup.string().required($t('ENTER_USER_NAME')),
			password: yup.string().required($t('ENTER_USER_PW'))
		}),
		onSubmit: async (values) => {
			isLoading = true;
			buttonText = `${$t('LOADING')}...`;
			$isFetching = true;
			const body = {
				login: values.userName,
				password: values.password
			};

			let res = await verifyAccount(body);
			if (res.status) {
				$$props.authDataCallback();
			} else if (res.status === false) {
				const statusId = res.data?.status;
				isLoading = false;
				if (res.errorMessage === 'INVALID_PASSWORD') {
					errorMessages = $t('INVALID_PASSWORD');
				} else if (res.errorMessage === 'USER_NOT_FOUND') {
					errorMessages = $t('USER_NOT_FOUND');
				} else if (res.errorMessage === 'ACCOUNT_BLOCKED') {
					errorMessages = $t('ACCOUNT_BLOCKED');
					goto('/blocked');
				}
				if ((statusId === 5237003, statusId === 5237004)) goto('/blocked');
			}
			$isFetching = false;
			buttonText = $t('LOGIN');
		}
	});
	const onFocus = (item) => {
		$errors[item] = '';
		errorMessages = null;
	};
</script>

<form on:submit|preventDefault={handleSubmit} class="mt-1_5">
	<input
		type="text"
		placeholder={$t('USER_NAME')}
		class="mb-0_625"
		class:error={$errors.userName}
		autocomplete
		on:change={handleChange}
		on:focus={() => onFocus('userName')}
		bind:value={$form.userName}
		disabled={isLoading}
	/>
	{#if $errors.userName}
		<small transition:slide|local class="error_text">{$errors.userName}</small>
	{/if}
	<div class="input__wrapper">
		<div class="eyeWrapper" on:click|capture={validatePasswordType}>
			<EyePwIco class={$errors.password ? 'error' : ''} />
		</div>
		<input
			type="password"
			placeholder={$t('PW')}
			class:error={$errors.password}
			autocomplete
			on:change={handleChange}
			on:focus={() => onFocus('password')}
			bind:value={$form.password}
			disabled={isLoading}
		/>
	</div>
	{#if $errors.password}
		<small transition:slide|local class="error_text last">{$errors.password}</small>
	{/if}
	{#if errorMessages}
		<small transition:slide|local class="error_text last">{errorMessages}</small>
	{/if}

	<div class="form__bottom d-flex justify-sb">
		<button class="btn login" class:is_fetching={$isFetching}>{buttonText}</button>
	</div>
</form>

<style>
	.btn.login {
		width: 229px;

		margin: 0 0 0 auto;
		transition: none;
	}

	.form__bottom {
		margin-top: 2.125rem;
	}
	@media only screen and (max-width: 991px) {
		.btn.login {
			width: 100%;
		}
	}
</style>
