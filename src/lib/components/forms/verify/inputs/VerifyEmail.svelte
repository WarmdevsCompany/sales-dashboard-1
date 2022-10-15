<script>
	import { requestValidation, forgotPassword } from '$lib/api/axios.js'; 
	import { slide } from 'svelte/transition';
	import { createForm } from 'svelte-forms-lib';
	import * as yup from 'yup';
	import { t } from '$lib/translations/i18n.js';
	import { isFetching } from '$lib/globalStore.js';
	export let submitBtnText = $t('SEND');
	export let userIsAuth = true;
	export let importedEmail = null;
	let isLoading = false;
	const { form, errors, state, handleChange, handleSubmit } = createForm({
		initialValues: {
			email: ''
		},
		validationSchema: yup.object().shape({
			email: yup.string().email().required($t('ENTER_EMAIL'))
		}),
		onSubmit: async (value) => {
			isLoading = true;
			submitBtnText = `${$t('LOADING')}...`;
			$isFetching = true
			if (userIsAuth) {
				const res = await requestValidation(value.email);
				if (res.status) {
					$$props.sendVerifyCallback();
				}
			}else {
				const res = await forgotPassword(value.email);
				if (res.status) {
					importedEmail = value.email
					$$props.sendVerifyCallback();
				}else if (res.errorMessage === "FAILED_TO_FIND_USER"){
					$errors['email'] = $t('USER_NOT_FOUND')
				 }
			}
			$isFetching = 
			isLoading = false;
			submitBtnText = $t('SEND');
		}
	});
	const onFocus = (item) => {
		$errors[item] = '';
	};
</script>

<form on:submit|preventDefault={handleSubmit} class="mt-1_5">
	<input
		type="email"
		placeholder="Email"
		class:error={$errors.email}
		autocomplete
		on:change={handleChange}
		on:focus={() => onFocus('email')}
		bind:value={$form.email}
		disabled={isLoading}
	/>
	{#if $errors.email}
		<small transition:slide|local class="error_text last">{$errors.email}</small>
	{/if}
	<button class="btn _218" class:is_fetching={$isFetching}>{submitBtnText}</button>
</form>
