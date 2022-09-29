<script>
	import { scrollToTop } from '$lib/functions/scrollToTop.js';
	import { roundNumber } from '$lib/functions/roundNumber.js';
	import Modal, { getModal } from '$lib/components/Modal.svelte';
	import WithdrawFooter from './withdraw-footer/WithdrawFooter.svelte';
	import WithdrawManager from './withdraw-manager/WithdrawManager.svelte';
	import WithdrawPlans from './withdraw-plans/WithdrawPlans.svelte';
	import greenLogo from '$lib/assets/img/logo-green.svg';
	import ConfirmModal from './withdraw-confirm/ConfirmModal.svelte';
	import { globalData } from '$lib/globalStore';
	import { withdrawBalance } from './withdrawStore';
	let modalClassName = 'greenForm',
		timeToTransfer,
		feeSum,
		withdrawOfTotal;
	const submit = () => true;
	const fee = $globalData.data.feeInfo.fee / 100;
	const timeToTransferLessThan20 = $globalData.data.feeInfo.lessThen20;
	const timeToTransferMoreThan20 = $globalData.data.feeInfo.moreThen20;
	const balance = $globalData.data.currentSubscription.balance;
	const withdrawMethods = [
		{ withdrawName: 'Bank transfer #132452*USD', recipientName: 'Recipient full name' },
		{ withdrawName: 'Bank transfer #937752*USD', recipientName: 'Recipient full name' }
	];
	$: {
		withdrawOfTotal = roundNumber(($withdrawBalance * 100) / balance, 2);
		feeSum = roundNumber(fee * $withdrawBalance, 2);
		if (withdrawOfTotal > 100) {
			withdrawOfTotal = 100;
		} else if (withdrawOfTotal < 20) {
			timeToTransfer = timeToTransferLessThan20;
		} else if (withdrawOfTotal > 20) {
			timeToTransfer = timeToTransferMoreThan20;
		}
	}
	scrollToTop();
</script>

<svelte:head>
	<title>Withdraw</title>
	<meta name="description" content="Withdraw page" />
</svelte:head>
<WithdrawManager />
<WithdrawPlans
	current_contribution={$globalData.data.current_contribution}
	currentSymbol={$globalData.data.currency.symbol}
/>
<WithdrawFooter {fee} {timeToTransfer} {withdrawOfTotal} {feeSum} />

<!-- Verify account -->
<ConfirmModal {withdrawMethods} {fee} {timeToTransfer} {withdrawOfTotal} {feeSum} />
