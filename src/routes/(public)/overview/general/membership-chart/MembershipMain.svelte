<script>
  import MembershipItem from "./MembershipItem.svelte";
  import { t } from "$lib/translations/i18n.js";
</script>

<div class="chat-top d-flex justify-sb align-top mb-1_5 text-second">
  <div class="column">
    <div class="row text-3 chat-top-head">{$t("OVERVIEW_STATUS")}</div>
    <div class="row d-flex align-top text-sm">
      <span class="mt-0_25">{$t("OVERVIEW_SINCE")} 2021</span>
    </div>
  </div>
  <div class="column">
    <div>
      <button class="eucalyptus__btn text-white text-xsm"> {$t("OVERVIEW_EUCALYPTUS")}</button>
    </div>
  </div>
</div>
<div class="chat__items text-center d-flex justify-sb mt-2">
  <MembershipItem
    chartName={$t("OVERVIEW_SEED")}
    className="seed"
    chartValue={$$props.seedVal}
    totalSafe={$$props.seedTotal}
  />
  <MembershipItem
  chartName={$t("OVERVIEW_EUCALYPTUS")}
  className="eucalyptus"
  chartValue={$$props.eucalyptusVal}
  totalSafe={$$props.eucalyptusTotal}
/>
<MembershipItem
chartName={$t("OVERVIEW_SEQUOIA")}
className="sequoia"
chartValue={$$props.sequoiaVal}
totalSafe={$$props.sequoiaTotal}
/>
</div>

<style>
  .eucalyptus__btn {
    appearance: none;
    padding: 0.375rem 1.5rem;
    border: none;
    background: #5f8575;
    border-radius: 53px;
  }
  .eucalyptus__btn:hover {
    background: #5f8575da;
  }
  .eucalyptus__btn:active {
    background: #5f8575;
  }
  @media only screen and (max-width: 991px) {
    .chat-top {
      display: block;
    }
    .chat__items {
      flex-wrap: wrap;
    }
    .column:last-child {
      margin-top: 0.5rem;
    }
  }
</style>
