<script>
  import flatpickr from "flatpickr";
  import { onMount } from "svelte";
  import { t } from "$lib/translations/i18n.js";
  let datePicker;
  let selectedDate = new Date();
  $: datePicker;
  onMount(() => {
    flatpickr(datePicker, {
      onChange: function (selectedDates, dateStr, instance) {
        selectedDate = dateStr;
      },
      defaultDate: selectedDate || null,
    });
  });
</script>

<div class=" mt-1">{$t("CHANGE_DATE_OF_BIRTH")}</div>
<div class="modal_main-row">
  <form on:submit|preventDefault={$$props.submitChanges} class="mt-1_5">
    <div class="input-sv small date-input" >
    <input
      class="date"
      bind:this={datePicker}
      placeholder={selectedDate || `${$t("DATE_OF_BIRTH")}*`}
    />
  </div>
    <button class="btn _218">{$t("CONTINUE")}</button>
  </form>
</div>
<style>
    .date-input {
    position: relative;
    padding: 0;
  }
  input.date {
    text-align: left;
  }
  input.date::placeholder {
    color: #000;
  }
  input.date:before {
    color: #000;
    content: attr(placeholder) !important;
    display: block;
    padding: 23px 30px;
  }
</style>
