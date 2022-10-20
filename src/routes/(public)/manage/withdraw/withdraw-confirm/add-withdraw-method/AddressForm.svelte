<script>
	import DisabledDropdown from '$lib/components/DisabledDropdown.svelte';
	import { t } from '$lib/translations/i18n.js';
	import { slide } from 'svelte/transition';
	export let userCountry = 'United States',
		activeCurrency = 'USD',
		form,
		errors,
		handleChange,
		isLoading;
	let isRequiredAddressDate = true;
	let placeholders = {
		state: $t('STATE'),
		zipCode: $t('ZIP'),
		city: $t('CITY'),
		address: $t('ADDRESS')
	};
	$: {
		if (activeCurrency === 'EUR') {
			isRequiredAddressDate = false;
		}
	}
	const onFocus = (item) => {
		$errors[item] = '';
	};
</script>

<div class="mt-2_5">
	<p class="text-left ">{$t('MANAGE_ENTER_ADDRESS')}</p>
	<div class="grid-2 mt-0_5">
		<DisabledDropdown text={userCountry} />
		<div class="input__wrapper">
			<input
				type="text"
				placeholder={isRequiredAddressDate ? placeholders.state + '*' : placeholders.state}
				class:error={$errors.state}
				autocomplete
				on:change={handleChange}
				on:focus={() => onFocus('state')}
				bind:value={$form.state}
				disabled={isLoading}
			/>
			{#if $errors.state}
				<small transition:slide|local class="error_text mt-0_5">{$errors.state}</small>
			{/if}
		</div>
	</div>

	<div class="grid-2 mt-1">
		<div class="input__wrapper">
			<input
				type="number"
				placeholder={isRequiredAddressDate ? placeholders.zipCode + '*' : placeholders.zipCode}
				class:error={$errors.zipCode}
				autocomplete
				on:change={handleChange}
				on:focus={() => onFocus('zipCode')}
				bind:value={$form.zipCode}
				disabled={isLoading}
			/>
			{#if $errors.zipCode}
				<small transition:slide|local class="error_text mt-0_5">{$errors.zipCode}</small>
			{/if}
		</div>
		<div class="input__wrapper">
			<input
				type="text"
				placeholder={isRequiredAddressDate ? placeholders.city + '*' : placeholders.city}
				class:error={$errors.city}
				autocomplete
				on:change={handleChange}
				on:focus={() => onFocus('city')}
				bind:value={$form.city}
				disabled={isLoading}
			/>
			{#if $errors.city}
				<small transition:slide|local class="error_text mt-0_5">{$errors.city}</small>
			{/if}
		</div>
	</div>
	<div class="mt-1">
		<div class="input__wrapper">
			<input
				type="text"
				placeholder={isRequiredAddressDate ? placeholders.address + '*' : placeholders.address}
				class:error={$errors.address}
				autocomplete
				on:change={handleChange}
				on:focus={() => onFocus('address')}
				bind:value={$form.address}
				disabled={isLoading}
			/>
			{#if $errors.address}
				<small transition:slide|local class="error_text mt-0_5">{$errors.address}</small>
			{/if}
		</div>
	</div>
</div>

<style>
	p {
		color: var(--black);
	}
	input::placeholder {
		color: #b9b9b9;
	}
	input.error::placeholder {
		color: var(--red-color);
	}
</style>
