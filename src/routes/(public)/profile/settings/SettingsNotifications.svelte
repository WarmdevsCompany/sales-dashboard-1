<script>
	import clickOutside  from '$lib/functions/clickOutside';
	import { fade, slide } from 'svelte/transition';
	import { changeNotificationSettings } from '$lib/api/axios.js';
	import Preloader from '$lib/components/Preloader.svelte';
	import ToogleCheckbox from '$lib/components/inputs/ToogleCheckbox.svelte';
	import { t } from '$lib/translations/i18n.js';
	import { globalData, loading, notificationSettings } from '$lib/globalStore';
	let updateNotificationResult;
	let notificationItemStatus;
	let notificationUpdateItemStatus;
	let updatedItemId = null;

	async function setStatus(e) {
		let id = +e.currentTarget.id;
		let value = false;
		if (e.currentTarget.checked) {
			value = true;
			const res = await changeNotificationSettings(id, value);
			setStatusToUpdatedItem(res.status, id, value);
		} else {
			value = false;
			const res = await changeNotificationSettings(id, value);
			setStatusToUpdatedItem(res.status, id, value);
		}
	}
	function setStatusToUpdatedItem(status, itemId,value) {
		const notificationSettingsArray = [...$notificationSettings]
		const updatedIndex = findIndexById(notificationSettingsArray,itemId)
		$notificationSettings[updatedIndex].active = value;
		notificationUpdateItemStatus = true;
		updatedItemId = itemId;
		if (status) {
			notificationItemStatus = true;
			updateNotificationResult = 'Notifications success';
		} else {
			notificationItemStatus = false;
			updateNotificationResult = 'Notifications failure';
		}
	}

	function findIndexById(array,id){
	 return array.findIndex(item=>item.idobject === id)
	}
	function handleClickOutside() {
		notificationUpdateItemStatus = false
	}
</script>

<div class="b-radius-8 settings_card">
	<div class="text-3 settings_card--head">{$t('NOTIFICATIONS')}</div>
	<div class="notification__list d-flex flex-col" use:clickOutside  on:click_outside={handleClickOutside}>
		{#if $loading}
			<div class="preloder_wrapper d-flex justify-cc align-center" in:fade>
				<Preloader loaderWidth={3} loaderHeight={3} borderWidth={0.3} />
			</div>
		{:else}
			{#each $notificationSettings as item}
				<div class="notification mb-0_625">
					<div class=" d-flex align-center justify-sb">
						<div class="text-sm">{item.name}</div>
						<ToogleCheckbox status={item.active} {setStatus} id={item.idobject} />
					</div>

					{#if notificationUpdateItemStatus && updatedItemId === item.idobject}
						<div class="notification__status" class:error_text={!notificationItemStatus} transition:slide|local>
							{updateNotificationResult}
						</div>
					{/if}
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
	.notification__status {
		font-size: 12px;
		line-height: 24px;
		color: var(--green-medium-color);
	}
</style>
