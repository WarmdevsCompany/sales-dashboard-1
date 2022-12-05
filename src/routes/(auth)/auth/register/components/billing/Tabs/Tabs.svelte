<script>
  import TabIcon from "./TabIcon.svelte";
  export let tabItems;
</script>

<div class="tabs">
  <ul>
    {#each tabItems as item, i}
      <li>
        <div class="icon"><TabIcon categoryName={item.name} /></div>
      </li>
    {/each}
  </ul>
</div>

<style>
  .tabs {
    margin-bottom: 24px;
  }
  ul {
    display: flex;
    justify-content: center;
    padding: 0;
    list-style-type: none;
  }
  li {
    margin: 0 16px;
    font-size: 18px;
    color: #555;
  }
</style>
