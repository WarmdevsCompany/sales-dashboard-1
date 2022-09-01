<script>
import Modal, {getModal} from "$lib/components/Modal.svelte";
import WithdrawFooter from "./withdraw-footer/WithdrawFooter.svelte";
import WithdrawManager from "./withdraw-manager/WithdrawManager.svelte";
import WithdrawPlans from "./withdraw-plans/WithdrawPlans.svelte";
import greenLogo from "$lib/assets/img/logo-green.svg";
import ConfirmModal from "./withdraw-confirm/ConfirmModal.svelte";
let modalClassName = 'greenForm'
const submit = ()=> true
</script>
<svelte:head>
	<title>Withdraw</title>
	<meta name="description" content="Withdraw page" />
</svelte:head>
<WithdrawManager />
<WithdrawPlans />
<WithdrawFooter />

<!-- Verify account -->
<ConfirmModal />