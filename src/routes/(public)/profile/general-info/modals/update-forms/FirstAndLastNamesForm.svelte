<script>
	import { changeFirstAndLastname, setNewAuthHeaders } from '$lib/api/axios.js';
	import { t } from '$lib/translations/i18n.js';
	import { globalData, verificationId } from '$lib/globalStore';
	import { slide } from 'svelte/transition';
	import { createForm } from 'svelte-forms-lib';
	import * as yup from 'yup';
	import { confirmModalState } from '../../profileStore';
	export let submitBtnText = $t('CONTINUE');
	let isLoading = false;
	let verifyId = $verificationId;
	$: verifyId;

	const { form, errors, state, handleChange, handleSubmit } = createForm({
		initialValues: {
			firstName: '',
			lastName: ''
		},
		validationSchema: yup.object().shape({
			firstName: yup
				.string()
				.min(3, $t('FIRST_NAME_MIN'))
				.max(20, $t('FIRST_NAME_MAX'))
				.required($t('ENTER_FIRST_NAME')),
			lastName: yup
				.string()
				.min(3, $t('LAST_NAME_MIN'))
				.max(20, $t('LAST_NAME_MAX'))
				.required($t('ENTER_LAST_NAME'))
		}),
		onSubmit: async (value) => {
			isLoading = true;
			submitBtnText = `${$t('LOADING')}...`;
			let res = await changeFirstAndLastname(value.firstName, value.lastName, verifyId);
			if (res.status) {
				setNewAuthHeaders(res.data.token);
				$confirmModalState = true;
				$globalData.data.personalInfo.firstname = value.firstName;
				$globalData.data.personalInfo.lastname = value.lastName;
				$$props.submitChanges();
			}
			isLoading = false;
			submitBtnText = $t('CONTINUE');
		}
	});
	const onFocus = (item) => {
		$errors[item] = '';
	};
</script>

<div class=" mt-1">{$t('PROFILE_NAMES_CHANGE')}</div>
<div class="modal_main-row">
	<form on:submit|preventDefault={handleSubmit} class="mt-1_5">
		<input
			type="text"
			placeholder={$t('PROFILE_EDIT_FN')}
			class="mb-0_625"
			class:error={$errors.firstName}
			autocomplete
			on:change={handleChange}
			on:focus={() => onFocus('firstName')}
			bind:value={$form.firstName}
			disabled={isLoading}
		/>
		{#if $errors.firstName}
			<small transition:slide|local class="error_text last">{$errors.firstName}</small>
		{/if}
		<input
			type="text"
			placeholder={$t('PROFILE_EDIT_LN')}
			class:error={$errors.lastName}
			autocomplete
			on:change={handleChange}
			on:focus={() => onFocus('lastName')}
			bind:value={$form.lastName}
			disabled={isLoading}
		/>
		{#if $errors.lastName}
			<small transition:slide|local class="error_text last">{$errors.lastName}</small>
		{/if}
		<button class="btn _218">{$t('CONTINUE')}</button>
	</form>
</div>
