<script>
  import {
    headSteps,
    incrementStep,
    decrementStep,
    subscribeAllState,
  } from "../../stores/store";
  import { plansModalState, errorMessageState } from "../../stores/plansStore";
  import { allocatedContributions } from "../../stores/contributionsStore";
  import PlanHead from "./PlanHead.svelte";
  import ButtonLeft from "../buttons/ButtonLeft.svelte";
  import ButtonRight from "../buttons/ButtonRight.svelte";
  import PlanItems from "./PlanItems.svelte";
  import PlanModal from "./PlanModal.svelte";
  import { fade } from "svelte/transition";
  import { scrollToTop } from "../../functions/scrollToTop";
  import ErrorMessage from "../ErrorMessage.svelte";
  import SubscribeAllIco from "../../../public/images/SubscribeAll_ico.svelte";
  import { afterUpdate } from "svelte";

  let changeCounter = 0;
  let errorMessage;
  let sumOfPlans;
  $: errorMessage, sumOfPlans;

  let prevStep = () => {
    decrementStep();
    scrollToTop();
  };
  let nextStep = () => {
    if (validate()) {
      $headSteps.thirdStep = true;
      if (changeCounter === 0) {
        incrementStep();
        changeCounter += 1;
        scrollToTop();
      }
      $errorMessageState = false;
    } else {
      $errorMessageState = true;
      scrollToTop(140);
      errorMessage = "Please allocate all 100% of your money";
    }
  };
  let validate = () => {
    let sumOfPlans =
      $allocatedContributions.safe +
      $allocatedContributions.adventure +
      $allocatedContributions.founder;
    if (sumOfPlans > 99 && sumOfPlans <= 100) {
      return true;
    } else {
      return false;
    }
  };

  function subscribeAllPlans() {
    if (!$subscribeAllState) {
      $allocatedContributions.safe = 25;

      $allocatedContributions.adventure = 50;

      $allocatedContributions.founder = 25;
      $subscribeAllState = true;
    } else {
      $allocatedContributions.safe = 0;

      $allocatedContributions.adventure = 0;

      $allocatedContributions.founder = 0;

      $subscribeAllState = false;
    }
  }
  afterUpdate(() => {
    sumOfPlans =
      $allocatedContributions.safe +
      $allocatedContributions.adventure +
      $allocatedContributions.founder;
    if (sumOfPlans === 100) {
      $errorMessageState = false;
    }
  });
</script>

<div class="plans__main">
  <div class="plans__main__wrapper">
    <div class="plans__top">
      <h2 class="h2-sv">
        Plans <span class="green">Selector</span> and
        <span class="green">Distributor</span>
      </h2>
      <div class="main__mob_h2">
        Choose any <span class="green">plan</span> and allocate you
        <span class="green">contribution</span>
      </div>
      <PlanHead />
    </div>

    <div class="plans__wrapper">
      <div class="plans__wrapper__head">
        <h3 class="h3-sv desktop">
          {#if sumOfPlans < 100}
            Please allocate <span
              class="plan_percentage_val"
              class:error={$errorMessageState}>{100 - sumOfPlans}%</span
            > of your contribution between our plans
          {:else if sumOfPlans === 100}
            You have allocated all of your <span class="green"
              >contribution!</span
            >
          {/if}
        </h3>

        <div class="mob__plan__h2">Select plans</div>
        <div class="subscribe__all" on:click={subscribeAllPlans}>
          <div class="subscribe__checkbox">
            <SubscribeAllIco
              className={$subscribeAllState ? "active__cb" : ""}
            />
          </div>

          <div class="subscribe__text">Subscribe to All Plan</div>
        </div>
      </div>
      <h3 class="h3-sv mob">
        {#if sumOfPlans < 100}
          Please allocate <span
            class="plan_percentage_val"
            class:error={$errorMessageState}>{100 - sumOfPlans}%</span
          > of your contribution
        {:else if sumOfPlans === 100}
          You have allocated all of your <span class="green">contribution!</span
          >
        {/if}
      </h3>

      <PlanItems />
    </div>
  </div>

  <div class="relative__wrapper">
    {#if $errorMessageState}
      <ErrorMessage {errorMessage} />
    {/if}
    <div class="bottom__btns">
      <ButtonLeft on:click={prevStep} />
      <ButtonRight on:click={nextStep} />
    </div>
  </div>
</div>

<style>
  .plan_percentage_val {
    font-size: 28px;
    line-height: var(--h2-line-height);
    color: var(--plan-adventure-bg);
    font-weight: var(--font-weight-bold);
    position: relative;
    bottom: -1px;
    padding: 0 5px;
  }
  .plan_percentage_val.error {
    color: var(--error-color);
  }
  .relative__wrapper {
    position: relative;
  }
  .bottom__btns {
    position: relative;
  }
  .green {
    color: var(--color-dark-st2);
  }
  h3 {
    margin: 0;
  }
  .subscribe__all {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    cursor: pointer;
    min-width: 200px;
    margin-left: 10px;
    margin-bottom: 10px;
  }
  .subscribe__checkbox {
    width: 24px;
    height: 24px;
    position: relative;
    background: var(--white-color);
    border: 1px solid var(--border-color);
    border-radius: 3px;
  }

  .subscribe__text {
    margin-left: 8px;
    font-weight: var(--font-weight-bold);
    color: var(--color-dark-st5);
  }
  .plans__wrapper {
    margin-top: 16px;
  }
  .plans__wrapper__head {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }

  .plans__main {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
  }
  .mob__plan__h2,
  .main__mob_h2,
  .h3-sv.mob {
    display: none;
  }
  @media only screen and (max-width: 991px) {
    .h3-sv.desktop {
      display: none;
    }
    .h3-sv.mob {
      display: block;
    }
    .subscribe__all {
      margin-bottom: 0;
    }
    .h3-sv {
      display: block;
      font-weight: var(--font-weight-medium);
      font-size: var(--h3-size);
      line-height: 32px;
      color: var(--main-text-color);
    }
    .mob__plan__h2 {
      display: block;
      font-weight: var(--font-weight-medium);
      font-size: var(--h3-size);
      line-height: 32px;
      color: var(--main-text-color);
    }
  }
  @media only screen and (max-width: 768px) {
    .main__mob_h2 {
      margin-top: 8px;
      display: block;
      font-weight: var(--font-weight-medium);
      font-size: var(--text-size-smaller);
      line-height: 18px;
      color: var(--main-text-color);
    }
    .h3-sv {
      font-size: 21px;
      line-height: 28px;
      padding: 16px 16px 0 16px;
    }
    .plan_percentage_val {
      font-size: 26px;
      line-height: 32px;
      bottom: -2px;
    }
    .mob__plan__h2 {
      white-space: nowrap;
    }
    .main__mob_h2 span {
      font-size: var(--text-size-smaller);
      line-height: 18px;
    }
    .plans__wrapper {
      margin-top: 20px;
    }
    .plans__top,
    .plans__wrapper__head {
      padding: 0 16px;
    }
  }
  @media only screen and (max-width: 480px) {
    .mob__plan__h2 {
      font-size: var(--text-size-normal);
      line-height: var(--text-line-height);
    }
    .h3-sv {
      font-size: var(--text-size-small);
      line-height: 21px;
      padding: 5px 16px 0px 16px;
    }
    .h3-sv span.green {
      font-size: var(--text-size-small);
      line-height: 21px;
    }
    .plan_percentage_val {
      font-size: var(--text-size-normal);
      line-height: var(--text-line-height);
      bottom: -1px;
    }

    .subscribe__all {
      min-width: 150px;
      margin-left: 5px;
    }
    .subscribe__checkbox {
      width: 16px;
      height: 16px;
      display: flex;
    }
    .subscribe__text {
      font-size: var(--text-size-smaller);
      font-weight: var(--font-weight-normal);
      line-height: var(--small-text-line-height);
    }
  }
</style>
