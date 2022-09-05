<script>
  import greenLogo from "$lib/assets/img/logo-green.svg";
  import Modal, { getModal } from "$lib/components/Modal.svelte";
  import WithdrawFooter from "../withdraw-footer/WithdrawFooter.svelte";
  import { modalClassName, confirmModalState } from "../withdrawStore";
  import { fade } from "svelte/transition";
  import closeIcon from "$lib/assets/img/close.svg";
  import VerifyTabs from "$lib/components/forms/verify/VerifyTabs.svelte";
import VerifyCodeForm from "$lib/components/forms/VerifyCodeForm.svelte";
  let formStep = 1;
  $: formStep;
  const submitEmailOrPhone = () => (formStep = 2);
  const submitVerificationCode = () => {
    $confirmModalState = true;
  };
  const closeModals = (modalId) => {
    $confirmModalState = false;
    formStep = 1;
    getModal(modalId).close();
  };
</script>

<Modal id="withdraw" className={$modalClassName}>
  <div class="modal_main text-center">
    <img src={greenLogo} alt="esi logo img" />
    <div class="modal_head_medium text-1">Withdraw</div>

    <div class="modal_main-row ">
      <div class=" mt-1">First, verify that this is your account.</div>
      {#if formStep === 1}
        <VerifyTabs sendVerifyCallback={submitEmailOrPhone} />
      {:else if formStep === 2}
        <VerifyCodeForm submitVerificationCode={submitVerificationCode}/>
      {/if}
    </div>
  </div>
</Modal>
{#if $confirmModalState}
  <div class="form__wrapper" out:fade={{ delay: 50, duration: 110 }}>
    <div class="confirm__form text-center">
      <img src={greenLogo} alt="esi logo img" />
      <div class="modal_head_medium text-1">Withdraw</div>
      <div class="text-xsm last__step--subhead mb-1_5">
        This is where you withdraw your available balance*
      </div>
      <div class="last__step--body">
        <div>
          SAFE PLAN: <span class="text-green mobile-block">$600</span>
          <div class="inline">
            ADVENTURE PLAN: <span class="text-green mobile-block">$400</span>
          </div>

          FOUNDER PLAN:<span class="text-green mobile-block">$0</span>
        </div>
        <div class="line mt-1_5 mb-1_5" />
        <WithdrawFooter
          btnAligment={"justify-cc"}
          confirmBtn={"confirm"}
          {closeModals}
        />
      </div>
      <img
        class="close_icon"
        on:click={() => closeModals("withdraw")}
        src={closeIcon}
        alt="esi close icon"
      />
    </div>
  </div>
{/if}

<style>
  .modal_main {
    margin: 0 auto;
  }
  .form__wrapper {
    z-index: 999;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    padding: 2rem;
    background: #4448;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .confirm__form {
    position: relative;
    border-radius: 10px;
    background: white;
    padding: 2.125rem;
    width: 100%;
    max-width: 950px;
    min-height: 584px;
  }
  .close_icon {
    position: absolute;
    top: 34px;
    right: 34px;
    width: 24px;
    height: 24px;
    cursor: pointer;
    transition: transform 0.3s;
  }
  .close_icon:hover {
    transform: scale(1.2);
  }
  .modal_main.confirm__withdraw {
    padding-top: 33px;
    padding-bottom: 99px;
  }
  .modal_main .modal_head_medium {
    color: var(--green-dark-color);
    margin-top: 2.5rem;
  }
  .modal_main-row {
    max-width: 360px;
    margin: 0 auto 0 auto;
    color: #000;
  }

  .btn {
    width: 218px;
    margin: 2.125rem auto 0 auto;
    transition: none;
  }
  input {
    transition: none;
  }
  .last__step--subhead {
    margin-top: 0.625rem;
  }

  .last__step--body .text-green {
    font-weight: var(--font-weight-bolder);
  }
  .last__step--body .inline {
    padding: 0 0.625rem;
  }
  .last__step--body {
    margin: 0 auto;
    max-width: 632px;
  }

  .line {
    width: 100%;
    height: 1px;
    background: var(--grey-color);
  }
  @media only screen and (max-width: 991px) {
    
  }
</style>
