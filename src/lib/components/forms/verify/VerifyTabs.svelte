<script>
  import Radio from "$lib/components/inputs/Radio.svelte";
  import VerifyEmail from "./inputs/VerifyEmail.svelte";
  import VerifyPhone from "./inputs/VerifyPhone.svelte";
  export let sendVerifyCallback;
  export let activeTabValue = 1;
  let radioValue;
  $: radioValue;
  console.log(radioValue);
  const options = [
    {
      value: "email",
      id: 1,
      label: "Email",
    },
    {
      value: "phone",
      id: 2,
      label: "Phone",
    },
  ];
</script>

<div class="mt-1_5">
  <div class="d-flex justify-cc mb-1_5">
    <Radio
      {options}
      fontSize={16}
      bind:userSelected={radioValue}
      verify={true}
      flexDirection={"row"}
      bind:tabId={activeTabValue}
    />
  </div>

  {#if activeTabValue == 1}
    <VerifyEmail sendVerifyCallback={sendVerifyCallback}/>
  {:else if activeTabValue == 2}
    <VerifyPhone sendVerifyCallback={sendVerifyCallback} />
  {/if}
</div>
