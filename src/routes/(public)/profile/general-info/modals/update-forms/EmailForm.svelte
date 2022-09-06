<script>
  import { slide } from "svelte/transition";
  import { createForm } from "svelte-forms-lib";
  import * as yup from "yup";
  import { confirmModalState } from "../../profileStore";
  import { t } from "$lib/translations/i18n.js";

  const emailrRegEx =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  const { form, errors, state, handleChange, handleSubmit } = createForm({
    initialValues: {
      email: "",
    },
    validationSchema: yup.object().shape({
      email: yup
        .string()
        .matches(emailrRegEx, $t("INCORRECT_EMAIL"))
        .required($t("ENTER_EMAIL")),
    }),
    onSubmit: () => {
      $confirmModalState = true;
      $$props.submitChanges;
    },
  });
  const onFocus = (item) => {
    $errors[item] = "";
  };
</script>

<div class=" mt-1">{$t("CHANGE_EMAIL")}</div>
<div class="modal_main-row">
  <form on:submit|preventDefault={handleSubmit} class="mt-1_5">
    <input
      type="text"
      placeholder={$t("NEW_EMAIL")}
      class:error={$errors.email}
      autocomplete
      on:change={handleChange}
      on:focus={() => onFocus("email")}
      bind:value={$form.email}
    />
    {#if $errors.email}
      <small transition:slide|local class="error_text last"
        >{$errors.email}</small
      >
    {/if}
    <button class="btn _218">{$t("CONTINUE")}</button>
  </form>
</div>
