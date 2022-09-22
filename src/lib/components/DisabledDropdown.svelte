<script>
  import Dropdown_ico from "../components/icons/Dropdown_ico.svelte";
</script>
<div class="dropdown__wrapper">
    <div class="dropdown">
        <Dropdown_ico />
        <div class="dropdown__item--current">{$$props.text}</div>
    </div>
</div>
<style>
.dropdown__wrapper {
    position: relative;
    width: 100%;
    height: 70px;
  }
  .dropdown {
    position: absolute;
    width: 100%;
    background-color: var(--grey-color);
    border: 1px solid var(--border-color);
    border-radius: 10px;
    overflow: hidden;
  }
  .dropdown__item--current {
    padding: 22px 30px;
    text-align: left;
    color: var(--black);
    background: var(--grey-color);
  }
</style>