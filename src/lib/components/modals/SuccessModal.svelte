<script>
	import { t } from '$lib/translations/i18n.js';
	import SuccessSlot from '../modals/SuccessSlot.svelte';
	export let mainText = $t('PROFILE_UPDATED'),
		btnText = $t('BACK'),
		closeModals = () => {};
</script>

<SuccessSlot {closeModals}>
	<div class="modal_head_medium text-1">
		{mainText}
	</div>
	<button class="btn btn_center_top_34" on:click={closeModals}>{btnText}</button>
</SuccessSlot>
