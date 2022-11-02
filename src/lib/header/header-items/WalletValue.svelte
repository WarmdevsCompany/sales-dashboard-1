<script>
	import StatusIcon from '$lib/components/icons/StatusIcon.svelte';
	import { createPopperActions } from 'svelte-popperjs';
	import allSumIcon from '$lib/assets/img/money.svg';
	export let currencySymbol, allMoney;
    import { fade } from 'svelte/transition';
    import { t } from '$lib/translations/i18n.js';
    

	const [popperRef, popperContent] = createPopperActions({
		placement: 'bottom',
		strategy: 'fixed'
	});
	const extraOpts = {
		modifiers: [{ name: 'offset', options: { offset: [0, 8] } }]
	};
	let showTooltip = false;
</script>

<div class="contribution__data--item d-flex align-top text-big">
	<div class="d-flex align-center header_text">
		<img src={allSumIcon} alt="all money" />
		{currencySymbol}{allMoney}
	</div>
	<div
		use:popperRef
		on:mouseenter={() => (showTooltip = true)}
		on:mouseleave={() => (showTooltip = false)}
		on:click={() => (showTooltip = true)}
	>
		<StatusIcon bgColor="white" />
	</div>
	{#if showTooltip}
		<div class="b-radius-8 text-xsm header__tooltip" transition:fade={{duration: 80, offset:0}} use:popperContent={extraOpts}>{$t('HEADER_WALLET_VALUE')}</div>
	{/if}
</div>

<style>
  
</style>