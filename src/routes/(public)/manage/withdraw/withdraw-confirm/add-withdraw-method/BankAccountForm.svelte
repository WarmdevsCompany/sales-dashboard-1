<script>
	import Dropdown from '$lib/components/Dropdown.svelte';
	import DisabledDropdown from '$lib/components/DisabledDropdown.svelte';
	import { slide } from 'svelte/transition';
	export let userCountry = 'United States';
	export let legalTypeArray = ['Private', 'Business'];
	export let accountTypeArray = ['Checking', 'Savings'];
	let legalType = 'Legal type*',
		accountType = 'Account type*',
		activeCurrency = 'USD';
	$: legalType;
</script>

<div class="mt-2">
	<p class="text-left ">General data and bank account data</p>
	<div class="mt-0_5">
		<Dropdown itemsData={legalTypeArray} bind:activeItem={legalType} />
	</div>
	<div class="mt-1">
		{#if legalType === 'Private'}
			<div class="grid-2">
				<input type="text" placeholder="First name*" />
				<input type="text" placeholder="Last name*" />
			</div>
		{:else}
			<input type="text" placeholder="Recipient full name*" />
		{/if}
	</div>
	<div class="mt-1">
		<DisabledDropdown text={activeCurrency} />
	</div>
	{#if userCountry === 'United States'}
		<div class="grid-2 mt-1">
			<input type="text" placeholder="Routing number*" />
			<input type="text" placeholder="Account Number*" />
		</div>
		<div class="mt-1">
			<Dropdown itemsData={accountTypeArray} bind:activeItem={accountType} />
		</div>
	{:else if userCountry === 'United Kingdom'}
		<div class="grid-2 mt-1">
			<input type="text" placeholder="Short code*" />
			<input type="text" placeholder="Account Number*" />
		</div>
		<div class="mt-1">
			<input type="text" placeholder="IBAN*" />
		</div>
	{:else if activeCurrency === 'EURO'}
		<div class="mt-1">
			<input type="text" placeholder="IBAN*" />
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
</style>
