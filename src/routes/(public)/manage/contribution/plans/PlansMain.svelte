<script>
  import PlanItem from '$lib/components/PlanItem.svelte';
  import { t } from '$lib/translations/i18n.js';
  import { globalData } from '$lib/globalStore';
</script>

<div class="plan__items grid-3 mt-2">
  <PlanItem planClass={'safe'} planName={$t('MANAGE_SAFE')} planMoney={$globalData.data.membershipStatus.greenSafeTotal} planPersentage={$globalData.data.membershipStatus.greenSafe}/>
  <PlanItem planClass={'adventure'} planName={$t('MANAGE_ADVENTURE')} planMoney={$globalData.data.membershipStatus.greenAdventureTotal} planPersentage={$globalData.data.membershipStatus.greenAdventure}/>
  <PlanItem planClass={'founder'} planName={$t('MANAGE_FOUNDER')} planMoney={$globalData.data.membershipStatus.greenFounderTotal} planPersentage={$globalData.data.membershipStatus.greenFounder}/>
</div>
