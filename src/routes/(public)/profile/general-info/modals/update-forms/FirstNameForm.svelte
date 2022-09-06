<script>
  import { t } from "$lib/translations/i18n.js";
</script>
<div class=" mt-1">{$t("PROFILE_NAMES_CHANGE")}</div>
<div class="modal_main-row">
  <form on:submit|preventDefault={$$props.submitChanges} class="mt-1_5">
    <input type="text" placeholder={$t("PROFILE_EDIT_FN")} class="mb-0_625" />
    <input type="text" placeholder={$t("PROFILE_EDIT_LN")} />
    <button class="btn _218">{$t("CONTINUE")}</button>
  </form>
</div>

