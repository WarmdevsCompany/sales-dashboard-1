<script>
	import { fade } from 'svelte/transition';
	import clickOutside from '$lib/functions/clickOutside';
	import { modalClassName } from '../../general-info/profileStore';
	import { notificationList } from '$lib/globalStore';
	import { t } from '$lib/translations/i18n.js';
	import { setNotificationViewed, setNotificationRemoved } from '$lib/api/axios';

	let active = false;

	function show() {
		active = true;
	}

	function hide() {
		active = false;
	}

	function handleClickOnTooltip() {
		$modalClassName = 'greenForm';
		hide();
	}

	function toReadItem(id) {
		$notificationList.map(function (value, index, arr) {
			if (value.idobject == id) return (value.status = 'viewed');
		});
		$notificationList = $notificationList;
		setNotificationViewed(id);
	}

	function removeItem(id) {
		$notificationList = $notificationList.filter(function (value, index, arr) {
			if (value.idobject != id) return value;
		});
		setNotificationRemoved(id);
	}
</script>

<div on:click={show}>
	<slot />
</div>

{#if active}
	<div
		use:clickOutside
		on:click_outside={hide}
		on:click={() => handleClickOnTooltip()}
		in:fade={{ duration: 200 }}
		class="tooltip text-sm b-radius-8 d-flex justify-sb align-center"
		style="width: {$$props.width}px; left: -{$$props.width}px"
	>
		<ul>
			{#if !$$props.status}
				<li on:click={() => toReadItem($$props.id)}>{$t('SETTINGS.MAKE_READ')}</li>
			{/if}
			<li on:click={() => removeItem($$props.id)}>{$t('REMOVE')}</li>
		</ul>
	</div>
{/if}

<style>
	.tooltip {
		box-shadow: 0px 14px 30px rgba(0, 0, 0, 0.14);
		background: white;
		padding: 1.875rem 1.5rem;
		position: absolute;
		top: -50px;
		z-index: 3;
		width: auto;
		color: var(--black);
	}
	ul li:hover {
		cursor: pointer;
		text-decoration: underline;
	}
	ul li:not(:last-child) {
		margin-bottom: 15px;
	}

	@media only screen and (max-width: 1130px) and (min-width: 991px) {
		.tooltip {
			width: 200px;
			top: -60px;
		}
	}
</style>
