<script>
  import { slide } from "svelte/transition";
  import { createForm } from "svelte-forms-lib";
  import * as yup from "yup";
  import { confirmModalState } from "../../profileStore";

  const { form, errors, state, handleChange, handleSubmit } = createForm({
    initialValues: {
      userName: "",
    },
    validationSchema: yup.object().shape({
      userName: yup
        .string()
        .min(3, "User name should be at least 3 symbols length")
        .max(20, "User name must be no more than 20 characters")
        .required("Please put your User name"),
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

<div class=" mt-1">Change User name</div>
<div class="modal_main-row">
  <form on:submit|preventDefault={handleSubmit} class="mt-1_5">
    <input
      type="text"
      placeholder="Edit User name"
      class:error={$errors.userName}
      autocomplete
      on:change={handleChange}
      on:focus={() => onFocus("userName")}
      bind:value={$form.userName}
    />
    {#if $errors.userName}
      <small transition:slide|local class="error_text last"
        >{$errors.userName}</small
      >
    {/if}
    <button class="btn _218">Continue</button>
  </form>
</div>
