<script>
	import { fade } from 'svelte/transition';
	import clickOutside from '$lib/functions/clickOutside';
	import { logout } from '$lib/api/functions/logout';
	import { t } from '$lib/translations/i18n.js';
	let active = false;

	function hide() {
		active = false;
	}

	function handleClickOnTooltip() {
		active = false;
	}
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
			style="width: 212px; left: -212px"
		>
			<ul class="notification__wrapper">
				<li>
					<a href="/profile/general-info">{$t('PROFILE.GENERAL.TITLE')}</a>
				</li>
				<li>
					<a href="/profile/settings">{$t('SETTINGS.LANG')}</a>
				</li>
				<li>
					<button class="btn text-sm logout" on:click={logout}> <span>{$t('LOGOUT')}</span></button>
				</li>
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

	ul li:not(:last-child) {
		margin-bottom: 1rem;
	}

	ul li:hover {
		cursor: pointer;
	}
	ul li:not(:last-child) {
		margin-bottom: 15px;
	}
	button.logout {
		appearance: none;
		background: transparent;
		border: none;
		padding: 0;
		width: auto;
		color: var(--black);
		font-weight: var(--font-weight-medium);
		font-size: var(--text-font-small);
		line-height: var(--text-line-height-small);
	}

	.notification__wrapper {
		color: var(--black);
		max-height: 154px;
	}

	@media only screen and (max-width: 1130px) and (min-width: 991px) {
	}
</style>
