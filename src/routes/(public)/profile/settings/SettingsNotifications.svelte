<script>
	import ToogleCheckbox from '$lib/components/inputs/ToogleCheckbox.svelte';
	import { t } from '$lib/translations/i18n.js';
</script>

<div class="b-radius-8 settings_card">
	<div class="text-3 settings_card--head">{$t('NOTIFICATIONS')}</div>
	<div class="notification__list">
		<div class="notification d-flex align-center justify-sb mb-0_625">
			<div class="text-sm">{$t('SETTINGS.CONTRIBUTION_ALERTS')}</div>
			<ToogleCheckbox />
		</div>
		<div class="notification d-flex align-center justify-sb mb-0_625">
			<div class="text-sm">{$t('SETTINGS.NEWS_AND_UPDATES')}</div>
			<ToogleCheckbox />
		</div>
		<div class="notification d-flex align-center justify-sb mb-0_625">
			<div class="text-sm">{$t('SETTINGS.WITHDRAW_ALERTS')}</div>
			<ToogleCheckbox />
		</div>
		<div class="notification d-flex align-center justify-sb mb-0_625">
			<div class="text-sm">{$t('SETTINGS.PAYMENT_ISSUES')}</div>
			<ToogleCheckbox />
		</div>
		<div class="notification d-flex align-center justify-sb ">
			<div class="text-sm">{$t('SETTINGS.ACCOUNT_STATUS')}</div>
			<ToogleCheckbox />
		</div>
	</div>
</div>
