<script>
	import { scrollToTop } from '$lib/functions/scrollToTop.js';
	import { convertDateToUTC } from '$lib/functions/convertDateToUTC.js';
	import { globalData } from '$lib/globalStore.js';
	import lockImg from '$lib/assets/img/padlock.svg';
	import { getModal } from '$lib/components/Modal.svelte';
	import ChangePassModal from './modals/ChangePassModal.svelte';
	import { t } from '$lib/translations/i18n.js';
	let date, passwordLastChangeDate;
	
	$: {
		console.log('passData - ', new Date($globalData.data.passwordLastChangeDate * 1000))
		console.log('passUTC - ', $globalData.data.passwordLastChangeDate)
		date = convertDateToUTC($globalData.data.passwordLastChangeDate);
		passwordLastChangeDate = `${date.day} ${$t('MONTH_SHORT_' + date.month)} ${date.year}`;
	}

	scrollToTop();
</script>

<svelte:head>
	<title>{$t('SECURITY')}</title>
	<meta name="description" content={$t('SECURITY')} />
</svelte:head>

<div class="change__password box_shadow-medium b-radius-8 d-flex justify-cc align-center">
	<div class="change__password--main text-center">
		<img src={lockImg} alt="change password" class="lock_icon" />
		<div class="text-3">{$t('CHANGE_PASSWORD')}</div>
		<div class="text-xsm mt-0_5">
			{$t('SETTINGS.LAST_PW_CHANGE')} - <span class="text-green">{passwordLastChangeDate}</span>
		</div>
		<button
			disabled={$globalData.data.currentSubscription.statusId === 5237002}
			class="btn confirm"
			on
			on:click={() => getModal('change-password').open()}>{$t('CHANGE_PASSWORD')}</button
		>
	</div>
</div>
<ChangePassModal />

<style>
	.lock_icon {
		width: 76px;
		height: 76px;
	}
	.change__password {
		color: var(--green-dark-color);
		height: 100%;
		background: var(--white);
		min-height: 78vh;
	}
	.change__password img {
		margin-bottom: 1.6875rem;
	}
	.change__password--main button {
		margin: 2.125rem auto 0 auto;
		width: auto;
	}
	@media only screen and (max-width: 991px) {
		.change__password {
			padding: 4rem 1rem;
			min-height: 0;
			margin-bottom: 7rem;
		}
	}
</style>
