<script>
	import Dropdown from '$lib/components/Dropdown.svelte';

	let countriesArray = ['United States', 'Germany', 'United Kingdom'];
	let currency = countriesArray[0]
</script>

<div class="mt-2_5">
	<p class="text-left ">Please enter address data</p>
    <div class="grid-2 mt-0_5">
		<Dropdown itemsData={countriesArray} bind:activeItem={currency} />
        <input type="text" placeholder="State*" />
	</div>

	<div class="grid-2 mt-1">
		<input type="text" placeholder="Routing number*" />
		<input type="text" placeholder="Account Number*" />
	</div>
    
</div>

<style>
</style>
