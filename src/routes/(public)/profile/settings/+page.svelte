<script>
  import SettingsLanguage from "./SettingsLanguage.svelte";
  import SettingsNotifications from "./SettingsNotifications.svelte";
</script>

<div class="settings_main box_shadow-medium b-radius-8 p-2 d-flex flex-col justify-sb">
  <div>
    <div class="text-3 mb-1_5">Settings</div>
    <div class="grid-2">
      <SettingsNotifications />
      <SettingsLanguage />
    </div>
  </div>
  <button class="btn confirm settings_btn" disabled>Closing an account</button>
</div>

<style>
  .settings_main {
    color: var(--green-dark-color);
    height: 100%;
    background: var(--white);
    min-height: 78vh;
  }
  .settings_main .grid-2 {
    margin-right: 170px;
  }
  button.btn.confirm.settings_btn:disabled{
    border-color: #D8D8D8;
    padding: 13px;
    width: 233px;
    margin-left: auto;
  }

  :global(.settings_card) {
    background: var(--white);
    border: 1px solid;
    border-color: var(--grey-color);
    padding: 2.125rem 2rem 2rem 2rem;
  }
  :global(.settings_card--head) {
    margin-bottom: 0.875rem;
  }
  @media only screen and (max-width: 1280px) {
    .settings_main .grid-2 {
      margin-right: 14vw;
    }
  }
</style>
