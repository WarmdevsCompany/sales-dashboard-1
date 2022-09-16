<script>
	import { globalData } from '$lib/globalStore';
	import { slide } from 'svelte/transition';
	import { createForm } from 'svelte-forms-lib';
	import * as yup from 'yup';
	import { confirmModalState } from '../../profileStore';
	import { t } from '$lib/translations/i18n.js';

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
		onSubmit: (value) => {
			$confirmModalState = true;
			$globalData.data.personalInfo.username = value.userName
			$$props.submitChanges();
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
		/>
		{#if $errors.userName}
			<small transition:slide|local class="error_text last">{$errors.userName}</small>
		{/if}
		<button class="btn _218">{$t('CONTINUE')}</button>
	</form>
</div>
