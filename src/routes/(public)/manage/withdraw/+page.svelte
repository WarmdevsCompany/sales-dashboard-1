<script>
import Modal, {getModal} from "$lib/components/Modal.svelte";
import WithdrawFooter from "./withdraw-footer/WithdrawFooter.svelte";
import WithdrawManager from "./withdraw-manager/WithdrawManager.svelte";
import WithdrawPlans from "./withdraw-plans/WithdrawPlans.svelte";
import greenLogo from "$lib/assets/img/logo-green.svg";
import ConfirmModal from "./withdraw-confirm/ConfirmModal.svelte";
	import { globalData } from "$lib/globalStore";
let modalClassName = 'greenForm'
const submit = ()=> true
const withdrawMethods = [];
[
		{ withdrawName: 'Bank transfer #132452*USD', recipientName: 'Recipient full name' },
		{ withdrawName: 'Bank transfer #937752*USD', recipientName: 'Recipient full name' }
	]
</script>
<svelte:head>
	<title>Withdraw</title>
	<meta name="description" content="Withdraw page" />
</svelte:head>
<WithdrawManager />
<WithdrawPlans current_contribution={$globalData.data.current_contribution} currentSymbol={$globalData.data.currency.symbol}/>
<WithdrawFooter />

<!-- Verify account -->
<ConfirmModal withdrawMethods={withdrawMethods}/>