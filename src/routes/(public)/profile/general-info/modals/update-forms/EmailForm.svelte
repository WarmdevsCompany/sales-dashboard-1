<script>
	import { slide } from 'svelte/transition';
	import { createForm } from 'svelte-forms-lib';
	import * as yup from 'yup';
	import { confirmModalState } from '../../profileStore';
	import { globalData, verificationId, isFetching } from '$lib/globalStore';
	import { t } from '$lib/translations/i18n.js';
	import { changeEmail, setNewAuthHeaders, updateGlobalDataObj } from '$lib/api/axios.js';
	export let submitBtnText = $t('CONTINUE');
	let isLoading = false;
	let verifyId = $verificationId;
	$: verifyId;

	const emailrRegEx =
		/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

	const { form, errors, state, handleChange, handleSubmit } = createForm({
		initialValues: {
			email: ''
		},
		validationSchema: yup.object().shape({
			email: yup.string().matches(emailrRegEx, $t('INCORRECT_EMAIL')).required($t('ENTER_EMAIL'))
		}),
		onSubmit: async (value) => {
			isLoading = true;
			submitBtnText = `${$t('LOADING')}...`;
			$isFetching = true 
			let res = await changeEmail(value.email, verifyId);
			if (res.status) {
				setNewAuthHeaders(res.data.token);
				await updateGlobalDataObj()
				$confirmModalState = true;
				$$props.submitChanges();
			} else if (res.errorMessage === 'EMAIL_ALREADY_EXISTS') {
				$errors['email'] = $t('EMAIL_ALREADY_EXISTS');
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

<div class=" mt-1">{$t('CHANGE_EMAIL')}</div>
<div class="modal_main-row">
	<form on:submit|preventDefault={handleSubmit} class="mt-1_5">
		<input
			type="text"
			placeholder={$t('NEW_EMAIL')}
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
</div>
