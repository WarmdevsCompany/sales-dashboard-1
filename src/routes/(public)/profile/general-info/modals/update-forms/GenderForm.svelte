<script>
  import Dropdown from "$lib/components/Dropdown.svelte";
</script>

<div class=" mt-1">Change Gender</div>
<div class="modal_main-row">
  <form on:submit|preventDefault={$$props.submitChanges} class="mt-1_5">
    <Dropdown itemsData={["Male", "Female"]} />
    <button class="btn _218">Continue</button>
  </form>
</div>
