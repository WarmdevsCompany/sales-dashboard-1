<script>
	import StatusIcon from '$lib/components/icons/StatusIcon.svelte';
	import { createPopperActions } from 'svelte-popperjs';
	import nextContributionIcon from '$lib/assets/img/next-contribution.svg';
	import { fade } from 'svelte/transition';
	import { t } from '$lib/translations/i18n.js';
	export let nextContributionDate;

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
	<div class="d-flex align-center">
		<img src={nextContributionIcon} alt="all money" />
		{nextContributionDate}
	</div>
	<div
		use:popperRef
		on:mouseenter={() => (showTooltip = true)}
		on:mouseleave={() => (showTooltip = false)}
	>
		<StatusIcon bgColor="white" />
	</div>
	{#if showTooltip}
		<div
			class="b-radius-8 text-xsm header__tooltip date-tooltip"
			transition:fade={{ duration: 80, offset: 0 }}
			style="min-width: 200px;"
			use:popperContent={extraOpts}
		>
			{$t('HEADER_NEXT_CONTRIBUTION_DATE')}
		</div>
	{/if}
</div>

<style>
	.date-tooltip::after {
		left: 92px;
		top: -3px;
	}
</style>
