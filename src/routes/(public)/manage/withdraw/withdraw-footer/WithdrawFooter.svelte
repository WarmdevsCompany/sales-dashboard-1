<script>
	import { globalData } from '$lib/globalStore';
	import { getModal } from '$lib/components/Modal.svelte';
	import { t } from '$lib/translations/i18n.js';
	import { roundNumber } from '$lib/functions/roundNumber.js';
	import {
		confirmModalState,
		withdrawFormState,
		withdrawBalance,
		radioValue
	} from '../withdrawStore';
	export let btnAligment = 'justify-end',
		confirmBtn = 'open',
		closeModals,
		timeToTransfer,
		withdrawOfTotal,
		feeSum;
	const resetWithdrawls = () => {
		$withdrawBalance = Math.trunc($globalData.data.currentSubscription.balance / 5);
		$radioValue = '0';
	};

	export let confirmWithdraw = () => {};
</script>

{#if $globalData.data.currentSubscription.balance > 0}
	<div class="withdraw__footer">
		<div class="grid">
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
				<button class="btn cancel mr-1_5" on:click={resetWithdrawls}>{$t('CANCEL')}</button>

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
{/if}

<style>
	.withdraw__footer {
		margin-top: 1.5rem;
	}
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
			align-items: center;
			max-height: 66px;
		}
		button.cancel {
			max-height: 66px;
		}
		.btn.confirm {
			max-height: 66px;
		}
		.buttons-confirm button.cancel,
		.btn.confirm-wd {
			max-height: 66px;
		}
	}
	@media only screen and (max-width: 580px) {
		.buttons-confirm {
			display: flex;
			flex-direction: column-reverse;
		}
		.btn.confirm-wd {
			width: 100%;
			margin-bottom: 0.5rem;
		}
		.buttons-confirm button.btn.cancel {
			width: 100%;
			margin: 0 0 0.5rem 0;
		}
	}
	@media only screen and (max-width: 480px) {
		.buttons {
			flex-wrap: wrap;
			flex-direction: column-reverse;
		}
		.buttons-confirm button.cancel,
		.buttons button.cancel,
		.btn.confirm-wd,
		.btn.confirm {
			width: 100%;
			max-height: 66px;
		}
		button.cancel {
			margin-top: 1rem;
		}
	}
</style>
