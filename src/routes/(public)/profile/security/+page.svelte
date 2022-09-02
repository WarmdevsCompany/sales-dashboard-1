<script>
  import lockImg from "$lib/assets/img/padlock.svg";
  import { getModal } from "$lib/components/Modal.svelte";
  import ChangePassModal from "./modals/ChangePassModal.svelte";
</script>

<div class="change__password box_shadow-medium b-radius-8 d-flex justify-cc ">
  <div class="change__password--main text-center">
    <img src={lockImg} alt="change password" class="lock_icon" />
    <div class="text-3">Change password</div>
    <div class="text-xsm mt-0_5">
      last date of password change - <span class="text-green">27.07.21</span>
    </div>
    <button class="btn" on on:click={() => getModal("change-password").open()}
      >Change password</button
    >
  </div>
</div>
<ChangePassModal />

<style>
  .lock_icon {
    width: 76px;
    height: 76px;
  }
  .change__password {
    padding-top: 152px;
    color: var(--green-dark-color);
    height: 100%;
    background: var(--white);
    min-height: 78vh;
  }
  .change__password img {
    margin-bottom: 1.6875rem;
  }
  .change__password--main button {
    margin: 2.125rem auto 0 auto;
    width: 215px;
  }
  @media only screen and (max-width: 991px) {
    .change__password {
      padding-top: 4rem;
      padding-bottom: 80px;
      min-height: 0;
      margin-bottom: 4rem;
    }
  }
</style>
