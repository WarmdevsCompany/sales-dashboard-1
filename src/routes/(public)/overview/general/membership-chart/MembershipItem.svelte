<script>
  import StatusIcon from "$lib/components/icons/StatusIcon.svelte";
  import MembershipChat from "./MembershipChat.svelte";
  export let chartName, className, chartValue, totalSafe;

  import { createPopperActions } from "svelte-popperjs";
  const [popperRef, popperContent] = createPopperActions({
    placement: "bottom",
    strategy: "fixed",
  });
  const extraOpts = {
    modifiers: [{ name: "offset", options: { offset: [0, 8] } }],
  };

  let showTooltip = false;
</script>

<div class="chat__item">
  <div class="chat__item--head d-flex justify-cc text-5 {className} ">
    <span>{chartName}</span>
    <div
      use:popperRef
      on:mouseenter={() => (showTooltip = true)}
      on:mouseleave={() => (showTooltip = false)}
    >
      <StatusIcon bgColor={className} />
    </div>
    {#if showTooltip}
      <div
        id="tooltip"
        class="b-radius-8 text-xsm "
        use:popperContent={extraOpts}
      >
        {#if (className = "seed")}
          Contribution under
          <span class="text-green">12 month</span> are still not converted<span
            class="text-green">*4.9%</span
          >
          Withdraw Fee
        {:else if (className = "eucalyptus")}
          Contribution made between <span class="text-green"
            >12 to 36 month</span
          >
          ago <span class="text-green">*0.5%</span> Withdraw Fee
        {:else}
          Contribution made over
          <span class="text-green">36 month</span> ago *<span class="text-green"
            >0.25%</span
          >
          Withdraw Fee
        {/if}

        <div id="arrow" data-popper-arrow />
      </div>
    {/if}
  </div>
  <div class="chat__item--main mt-0_5">
    <MembershipChat {chartName} {className} {chartValue} />
  </div>
  <div class="chat__item--footer text-center mt-1">
    <span class="text-3 {className}">${totalSafe}</span>
    <span class="text-xsm mt-0_25">total safe</span>
  </div>
</div>

<style>
  .chat__item--head span {
    margin-right: 0.25rem;
  }
  .chat__item--footer span {
    display: block;
  }
  .seed {
    color: var(--secondary-color);
  }
  .eucalyptus {
    color: var(--membership-grey-2);
  }
  .sequoia {
    color: var(--membership-grey-3);
  }
  #tooltip {
    padding: 0.75rem 0.75rem 1.125rem 0.75rem;
    background: var(--white);
    z-index: 10;
    color: #5f5f5f;
    max-width: 215px;
    font-weight: var(--font-weight-normal);
  }

  #tooltip::after {
    content: "";
    position: absolute;
    top: -5px;
    right: 100px;
    border-radius: 2px;
    transform: rotate(45deg);
    border-top: 7px solid white;
    border-bottom: 7px solid transparent;
    border-left: 7px solid white;
    border-right: 7px solid transparent;
  }

  @media only screen and (max-width: 991px) {
    .chat__item {
      width: 49%;
      margin: auto auto 2rem auto;
    }
  }
</style>
