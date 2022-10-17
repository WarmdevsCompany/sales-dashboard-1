<script>
	import StatusIcon from '$lib/components/icons/StatusIcon.svelte';
	import { createPopperActions } from 'svelte-popperjs';
	import monthlyContributionIcon from '$lib/assets/img/contribution-icon.svg';
	import { fade } from 'svelte/transition';
	import { t } from '$lib/translations/i18n.js';
	export let currencySymbol, monthlySubscriptionText;

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
		<img src={monthlyContributionIcon} alt="all money" />
		{currencySymbol}{monthlySubscriptionText}
	</div>
	<div
		use:popperRef
		on:mouseenter={() => (showTooltip = true)}
		on:mouseleave={() => (showTooltip = false)}
	>
		<StatusIcon bgColor="white" />
	</div>
	{#if showTooltip}
		<div class="b-radius-8 text-xsm header__tooltip " transition:fade={{duration: 80, offset:0}} use:popperContent={extraOpts}>
			{$t('HEADER_NEXT_CONTRIBUTION')}
		</div>
	{/if}
</div>
