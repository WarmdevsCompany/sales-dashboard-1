<script>
	import Modal, { getModal } from '$lib/components/Modal.svelte';
	import Dropdown from '$lib/components/Dropdown.svelte';
	import greenLogo from '$lib/assets/img/logo-green.svg';
	import { t } from '$lib/translations/i18n.js';
	import { globalData } from '$lib/globalStore';
	import ChangeForm from './ChangeForm.svelte';
	let disabledState = false;
	let errorState = false;
</script>

<div
	class="change__body b-radius-8 text-center text-dark-green box_shadow-medium {disabledState
		? 'disabled'
		: ''} {errorState ? 'error' : ''}"
>
	<div class="text-3">{$t('MANAGE_CHANGE_CONTRIBUTIONS')}</div>
	<div class="text-xsm mt-0_5">
		{$t('MANAGE_RECURRING_CONTRIBUTION')}*
	</div>
	<div class="text-xsm mt-0_25">{$t('MANAGE_NEXT_RECURRING_CONTRIBUTION')}</div>
	<ChangeForm {disabledState} {errorState} />
</div>
<Modal id="confirm">
	<div class="modal_main confirm text-center">
		<img src={greenLogo} alt="esi logo img" />
		<div class="modal_head_medium mt-2">{$t('MANAGE_UPDATED')}</div>
		<div class="modal_main-row d-flex justify-sb align-bottom">
			<div class="text-xsm d-flex align-center mobile-block">
				{$t('MANAGE_NEW_CONTRIBUTION')}:
				<span class="text-3 text-blue mobile-block"
					>{$globalData?.data?.currencySymbol}{$globalData.data.membershipStatus.amount}/mo</span
				>
			</div>
			<div class="text-xsm d-flex align-center mobile-block">
				{$t('MANAGE_NEXT_CONTRIBUTION')}:
				<span class="text-3 text-blue mobile-block">01 Jul 2022</span>
			</div>
		</div>
		<p class="mt-1 modal-bootom-text">
			{$t('MANAGE_REVIEW')}
		</p>
		<button class="btn secondary mb-1" on:click={() => getModal('confirm').close()}
			>{$t('CLOSE')}</button
		>
	</div>
</Modal>

<style>
	.change__body {
		background: var(--white-secondary);
		border: 1px solid var(--green-medium-color);
		padding: 2.125rem 2rem 3.25rem 2rem;
	}
	.change__body.disabled {
		background: var(--white-third);
		border: 1px solid var(--grey-color);
		padding: 2.125rem 2rem 3.25rem 2rem;
	}
	.change__body.error {
		background: var(--error-bg-color);
		border: 1px solid var(--red-color);
		padding: 2.125rem 2rem 3.25rem 2rem;
	}

	.modal_main {
		max-width: 687px;
		margin: 0 auto;
	}
	.modal_main.confirm {
		padding-top: 81px;
		padding-bottom: 50px;
	}
	.modal_main .modal_head_medium {
		color: var(--green-dark-color);
	}
	.modal_main-row {
		max-width: 507px;
		margin: 1.5rem auto 0 auto;
		color: #000;
		flex-direction: column;
		align-items: center;
		gap: 10px;
	}
	.modal_main-row span {
		margin-left: 0.25rem;
	}
	.btn.secondary {
		width: 224px;
		margin: 2.125rem auto 0 auto;
		transition: none;
	}
	.modal-bootom-text {
		font-weight: var(--font-weight-medium);
		color: '#323232';
	}
	@media only screen and (max-width: 991px) {
		.change__body {
			padding: 2rem 1rem 3rem 1rem;
		}
	}
	@media only screen and (min-width: 992px) and (max-width: 1199px) {
		.change__body {
			padding: 2rem 1rem;
		}
	}
</style>
