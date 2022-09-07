<script>
	import { fade } from 'svelte/transition';
	import clickOutside from '$lib/functions/clickOutside';
	import { t } from '$lib/translations/i18n.js';
	//import { notificationList } from "";
	const notificationList = [
		{
			id: 1,
			name: 'Payment Sussessfull',
			description:
				'Your December bi-monthly contribution was successfully charged. Go to your Wallet to monitor the amount or money you saved',
			date: 'Jan 12th, 2022',
			status: 'unreaded'
		},
		{
			id: 2,
			name: 'Referral Program',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mus aliquet in et quam non morbiaenean. Diam 1 ipsum pellentesque fermentum consequat varius dui, aliquet.',
			date: 'Jan 12th, 2022',
			status: 'unreaded'
		},
		{
			id: 3,
			name: 'Payment Sussessfull',
			description:
				'Your December bi-monthly contribution was successfully charged. Go to your Wallet to monitor the amount or money you saved',
			date: 'Jan 12th, 2022',
			status: 'readed'
		},
		{
			id: 4,
			name: 'Save the Planet!',
			description:
				'Your December bi-monthly contribution was successfully charged. Go to your Wallet to monitor the amount or money you saved',
			date: 'Jan 12th, 2022',
			status: 'readed'
		},
		{
			id: 5,
			name: 'Payment Sussessfull',
			description:
				'Your December bi-monthly contribution was successfully charged. Go to your Wallet to monitor the amount or money you saved',
			date: 'Jan 12th, 2022',
			status: 'readed'
		},
		{
			id: 6,
			name: 'Referral Program',
			description:
				'Your December bi-monthly contribution was successfully charged. Go to your Wallet to monitor the amount or money you saved',
			date: 'Jan 12th, 2022',
			status: 'readed'
		},

		{
			id: 7,
			name: 'Referral Program',
			description:
				'Your December bi-monthly contribution was successfully charged. Go to your Wallet to monitor the amount or money you saved',
			date: 'Jan 12th, 2022',
			status: 'readed'
		}
	];
	let active = false;

	function show() {
		active = true;
	}

	function hide() {
		active = false;
	}

	function handleClickOnTooltip() {}
	function toggleAction() {
		active = !active;
	}
</script>
<div use:clickOutside on:click_outside={hide}>
	<div on:click={toggleAction}>
		<slot />
	</div>

	{#if active}
		<div
			on:click={() => handleClickOnTooltip()}
			in:fade={{ duration: 200 }}
			class="tooltip text-sm b-radius-8"
			style="width: {$$props.width}px; left: -270px"
		>
			<div class="semi-bold mb-1">{$t('NOTIFICATIONS')}</div>
			<ul class="notification__wrapper">
				{#each notificationList as item}
					<li class:active={item.status === 'unreaded'}>
						<span class="inline-block semi-bold text-sm">{item.name}</span>
						<div class="notification__content d-flex justify-sb">
							<span class="cut-text inline-block ">{item.description}</span>
							<div class="created__time">1h</div>
						</div>
					</li>
				{/each}
			</ul>
		</div>
	{/if}
</div>

<style>
	.tooltip {
		box-shadow: 0px 14px 30px rgba(0, 0, 0, 0.14);
		background: white;
		padding: 1.875rem 1.5rem;
		position: absolute;
		top: 40px;
		z-index: 3;
		width: auto;
		color: var(--black);
	}
	ul li {
		position: relative;
		padding-left: 11px;
		color: #838383;
	}
	ul li.active {
		color: var(--black);
	}
	ul li.active .semi-bold {
		color: var(--black);
	}
	ul li.active::before {
		background: var(--red-color);
	}
	ul li::before {
		content: '';
		position: absolute;
		top: 8px;
		left: 0;
		width: 4px;
		height: 4px;
		border-radius: 50%;
	}
	ul li:hover {
		cursor: pointer;
	}
	ul li:not(:last-child) {
		margin-bottom: 15px;
	}
	.cut-text {
		text-overflow: ellipsis;
		overflow: hidden;
		width: 175px;
		height: 21px;
		white-space: nowrap;
	}
	.semi-bold {
		font-weight: var(--font-weight-bold);
	}
	.notification__wrapper {
		color: var(--black);
		max-height: 381px;
		overflow-y: auto;
		padding-right: 26px;
	}
	/* width */
	.notification__wrapper::-webkit-scrollbar {
		width: 4px;
	}
	/* Track */
	.notification__wrapper::-webkit-scrollbar-track {
		background: #e4e4e4;
		border-radius: 35px;
	}
	/* Handle */
	.notification__wrapper::-webkit-scrollbar-thumb {
		background: #a7a7a7;
		border-radius: 35px;
	}

	/* Handle on hover */
	.notification__wrapper::-webkit-scrollbar-thumb:hover {
		background: #555;
	}
	.notification__content {
		margin-top: 6px;
	}
	@media only screen and (max-width: 1130px) and (min-width: 991px) {
	}
</style>
