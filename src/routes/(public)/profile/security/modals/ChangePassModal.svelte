<script>
  import greenLogo from "$lib/assets/img/logo-green.svg";
  import Modal, { getModal } from "$lib/components/Modal.svelte";
  import { modalClassName, confirmModalState } from "../securityStore";
  import { fade } from "svelte/transition";
  import closeIcon from "$lib/assets/img/close.svg";
  import VerifyTabs from "$lib/components/forms/verify/VerifyTabs.svelte";
  import LoginPassForm from "$lib/components/forms/LoginPassForm.svelte";
  import VerifyCodeForm from "$lib/components/forms/VerifyCodeForm.svelte";
  import ChangePassForm from "./ChangePassForm.svelte";
  let formStep = 1;
  let heading = "Change password";

  $: {
    formStep;
    if (formStep === 4) {
      heading = "New password";
    }
  }
  const login = () => (formStep = 2);
  const submitVerificationCode = () => {};
  const submitNewName = () => {
    $confirmModalState = true;
  };
  const closeModals = (modalId) => {
    $confirmModalState = false;
    formStep = 1;
    getModal(modalId).close();
  };
</script>

<Modal id="change-password" className={$modalClassName}>
  <div class="modal_main text-center">
    <img src={greenLogo} alt="esi logo img" />
    <div class="modal_head_medium text-1">{heading}</div>
    <div class="modal_main-body ">
      {#if formStep === 1}
        <div class=" mt-1">First, verify that this is your account.</div>
        <LoginPassForm authDataCallback={login} />
      {:else if formStep === 2}
        <div class="mt-1">First, verify that this is your account.</div>
        <div class="modal_main-row">
          <VerifyTabs sendVerifyCallback={() => (formStep = 3)} />
        </div>
      {:else if formStep === 3}
        <div class=" mt-1">First, verify that this is your account.</div>
        <div class="modal_main-row">
          <VerifyCodeForm submitVerificationCode={() => (formStep = 4)} />
        </div>
      {:else if formStep === 4}
        <div class="modal_main-row">
          <ChangePassForm />
        </div>
      {/if}
    </div>
  </div>
</Modal>
{#if $confirmModalState === true}
  <div class="form__wrapper" out:fade={{ delay: 50, duration: 110 }}>
    <div class="confirm__form text-center">
      <div class="finish__content">
        <div class="modal_head_medium text-1">
          Password successfully changed
        </div>
        <button
          class="btn success"
          on:click={() => closeModals("change-password")}>Back</button
        >
      </div>
      <img
        class="close_icon"
        on:click={() => closeModals("change-password")}
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
  .modal_main-body {
    max-width: 587px;
    margin: 0 auto;
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
  .btn.success {
    margin: 2.125rem auto 0 auto;
  }
  .forgot__pass {
    padding: 1.25rem;
  }
  .forgot__btn {
    appearance: none;
    border: none;
    background-color: transparent;
    padding: 0;
    width: auto;
    margin: 0;
    color: #ababab;
    font-weight: var(--font-weight-normal);
  }
  .form__bottom {
    margin-top: 2.125rem;
  }
  input {
    transition: none;
  }

  .finish__content {
    padding-top: 153px;
    margin: 0 auto;
    max-width: 374px;
  }
  .finish__content .modal_head_medium {
    margin: 0;
  }
  :global(input.mb-0_625) {
    margin-bottom: 0.625rem;
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
</style>
