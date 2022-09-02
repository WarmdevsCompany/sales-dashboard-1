<script>
  import { validatePasswordType } from "$lib/functions/validatePasswordType";
  import { slide } from "svelte/transition";
  import EyePwIco from "$lib/components/icons/EyePW_ico.svelte";
  import { createForm } from "svelte-forms-lib";
  import * as yup from "yup";
  import Checkbox from "$lib/components/inputs/Checkbox.svelte";
  import { goto } from "$app/navigation";
  import {setCookie} from '$lib/functions/setCookies.js'
  import {publicApi} from '$lib/api/publicApi.js'

  function routeToPage(route, replaceState = false) {
    goto(`/${route}`, { replaceState });
  }
  let buttonText = "Log In"
  let remember = [];
  let errorMessages = null;
  const { form, errors, state, handleChange, handleSubmit } = createForm({
    initialValues: {
      userName: "",
      password: "",
    },
    validationSchema: yup.object().shape({
      userName: yup.string().required("User name is required"),
      password: yup.string().required("Password is required"),
    }),
    onSubmit: async (values) => {
      const headers = {
        "Access-Control-Allow-Origin": "*",
      };

      try {
        buttonText = "Loading..."
        const rawResponse =  await publicApi('POST','/login', {
            login: values.userName,
            password: values.password,
        })
        // await fetch(`${esiPublic}/login`, {
        //   method: "POST",
        //   headers,
        //   body: JSON.stringify({
        //     login: values.userName,
        //     password: values.password,
        //   }),
        // });

        const response = await rawResponse.json();

        if (response.status) {
          setCookie('token', response.data.token, {secure: true, 'max-age': 86400} )
          routeToPage("overview/general");
        } else {
          errorMessages = response.errorMessage;
          buttonText = "Log In"
        }
      } catch (e) {
        buttonText = "Log In"
        errorMessages = e;
      }
    },
  });
  const onFocus = (item) => {
    $errors[item] = "";
    errorMessages = false;
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
  {#if errorMessages}
    <small transition:slide|local class="error_text last">{errorMessages}</small
    >
  {/if}
  <div class="d-flex justify-sb align-center">
    <div class="remember">
      <Checkbox bind:group={remember} value={1}>Remember me</Checkbox>
    </div>
    <div class="forgot__pass">
      <a href="#" class="forgot__btn">Forgot the Password?</a>
    </div>
  </div>
  <div class="login__btn__wrapper d-flex justify-sb align-center ">
    <div class="register">
      <div class="register__head">Not a Green Saver yet?</div>
      <a href="https://esi.webflow.io/subscribe-test" class="text-green"
        >Start Now</a
      >
    </div>
    <button class="btn login">{buttonText}</button>
  </div>
</form>

<style>
  form {
    width: 100%;
    max-width: 587px;
    color: var(--text-color);
  }
  .btn.login {
    width: 229px;
    margin: 0 0 0 auto;
    transition: none;
  }
  .forgot__pass {
    padding: 0.875rem;
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
  .login__btn__wrapper {
    margin-top: 22px;
  }
  .register__head {
    font-weight: var(--font-weight-medium);
  }
  .register a {
    font-weight: var(--font-weight-bolder);
  }
  @media only screen and (max-width: 991px) {
    .btn.login {
      width: 100%;
    }
  }
</style>
