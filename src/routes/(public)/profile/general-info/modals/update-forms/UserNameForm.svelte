<script>
	import { setNewAuthHeaders, changeUserName } from '$lib/api/axios';
	import { globalData, verificationId } from '$lib/globalStore';
	import { slide } from 'svelte/transition';
	import { createForm } from 'svelte-forms-lib';
	import * as yup from 'yup';
	import { confirmModalState } from '../../profileStore';
	import { t } from '$lib/translations/i18n.js';
	export let submitBtnText = $t('CONTINUE');
	let isLoading = false;
	let verifyId = $verificationId;
	$: verifyId;


	const { form, errors, state, handleChange, handleSubmit } = createForm({
		initialValues: {
			userName: ''
		},
		validationSchema: yup.object().shape({
			userName: yup
				.string()
				.min(3, $t('USER_NAME_RANGE'))
				.max(20, $t('USER_NAME_RANGE'))
				.required($t('ENTER_USER_NAME'))
		}),
		onSubmit: async (value) => {
			isLoading = true;
			submitBtnText = `${$t('LOADING')}...`;
			let res = await changeUserName(value.userName, verifyId);
			console.log(res)
			if (res.status) {
				setNewAuthHeaders(res.status)
				$confirmModalState = true;
				$globalData.data.personalInfo.username = value.userName;
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

<div class=" mt-1">{$t('CHANGE_USER_NAME')}</div>
<div class="modal_main-row">
	<form on:submit|preventDefault={handleSubmit} class="mt-1_5">
		<input
			type="text"
			placeholder={$t('ENTER_USER_NAME')}
			class:error={$errors.userName}
			autocomplete
			on:change={handleChange}
			on:focus={() => onFocus('userName')}
			bind:value={$form.userName}
			disabled={isLoading}
		/>
		{#if $errors.userName}
			<small transition:slide|local class="error_text last">{$errors.userName}</small>
		{/if}
		<button class="btn _218">{submitBtnText}</button>
	</form>
</div>
