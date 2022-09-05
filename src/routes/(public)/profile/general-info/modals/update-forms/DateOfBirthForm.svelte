<script>
  import flatpickr from "flatpickr";
import { onMount } from "svelte";
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

<div class=" mt-1">Change Date Of Birth</div>
<div class="modal_main-row">
  <form on:submit|preventDefault={$$props.submitChanges} class="mt-1_5">
    <div class="input-sv small date-input" >
    <input
      class="date"
      bind:this={datePicker}
      placeholder={selectedDate || "Date Of Birth*"}
    />
  </div>
    <button class="btn _218">Continue</button>
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
