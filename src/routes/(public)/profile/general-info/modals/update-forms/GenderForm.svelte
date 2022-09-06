<script>
  import Dropdown from "$lib/components/Dropdown.svelte";
  import { t } from "$lib/translations/i18n.js";
</script>

<div class=" mt-1">{$t("CHANGE_GENDER")}</div>
<div class="modal_main-row">
  <form on:submit|preventDefault={$$props.submitChanges} class="mt-1_5">
    <Dropdown itemsData={[$t("MALE"), $t("FEMALE")]} />
    <button class="btn _218">{$t("CONTINUE")}</button>
  </form>
</div>
