<script>
  import { beforeUpdate } from "svelte";

  export let categoryName;
  import { allowItemIndex } from "../../../stores/infoStore";
  import Tab_name_ico from "../../../../public/images/Tab_name_ico.svelte";
  import Tab_address_ico from "../../../../public/images/Tab_address_ico.svelte";
  import Tab_pw_ico from "../../../../public/images/Tab_pw_ico.svelte";
  import Tab_pay_ico from "../../../../public/images/Tab_pay_ico.svelte";
  import Tab_contacts_ico from "../../../../public/images/Tab_contacts_ico.svelte";
  export let classNameContact = "",
    classNameAddress = "",
    classNamePass = "";
  beforeUpdate(() => {
    if ($allowItemIndex === 2) {
      classNameContact = "active";
      classNamePass = "active";
    } else if ($allowItemIndex === 1) {
      classNameContact = "active";
      classNamePass = "";
    }
  });
</script>

<div class="icon__wrapper ">
  {#if categoryName === "Name"}
    <Tab_name_ico />
    <div class="icon__line active" />
  {:else if categoryName === "Contacts"}
    <Tab_contacts_ico class={classNameContact} />
    <div class="icon__line {classNameContact}" />
  {:else if categoryName === "Address"}
    <Tab_address_ico class={classNameAddress} />
    <div class="icon__line {classNameAddress}" />
  {:else if categoryName === "Password"}
    <Tab_pw_ico class={classNamePass} />
    <div class="icon__line {classNamePass}" />
  {:else if categoryName === "Payment"}
    <Tab_pay_ico class={classNamePass} />
    <div class="icon__line {classNamePass}" />
  {/if}
</div>

<style>
  .icon__wrapper {
    width: 24px;
    height: 22px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  }
  .icon__line {
    margin-top: 6px;
    width: 24px;
    height: 2px;
    background: var(--grey-color-lighter);
    border-radius: 20px;
  }
  .icon__line.active {
    background: var(--color-dark-st3);
  }
</style>
