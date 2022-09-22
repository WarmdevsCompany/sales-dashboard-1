<script>
	import DisabledDropdown from '$lib/components/DisabledDropdown.svelte';
	import { slide } from 'svelte/transition';
	export let userCountry = 'United States',
		activeCurrency = 'USD';
	let isRequiredAddressDate = true;
	let placeholders = {
		state: 'State',
		zipCode: 'Zip code',
		city: 'City',
		address: 'Address'
	};
	$:{
		if(activeCurrency === "EURO"){
			isRequiredAddressDate = false
		}
	}
</script>

<div class="mt-2_5">
	<p class="text-left ">Please enter address data</p>
	<div class="grid-2 mt-0_5">
		<DisabledDropdown text={userCountry} />
		<input type="text" placeholder={isRequiredAddressDate? placeholders.state +'*': placeholders.state} />
	</div>

	<div class="grid-2 mt-1">
		<input type="number" placeholder={ isRequiredAddressDate? placeholders.zipCode +'*': placeholders.zipCode} />
		<input type="text" placeholder={isRequiredAddressDate? placeholders.city + '*': placeholders.city} />
	</div>
	<div class="mt-1">
		<input type="text" placeholder={ isRequiredAddressDate? placeholders.address +'*': placeholders.address } />
	</div>
</div>

<style>
	p {
		color: var(--black);
	}
	input::placeholder {
		color: #b9b9b9;
	}
</style>
