<script>
  import WithdrawPlanItem from "./WithdrawPlanItem.svelte";
</script>

<div class="plan__items grid-3 mt-2">
  <WithdrawPlanItem
    planClass={"safe"}
    planName={"Safe"}
    planMoney={400}
    planPersentage={50}
  />
  <WithdrawPlanItem
    planClass={"adventure"}
    planName={"Adventure"}
    planMoney={200}
    planPersentage={25}
  />
  <WithdrawPlanItem
    planClass={"founder"}
    planName={"Founder"}
    planMoney={200}
    planPersentage={25}
  />
</div>
