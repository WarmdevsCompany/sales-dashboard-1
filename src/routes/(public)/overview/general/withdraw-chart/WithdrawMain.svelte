<script>
  import WithdrawChart from "./WithdrawChart.svelte";
  import { t } from "$lib/translations/i18n.js";
  export let totalWithdraw;
</script>

<div class="withdraw__body white_box d-flex justify-sb mt-2">
  <WithdrawChart />
  <div class="withdraw">
    <div class="text-3 ">{$t("OVERVIEW_WITHDRAWS_DETAILS")}</div>
    <div class="text-4 mt-1">$1,680</div>
    <div class="text-sm">{$t("OVERVIEW_TOTAL")}</div>
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
