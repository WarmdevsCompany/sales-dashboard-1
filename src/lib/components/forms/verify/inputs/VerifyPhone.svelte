<script>
  import { slide } from "svelte/transition";
  import { createForm } from "svelte-forms-lib";
  import * as yup from "yup";

  const { form, errors, state, handleChange, handleSubmit } = createForm({
    initialValues: {
      phone: "",
    },
    validationSchema: yup.object().shape({
      phone: yup.number().min(5, "Phone should be at least 5 symbols length").required("Phone is required"),
    }),
    onSubmit: () => {
      $$props.sendVerifyCallback();
    },
  });
  const onFocus = (item) => {
    $errors[item] = "";
  };
</script>

<form on:submit|preventDefault={handleSubmit} class="mt-1_5">
  <input
    type="number"
    placeholder="Phone"
    class:error={$errors.phone}
    autocomplete
    on:change={handleChange}
    on:focus={() => onFocus("phone")}
    bind:value={$form.phone}
  />
  {#if $errors.phone}
    <small transition:slide|local class="error_text last">{$errors.phone}</small
    >
  {/if}
  <button class="btn _218">Send</button>
</form>
