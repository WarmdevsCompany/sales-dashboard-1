<script>
import PlanItem from '$lib/components/PlanItem.svelte'
</script>

<div class="plan__items grid-3 mt-2">
  <PlanItem planClass={'safe'} planName={'Safe'} planMoney={400} planPersentage={50}/>
  <PlanItem planClass={'adventure'} planName={'Adventure'} planMoney={200} planPersentage={25}/>
  <PlanItem planClass={'founder'} planName={'Founder'} planMoney={200} planPersentage={25}/>
</div>
