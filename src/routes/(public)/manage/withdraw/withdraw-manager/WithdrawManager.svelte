<script>
  import Radio from "$lib/components/inputs/Radio.svelte";

  let radioValue;
  const options = [
    {
      value: "0",
      label: "Same as contribution % ",
    },
    {
      value: "1",
      label: "Equal Amount from Each plan",
    },
    {
      value: "2",
      label: "Manually put the amount",
    },
  ];
</script>

<div class="withdraw__manager b-radius-8 box_shadow-medium">
  <div>
    <div class="text-3">Withdraw manager</div>
    <div class="text-xsm mt-0_5">
      This is where you withdraw your available balance*
    </div>
  </div>
  <div class="withdraw__main d-flex justify-sb align-top">
    <div class="d-flex align-center withdraw__input--body mr-2">
      <div class="withdraw__input">
        <input class="" type="text" placeholder="1000" id="name" name="name" />
      </div>
      <div class="withdraw__label">Total</div>
    </div>
    <div class="radio__wrapper">
      <Radio {options} fontSize={16} bind:userSelected={radioValue} />
    </div>
  </div>
</div>

<style>
  .withdraw__manager {
    color: var(--label--color-secondary);
    background: #c4cdd7;
    border: 1px solid #5a7186;
    padding: 2.125rem 8.5rem 2.125rem 4rem;
  }
  .withdraw__main {
    margin-top: 2.5rem;
  }
  .withdraw__input {
    margin-right: 2.5rem;
    font-weight: var(--font-weight-bold);
    width: 100%;
    max-width: 360px;
  }
  .radio__wrapper {
    min-width: 275px;
  }
  .withdraw__input--body {
    width: 100%;
  }

  @media only screen and (max-width: 1280px) {
    .withdraw__manager {
      padding-right: 7vw;
    }
  }
</style>
