<script>
	import { isFetching } from '$lib/globalStore.js';
	import { validatePasswordType } from '$lib/functions/validatePasswordType';
	import { slide } from 'svelte/transition';
	import EyePwIco from '$lib/components/icons/EyePW_ico.svelte';
	import { createForm } from 'svelte-forms-lib';
	import * as yup from 'yup';
	import { t } from '$lib/translations/i18n.js';
	import { login } from '$lib/api/axios';

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
			try {
				buttonText = `${$t('LOADING')}...`;
				isLoading = true;
				$isFetching = true;

				let res = await login({ login: values.userName, password: values.password });
				if (res?.status === false) {
					isLoading = false;
					const statusId = res.data?.status;
					if (res.errorMessage === 'INVALID_PASSWORD') {
						errorMessages = $t('INVALID_PASSWORD');
					} else if (res.errorMessage === 'USER_NOT_FOUND') {
						errorMessages = $t('USER_NOT_FOUND');
					} else if (res.errorMessage === 'ACCOUNT_CLOSED') {
						errorMessages = $t('ACCOUNT_CLOSED');
					} else if (res.errorMessage === 'ACCOUNT_BLOCKED') {
						errorMessages = $t('ACCOUNT_BLOCKED');
					}
					if ((statusId === 5237003, statusId === 5237004)) goto('/blocked');
					buttonText = $t('LOGIN');
					$isFetching = false;
				}
			} catch (e) {
				buttonText = $t('LOGIN');
				$isFetching = false;
				errorMessages = e;
			}
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
	<div class="d-flex justify-sb align-center">
		<div class="forgot__pass">
			<a href="/auth/reset-password" class="forgot__btn">{$t('FORGOT_PW')}</a>
		</div>
	</div>
	<div class="login__btn__wrapper d-flex justify-sb align-center ">
		<div class="register">
			<a href="/auth/register" class="btn sign_up">Sign Up</a>
		</div>
		<button class="btn login" class:is_fetching={$isFetching}>{buttonText}</button>
	</div>
</form>

<style>
	form {
		width: 100%;
		max-width: 587px;
		color: var(--text-color);
	}
	.btn.login {
		width: 229px;
		margin: 0 0 0 auto;
		transition: none;
	}
	.register .sign_up {
		background: transparent;
		color: #006eff;
		font-weight: 500;
		border: 1px solid #006eff;
	}

	.forgot__btn {
		appearance: none;
		border: none;
		background-color: transparent;
		padding: 0;
		width: auto;
		margin: 0;
		color: #ababab;
		font-weight: var(--font-weight-normal);
	}
	.login__btn__wrapper {
		margin-top: 1rem;
	}
	.register__head {
		font-weight: var(--font-weight-medium);
	}
	.register a {
		font-weight: var(--font-weight-bolder);
	}
	@media only screen and (max-width: 991px) {
		.btn.login {
			width: 100%;
			max-width: 49%;
		}
		.register__head {
			font-size: 80%;
		}
		.register {
			width: 100%;
			max-width: 49%;
			margin-right: 2rem;
		}
	}
	@media only screen and (max-width: 480px) {
		.btn.login {
			width: 100%;
			max-width: 100%;
		}
		.register__head {
			font-size: 80%;
		}
		.register {
			width: 100%;
			max-width: 100%;
			margin-right: 0rem;
			display: flex;
			justify-content: space-between;
			padding-bottom: 1rem;
		}
		.login__btn__wrapper {
			flex-direction: column;
		}
	}
</style>
