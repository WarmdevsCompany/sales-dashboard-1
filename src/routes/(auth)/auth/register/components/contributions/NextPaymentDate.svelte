<script>
  import { fade } from "svelte/transition";
  import { contributionData } from "../../stores/contributionsStore";
</script>

{#if $contributionData.nextPaymentDate.month != null}
  <div class="next__payment" in:fade>
    *The next payment will be on the
    <span>{$contributionData.nextPaymentDate.month}</span>
    <span class="payment__day">{$contributionData.nextPaymentDate.day}st</span>
    <span class="currentYear">{$contributionData.nextPaymentDate.year}</span>
  </div>
{/if}

<style>
  .next__payment {
    max-width: 266px;
    margin: 0 0 7px 47px;
    color: var(--main-text-color);
  }
  .next__payment span {
    font-weight: var(--font-weight-bolder);
  }
  .payment__day {
    font-size: 20px;
  }
  @media only screen and (max-width: 1080px) {
    .next__payment {
      margin: 0 0 5px 20px;
      font-size: 14px;
    }
  }
  @media only screen and (max-width: 991px) {
    .next__payment {
      display: none;
    }
  }
</style>
