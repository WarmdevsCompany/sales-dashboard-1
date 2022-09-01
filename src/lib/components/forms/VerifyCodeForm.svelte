<script>
  import { createForm } from "svelte-forms-lib";
  import { slide } from "svelte/transition";
  import * as yup from "yup";

  const { form, errors, state, handleChange, handleSubmit } = createForm({
    initialValues: {
      code: "",
    },
    validationSchema: yup.object().shape({
        code: yup.number().required("Verification code is required"),
    }),
    onSubmit: () => {
      $$props.submitVerificationCode();
    },
  });
  const onFocus = (item) => {
    $errors[item] = "";
  };
  
  function check(e) {
    var keyCode = (e.keyCode ? e.keyCode : e.which);
    if (keyCode === 38 || keyCode === 40) {
        e.preventDefault();
    }
}
</script>

<form on:submit|preventDefault={handleSubmit} class="mt-1_5">
  <input
    type="number"
    placeholder="Enter verification code"
    class:error={$errors.code}
    autocomplete
    on:mousewheel={(e) => {
        e.target.blur();
      }}
    on:keydown ={check}
    on:keyup={check}
    on:change={handleChange}
    on:focus={() => onFocus("code")}
    bind:value={$form.code}
  />
  {#if $errors.code}
    <small transition:slide|local class="error_text last">{$errors.code}</small>
  {/if}
  <button class="btn _218">Continue</button>
</form>
