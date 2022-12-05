<script>
  import { fade } from "svelte/transition";
  export let title = "";
  let isHovered = false;

  function mouseOver() {
    isHovered = true;
  }

  function mouseLeave() {
    isHovered = false;
  }
</script>

<!-- svelte-ignore a11y-mouse-events-have-key-events -->
<div on:mouseover={mouseOver} on:mouseleave={mouseLeave} class="flex">
  <slot />
</div>

{#if isHovered && title != null}
  <div in:fade={{ duration: 200 }} class="tooltip">{title}</div>
{/if}

<style>
  .tooltip {
    box-shadow: 0px 10px 35px rgb(0 0 0 / 25%);
    background: white;
    border-radius: 4px;
    padding: 14px 12px 12px 12px;
    position: absolute;
    top: -50px;
    left: 20px;
    z-index: 99;
    width: 200px;
    color: var(--black-color);
    font-size: 13px;
    line-height: 20px;
    pointer-events: none;
  }
  .tooltip::after {
    content: "";
    position: absolute;
    bottom: -12px;
    right: 35px;
    border-top: 7px solid white;
    border-bottom: 7px solid transparent;
    border-left: 7px solid transparent;
    border-right: 7px solid transparent;
  }
  .flex {
    display: flex;
  }
  @media only screen and (max-width: 1130px) and (min-width: 991px) {
    .tooltip {
      width: 200px;
      top: -60px;
    }
  }
</style>
