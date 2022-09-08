<script>
	import { t } from '$lib/translations/i18n.js';
	import { getModal } from '$lib/components/Modal.svelte';
	import Dropdown from '$lib/components/Dropdown.svelte';
	import { publicApi } from '$lib/api/publicApi';
	import { onMount } from 'svelte';
	import Preloader from '$lib/components/Preloader.svelte';
	import { fade, slide } from 'svelte/transition';
	import {globalData} from '$lib/globalStore'
	import {getGeneralData} from "$lib/api/functions/getGeneralData"
	export let disabledState;
	export let errorState;
	let requrring;
	let requrringArray = [];
	let fullRequrringArray = [];
	let amountValue = null;
	let amountErrorState = false;
	$: requrringArray;

	async function onSubmit() {
		if (amountValue < 20) {
			amountErrorState = true;
			return false;
		} else {
			amountErrorState = false;
			getRecurringData();
			const periodId = getPeriodId(requrring);
			const result = await changeContribution(amountValue, periodId);
			if(result.status){
				$globalData.data.membershipStatus.amount = amountValue;
				getModal('confirm').open()
			}
		}
	}
	function checkInputValue() {
		this.value = this.value.replace(/[^0-9]/g, '');
		if (this.value.length > this.maxLength) {
			this.value = this.value.slice(0, this.maxLength);
		} else if (parseInt(this.value) < 20) {
			this.classList.add('error');
		} else if (parseInt(this.value) >= 20) {
			if (this.classList.contains('error')) {
				this.classList.remove('error');
			}
		}
	}

	async function getRecurringData() {
		const rawResponse = await publicApi('GET', 'getPeriods');
		const response = await rawResponse.json();
		requrringArray = response.data.map((item) => {
			return item.periodName;
		});
		fullRequrringArray = [...response.data];
		console.log(fullRequrringArray);
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
	async function changeContribution(amount, periodId) {
		const data = { amount, periodId };

		let rawResponse = await fetch('/api/manage/changeContribution', {
			method: 'POST',
			headers: {
				accept: 'application/json',
				'Access-Control-Allow-Origin': '*',
				'Access-Control-Allow-Credentials': true
			},
			body: data && JSON.stringify(data)
		});
		return await rawResponse.json();
	}


	onMount(getRecurringData);
</script>

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
			{#if requrringArray.length === 0}
				<div class="relative">
					<Dropdown
						bind:activeItem={requrring}
						itemsData={requrringArray}
						disabled={disabledState || errorState}
					/>
					<div class="absolute d-flex align-center justify-cc">
						<Preloader loaderWidth={2} loaderHeight={2} borderWidth={0.2} />
					</div>
				</div>
			{:else}
				<div in:fade={{ duration: 200, delay: 0 }}>
					<Dropdown
						bind:activeItem={requrring}
						itemsData={requrringArray}
						disabled={disabledState || errorState}
					/>
				</div>
			{/if}
		</div>
	</div>
	<button class="btn confirm" disabled={disabledState || errorState}>{$t('CONFIRM_CHANGES')}</button
	>
</form>

<style>
	form {
		margin: 0.875rem auto 0 auto;
		max-width: 721px;
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
</style>
