<script>
	import { t } from '$lib/translations/i18n.js';
	import { getModal } from '$lib/components/Modal.svelte';
	import Dropdown from '$lib/components/Dropdown.svelte';
	import { publicApi } from '$lib/api/publicApi';
	import { onMount } from 'svelte';
	import Preloader from '$lib/components/Preloader.svelte';
	import { fade, slide } from 'svelte/transition';
	import { globalData } from '$lib/globalStore';
	import { changeContribution } from '$lib/api/axios';
	export let disabledState;
	export let errorState;

	let requrring = $globalData.data.current_contribution.periodName
	let requrringArray = [];
	let fullRequrringArray = [];
	let amountValue = $globalData.data.current_contribution.amount || null;
	let amountErrorState = false;
	$: requrringArray, amountErrorState;

	requrringArray = $globalData.periods.map((item) => {
		return item.periodName;
	});
	fullRequrringArray = [...$globalData.periods];

	async function onSubmit() {
		if (amountValue < 20) {
			amountErrorState = true;
			return false;
		} else {
			amountErrorState = false;
			const periodId = getPeriodId(requrring);

			const result = await changeContribution(amountValue, periodId);
			console.log(result);
			if (result.status) {
				$globalData.data.membershipStatus.amount = amountValue;
				$globalData.data.membershipStatus.greenSafeTotal = amountValue;
				getModal('confirm').open();
			}
		}
	}
	function checkInputValue() {
		this.value = this.value.replace(/[^0-9]/g, '');
		if (this.value.length > this.maxLength) {
			this.value = this.value.slice(0, this.maxLength);
		} else if (parseInt(this.value) < 20) {
			this.classList.add('error');
			amountErrorState = true
		} else if (parseInt(this.value) >= 20) {
			if (this.classList.contains('error')) {
				this.classList.remove('error');
				amountErrorState = false
			}
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
	<div class="input__wrapper">
		<label for="amount" class="label">{$t('MANAGE_AMOUNT')}</label>
		<input
			type="number"
			id="amount"
			class:error={amountErrorState}
			placeholder="0"
			min="20"
			max="9999"
			maxlength="4"
			disabled={disabledState || errorState}
			on:mousewheel={(e) => {
				e.target.blur();
			}}
			on:input={checkInputValue}
			bind:value={amountValue}
		/>
		<small />
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
	<button class="btn confirm" disabled={disabledState || errorState}>{$t('CONFIRM_CHANGES')}</button
	>
</form>
<p class="text-left mt-1 text-xsm " class:error_text={amountErrorState}>*Min. $20 and $9,999 Total contribution</p>
</div>



<style>
	.form_wrapper{
		margin: 0.875rem auto 0 auto;
		max-width: 721px;
	}
	form {
		
	}
	.dropdown__wrapper {
		min-width: 207px;
	}
	.input__wrapper {
		max-width: 207px;
	}
	input[type='number'] {
		min-width: 207px;
	}
	input.error::placeholder {
		color: var(--red-color);
	}
	::placeholder {
		color: var(--green-dark-medium);
	}
	.absolute {
		position: absolute;
		top: 0;
		z-index: 2;
		background-color: var(--white);
		width: 100%;
		height: 100%;
		border-radius: 10px;
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
		input[type='number'],
		.dropdown__wrapper {
			min-width: 0;
		}
	}
</style>
