<script>
	import { closeAccount, logout } from '$lib/api/axios.js';
	import SuccessSlot from '$lib/components/modals/SuccessSlot.svelte';
	import { t } from '$lib/translations/i18n.js';
	export let mainText = $t('PROFILE_UPDATED'),
		btnText = $t('BACK'),
		mainContent,
		closeModals = () => {};
	const closingAnAccount = () => {
		closeModals();
		logout();
	};
</script>

<SuccessSlot closeModals={closingAnAccount}>
	<div class="modal_head_medium text-1">
		{mainText}
	</div>
	<div class="mt-2 mb-2">
		{mainContent}
	</div>
	<button class="btn btn_center_top_34" on:click={closingAnAccount}>{btnText}</button>
</SuccessSlot>
