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
	<img
		src="https://assets-global.website-files.com/6089254f4962ce24139217ac/62fb58aa7d076b85fe8a58bf_WarmDevs_Logo_Horizontal.svg"
		alt=""
	/>
	<div class="modal_head_medium text-1">
		{mainText}
	</div>
	<div class="mt-2 mb-2">
		{mainContent}
	</div>
	<button class="btn btn_center_top_34" on:click={closingAnAccount}>{btnText}</button>
</SuccessSlot>
