<script>
import ToogleCheckbox from "$lib/components/inputs/ToogleCheckbox.svelte";

</script>
<div class="b-radius-8 settings_card">
    <div class="text-3 settings_card--head">Notifications</div>
    <div class="notification__list">
      <div class="notification d-flex align-center justify-sb mb-0_625">
        <div class="text-sm">Contribution Alerts</div>
         <ToogleCheckbox />
      </div>
      <div class="notification d-flex align-center justify-sb mb-0_625">
        <div class="text-sm">News and Updates</div>
         <ToogleCheckbox />
      </div>
      <div class="notification d-flex align-center justify-sb mb-0_625">
        <div class="text-sm">Withdraw Alerts</div>
         <ToogleCheckbox />
      </div>
      <div class="notification d-flex align-center justify-sb mb-0_625">
        <div class="text-sm">Payment Issues</div>
         <ToogleCheckbox />
      </div>
      <div class="notification d-flex align-center justify-sb ">
        <div class="text-sm">Account status</div>
         <ToogleCheckbox />
      </div>
   
    </div>
 
  </div>


