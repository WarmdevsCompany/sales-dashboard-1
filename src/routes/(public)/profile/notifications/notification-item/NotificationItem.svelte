<script>
  import { fade } from "svelte/transition";
  import ThreeDotsIcon from "$lib/components/icons/ThreeDotsIcon.svelte";
  import ItemTooltip from "./ItemTooltip.svelte";
  import { notificationList } from "../notificationsStore";

  export let objAttributes = {};

  function toReadItem(id) {
    //mocks [need real data from API]
    $notificationList.map(function (value, index, arr) {
      if (value.id == id) return (value.status = "readed");
    });
    $notificationList = $notificationList;
  }
</script>

<li
  out:fade
  class="notifications__item box_shadow-medium mt-1_25 b-radius-8 relative {objAttributes.status}"
>
  <div class="d-flex justify-sb">
    <div
      class="title d-flex align-center text-3 mb-1"
      on:click={() => toReadItem(objAttributes.id)}
    >
      {objAttributes.name}
    </div>
    <div class="relative dots">
      <ItemTooltip id={objAttributes.id} status={objAttributes.status} width={160}
        ><ThreeDotsIcon bgColor="green" /></ItemTooltip
      >
    </div>
  </div>
  <div class="d-flex justify-sb text-5">
    <div class="description">
      {objAttributes.description}
    </div>
    <div class="date">{objAttributes.date}</div>
  </div>
</li>

<style>
  .notifications__item.unreaded .title {
    cursor: pointer;
  }
  .notifications__item .title,
  .notifications__item .description,
  .notifications__item .date {
    color: var(--black);
  }
  .notifications__item.muted .title,
  .notifications__item.muted .description,
  .notifications__item.muted .date {
    color: #838383;
  }
  .notifications__item .title::after {
    content: " ";
    background: var(--grey-color);
    width: 4px;
    height: 4px;
    display: block;
    border-radius: 50%;
    margin-left: 8px;
  }
  .notifications__item.unreaded .title::after {
    background: var(--red-color);
  }
  .notifications__item {
    color: #838383;
    padding: 24px 32px;
    background-color: var(--white);
    margin-bottom: 10px;
  }
  .date {
    margin-top: auto;
    margin-bottom: 0;
    font-weight: var(--font-weight-normal);
  }
  .description {
    max-width: 608px;
    font-weight: var(--font-weight-normal);
  }
  .dots {
    cursor: pointer;
  }
  @media only screen and (max-width: 991px) {
    .notifications__item {
      padding: 72px 1rem 40px 1rem;
    }
    .date {
      position: absolute;
      top: 2rem;
      left: 1rem;
    }
    .dots {
      position: absolute;
      top: 2rem;
      left: auto;
      right: 1rem;
    }
  }
</style>
