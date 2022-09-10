<script>
  import greenLogo from "$lib/assets/img/logo-green.svg";
  import Modal, { getModal } from "$lib/components/Modal.svelte";
  import {
    modalClassName,
    confirmModalState,
    profileEditForm,
  } from "../profileStore";
  import { fade } from "svelte/transition";
  import closeIcon from "$lib/assets/img/close.svg";
  import FirstNameForm from "./update-forms/FirstNameForm.svelte";
  import UserNameForm from "./update-forms/UserNameForm.svelte";
  import EmailForm from "./update-forms/EmailForm.svelte";
  import GenderForm from "./update-forms/GenderForm.svelte";
  import DateOfBirthForm from "./update-forms/DateOfBirthForm.svelte";
  import VerifyTabs from "$lib/components/forms/verify/VerifyTabs.svelte";
  import LoginPassForm from "$lib/components/forms/LoginPassForm.svelte";
  import VerifyCodeForm from "$lib/components/forms/VerifyCodeForm.svelte";
  import { t } from "$lib/translations/i18n.js";

  let formStep = 1;

  $: formStep;
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

<Modal id="general-info" className={$modalClassName}>
  <div class="modal_main text-center">
    <img src={greenLogo} alt="esi logo img" />
    <div class="modal_head_medium text-1">{$t("WELCOME")}</div>
    <div class="modal_main-body ">
      {#if formStep === 1}
        <div class=" mt-1">{$t("VERIFY_ACCOUNT")}</div>

        <LoginPassForm authDataCallback={login} />
      {:else if formStep === 2}
        <div class="mt-1">{$t("VERIFY_ACCOUNT")}</div>
        <div class="modal_main-row">
   
            <VerifyTabs sendVerifyCallback={()=>(formStep = 3)}/>
          
        </div>
      {:else if formStep === 3}
        <div class=" mt-1">{$t("VERIFY_ACCOUNT")}</div>
        <div class="modal_main-row">
          <VerifyCodeForm submitVerificationCode={()=>(formStep = 4)}/>
        </div>
      {:else if formStep === 4}
        {#if $profileEditForm === "userName"}
          <UserNameForm submitChanges={submitNewName} />
        {:else if $profileEditForm === "firstName"}
          <FirstNameForm submitChanges={submitNewName} />
        {:else if $profileEditForm === "gender"}
          <GenderForm submitChanges={submitNewName} />
        {:else if $profileEditForm === "dob"}
          <DateOfBirthForm submitChanges={submitNewName} />
        {:else if $profileEditForm === "email"}
          <EmailForm submitChanges={submitNewName} />
        {/if}
      {/if}
    </div>
  </div>
</Modal>
{#if $confirmModalState === true}
  <div class="form__wrapper" out:fade={{ delay: 50, duration: 110 }}>
    <div class="confirm__form text-center">
      <div class="finish__content">
        <div class="modal_head_medium text-1">
          {$t("PROFILE_UPDATED")}
        </div>
        <button class="btn success" on:click={() => closeModals("general-info")}
          >{$t("BACK")}</button
        >
      </div>
      <img
        class="close_icon"
        on:click={() => closeModals("general-info")}
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
  input {
    transition: none;
  }

  .finish__content {
    padding-top: 141px;
    margin: 0 auto;
    max-width: 374px;
  }
  .finish__content .modal_head_medium {
    margin: 0;
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
