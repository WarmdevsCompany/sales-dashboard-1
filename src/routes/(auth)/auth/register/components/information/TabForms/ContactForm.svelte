<script>
  import { fade, slide } from "svelte/transition";
  import { checkInputValue } from "../../../functions/checkInputValue";
  export let loginData;
  import { calcInputPhonePadding} from "../../../stores/infoStore";
import CountryDropdown from "./CountryDropdown.svelte";



</script>

<div class="tab__wrapper" in:fade>
  <div class="tab__head">Contact</div>
  <div class="tab__subhead">Please put your legal Phone and Email</div>
  <div class="tab__form__fields">
    <input
      type="text"
      class="input-sv"
      placeholder="Username"
      autocomplete
      bind:value={$loginData.userName}
      class:error={$loginData.err.userName}
      on:focus={loginData.clear}
    />

    {#if $loginData.err.userName}
      <p transition:slide|local class="error__message">
        {$loginData.err.userName}
      </p>
    {/if}

    <input
      type="email"
      class="input-sv"
      placeholder="Email"
      autocomplete
      bind:value={$loginData.email}
      class:error={$loginData.err.email}
      on:focus={loginData.clear}
    />
    {#if $loginData.err.email}
      <p transition:slide|local class="error__message">
        {$loginData.err.email}
      </p>
    {/if}
    <div class="tel-wrapper">
         <CountryDropdown />

      <input
      style="padding-left: {$calcInputPhonePadding}px;"
        type="tel"
        class="input-sv second-tel"
        maxlength="20"
        autocomplete
        class:error={$loginData.err.phone}
      on:focus={loginData.clear}
      on:input={checkInputValue}
      bind:value={$loginData.phone}
      />
    </div>

  
    {#if $loginData.err.phone}
      <p transition:slide|local class="error__message last">
        {$loginData.err.phone}
      </p>
    {/if}
  </div>
</div>

<style>
  

 
  .tel-wrapper{
    position: relative;
  }
  .input-sv.error::placeholder {
    color: var(--error-color);
  }
  .error__message {
    margin-bottom: 8px;
    text-align: left;
  }
  .error__message.last {
    margin-bottom: 8px;
    margin-top: 8px;
  }
</style>
