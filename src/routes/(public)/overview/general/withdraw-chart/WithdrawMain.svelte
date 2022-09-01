<script>
  import WithdrawChart from "./WithdrawChart.svelte";
  export let totalWithdraw;
</script>

<div class="withdraw__body white_box d-flex justify-sb mt-2">
  <WithdrawChart />
  <div class="withdraw">
    <div class="text-3 ">Withdraws Details</div>
    <div class="text-4 mt-1">$1,680</div>
    <div class="text-sm">total</div>
  </div>
</div>

<style>
  .withdraw__body {
    padding: 1.5rem 2rem 2rem 2rem;
  }
  .withdraw {
    color: var(--text-secondary-color);
    text-align: right;
  }

  @media only screen and (max-width: 991px) {
    .withdraw__body {
      display: block;
      margin-bottom: 4rem;
      padding-left: 1rem;
      padding-right: 1rem;
    }
  }
</style>
