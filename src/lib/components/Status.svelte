<script>
	import StatusIcon from './icons/StatusIcon.svelte';
	import { createPopperActions } from 'svelte-popperjs';
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
	const statusesObj = {
		5236998: 'active',
		5236999: 'paused',
		5237000: 'stopped',
		5237001: 'active',
		5237002: 'suspended'
	}

	export let statusName, statusId;
	export let iconColor = 'initial';

</script>

<div class="d-flex ">
	<button class="status d-flex justify-cc {statusesObj[statusId]}"> {statusName}</button>
	<div
		use:popperRef
		on:mouseenter={() => (showTooltip = true)}
		on:mouseleave={() => (showTooltip = false)}
		class="status__btn-icon"
	>
		<StatusIcon bgColor={iconColor} />
	</div>
	{#if showTooltip}
		<div
			class="b-radius-8 text-xsm header__tooltip"
			transition:fade={{ duration: 80, offset: 0 }}
			use:popperContent={extraOpts}
		>
			{$t('HEADER_ACCOUNT_STATUS')}
		</div>
	{/if}
</div>

<style>
	.status {
		margin-right: 4px;
		min-width: 81px;
		padding: 5px;
		border-radius: 8px;
		font-size: var(--text-font-small);
		line-height: var(--text-line-height-small);
		font-weight: var(--font-weight-medium);
		color: var(--white);
		max-width: 93px;
		border: none;
		text-transform: capitalize;
	}
	.status.active {
		width: 81px;
		background-color: var(--secondary-color);
	}
	.status.paused {
		width: 81px;
		background-color: var(--pause-btn-color);
	}
	.status.stopped {
		width: 81px;
		background-color: #5a7186;
	}
	.status.suspended {
		width: 93px;
		background-color: var(--red-color);
	}
	@media only screen and (max-width: 991px) {
		.status__btn-icon {
			position: absolute;
			left: auto;
			right: -16px;
			width: 32px;
			text-align: center;
			top: -4px;
		}
	}
	@media only screen and (max-width: 877px) {
		.header__tooltip::after {
			right: 39px;
		}
	}
</style>
