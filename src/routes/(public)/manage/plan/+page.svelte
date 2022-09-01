<script>
  import Modal, { getModal } from "$lib/components/Modal.svelte";
  import PlansMain from "./change-bottom/ChangePlansMain.svelte";
  import ChangePlans from "./change-contributions/ChangePlans.svelte";
  import greenLogo from "$lib/assets/img/logo-green.svg";
  import UpdatedPlanItems from "./UpdatedPlanItems.svelte";
</script>

<svelte:head>
  <title>Plan</title>
  <meta name="description" content="Plan page" />
  <script
    src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
</svelte:head>

<ChangePlans />
<div class="d-flex justify-cc">
  <button
    class="btn mt-1_5 box_shadow-medium"
    on:click={() => getModal("confirmPlan").open()}>Confirm changes</button
  >
</div>

<Modal id="confirmPlan">
  <div class="modal_main confirm text-center">
    <img src={greenLogo} alt="esi logo img" />
    <div class="modal_head_medium mt-2">We've updated your contribution</div>
    <div class="modal_main-row d-flex justify-cc ">
      <div class="text-xsm d-flex align-center">
        New Contribution: <span class="text-3 text-blue">$1,000/mo</span>
      </div>
    </div>
    <div class="updated__items">
      <UpdatedPlanItems />
    </div>
    <button class="btn" on:click={() => getModal("confirmPlan").close()}
      >Close</button
    >
  </div>
</Modal>
<PlansMain />

<style>
  .modal_main {
    max-width: 816px;
    margin: 0 auto;
  }
  .modal_main.confirm {
    padding-top: 33px;
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
  .btn {
    width: 182px;
    margin: 2.625rem auto 0 auto;
    transition: none;
  }
</style>
