<script>
  import { infoFormData, savedPassword } from "../../../stores/infoStore";
  import EyePW_ico from "../../../../public/images/EyePW_ico.svelte";
  import { fade, slide } from "svelte/transition";
  export let passwordData, confirm_match;

  let confirmPassValue = $infoFormData.confirm;
  let passValue = $infoFormData.password;

  let onInputConfirmPass = (event) => {
    $passwordData.confirm = event.target.value;
    $savedPassword = false;
  };
  let onInputPass = (event) => {
    $passwordData.password = event.target.value;
    $savedPassword = false;
  };

  export const validatePasswordType = (event) => {
    let input = event.target.parentElement.lastElementChild;
    let type = input.getAttribute("type");
    if (type === "password") {
      input.setAttribute("type", "text");
    } else {
      input.setAttribute("type", "password");
    }
  };
</script>

<div class="tab__wrapper" in:fade>
  <div class="tab__head">Password</div>
  <div class="tab__subhead">Please put your Password</div>
  <div class="tab__form__fields">
    <div class="input__wrapper">
      <div
        class="eyeWrapper"
        on:click|capture={validatePasswordType}
        class:disabled={$savedPassword}
      >
        <EyePW_ico
          disabled={$savedPassword ? "on" : "off"}
          class={$passwordData.err.password ? "error" : ""}
        />
      </div>
      <input
        type="password"
        class="input-sv"
        placeholder="Password"
        autocomplete
        value={passValue}
        class:error={$passwordData.err.password}
        class:success={$confirm_match}
        class:disabled={$savedPassword}
        on:focus={passwordData.clear}
        on:input={onInputPass}
      />
    </div>
    {#if $passwordData.err.password}
      <p transition:slide|local class="error__message">
        {$passwordData.err.password}
      </p>
    {:else if $savedPassword === false}
      <div class="info__password__message">
        At a least 8 characters, 1 capital letter, 1 number, 1 special symbol
      </div>
    {/if}

    <div class="input__wrapper">
      <div
        class="eyeWrapper"
        on:click|capture={validatePasswordType}
        class:disabled={$savedPassword}
      >
        <EyePW_ico
          disabled={$savedPassword ? "on" : "off"}
          class={$passwordData.err.confirm ? "error" : ""}
        />
      </div>
      <input
        type="password"
        class="input-sv"
        placeholder="Confirm Password"
        autocomplete
        value={confirmPassValue}
        class:error={$passwordData.err.confirm}
        class:success={$confirm_match}
        class:disabled={$savedPassword}
        on:focus={passwordData.clear}
        on:input={onInputConfirmPass}
      />
    </div>
    {#if $passwordData.err.confirm}
      <p transition:slide|local class="error__message last">
        {$passwordData.err.confirm}
      </p>
    {/if}
  </div>
</div>
{#if $savedPassword}
  <div transition:slide|local class="info__password__message">
    Password successfully accepted
  </div>
{/if}

<style>
  input {
    padding-right: 50px;
  }
  .input-sv.success.disabled {
    filter: grayscale(1);
    opacity: 0.25;
  }
  .eyeWrapper {
    position: absolute;
    top: 20px;
    right: 20px;
    z-index: 2;
    cursor: pointer;
  }

  .error__message {
    margin-bottom: 8px;
    text-align: left;
  }
  .error__message.last {
    margin-bottom: 8px;
    margin-top: 8px;
  }
  .info__password__message {
    font-size: var(--text-size-smaller);
    color: var(--color-dark-st3);
    margin-bottom: 10px;
    padding-left: 30px;
    text-align: left;
  }
  .input__wrapper {
    position: relative;
  }
  .input__wrapper:first-child {
    margin-bottom: 10px;
  }

  @media only screen and (max-width: 768px) {
    .info__password__message {
      padding-left: 10px;
    }
  }
  @media only screen and (max-width: 480px) {
    .eyeWrapper {
      top: 13px;
    }
  }
</style>
