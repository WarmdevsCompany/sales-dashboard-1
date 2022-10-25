<script>
	import { verificationId } from '$lib/globalStore.js';
	import { closeAccount, logout } from '$lib/api/axios.js';
	import SuccessSlot from '$lib/components/modals/SuccessSlot.svelte';
	import { t } from '$lib/translations/i18n.js';
	export let mainText = $t('PROFILE_UPDATED'),
		btnText = $t('BACK'),
		closeModals = () => {};
	const closingAnAccount = async () => {
		const res = await closeAccount($verificationId);
		if (res.status) {
			closeModals();
			logout();
		}else if(res.errorMessage === 'PROFILE_ALREADY_FROZEN_CLOSED'){
			logout();
		}
	};
</script>

<SuccessSlot {closeModals}>
	<div class="modal_head_medium text-1">
		{mainText}
	</div>
	<button class="btn btn_center_top_34" on:click={closingAnAccount}>{btnText}</button>
</SuccessSlot>
