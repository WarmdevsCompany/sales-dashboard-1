<script>
  import {
    contributionData,
    amountErrorMessageState,
  } from "../../stores/contributionsStore";
  import { afterUpdate } from "svelte";
  import NextPaymentDay from "./NextPaymentDate.svelte";
  import Dropdown_ico from "../../../public/images/Dropdown_ico.svelte";
  import { clickOutside } from "../../functions/clickOutside";
  import { onMount } from "svelte/internal";
  import { getPeriodsFromDB, getCountriesFromDB } from "./getDataFromDB";
  import Preloader from "../Preloader.svelte";
  import { isEmpty } from "../../functions/objectIsEmpty";

  export let input;
  let activePeriod = false;
  let activeCountry = false;
  let amountMessage = false;
  let periods = [];
  let countries = [];
  let inputNumber;

  let amountInputState = false;

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  $: {
    countries, periods;
  }

  onMount(async () => {
    if (inputNumber) {
      input = inputNumber;
    }
    amountInputState = true;
    let periodData = await getPeriodsFromDB();
    periodData.data.forEach((item) => {
      periods = [...periods, item];
    });
    let countriesData = await getCountriesFromDB();
    countriesData.data.forEach((item) => {
      countries = [...countries, item];
    });
    if (periods.length > 1 && countries.length > 1) {
      amountInputState = false;
    }

    let usaData;
    countries.forEach((item) => {
      if (item.countryId === 5235134) {
        usaData = item;
      }
    });
    if (isEmpty($contributionData.period)) {
      $contributionData.period = periods[0];
      setNextPaymentDate($contributionData.period.nextDate);
    }
    if (isEmpty($contributionData.country)) {
      $contributionData.country = usaData;
    }
  });

  function setPeriod(value) {
    // set data to our store
    $contributionData.period = value;
    setNextPaymentDate($contributionData.period.nextDate);
  }
  function showCountry(value) {
    // set data to our store
    $contributionData.country = value;
  }
  function setNextPaymentDate(unixDate) {
    const date = new Date(unixDate * 1000);

    $contributionData.nextPaymentDate = {
      day: date.getDate(),
      month: months[date.getMonth()],
      year: date.getFullYear(),
    };
  }
  // click outside dropdown
  function handleClickOutside(item) {
    if (item === "activePeriod") {
      activePeriod = false;
    } else if (item === "activeCountry") {
      activeCountry = false;
    }
  }
  function checkInputValue() {
    this.value = this.value.replace(/[^0-9]/g, "");
    if (this.value.length > this.maxLength) {
      this.value = this.value.slice(0, this.maxLength);
    } else if (parseInt(this.value) < 20) {
      this.classList.add("error");
      amountMessage.classList.add("error");
    } else if (parseInt(this.value) >= 20) {
      if (this.classList.contains("error")) {
        this.classList.remove("error");
        amountMessage.classList.remove("error");
      }
    }
  }
</script>

<div class="contribution__form">
  <form on:submit|preventDefault>
    <div class="period">
      <div class="label__text">Period*</div>
      <div class="dropdown__wrapper">
        <div
          class="dropdown"
          class:activePeriod
          on:click={() => (activePeriod = !activePeriod)}
          use:clickOutside
          on:click_outside={() => handleClickOutside("activePeriod")}
        >
          {#if periods.length === 0}
            <Preloader loaderWidth={1.5} loaderHeight={1.5} borderWidth={0.3} />
          {:else}
            <Dropdown_ico class="contribution" />
            <div class="dropdown__item--current">
              {$contributionData.period.periodName || "Monthly"}
            </div>
            <div class="dropdown__items">
              {#each periods as period}
                <div class="dropdown__item" on:click={() => setPeriod(period)}>
                  {period.periodName}
                </div>
              {/each}
            </div>
          {/if}
        </div>
      </div>
    </div>
    <div class="currency">
      <div class="label__text">Country*</div>

      <div class="dropdown__wrapper country">
        <div
          class="dropdown"
          class:activeCountry
          on:click={() => (activeCountry = !activeCountry)}
          use:clickOutside
          on:click_outside={() => handleClickOutside("activeCountry")}
        >
          {#if countries.length === 0}
            <Preloader loaderWidth={1.5} loaderHeight={1.5} borderWidth={0.3} />
          {:else}
            <Dropdown_ico class="contribution" />
            <div class="dropdown__item--current">
              {$contributionData.country.countryName || "Chouse country"}
            </div>
            <div class="dropdown__items">
              {#each countries as country}
                <div
                  class="dropdown__item"
                  on:click={() => showCountry(country)}
                >
                  {country.countryName}
                </div>
              {/each}
            </div>
          {/if}
        </div>
      </div>
    </div>

    <div class="amount" bind:this={inputNumber}>
      <label class="label__text" for="amount">Amount*</label>
      <input
        type="number"
        class="input-sv amount-sv"
        on:mousewheel={(e) => {
          e.target.blur();
        }}
        min="20"
        max="9999"
        maxlength="4"
        on:input={checkInputValue}
        bind:value={$contributionData.amount}
        class:error={$amountErrorMessageState}
        disabled={amountInputState}
      />
    </div>

    <NextPaymentDay />
  </form>
  <div class="contribution__help--text">
    <div
      bind:this={amountMessage}
      class="contribution__help--left"
      class:error={$amountErrorMessageState}
      style="display: inline;"
    >
      *Min. <span>{$contributionData.country?.currency?.symbol || "$"}20</span>
      and
      <span> {$contributionData.country?.currency?.symbol || "$"}9,999</span> Total
      contribution.
    </div>
    Make sure your&nbsp;<span>Country</span> matches your
    <span> Billing information</span>
  </div>
</div>

<style>
  .contribution__form form {
    display: flex;
    align-items: flex-end;
    margin-top: 14px;
  }
  .currency {
    margin: 0 20px;
  }
  .label__text {
    padding: 10px;
    color: var(--black-color);
    margin: 0;
  }
  .amount {
    display: flex;
    flex-direction: column;
  }
  .amount .input-sv {
    appearance: none;
    width: 180px;
    height: 65px;
    background: var(--white-color);
    border: 1px solid var(--border-color);
    border-radius: 10px;
    padding: 12px 30px;
  }

  .amount .input-sv.error {
    border: 1px solid var(--error-color);
    color: var(--error-color);
  }

  .amount .input-sv.error::placeholder {
    color: var(--error-color);
  }
  /* Chrome, Safari, Edge, Opera */
  .amount .input-sv::-webkit-outer-spin-button,
  .amount .input-sv::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  .amount .input-sv[type="number"] {
    -moz-appearance: textfield;
  }

  .contribution__help--text,
  .contribution__help--left {
    font-size: var(--text-size-small);
    color: var(--color-darkest);
    margin-top: 24px;
  }
  .contribution__help--left.error {
    color: var(--error-color);
  }

  .contribution__help--text span {
    font-weight: var(--font-weight-bolder);
    font-size: inherit;
  }

  .dropdown__wrapper {
    position: relative;
    width: 180px;
    height: 65px;
  }
  .dropdown__wrapper.country {
    width: 215px;
  }
  .dropdown {
    position: absolute;
    width: 100%;
    padding: 19.5px 30px;
    cursor: pointer;
    background-color: var(--grey-color-lightest);
    border: 1px solid var(--border-color);
    border-radius: 10px;
  }

  .dropdown__items {
    display: none;
  }
  .dropdown__item {
    padding: 12px 30px;
    transition: all ease-in 0.3s;
  }
  .dropdown__item:hover {
    background-color: var(--grey-color-lightest);
  }

  .dropdown.activePeriod,
  .dropdown.activeCountry {
    background-color: var(--white-color);
    padding: 11px 0;
  }

  .dropdown.activePeriod .dropdown__item--current,
  .dropdown.activeCountry .dropdown__item--current {
    display: none;
  }
  .dropdown.activePeriod .dropdown__items,
  .dropdown.activeCountry .dropdown__items {
    display: block;
  }

  @media only screen and (max-width: 991px) {
    /* .next__payment {
      display: none;
    } */
    .contribution__form form {
      flex-wrap: wrap;
    }
    .period,
    .currency {
      width: 49%;
      margin: 0;
    }
    .period {
      margin-right: 10px;
    }
    .dropdown__wrapper,
    .dropdown__wrapper.country {
      width: 100%;
    }
    .amount {
      margin-top: 8px;
    }
    .amount,
    .amount .input-sv {
      width: 100%;
    }
    .contribution__help--text {
      margin-top: 0;
    }
  }
  @media only screen and (max-width: 768px) {
    .label__text {
      padding: 3px 10px;
    }
    .dropdown {
      padding: 16px;
    }
    .amount .input-sv {
      height: 50px;
      padding: 12px 15px;
    }
    .contribution__help--text,
    .contribution__help--left {
      font-size: 10px;
    }
    .period,
    .currency {
      width: 48%;
    }
  }
  @media only screen and (max-width: 480px) {
    .dropdown__item--current,
    .dropdown__item {
      font-size: var(--text-size-small);
    }
  }
</style>
