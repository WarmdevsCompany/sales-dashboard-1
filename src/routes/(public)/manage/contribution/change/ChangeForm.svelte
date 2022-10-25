<script>
	import { fade } from 'svelte/transition';
	import { checkInputValue } from '$lib/functions/checkInputNumber.js';
	import { t } from '$lib/translations/i18n.js';
	import { isFetching } from '$lib/globalStore.js';
	import { getModal } from '$lib/components/Modal.svelte';
	import Dropdown from '$lib/components/Dropdown.svelte';
	import { globalData } from '$lib/globalStore';
	import { changeContribution, updateGlobalDataObj } from '$lib/api/axios';
	export let disabledState;
	export let errorState;

	let requrring = $globalData.data.current_contribution?.periodName || 'Monthly';
	let requrringArray = [];
	let fullRequrringArray = [];
	let amountValue = $globalData.data.current_contribution?.amount || 0;
	let amountErrorState = false;
	let confirnBtnText = $t('CONFIRM_CHANGES');
	let dbValidationError = false;
	$: requrringArray, amountErrorState;

	requrringArray = $globalData.data.periods.map((item) => {
		return item.periodName;
	});
	fullRequrringArray = [...$globalData.data.periods];

	async function onSubmit() {
		if (amountValue < 20) {
			amountErrorState = true;
			return false;
		} else {
			amountErrorState = false;
			confirnBtnText = `${$t('LOADING')}...`;
			$isFetching = true;
			const periodId = getPeriodId(requrring);

			const result = await changeContribution(amountValue, periodId);
			if (result.status) {
				await updateGlobalDataObj();
				getModal('confirm').open();
				setTimeout(() => {
					confirnBtnText = $t('CONFIRM_CHANGES');
				}, 200);
			} else {
				dbValidationError = result.errorMessage;
				setTimeout(() => {
					dbValidationError = false;
				}, 5000);
			}
			$isFetching = false;
		}
	}

	function getPeriodId(periodName) {
		let periodId;
		fullRequrringArray.forEach((item) => {
			if (item.periodName === periodName) {
				periodId = item.periodId;
			}
		});
		return periodId;
	}
</script>

<div class="form_wrapper">
	<form on:submit|preventDefault={onSubmit} class="d-flex justify-sb align-bottom">
		<div class="input__wrapper ">
			<label for="amount" class="label">{$t('MANAGE_AMOUNT')}</label>
			<input
				type="text"
				id="amount"
				class:error={amountValue < 20}
				placeholder=""
				min="20"
				max="9999"
				inputmode="decimal"
				maxlength="6"
				disabled={disabledState || errorState}
				on:mousewheel={(e) => {
					e.target.blur();
				}}
				on:input={checkInputValue}
				bind:value={amountValue}
			/>
			{#if amountValue < 20}
				<p transition:fade|local class="text-left text-xsm error_text amount__error">
					{$t('MANAGE_AMOUNT_ERROR')}
					{$globalData.data.currency.symbol}
				</p>
			{/if}
			{#if dbValidationError}
				<p transition:fade|local class="text-left text-xsm error_text amount__error">
					{dbValidationError}
				</p>
			{/if}
		</div>
		<div class="input__wrapper">
			<div class="dropdown__label label">{$t('MANAGE_RECURRING')}</div>
			<div class="dropdown__wrapper ">
				<div>
					<Dropdown
						bind:activeItem={requrring}
						itemsData={requrringArray}
						disabled={disabledState || errorState}
					/>
				</div>
			</div>
		</div>
		<button
			class="btn confirm"
			disabled={disabledState || errorState}
			class:is_fetching={$isFetching}>{confirnBtnText}</button
		>
	</form>
</div>

<style>
	.form_wrapper {
		margin: 0.875rem auto 0 auto;
		max-width: 721px;
	}
	.dropdown__wrapper {
		min-width: 207px;
	}
	.input__wrapper {
		max-width: 207px;
	}
	input {
		min-width: 207px;
	}
	input.error::placeholder {
		color: var(--red-color);
	}
	::placeholder {
		color: var(--green-dark-medium);
	}
	.amount__error {
		position: absolute;
		bottom: -35px;
		left: 5px;
	}

	@media only screen and (min-width: 992px) and (max-width: 1199px) {
		form {
			gap: 1vw;
			grid-gap: 1vw;
		}
		.input__wrapper {
			width: 100%;
			max-width: 28%;
		}
		input,
		.dropdown__wrapper {
			min-width: 0;
		}
	}
	@media only screen and (max-width: 991px) {
		form {
			display: block;
		}
		.input__wrapper {
			max-width: 100%;
		}
		.confirm {
			margin-top: 2rem;
			width: 100%;
		}
		.dropdown__label {
			padding-top: 18px;
		}
		.amount__error {
			padding-top: 0.5rem;
			margin-bottom: 0;
			position: static;
		}
	}
</style>
