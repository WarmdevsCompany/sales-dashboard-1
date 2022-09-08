<script>
	import { t } from '$lib/translations/i18n.js';
	import { getModal } from '$lib/components/Modal.svelte';
	import Dropdown from '$lib/components/Dropdown.svelte';
	export let disabledState;
	export let errorState;
	let requrring;
	let amountValue;
	function onSubmit() {
		console.log('Form submited');
		console.log(requrring);
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
</script>

<form on:submit|preventDefault={onSubmit} class="d-flex justify-sb align-bottom">
	<div class="input__wrapper">
		<label for="amount" class="label">{$t('MANAGE_AMOUNT')}</label>
		<input
			type="number"
			id="amount"
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
	</div>
	<div class="input__wrapper">
		<div class="dropdown__label label">{$t('MANAGE_RECURRING')}</div>
		<div class="dropdown__wrapper ">
			<Dropdown
				bind:activeItem={requrring}
				itemsData={[$t('MONTHLY'), $t('BI_MONTHLY')]}
				disabled={disabledState || errorState}
			/>
		</div>
	</div>
	<button
		class="btn confirm "
		on:click={() => getModal('confirm').open()}
		disabled={disabledState || errorState}>{$t('CONFIRM_CHANGES')}</button
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
	input[type="number"]{
		min-width: 207px;
	}
	input.error::placeholder{
		color: var(--red-color);
	}
	::placeholder {
		color: var(--green-dark-medium);
	}
	
</style>
