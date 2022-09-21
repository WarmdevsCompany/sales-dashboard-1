<script>
	import Dropdown from '$lib/components/Dropdown.svelte';

	let legalTypeArray = ['Private', 'Business'];
	let legalType = 'Legal type*';

	let accountTypeArray = ['IBAN*'];
	let accountType = 'Account type*';

	const currencyArray = ['USD', 'EURO'];
	let activeCurrency = currencyArray[0];
</script>

<div class="mt-2">
	<p class="text-left ">General data and bank account data</p>
	<div class="mt-0_5">
		<Dropdown itemsData={legalTypeArray} bind:activeItem={legalType} />
	</div>
	<div class="mt-1">
		<input type="text" placeholder="Recipient full name*" />
	</div>
	<div class="mt-1">
		<Dropdown itemsData={currencyArray} bind:activeItem={activeCurrency} />
	</div>
	<div class="grid-2 mt-1">
		<input type="text" placeholder="Routing number*" />
		<input type="text" placeholder="Account Number*" />
	</div>
	<div class="mt-1">
		<Dropdown itemsData={accountTypeArray} bind:activeItem={accountType} />
	</div>
</div>

<style>
</style>
