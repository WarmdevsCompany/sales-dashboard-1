<script>
  import ContactForm from "./TabForms/ContactForm.svelte";
  import Tabs from "./Tabs/Tabs.svelte";
  import PasswordForm from "./TabForms/PasswordForm.svelte";
  import { fade } from "svelte/transition";
  import { aoviSvelte } from "aovi-svelte";
  import { isNumeric } from "../../functions/isNumber";
  import {
    allowItemIndex,
    clickOnPrevBtn,
    infoFormErrorState,
    infoFormData,
    confirmPopUpState,
    savedPassword,
  } from "../../stores/infoStore";
  import { contributionData } from "../../stores/contributionsStore";
  import { decrementStep } from "../../stores/store";
  import ButtonLeft from "../buttons/ButtonLeft.svelte";
  import {
    checkIfEmailExistInDB,
    checkIfUserNameExistInDB,
    checkIfPhoneExistInDB,
  } from "./Validations/Validations";
  import ButtonRight from "../buttons/ButtonRight.svelte";
  import { afterUpdate, onDestroy } from "svelte";
  import Arrow_left_ico from "../../../public/images/Arrow_left_ico.svelte";
  import { hidePasswords } from "../../functions/hidePasswords";
  import { scrollToTop } from "../../functions/scrollToTop";

  let tabItems = [
    { name: "Contacts", component: ContactForm },
    { name: "Password", component: PasswordForm },
  ];

  let formButtonText = "Next";
  let activeItem = tabItems[0];
  let nextButtonState = false;
  let userNameErrorMessage;
  let prevBtn;
  let counterForAnimation = 0;
  $: formButtonText, nextButtonState, activeItem;

  async function nextTab() {
    if ($allowItemIndex < 3) {
      let index = tabItems.findIndex((object) => {
        return object.name === activeItem.name;
      });
      if (index === 0 && $loginData.valid) {
        // Validate Contact
        await doLoginData();
        if ($infoFormErrorState === false) {
          activeItem = tabItems[index + 1];
          $allowItemIndex = $allowItemIndex + 1;
          formButtonText = "Confirm";
        }
      } else if (index === 1) {
        // Validate Password
        doSignup();

        let offset = 500;
        if (counterForAnimation === 1) {
          offset = 0;
        }
        if ($savedPassword === true) {
          hidePasswords();
          setTimeout(() => {
            $confirmPopUpState = true;
            scrollToTop(0);
            counterForAnimation = 1;
          }, offset);
        }
      }
    }
  }
  function prevTab() {
    if ($allowItemIndex > 1) {
      let index = tabItems.findIndex((object) => {
        return object.name === activeItem.name;
      });
      if (index != 0) {
        activeItem = tabItems[index - 1];
        $allowItemIndex = $allowItemIndex - 1;
        formButtonText = "Next";
        nextButtonState = false;
      }
    }
  }

  const loginData = aoviSvelte({
    userName: $infoFormData.userName,
    email: $infoFormData.email,
    phone: $infoFormData.phone,
    phoneCode: $infoFormData.phoneCode,
  });

  const passwordData = aoviSvelte({
    password: $infoFormData.password,
    confirm: $infoFormData.confirm,
  });

  // Init "checker". Will be true when confirm and password are equal, and false in other case
  const confirm_match = passwordData.checker("confirm", (aovi) =>
    aovi.is($passwordData.password === $passwordData.confirm)
  );

  const validateEmailExistingInDB = async () => {
    let emailExistinDB = await checkIfEmailExistInDB($loginData.email);
    return !emailExistinDB;
  };
  const validateUserName = async () => {
    let isNumber = isNumeric(`${$loginData.userName}`);
    let userNameExistinDB;
    if (isNumber) {
      userNameErrorMessage = `Username cannot be a number`;
      userNameExistinDB = true;
    } else {
      userNameErrorMessage = `User with username ${$loginData.userName} exist in database`;
      userNameExistinDB = await checkIfUserNameExistInDB($loginData.userName);
    }
    return !userNameExistinDB;
  };
  const validatePhoneExistingInDB = async () => {
    let phoneExistinDB = await checkIfPhoneExistInDB(
      $contributionData.country.phoneCode,
      $loginData.phone
    );

    return !phoneExistinDB;
  };

  const emailrRegEx = /^\w+([-.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
  const userNameRegEx = /^[a-zA-Z0-9-_]+$/;
  async function doLoginData() {
    formButtonText = "Load...";
    loginData.aovi // use Aovi validators
      .check("userName")
      .match(userNameRegEx, "Incorrect username format")
      .required("Please put your username")
      .minLength(3, "Username should be at least 3 symbols length")
      .maxLength(20, "Username must be no more than 20 characters")
      .is(await validateUserName(), userNameErrorMessage)
      .check("email")
      .required("Please put your email")
      .match(emailrRegEx, "Incorrect E-mail format")
      .is(await validateEmailExistingInDB(), "Email exist in database")
      .check("phone")
      .required("Please put your phone")
      .minLength(5, "Phone should be at least 5 symbols length")
      .is(await validatePhoneExistingInDB(), "Phone exist in database").end;
    // you must finish validation with '.end' operator

    if ($loginData.valid) {
      $infoFormErrorState = false;
    } else {
      $infoFormErrorState = true;
    }
    formButtonText = "Next";
  }
  const maxValidator = (a) => {
    return {
      // name of the validator method
      name: "max",

      // test function gets value, must return true or false
      test: (v) => {
        return v.length <= a;
      },

      // error message, when test returns false
      message: `%Label% must be less than ${a} symbols`,

      // error message, when used .not and test returns true
      notMessage: `%Label% must not be less than ${a} symbols`,
    };
  };

  const passwordRegEx = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  function doSignup() {
    passwordData.aovi // use Aovi validators
      .use(maxValidator)
      .check("password")
      .match(
        passwordRegEx,
        "Password should have at least 1 capital letter, 1 number, 1 special symbol"
      )
      .minLength(8, "Password should be at least 8 symbols length")
      .max(16)
      .required("Please put your password")
      .check("confirm")
      .minLength(8, "Password should be at least 8 symbols length")
      .is($confirm_match, "Confirmation doesn't match password")
      .max(16)
      .required("Please confirm your password").end; // you must finish validation with '.end' operator

    if ($passwordData.valid) {
      // if validation success, do something
      $savedPassword = true;
    } else {
      $savedPassword = false;
    }
  }

  let prevStep = () => {
    decrementStep();
    scrollToTop();
  };

  afterUpdate(() => {
    $infoFormData.email = $loginData.email;
    $infoFormData.userName = $loginData.userName;
    $infoFormData.phone = $loginData.phone;
    $infoFormData.password = $passwordData.password;
    $infoFormData.confirm = $passwordData.confirm;
    if ($clickOnPrevBtn) {
      activeItem = tabItems[0];
      $allowItemIndex = 1;
      formButtonText = "Next";
      $clickOnPrevBtn = false;
    }
  });
  onDestroy(() => {
    $allowItemIndex = 1;
  });
</script>

<div class="main__wrapper">
  <div class="info__main">
    <h2 class="h2-sv main__head">
      Personal <span class="green">Information</span>
    </h2>
    <div class="main__tabs">
      <form>
        <Tabs {tabItems} />
        <div in:fade>
          {#if activeItem.name === "Contacts"}
            <ContactForm {loginData} />
          {:else if activeItem.name === "Password"}
            <PasswordForm {passwordData} {confirm_match} />
          {/if}
        </div>
      </form>
    </div>
    <div class="buttons__wrapper">
      {#if $allowItemIndex > 1}
        <button class="btn-sv prev" on:click={prevTab}>
          <Arrow_left_ico />
          Back
        </button>
      {:else}
        <ButtonLeft on:click={prevStep} bind:this={prevBtn} />
      {/if}

      <button class="btn-sv next" on:click={nextTab}>{formButtonText}</button>
    </div>
  </div>
</div>

<style>
  .h2-sv.main__head {
    text-align: center;
  }
  .buttons__wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
  }
  .btn-sv.prev {
    position: absolute;
    top: 0px;
    left: -5px;
    z-index: 2;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    color: var(--grey-color);
    border: none;
    background: transparent;
  }
  .btn-sv.prev:hover {
    filter: invert(1);
  }
  .btn-sv.next {
    width: 182px;
    height: 66px;
    border-radius: 10px;
    font-weight: var(--font-weight-bolder);
    text-align: center;
    transition: all ease 0.3s;
    display: flex;
    justify-content: center;
    margin-left: auto;
  }
  .btn-sv.next:not(:disabled) {
    background: var(--btn-color);
    border: 1px solid var(--btn-color);
    color: var(--white-color);
  }
  .btn-sv.next:not(:disabled):hover {
    background: var(--btn-color-hover);
  }
  .btn-sv.next:not(:disabled):active {
    background: var(--btn-color-active);
  }
  .main__wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
  }
  .green {
    color: var(--color-dark-st3);
  }
  .info__main {
    max-width: 528px;
    width: 100%;
    padding: 20px;
    margin: 0 auto;
  }
  .main__tabs {
    margin-top: 8px;
  }
  .main__tabs form {
    margin-bottom: 16px;
  }

  @media only screen and (max-width: 768px) {
    .info__main {
      padding: 40px 20px 100px 20px;
    }
    .btn-sv.prev {
      padding-left: 0;
    }
  }
</style>
