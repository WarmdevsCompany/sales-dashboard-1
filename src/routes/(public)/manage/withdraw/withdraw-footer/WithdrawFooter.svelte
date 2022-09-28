<script>
	import { globalData } from '$lib/globalStore';
	import { getModal } from '$lib/components/Modal.svelte';
	import { t } from '$lib/translations/i18n.js';
	import { roundNumber } from '$lib/functions/roundNumber.js';
	import { confirmModalState, withdrawFormState, withdrawBalance } from '../withdrawStore';
	export let btnAligment = 'justify-end',
		confirmBtn = 'open',
		closeModals, formStep, withdrawMethods, fee, timeToTransfer, withdrawOfTotal, feeSum
	const balance = $globalData.data.currentSubscription.balance;
	const confirmWithdraw = () => {
		$confirmModalState = false;
		if (withdrawMethods && withdrawMethods.length > 0) {
			formStep = 3;
		} else {
			formStep = 4;
		}
	};

	$: {
		withdrawOfTotal = ($withdrawBalance * 100) / balance;
		feeSum = roundNumber(fee * $withdrawBalance, 2);
		if (withdrawOfTotal > 100) {
			withdrawOfTotal = 100;
		}
	}
</script>

<div class="mt-1_5">
	<div class="grid mobile-block">
		<div class="text-sm">{$t('MANAGE_TOTAL_WD_AM')}:</div>
		<div class="grid-item-value text-sm">${$withdrawBalance}</div>
		<div class="text-sm">{$t('MANAGE_WD_FEE')}:</div>
		<div class="grid-item-value text-sm">${feeSum}</div>
		<div class="text-sm">{$t('MANAGE_TIME_TO_TR')}:</div>
		<div class="grid-item-value text-sm">{timeToTransfer} {$t('MANAGE_DAYS')}</div>
		<div class="text-sm">{$t('MANAGE_WD_OF_T')}:</div>
		<div class="grid-item-value text-sm">{withdrawOfTotal}%</div>
	</div>
	{#if confirmBtn === 'open'}
		<div class="d-flex {btnAligment} buttons">
			<button class="btn cancel mr-1_5">{$t('CANCEL')}</button>

			<button
				disabled={$withdrawFormState}
				class="btn confirm"
				on:click={() => getModal('withdraw').open()}>{$t('WITHDRAW')}</button
			>
		</div>
	{:else if confirmBtn === 'confirm'}
		<div class="d-flex {btnAligment} buttons-confirm">
			<button class="btn cancel mr-1_5" on:click={() => closeModals('withdraw')}
				>{$t('CANCEL')}</button
			>

			<div class="btn confirm-wd" on:click={confirmWithdraw}>{$t('MANAGE_CONF_WD')}</div>
		</div>
	{/if}
</div>

<style>
	.grid {
		grid-column-gap: 20px;
		grid-row-gap: 10px;
		grid-template-columns: 1fr auto;
		text-align: right;
		color: var(--label--color-secondary);
	}
	.grid-item-value {
		font-weight: var(--font-weight-bolder);
	}

	button.cancel {
		width: 182px;
		background: transparent;
		border: none;
		color: var(--confirm-btn-disable-text-color);
	}
	button.cancel:hover {
		background: rgba(0, 0, 0, 0.1);
	}
	button.cancel:active {
		background: rgba(0, 0, 0, 0.07);
	}
	.btn {
		width: 182px;
	}
	.btn.confirm-wd {
		width: 214px;
	}
	.buttons {
		margin-top: 2.56rem;
	}
	.buttons-confirm {
		margin-top: 4rem;
	}
	@media only screen and (max-width: 991px) {
		.buttons {
			margin-bottom: 4rem;
		}
		.buttons-confirm {
			flex-direction: column-reverse;
			align-items: center;
		}
		button.cancel {
			margin: 1rem auto 0 auto;
		}
		.buttons-confirm button.cancel,
		.btn.confirm-wd {
			width: 100%;
		}
	}
</style>
