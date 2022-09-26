<script>
	import { globalData, verificationId } from '$lib/globalStore.js';
	import flatpickr from 'flatpickr';
	import { onMount } from 'svelte';
	import { t } from '$lib/translations/i18n.js';
	import { changeDOB } from '$lib/api/axios';
	import { slide } from 'svelte/transition';
	import { underAgeValidate } from '$lib/functions/validateAge';
	let datePicker;
	let selectedDate = null;
	let submitBtnText = $t('CONTINUE');
	let isLoading = false;
	let verifyId = $verificationId;
	let dobError = null;
	$: verifyId;
	$: datePicker;
	onMount(() => {
		flatpickr(datePicker, {
			onChange: function (selectedDates, dateStr, instance) {
				selectedDate = dateStr;
			},
			defaultDate: selectedDate || null
		});
	});

	const submitFormData = async () => {
		if (selectedDate) {
			const validateDOB = underAgeValidate(selectedDate);
			if (!validateDOB) {
				dobError = $t('DATE_OF_BIRTH_YEARS');
			} else {
				isLoading = true;
				submitBtnText = `${$t('LOADING')}...`;
				const res = await changeDOB(selectedDate, verifyId);
				if (res.status) {
					$globalData.data.personalInfo.dob = new Date(selectedDate).getTime() / 1000
					$$props.submitChanges();
				}
				isLoading = false;
				submitBtnText = $t('CONTINUE');
			}
		} else {
			dobError = $t('DATE_OF_BIRTH_EMPTY');
		}
	};
</script>

<div class=" mt-1">{$t('CHANGE_DATE_OF_BIRTH')}</div>
<div class="modal_main-row">
	<form on:submit|preventDefault={submitFormData} class="mt-1_5">
		<div class="input-sv small date-input">
			<input
				class="date"
				bind:this={datePicker}
				on:focus={() => (dobError = null)}
				placeholder={selectedDate || `${$t('DATE_OF_BIRTH')}*`}
				disabled={isLoading}
			/>
		</div>
		{#if dobError}
			<small transition:slide|local class="error_text last">{dobError}</small>
		{/if}
		<button class="btn _218">{$t('CONTINUE')}</button>
	</form>
</div>

<style>
	.date-input {
		position: relative;
		padding: 0;
	}
	input.date {
		text-align: left;
	}
	input.date::placeholder {
		color: #000;
	}
	input.date:before {
		color: #000;
		content: attr(placeholder) !important;
		display: block;
		padding: 23px 30px;
	}
</style>
