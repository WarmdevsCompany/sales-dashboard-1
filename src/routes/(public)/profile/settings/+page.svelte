<script>
	import { scrollToTop } from '$lib/functions/scrollToTop.js';
	import SettingsLanguage from './SettingsLanguage.svelte';
	import SettingsNotifications from './SettingsNotifications.svelte';
	import { t } from '$lib/translations/i18n.js';
	import ClosingAccountModal from './ClosingAccountModal.svelte';
	import { getModal } from '$lib/components/Modal.svelte';

	scrollToTop();
</script>

<svelte:head>
	<title>{$t('SETTINGS')}</title>
	<meta name="description" content={$t('SETTINGS')} />
</svelte:head>

<div class="settings_main box_shadow-medium b-radius-8 p-2 d-flex flex-col justify-sb">
	<div>
		<div class="text-3 mb-1_5">{$t('SETTINGS')}</div>
		<div class="grid-2">
			<SettingsNotifications />
			<SettingsLanguage />
		</div>
	</div>
	<button class="btn confirm settings_btn" on:click={()=>{getModal('close_account').open()}}>{$t('SETTINGS.CLOSING_AN_ACCOUNT')}</button>
</div>

<ClosingAccountModal />

<style>
	.settings_main {
		color: var(--green-dark-color);
		height: 100%;
		background: var(--white);
		min-height: 78vh;
	}
	.settings_main .grid-2 {
		margin-right: 170px;
	}
	button.btn.confirm.settings_btn {
		background: rgba(182, 182, 182, 0.2);
		border: 1px solid #d8d8d8;
		color: #929292;
		padding: 13px;
		width: 233px;
		margin-left: auto;
	}
	button.btn.confirm.settings_btn:hover {
		background: var(--primary-color);
		border-color: var(--primary-color);
		color: #fff;
	}
	button.btn.confirm.settings_btn:active {
		background: #006effa4;
		border-color: #006effa4;
	}

	:global(.settings_card) {
		background: var(--white);
		border: 1px solid;
		border-color: var(--grey-color);
		padding: 2.125rem 2rem 2rem 2rem;
	}
	:global(.settings_card--head) {
		margin-bottom: 0.875rem;
	}
	@media only screen and (max-width: 1280px) {
		.settings_main .grid-2 {
			margin-right: 14vw;
		}
	}
	@media only screen and (max-width: 991px) {
		.settings_main,
		:global(.settings_card) {
			padding: 2rem 1rem;
		}
		.settings_main {
			margin-bottom: 4rem;
		}
		.settings_main .grid-2 {
			margin: 0;
		}
		.settings_btn {
			margin-top: 2rem;
		}
	}
	@media only screen and (min-width: 992px) and (max-width: 1199px) {
		.settings_main .grid-2 {
			margin: 0;
		}
	}
</style>
