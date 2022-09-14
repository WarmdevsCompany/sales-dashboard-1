<script>
	import { fade } from 'svelte/transition';
	import { changeNotificationSettings } from '$lib/api/axios.js';
	import Preloader from '$lib/components/Preloader.svelte';
	import ToogleCheckbox from '$lib/components/inputs/ToogleCheckbox.svelte';
	import { t } from '$lib/translations/i18n.js';
	import { onMount } from 'svelte';
	import { globalData, loading, notificationSettings } from '$lib/globalStore';

	function setStatus(e) {
		let id = +e.currentTarget.id;
		let value = false;
		if (e.currentTarget.checked) {
			value = true;
			changeNotificationSettings(id, value);
		} else {
			value = false;
			changeNotificationSettings(id, value);
		}
	}
</script>

<div class="b-radius-8 settings_card">
	<div class="text-3 settings_card--head">{$t('NOTIFICATIONS')}</div>
	<div class="notification__list d-flex flex-col">
		{#if $loading}
		<div class="preloder_wrapper d-flex justify-cc align-center" in:fade>
			<Preloader loaderWidth={3} loaderHeight={3} borderWidth={0.3} />
		</div>
		{:else}
			{#each $notificationSettings as item}
				<div class="notification d-flex align-center justify-sb mb-0_625">
					<div class="text-sm">{item.name}</div>
					<ToogleCheckbox status={item.active} {setStatus} id={item.idobject} />
				</div>
			{/each}
		{/if}
	</div>
</div>

<style>
	.notification__list {
		min-height: 126px;
	}
	.preloder_wrapper {
		margin: auto;
	}
</style>
