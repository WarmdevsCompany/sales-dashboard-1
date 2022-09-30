<script>
	import Dropdown from '$lib/components/Dropdown.svelte';
	import DisabledDropdown from '$lib/components/DisabledDropdown.svelte';
	import { slide } from 'svelte/transition';
	export let userCountry = 'United States',
		activeCurrency = 'USD',
		form,
		errors,
		isLoading,
		handleChange;
	export let accountTypeArray = ['Checking', 'Savings'];
	export let legalType,
		accountType = 'Account type*';
	$: {
		accountType;
		if ($form?.accountType || $form?.accountType  === "") $form.accountType = accountType;
	}
	const onFocus = (item) => {
		$errors[item] = '';
	};
</script>
<div class="mt-2">
	<p class="text-left ">General data and bank account data</p>
	<div class="mt-1">
		{#if legalType === 'Private'}
			<div class="grid-2">
				<div class="input__wrapper">
					<input
						type="text"
						placeholder="First name*"
						class:error={$errors.firstName}
						autocomplete
						on:change={handleChange}
						on:focus={() => onFocus('firstName')}
						bind:value={$form.firstName}
						disabled={isLoading}
					/>
					{#if $errors.firstName}
						<small transition:slide|local class="error_text mt-0_5">{$errors.firstName}</small>
					{/if}
				</div>
				<div class="input__wrapper">
					<input
						type="text"
						placeholder="Last name*"
						class:error={$errors.lastName}
						autocomplete
						on:change={handleChange}
						on:focus={() => onFocus('lastName')}
						bind:value={$form.lastName}
						disabled={isLoading}
					/>
					{#if $errors.lastName}
						<small transition:slide|local class="error_text mt-0_5">{$errors.lastName}</small>
					{/if}
				</div>
			</div>
		{:else}
			<div class="input__wrapper">
				<input
					type="text"
					placeholder="Recipient full name*"
					class:error={$errors.fullName}
					autocomplete
					on:change={handleChange}
					on:focus={() => onFocus('fullName')}
					bind:value={$form.fullName}
					disabled={isLoading}
				/>
				{#if $errors.fullName}
					<small transition:slide|local class="error_text mt-0_5">{$errors.fullName}</small>
				{/if}
			</div>
		{/if}
	</div>
	<div class="mt-1">
		<DisabledDropdown text={activeCurrency} />
	</div>
	{#if activeCurrency === 'EURO'}
		<div class="mt-1">
			<div class="input__wrapper">
				<input
					type="text"
					placeholder="IBAN*"
					class:error={$errors.iban}
					autocomplete
					on:change={handleChange}
					on:focus={() => onFocus('iban')}
					bind:value={$form.iban}
					disabled={isLoading}
				/>
				{#if $errors.iban}
					<small transition:slide|local class="error_text mt-0_5">{$errors.iban}</small>
				{/if}
			</div>
		</div>
	{:else if userCountry === 'United States'}
		<div class="grid-2 mt-1">
			<div class="input__wrapper">
				<input
					type="text"
					placeholder="Routing number*"
					class:error={$errors.routingNumber}
					autocomplete
					on:change={handleChange}
					on:focus={() => onFocus('routingNumber')}
					bind:value={$form.routingNumber}
					disabled={isLoading}
				/>
				{#if $errors.routingNumber}
					<small transition:slide|local class="error_text mt-0_5">{$errors.routingNumber}</small>
				{/if}
			</div>
			<div class="input__wrapper">
				<input
					type="text"
					placeholder="Account Number*"
					class:error={$errors.accountNumber}
					autocomplete
					on:change={handleChange}
					on:focus={() => onFocus('accountNumber')}
					bind:value={$form.accountNumber}
					disabled={isLoading}
				/>
				{#if $errors.accountNumber}
					<small transition:slide|local class="error_text mt-0_5">{$errors.accountNumber}</small>
				{/if}
			</div>
		</div>
		<div class="mt-1">
			<Dropdown
				itemsData={accountTypeArray}
				bind:activeItem={accountType}
				errorMessageState={$errors.accountType}
				handleClickByItem={() => onFocus('accountType')}
			/>
			{#if $errors.accountType}
				<small transition:slide|local class="error_text mt-0_5">{$errors.accountType}</small>
			{/if}
		</div>
	{:else if userCountry === 'United Kingdom'}
		<div class="mt-1">
			<div class="input__wrapper">
				<input
					type="text"
					placeholder="Short code*"
					class:error={$errors.shortCode}
					autocomplete
					on:change={handleChange}
					on:focus={() => onFocus('shortCode')}
					bind:value={$form.shortCode}
					disabled={isLoading}
				/>
				{#if $errors.shortCode}
					<small transition:slide|local class="error_text mt-0_5">{$errors.shortCode}</small>
				{/if}
			</div>
		</div>
		<div class="mt-1">
			<div class="input__wrapper">
				<input
					type="text"
					placeholder="IBAN* or Account Number*"
					class:error={$errors.ibanOrAccountNumber}
					autocomplete
					on:change={handleChange}
					on:focus={() => onFocus('ibanOrAccountNumber')}
					bind:value={$form.ibanOrAccountNumber}
					disabled={isLoading}
				/>
				{#if $errors.ibanOrAccountNumber}
					<small transition:slide|local class="error_text mt-0_5"
						>{$errors.ibanOrAccountNumber}</small
					>
				{/if}
			</div>
		</div>
	{/if}
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
