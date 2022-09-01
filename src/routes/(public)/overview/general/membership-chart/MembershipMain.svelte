<script>
  import MembershipItem from "./MembershipItem.svelte";
</script>

<div class="chat-top d-flex justify-sb align-top mb-1_5 text-second">
  <div class="column">
    <div class="row text-3 chat-top-head">Membership status</div>
    <div class="row d-flex align-top text-sm">
      <span class="mt-0_25">since 2021</span>
    </div>
  </div>
  <div class="column">
    <div>
      <button class="eucalyptus__btn text-white text-xsm"> Eucalyptus</button>
    </div>
  </div>
</div>
<div class="chat__items text-center d-flex justify-sb mt-2">
  <MembershipItem
    chartName="Seed"
    className="seed"
    chartValue={33}
    totalSafe={400}
  />
  <MembershipItem
  chartName="Eucalyptus"
  className="eucalyptus"
  chartValue={67}
  totalSafe={800}
/>
<MembershipItem
chartName="Sequoia"
className="sequoia"
chartValue={0}
totalSafe={0}
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
