<script>
  import Modal, { getModal } from "$lib/components/Modal.svelte";
  import Dropdown from "$lib/components/Dropdown.svelte";
  import greenLogo from "$lib/assets/img/logo-green.svg";
  import { t } from '$lib/translations/i18n.js';
  let disabledState = false;
  let errorState = false;
  function onSubmit() {
    console.log("Form submited");
  }
</script>

<div
  class="change__body b-radius-8 text-center text-dark-green box_shadow-medium {disabledState? 'disabled': ''} {errorState? 'error': ''}"
>
  <div class="text-3">{$t('MANAGE_CHANGE_CONTRIBUTIONS')}</div>
  <div class="text-xsm mt-0_5">
    {$t('MANAGE_RECURRING_CONTRIBUTION')}*
  </div>
  <div class="text-xsm mt-0_25">{$t('MANAGE_NEXT_RECURRING_CONTRIBUTION')}</div>
  <form
    on:submit|preventDefault={onSubmit}
    class="d-flex justify-sb align-bottom"
  >
    <div class="input__wrapper">
      <label for="amount" class="label">{$t('MANAGE_AMOUNT')}</label>
      <input class="" type="text" id="amount" placeholder="$1,000" disabled = {disabledState || errorState}/>
    </div>
    <div class="input__wrapper">
      <div class="dropdown__label label">{$t('MANAGE_RECURRING')}</div>
      <div class="dropdown__wrapper ">
        <Dropdown itemsData={[$t('MONTHLY'), $t('BI_MONTHLY')]} disabled = {disabledState || errorState}/>
      </div>
    </div>
    <button class="btn confirm " on:click={() => getModal('confirm').open() } disabled = {disabledState || errorState}
      >{$t('CONFIRM_CHANGES')}</button
    >
  </form>
</div>
<Modal id="confirm">
  <div class="modal_main confirm text-center">
    <img src={greenLogo} alt="esi logo img" />
    <div class="modal_head_medium mt-2">{$t('MANAGE_UPDATED')}</div>
    <div class="modal_main-row d-flex justify-sb align-bottom">
      <div class="text-xsm d-flex align-center mobile-block">
        {$t('MANAGE_NEW_CONTRIBUTION')}: <span class="text-3 text-blue mobile-block">$1,000/mo</span>
      </div>
      <div class="text-xsm d-flex align-center mobile-block">
        {$t('MANAGE_NEXT_CONTRIBUTION')}: <span class="text-3 text-blue mobile-block">01 Jul 2022</span
        >
      </div>
    </div>
    <p class="mt-1 modal-bootom-text">
      {$t('MANAGE_REVIEW')}
    </p>
    <button class="btn secondary mb-1" on:click={() => getModal('confirm').close()}>{$t('CLOSE')}</button>
  </div>
</Modal>


<style>
  .change__body {
    background: var(--white-secondary);
    border: 1px solid var(--green-medium-color);
    padding: 2.125rem 2rem 3.25rem 2rem;
  }
  .change__body.disabled {
    background: var( --white-third);
    border: 1px solid var(--grey-color);
    padding: 2.125rem 2rem 3.25rem 2rem;
  }
  .change__body.error {
    background: var( --error-bg-color);
    border: 1px solid var(--red-color);
    padding: 2.125rem 2rem 3.25rem 2rem;
  }
  form {
    margin: 0.875rem auto 0 auto;
    max-width: 721px;
  }
  .dropdown__wrapper {
    min-width: 207px;
  }
  .input__wrapper {
    max-width: 207px;
  }
  input::placeholder {
    color: var(--green-dark-medium);
  }
  .modal_main {
    max-width: 687px;
      margin: 0 auto;
  }
  .modal_main.confirm {
    padding-top: 81px;
    padding-bottom: 50px;
  }
  .modal_main .modal_head_medium {
    color: var(--green-dark-color);
  }
  .modal_main-row {
    max-width: 507px;
    margin: 1.5rem auto 0 auto;
    color: #000;
  }
  .modal_main-row span {
    margin-left: 0.25rem;
  }
  .btn.secondary {
    width: 224px;
    margin: 2.125rem auto 0 auto;
    transition: none;
  }
  .modal-bootom-text {
    font-weight: var(--font-weight-medium);
    color: "#323232";
  }
  @media only screen and (max-width: 991px) {
    .change__body {
      padding: 2rem 1rem 3rem 1rem;
    }
    form {
      display: block;
    }
    .input__wrapper {
      max-width: 100%;
    }
    .confirm {
      margin-top: 2rem;
      width: 100%;
    }
    .dropdown__label {
      padding-top: 18px;
    }
    .modal_main-row {
      display: block;
    }
  }
</style>
