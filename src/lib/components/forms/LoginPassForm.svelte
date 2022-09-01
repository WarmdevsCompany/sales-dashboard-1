<script>
  export let authDataCallback;
  import { validatePasswordType } from "$lib/functions/validatePasswordType";
  import { fade, slide } from "svelte/transition";
  import EyePwIco from "../icons/EyePW_ico.svelte";
  import { createForm } from "svelte-forms-lib";
  import * as yup from "yup";
  
  const { form, errors, state, handleChange, handleSubmit } = createForm({
    initialValues: {
      userName: "",
      password: "",
    },
    validationSchema: yup.object().shape({
      userName: yup
        .string()
        .required("User name is required"),
      password: yup.string().required("Password is required"),
    }),
    onSubmit: () => {
      authDataCallback();
    },
  });
  const onFocus = (item) => {
    $errors[item] = "";
  };
</script>

<form on:submit|preventDefault={handleSubmit} class="mt-1_5">
  <input
    type="text"
    placeholder="User Name"
    class="mb-0_625"
    class:error={$errors.userName}
    autocomplete
    on:change={handleChange}
    on:focus={() => onFocus("userName")}
    bind:value={$form.userName}
  />
  {#if $errors.userName}
    <small transition:slide|local class="error_text">{$errors.userName}</small>
  {/if}
  <div class="input__wrapper">
    <div class="eyeWrapper" on:click|capture={validatePasswordType}>
      <EyePwIco class={$errors.password ? "error" : ""} />
    </div>
    <input
      type="password"
      placeholder="Password"
      class:error={$errors.password}
      autocomplete
      on:change={handleChange}
      on:focus={() => onFocus("password")}
      bind:value={$form.password}
    />
  </div>
  {#if $errors.password}
    <small transition:slide|local class="error_text last"
      >{$errors.password}</small
    >
  {/if}

  <div class="form__bottom d-flex justify-sb">
    <div class="forgot__pass">
      <button
        on:click|preventDefault={console.log(true)}
        class="btn forgot__btn">Forgot the Password?</button
      >
    </div>
    <button class="btn login"> Log In</button>
  </div>
</form>

<style>
  .btn.login {
    width: 229px;
    margin: 0;
    transition: none;
  }
  .forgot__pass {
    padding: 1.25rem;
  }
  .forgot__btn {
    appearance: none;
    border: none;
    background-color: transparent;
    padding: 0;
    width: auto;
    margin: 0;
    color: #ababab;
    font-weight: var(--font-weight-normal);
  }
  .form__bottom {
    margin-top: 2.125rem;
  }

</style>
