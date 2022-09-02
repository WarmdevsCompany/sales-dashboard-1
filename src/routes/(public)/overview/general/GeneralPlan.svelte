<div class="general__plan--item b-radius-8 text-sm {$$props.className}">
  <div class="plan--item--top text-white">{$$props.planName}</div>
  <div class="plan--item--main">
    <div class="row d-flex justify-sb align-center">
      <div class="text-xsm">Your contribution</div>
      <span class="text-big "
        >{$$props.currencySymbol}{$$props.contribution}</span
      >
    </div>
    <div class="row d-flex justify-sb align-center">
      <div class="text-xsm">Your revenue</div>
      <span class="text-big">{$$props.currencySymbol}{$$props.revenue}</span>
    </div>
    <div class="row d-flex justify-sb total mt-1_25 align-center">
      <div class="text-3">Total Safe</div>
      <span class="text-2">+{$$props.currencySymbol}{$$props.totalSafe}</span>
    </div>
  </div>
</div>

<style>
  .general__plan--item {
    filter: drop-shadow(0px 6px 14px rgba(3, 22, 2, 0.14));
  }
  .plan--item--top {
    padding: 0.5625rem 1.25rem;
    border-radius: 8px 8px 0px 0px;
    font-weight: var(--font-weight-bold);
    text-transform: uppercase;
  }
  .plan--item--main {
    padding: 1.24rem 1.5rem 1.5rem 1.5rem;
    color: var(--text-secondary-color);
  }
  .row:first-child {
    margin-bottom: 0.5rem;
  }

  /* colors depends on classes */
  .general__plan--item.safe {
    background: #bcdef0;
  }
  .general__plan--item.safe .plan--item--top {
    background: #338df3;
  }
  .general__plan--item.adventure {
    background: #dce9d3;
  }
  .general__plan--item.adventure .plan--item--top {
    background: #6cc800;
  }
  .general__plan--item.founder {
    background: #f1e2fa;
  }
  .general__plan--item.founder .plan--item--top {
    background: #8336e4;
  }
</style>
