<script>
  import PlanItem from '$lib/components/PlanItem.svelte';
  import { t } from '$lib/translations/i18n.js';
  import { globalData } from '$lib/globalStore';
</script>

<div class="plan__items grid-3 mt-2">
  <PlanItem planClass={'safe'} planName={$t('MANAGE_SAFE')} planMoney={$globalData.data.current_contribution.greenSafeTotal} planPersentage={$globalData.data.current_contribution.greenSafe}/>
  <PlanItem planClass={'adventure'} planName={$t('MANAGE_ADVENTURE')} planMoney={$globalData.data.current_contribution.greenAdventureTotal} planPersentage={$globalData.data.current_contribution.greenAdventure}/>
  <PlanItem planClass={'founder'} planName={$t('MANAGE_FOUNDER')} planMoney={$globalData.data.current_contribution.greenFounderTotal} planPersentage={$globalData.data.current_contribution.greenFounder}/>
</div>
