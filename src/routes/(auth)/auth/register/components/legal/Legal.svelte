<script>
  import { afterUpdate } from "svelte";

  import { Accordion, AccordionItem } from "svelte-collapsible";
  let openedKey = "a";
  import {
    checkboxStates,
    legalItems,
    allSelected,
  } from "../../stores/legalStore";
  import { headSteps, incrementStep, decrementStep } from "../../stores/store";
  import ButtonLeft from "../buttons/ButtonLeft.svelte";
  import ButtonRight from "../buttons/ButtonRight.svelte";
  import { scrollToTop } from "../../functions/scrollToTop";
  import ErrorMessage from "../ErrorMessage.svelte";
  import Toggle_ico from "../../../public/images/Toggle_ico.svelte";
  import TermsAndCond from "./content/TermsAndCond.svelte";
  import Privacy from "./content/Privacy.svelte";
  import TermOfServices from "./content/TermOfServices.svelte";

  let changeCounter = 0;
  let errorMessageState = false;
  let errorMessage;
  const legalComponents = {
    a: TermsAndCond,
    b: TermOfServices,
    c: Privacy,
  };
  afterUpdate(() => {
    if ($checkboxStates.a && $checkboxStates.b && $checkboxStates.c) {
      $allSelected = true;
      errorMessageState = false;
    } else {
      $allSelected = false;
    }
  });

  function agreeAllTerms(e) {
    if (e.target.checked) {
      $checkboxStates.a = true;
      $checkboxStates.b = true;
      $checkboxStates.c = true;
      $allSelected = true;
    } else {
      $checkboxStates.a = false;
      $checkboxStates.b = false;
      $checkboxStates.c = false;
      $allSelected = false;
    }
  }

  let prevStep = () => {
    decrementStep();
    scrollToTop();
  };

  let nextStep = () => {
    let state = Object.values($checkboxStates).every((value) => value === true);
    if (state) {
      $headSteps.fourthStep = true;
      if (changeCounter === 0) {
        incrementStep();
        changeCounter += 1;
        scrollToTop();
      }
    } else {
      errorMessageState = true;
      errorMessage = "Confirm all legal agreements";
    }
  };
</script>

<div class="legal__wrapper">
  <div>
    <h2 class="h2-sv">Legal <span class="green">Agreement</span></h2>
    <Accordion bind:key={openedKey}>
      {#each legalItems as item}
        <AccordionItem key={item.key}>
          <div slot="header" class="header">
            <div class="column">
              <input
                type="checkbox"
                class="input-ch-sv"
                id={item.name}
                on:click={(e) => {
                  e.stopPropagation();
                }}
                bind:checked={$checkboxStates[item.key]}
              />
              <p class="label-sv">I agree to {item.name}</p>
            </div>
            <Toggle_ico />
          </div>
          <div slot="body">
            <div class="legal__content">
              <!-- <h3 class="body__head">{item.title}</h3> -->
              <p>
                <svelte:component this={legalComponents[item.key]} />
              </p>
            </div>
          </div>
        </AccordionItem>
      {/each}
    </Accordion>
    <div class="agree__all">
      <input
        class="input-ch-sv"
        type="checkbox"
        id="agree__all"
        on:change={(e) => {
          agreeAllTerms(e);
        }}
        checked={$allSelected}
      />
      <label class="label-sv" for="agree__all">
        I agree to all Terms & Conditions, Terms of services, Privacy & Cookie
      </label>
    </div>
  </div>
  <div class="relative__wrapper">
    {#if errorMessageState}
      <ErrorMessage {errorMessage} />
    {/if}
    <div class="bottom__btns">
      <ButtonLeft on:click={prevStep} />
      <ButtonRight on:click={nextStep} />
    </div>
  </div>
</div>

<style>
  .relative__wrapper {
    position: relative;
  }
  .legal__wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
  }

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 18px 24px 18px 40px;
    background: var(--color-dark-st3);
    border-radius: 10px;
  }
  .header .column {
    display: flex;
    align-items: center;
  }
  .header .input-ch-sv,
  .input-ch-sv[type="checkbox"] {
    padding: 0;
    width: 24px;
    height: 24px;
    min-width: 24px;
    margin-right: 8px;
    background: var(--white-color);
    border: 1px solid var(--border-color);
    border-radius: 3px;
    -webkit-appearance: none;
    appearance: none;
    cursor: pointer;
  }
  .header .input-ch-sv:checked,
  .input-ch-sv[type="checkbox"]:checked {
    background-image: url("https://uploads-ssl.webflow.com/627ca4b5fcfd5674acf264e6/6298c07528d25ce00212030f_svgexport-6.svg");
    background-position: center;
    background-size: cover;
  }
  h2.h2-sv {
    margin-bottom: 16px;
  }
  .green {
    color: var(--color-dark-st3);
  }

  .header .label-sv {
    text-transform: uppercase;
    color: var(--white-color);
  }

  .legal__content {
    max-width: 1170px;
    margin: 0 15px;
    padding: 0px 40px;
    font-size: 18px;
    overflow: auto;
    height: 413px;
    margin-top: 20px;
    margin-bottom: 31px;
  }

  /* Custom scroll bar */
  /* width */
  .legal__content::-webkit-scrollbar {
    width: 5px;
  }
  /* Track */
  .legal__content::-webkit-scrollbar-track-piece {
    border-radius: 10px;
    background: var(--custor-scroll-track);
  }
  /* Track */
  .legal__content::-webkit-scrollbar-track {
    border-radius: 10px;
  }

  /* Handle */
  .legal__content::-webkit-scrollbar-thumb {
    background: var(--custor-scroll-tumb);
    border-radius: 10px;
  }
  .agree__all {
    display: flex;
    align-items: center;
    margin: 16px 0 32px 0;
  }

  @media only screen and (max-width: 768px) {
    .legal__wrapper h2,
    .agree__all {
      padding: 0 16px;
    }
    .header {
      border-radius: 0;
      padding: 18px 24px 18px 24px;
      border-bottom: 1px solid var(--border-color-legal);
    }
    .legal__content {
      padding: 0 17px;
    }
  }
  @media only screen and (max-width: 480px) {
    .header .input-ch-sv,
    .input-ch-sv[type="checkbox"] {
      width: 16px;
      height: 16px;
      min-width: 16px;
    }
    .label-sv {
      font-size: var(--text-size-smaller);
      line-height: var(--small-text-line-height);
    }
    .legal__content {
      margin: 20px 20px 31px 15px;
    }

    .header {
      padding: 22px 16px 22px 16px;
    }
  }
</style>
