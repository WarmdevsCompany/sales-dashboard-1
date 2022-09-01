<script>
  import { slide } from "svelte/transition";
  import { createForm } from "svelte-forms-lib";
  import * as yup from "yup";
  import { confirmModalState } from "../securityStore";
  import EyePwIco from "$lib/components/icons/EyePW_ico.svelte";
  import { validatePasswordType } from "$lib/functions/validatePasswordType";

  const passwordRegEx = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  const { form, errors, state, handleChange, handleSubmit } = createForm({
    initialValues: {
      password: "",
      confirmPassword: "",
    },
    validationSchema: yup.object().shape({
      password: yup
        .string()
        .min(8, "Password should be at least 8 symbols length")
        .max(16, "Password should not be more then 16 symbols length")
        .matches(
          passwordRegEx,
          "Password should have at least 1 capital letter, 1 number, 1 special symbol"
        )
        .required("Password is required"),
      confirmPassword: yup
        .string()
        .min(8, "Password should be at least 8 symbols length")
        .max(16, "Password should not be more then 16 symbols length")
        .matches(
          passwordRegEx,
          "Password should have at least 1 capital letter, 1 number, 1 special symbol"
        )
        .required("Password is required")
        .oneOf([yup.ref("password")], "Your passwords do not match."),
    }),
    onSubmit: () => {
      $confirmModalState = true;
    },
  });
  const onFocus = (item) => {
    $errors[item] = "";
  };
</script>

<form on:submit|preventDefault={handleSubmit} class="mt-1_5">
  <div class="input__wrapper">
    <div class="eyeWrapper" on:click|capture={validatePasswordType}>
      <EyePwIco class={$errors.password ? "error" : ""} />
    </div>
    <input
      type="password"
      class="mb-0_625"
      placeholder="New password"
      class:error={$errors.password}
      autocomplete
      on:change={handleChange}
      on:focus={() => onFocus("password")}
      bind:value={$form.password}
    />
  </div>
  {#if $errors.password}
    <small transition:slide|local class="error_text ">{$errors.password}</small>
  {/if}
  <div class="input__wrapper">
    <div class="eyeWrapper" on:click|capture={validatePasswordType}>
      <EyePwIco class={$errors.password ? "error" : ""} />
    </div>
    <input
      type="password"
      placeholder="Repeat new password"
      class:error={$errors.confirmPassword}
      autocomplete
      on:change={handleChange}
      on:focus={() => onFocus("confirmPassword")}
      bind:value={$form.confirmPassword}
    />
  </div>
  {#if $errors.confirmPassword}
    <small transition:slide|local class="error_text last"
      >{$errors.confirmPassword}</small
    >
  {/if}
  <button class="btn _218">Continue</button>
</form>
