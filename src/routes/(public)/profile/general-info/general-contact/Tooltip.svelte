<script>
  import { fade } from "svelte/transition";
  import clickOutside from "$lib/functions/clickOutside";
  import editIcon from "$lib/assets/img/mode_edit.svg";
  export let title = "";
  import { getModal } from "$lib/components/Modal.svelte";
import {modalClassName, profileEditForm} from '../profileStore'
  let active = false;

  function show() {
    active = true;
  }

  function hide() {
    active = false;
  }
  function handleClickOnTooltip(formName) {
    $modalClassName = 'greenForm';
    $profileEditForm = formName;
    getModal('general-info').open();
    hide();
  }
</script>

<div on:click={show}>
  <slot />
</div>

{#if active && title != null}
  <div
    use:clickOutside
    on:click_outside={hide}
    on:click={() => handleClickOnTooltip($$props.formName)}
    in:fade={{ duration: 200 }}
    class="tooltip text-sm b-radius-8 d-flex justify-sb align-center"
    style="width: {$$props.width}px; left: -{$$props.width}px"
  >
    <span class="title">{title}</span>
    <img src={editIcon} alt="Esi edit icon" />
  </div>
{/if}

<style>
  .title {
    display: block;
  }
  .tooltip {
    box-shadow: 0px 14px 30px rgba(0, 0, 0, 0.14);
    background: white;
    padding: 1.875rem 1.5rem;
    position: absolute;
    top: -50px;
    z-index: 3;
    width: auto;
    color: var(--black);
  }
  /* .tooltip::after {
      content: "";
      position: absolute;
      bottom: -12px;
      left: 15px;
      border-top: 7px solid white;
      border-bottom: 7px solid transparent;
      border-left: 7px solid transparent;
      border-right: 7px solid transparent;
    } */
  @media only screen and (max-width: 1130px) and (min-width: 991px) {
    .tooltip {
      width: 200px;
      top: -60px;
    }
  }
</style>
