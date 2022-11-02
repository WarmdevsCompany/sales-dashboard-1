<script>
	import { t } from '$lib/translations/i18n.js';
	import SuccessSlot from './SuccessSlot.svelte';
	export let mainText = $t('PROFILE_UPDATED'),
		btnText = $t('BACK'),
		closeModals = () => {},
		selectedPaymentMethod;
</script>

<SuccessSlot {closeModals}>
	<div class="modal_head_medium text-1">
		{mainText}
	</div>
	<div class="d-flex justify-cc mt-2">
		<div class="withdraw__item active_item b-radius-10 p-2 relative text-left">
			<div class="text-3">
				{$t('BANK_TRANSFER')} #{selectedPaymentMethod.accountNumber}*{selectedPaymentMethod.currencyName}
			</div>
			<div class="text-xsm text-green mt-0_5">{selectedPaymentMethod.fullName || ''}</div>
		</div>
	</div>
	<button class="btn btn_center_top_34" on:click={closeModals}>{btnText}</button>
</SuccessSlot>
