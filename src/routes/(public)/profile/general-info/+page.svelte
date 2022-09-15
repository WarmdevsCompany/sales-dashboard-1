<script>
	import Modal from '$lib/components/Modal.svelte';
	import BrowseImg from './browse-img/BrowseImg.svelte';
	import GeneralInfo from './general-contact/GeneralInfo.svelte';
	import GeneralModal from './modals/GeneralModal.svelte';
	import { modalClassName } from './profileStore';
	import { t } from '$lib/translations/i18n.js';
</script>

<svelte:head>
	<title>{$t('PROFILE.GENERAL.TITLE')}</title>
	<meta name="description" content={$t('PROFILE.GENERAL.TITLE')} />
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/flatpickr/dist/flatpickr.min.css" />
</svelte:head>

<div class="profile__wrapper box_shadow-medium p-2 b-radius-8 d-flex">
	<BrowseImg />
	<div class="ml-2 general">
		<GeneralInfo />
	</div>
</div>

<GeneralModal />

<style>
	:global(.modal_main-row) {
		max-width: 360px;
		margin: 0 auto 0 auto;
		color: #000;
	}
	.profile__wrapper {
		background: var(--white);
	}
	.general {
		flex-grow: 1;
	}
	@media only screen and (max-width: 991px) {
		.profile__wrapper {
			display: block;
			padding: 2rem 20px;
			margin-bottom: 4rem;
		}
		.general {
			margin-top: 24px;
			margin-left: 0;
		}
	}
</style>
