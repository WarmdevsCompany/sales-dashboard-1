<script>
  import { getModal } from "$lib/components/Modal.svelte";
  export let btnAligment = "justify-end";
  export let confirmBtn = "open";
  
  export let closeModals;
  const confirmWithdraw = () => {
    closeModals('withdraw')
  };

</script>

<div class="mt-1_5">
  <div class="grid mobile-block">
    <div class="text-sm">Total Withdrawal Amount:</div>
    <div class="grid-item-value text-sm">$1,000</div>
    <div class="text-sm">Withdrawal fee:</div>
    <div class="grid-item-value text-sm">$4</div>
    <div class="text-sm">Time to transfer:</div>
    <div class="grid-item-value text-sm">3 days</div>
    <div class="text-sm">Withdrawal % of total:</div>
    <div class="grid-item-value text-sm">14%</div>
  </div>
  {#if confirmBtn === "open"}
    <div class="d-flex {btnAligment} buttons">
      <button class="btn cancel mr-1_5">Cancel</button>

      <div class="btn" on:click={() => getModal("withdraw").open()}>
        Withdraw
      </div>
    </div>
  {:else if confirmBtn === "confirm"}
    <div class="d-flex {btnAligment} buttons-confirm">
      <button class="btn cancel mr-1_5" on:click={()=>closeModals('withdraw')}>Cancel</button>

      <div class="btn confirm-wd" on:click={confirmWithdraw}>
        Confirm withdraw
      </div>
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
  .buttons{
    margin-top: 2.56rem;
  }
  .buttons-confirm{
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
