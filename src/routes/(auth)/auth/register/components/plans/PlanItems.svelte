<script>
  import { beforeUpdate, afterUpdate } from "svelte";
  import { planData } from "../../stores/plansStore";
  import {
    contributionData,
    allocatedContributions,
  } from "../../stores/contributionsStore";
  import PlanItem from "./PlanItem.svelte";

  let savePercentages;
  $: savePercentages;

  savePercentages = [...planData];

  let safePrice = 0,
    adventurePrice = 0,
    founderPrice = 0;

  let savePlan = "safe",
    advPlan = "adventure",
    foundPlan = "founder";

  let activeDropdownSave = false;
  let activeDropdownAdv = false;
  let activeDropdownFound = false;

  $: allowPercentageVal =
    100 -
    $allocatedContributions.safe -
    $allocatedContributions.adventure -
    $allocatedContributions.founder;

  let current = savePlan;

  beforeUpdate(() => {
    safePrice =
      ($allocatedContributions.safe * $contributionData.monthlyValue) / 100;
    adventurePrice =
      ($allocatedContributions.adventure * $contributionData.monthlyValue) /
      100;
    founderPrice =
      ($allocatedContributions.founder * $contributionData.monthlyValue) / 100;

    activeDropdownSave = false;
    activeDropdownAdv = false;
    activeDropdownFound = false;
  });
  afterUpdate(() => {});
</script>

<div class="plans__items">
  <PlanItem
    {current}
    currentPlan={savePlan}
    className="safe"
    planName="Plan 1"
    {allowPercentageVal}
    {savePercentages}
    currentPrice={safePrice}
    activeClass={"activeDropdownSave"}
    activeState={activeDropdownSave}
    btnText={"Green Safe info"}
    btnClass={"blue"}
  />
  <PlanItem
    {current}
    currentPlan={advPlan}
    className="adventure"
    planName="Plan 2"
    {allowPercentageVal}
    {savePercentages}
    currentPrice={adventurePrice}
    activeClass={"activeDropdownAdv"}
    activeState={activeDropdownAdv}
    btnText={"Green Adventure info"}
    btnClass={"green"}
  />
  <PlanItem
    {current}
    currentPlan={foundPlan}
    className="founder"
    planName="Plan 3"
    {allowPercentageVal}
    {savePercentages}
    currentPrice={founderPrice}
    activeClass={"activeDropdownFound"}
    activeState={activeDropdownFound}
    btnText={"Green Founder info"}
    btnClass={"violet"}
  />
</div>

<style>
  .plans__items {
    margin-top: 8px;
    display: flex;
    align-items: stretch;
  }
  @media only screen and (max-width: 1100px) {
    .plans__items {
      justify-content: center;
    }
  }

  @media only screen and (max-width: 991px) {
    .plans__items {
      margin-top: 20px;
      display: block;
    }
  }
</style>
