<script>
	import { requestValidation, forgotPassword } from '$lib/api/axios.js';
	import { slide } from 'svelte/transition';
	import { createForm } from 'svelte-forms-lib';
	import * as yup from 'yup';
	import { t } from '$lib/translations/i18n.js';
	import { isFetching } from '$lib/globalStore.js';
	export let submitBtnText = $t('SEND');
	export let userIsAuth = true;
	export let importedPhone = null;
	let isLoading = false;
	const { form, errors, handleChange, handleSubmit } = createForm({
		initialValues: {
			phone: ''
		},
		validationSchema: yup.object().shape({
			phone: yup.number().min(5, $t('PHONE_MIN_LENGTH')).required($t('PHONE_IS_REQUIRED'))
		}),
		onSubmit: async (value) => {
			isLoading = true;
			submitBtnText = `${$t('LOADING')}...`;
			$isFetching = true;

			
			if (userIsAuth) {
				const res = await requestValidation(value.phone);
				if (res.status) {
					$$props.sendVerifyCallback();
				} else if (res.errorMessage === 'INVALID_CONTACT_DATA') {
					$errors['phone'] = $t('INVALID_CONTACT_DATA');
				}
			} else {
				const res = await forgotPassword(value.phone);
				console.log("res",res)
				if (res.status) {
					importedPhone = value.phone;
					$$props.sendVerifyCallback();
				} else if (res.errorMessage === 'FAILED_TO_FIND_USER') {
					$errors['email'] = $t('USER_NOT_FOUND');
				}
			}

			$isFetching = false;
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
		type="text"
		placeholder={$t('PHONE')}
		class:error={$errors.phone}
		autocomplete
		on:change={handleChange}
		on:focus={() => onFocus('phone')}
		bind:value={$form.phone}
		disabled={isLoading}
	/>
	{#if $errors.phone}
		<small transition:slide|local class="error_text last">{$errors.phone}</small>
	{/if}
	<button class="btn _218" class:is_fetching={$isFetching}>{submitBtnText}</button>
</form>
