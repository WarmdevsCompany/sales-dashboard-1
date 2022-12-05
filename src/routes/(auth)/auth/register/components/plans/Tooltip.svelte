<script>
  import { fade } from "svelte/transition";
  export let title = "";
  let isHovered = false;

  function mouseOver(event) {
    isHovered = true;
  }

  function mouseLeave() {
    isHovered = false;
  }
</script>

<div on:mouseover={mouseOver} on:mouseleave={mouseLeave}>
  <slot />
</div>

{#if isHovered && title != null}
  <div in:fade={{ duration: 200 }} class="tooltip">{title}</div>
{/if}

<style>
  .tooltip {
    box-shadow: 0px 25px 35px rgba(0, 0, 0, 0.15);
    background: white;
    border-radius: 4px;
    padding: 14px 9px 12px 9px;
    position: absolute;
    top: -40px;
    left: 20px;
    z-index: 3;
    width: 260px;
    color: var(--error-color);
    font-size: 13px;
    line-height: 20px;
    pointer-events: none;
  }
  .tooltip::after {
    content: "";
    position: absolute;
    bottom: -12px;
    left: 15px;
    border-top: 7px solid white;
    border-bottom: 7px solid transparent;
    border-left: 7px solid transparent;
    border-right: 7px solid transparent;
  }
  @media only screen and (max-width: 1130px) and (min-width: 991px) {
    .tooltip {
      width: 200px;
      top: -60px;
    }
  }
</style>
