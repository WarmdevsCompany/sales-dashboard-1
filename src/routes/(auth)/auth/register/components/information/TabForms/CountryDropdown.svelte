<script>
  import {
    calcInputPhonePadding,
  } from "../../../stores/infoStore";
  import { contributionData } from "../../../stores/contributionsStore";

  let countryDropdownWidth;
  $: {
    countryDropdownWidth;
    $calcInputPhonePadding = countryDropdownWidth + 15;
  }

</script>

<div class="tels--dropdown__wrapper">
  <div class="country__tels--dropdown" bind:clientWidth={countryDropdownWidth}>
    <div class="current__val">
      <img
        src="data:{$contributionData.country.icon.image.mime ||
          undefined};base64,{$contributionData.country.icon.image.data}"
        alt={$contributionData.country.countryName}
        class="flag"
      />
      <div class="counry__code">{$contributionData.country.phoneCode}</div>
    </div>

  </div>
</div>

<style>
  .tels--dropdown__wrapper {
    position: absolute;
    left: 15px;
    top: 0;
    display: flex;
    align-items: center;
    height: 100%;
  }
  .country__tels--dropdown {
    position: relative;
    width: auto;
    height: 50px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-left: 15px;
    padding-right: 15px;
    cursor: pointer;
  }
 
  .current__val {
    display: flex;
    align-items: center;
  }

  .flag {
    width: 20px;
    height: 10px;
    margin: 0 10px 0 0;
  }
  @media only screen and (max-width: 480px) {
    .counry__code {
      font-size: var(--text-size-smaller);
      line-height: var(--small-text-line-height);
    }
    .country__tels--dropdown {
      padding-left: 0;
    }
  }
</style>
