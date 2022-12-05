<script>
  import { beforeUpdate } from "svelte";
  import Address_ico from "../../../../public/images/Address_ico.svelte";
  import Payment_ico from "../../../../public/images/Payment_ico.svelte";
  import { allowItemIndexBilling } from "../../../stores/billingStore";
  
  export let categoryName;
  let classNamePayment = "";
  let classNameAddress = "";
   
  beforeUpdate(() => {
    if ($allowItemIndexBilling === 2) {
      classNameAddress = "active";
      classNamePayment = "active";
    } else if ($allowItemIndexBilling === 1) {
      classNameAddress = "active";
      classNamePayment = "";
    }
  });
</script>

<div class="icon__wrapper ">
  {#if categoryName === "Address"}
    <Address_ico class={classNameAddress}/>
    <div class="icon__line {classNameAddress}" />

  {:else if categoryName === "Payment"}
    <Payment_ico class={classNamePayment}/>
    <div class="icon__line {classNamePayment}" />
  {/if}
</div>

<style>
  .icon__wrapper {
    width: 24px;
    height: 22px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  }
  .icon__line {
    margin-top: 6px;
    width: 24px;
    height: 2px;
    background: var(--grey-color-lighter);
    border-radius: 20px;
  }
  .icon__line.active {
    background: var(--color-dark-st3);
  }
</style>
