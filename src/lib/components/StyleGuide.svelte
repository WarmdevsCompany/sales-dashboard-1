<script>
  import Radio from "./inputs/Radio.svelte";
  import Checkbox from "../components/inputs/Checkbox.svelte";
  import Notification from "./icons/Notification.svelte";
  import AvatarIcon from "./icons/AvatarIcon.svelte";
  import logo from "$lib/assets/img/Ellipse-1.png";
  import SettingsIcon from "./icons/SettingsIcon.svelte";
  import ThreeDotsIcon from "./icons/ThreeDotsIcon.svelte";
  import Status from "./Status.svelte";
  import Dropdown from "./Dropdown.svelte";
  let radioValue;

  const options = [
    {
      value: "green",
      label: "Bulbasaur",
    },
    {
      value: "red",
      label: "Charmander",
    },
    {
      value: "blue",
      label: "Squirtle",
    },
  ];
  let selection = [];
</script>

<div>
  <Radio {options} fontSize={16} bind:userSelected={radioValue} />
  <p>
    {radioValue} is selected
  </p>
</div>
<div class="mb-1 mt-1">
  <Checkbox bind:group={selection} value={1}>Uno</Checkbox>
</div>
<div class="d-flex flex-wrap justify-sb">
  <button class="btn mb-1">Confirm changes</button>

  <button class="btn confirm mb-1" disabled>Confirm changes</button>

  <button class="btn pause mb-1">Pause contribution</button>
  <button class="btn pause mb-1" disabled>Pause contribution</button>

  <button class="btn stop mb-1">Stop contribution</button>
  <button class="btn stop mb-1" disabled>Stop contribution</button>

  <button class="btn restart mb-1">Restart contribution</button>
  <button class="btn restart mb-1" disabled>Restart contribution</button>

  <button class="btn secondary mb-1">Restart contribution</button>
  <button class="btn secondary mb-1" disabled>Restart contribution</button>
</div>
<div class="mt-1 mb-1">
  <Notification />
</div>
<div class="mt-1 mb-1">
  <!-- <AvatarIcon /> -->
</div>
<div class="mt-1 mb-1">
  <AvatarIcon avatarIsSet={true} avatarImg={logo} />
</div>
<div class="mt-1 mb-1">
  <SettingsIcon />
</div>
<div class="mt-1 mb-1">
  <ThreeDotsIcon bgColor={"green"} />
</div>
<input class="mt-1 mb-1" type="text" placeholder="First name" />

<input class="mt-1 mb-1" type="text" placeholder="First name" disabled />
<div class="mt-1 mb-1">
  <Status status="active" iconColor="white" />
</div>
<div class="mt-1 mb-1">
  <Status status="paused" />
</div>
<div class="mt-1 mb-1">
  <Status status="stop" />
</div>
<div class="mt-1 mb-1">
  <Status status="suspended" />
</div>
<div class="mt-1 mb-1">
  <Dropdown itemsData={["Monthly", "Bimonthly"]} />
</div>
<div class="mt-1 mb-1">
  <Dropdown disabled={true} itemsData={["Monthly", "Bimonthly"]} />
</div>
