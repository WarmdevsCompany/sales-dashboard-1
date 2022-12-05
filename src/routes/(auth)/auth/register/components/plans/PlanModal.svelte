<script>
  import { plansModalState, plansModalData } from "../../stores/plansStore";
  import { clickOutside } from "../../functions/clickOutside";
  import Close_ico from "../../../public/images/Close_ico.svelte";

  function handleClickOutside(event) {
    $plansModalState = false;
    document.body.classList.remove("o-hidden");
  }
  function handleClose(event) {
    $plansModalState = false;
    document.body.classList.remove("o-hidden");
  }
</script>

<svelte:head />

<div class="pop_up ">
  <div
    class="pop_up-main {$plansModalData.class} "
    use:clickOutside
    on:click_outside={handleClickOutside}
  >
    <div class="close__icon" on:click={handleClose}>
      <Close_ico />
    </div>
    <div class="column">
      <div class="content">
        <div class="content__head">{$plansModalData.name}</div>
        <div class="content__text">{$plansModalData.desc}</div>
      </div>
    </div>
    <div class="column">
      <div class="littie__wrapper">
        <img
          src="https://assets-global.website-files.com/6089254f4962ce24139217ac/63517350b640ab7fb15e4d3f_hero_major_image.svg"
          alt=""
          style="max-width: 100%;"
        />
      </div>
    </div>
  </div>
</div>

<style>
  .pop_up {
    position: fixed;
    top: 0px;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }
  .pop_up-main {
    position: relative;
    box-shadow: 0px 25px 35px rgba(0, 0, 0, 0.15);
    max-height: 90vh;
    z-index: 10;
    margin-top: 80px;
    margin: 80px 20px 0 20px;
    padding: 50px;
    display: flex;
    justify-content: space-around;
    width: 100%;
    max-width: 1100px;
    background-color: var(--white-color);
    border-radius: 10px;
  }
  .close__icon {
    position: absolute;
    top: 24px;
    right: 24px;
    cursor: pointer;
    transition: all ease 0.2s;
    z-index: 2;
  }
  .close__icon:hover {
    opacity: 0.5;
  }
  .pop_up-main.safe {
    background: var(--plan-safe-popup-bg);
  }
  .pop_up-main.adventure {
    background: var(--plan-adventure-popup-bg);
  }
  .pop_up-main.founder {
    background: var(--plan-founder-popup-bg);
  }

  .content {
    color: var(--white-color);
    max-width: 417px;
    margin-right: 74px;
  }
  .content__head {
    font-weight: var(--font-weight-bold);
    font-size: var(--h2-size);
    line-height: var(--h2-line-height);
  }
  .content__text {
    margin-top: 16px;
  }
  .littie__wrapper {
    width: 400px;
    height: 600px;
    background: var(--white-color);
    box-shadow: 0px 25px 35px rgba(0, 0, 0, 0.15);
    border-radius: 20px;
    overflow: hidden;
    display: flex;
    justify-content: center;
  }
  @media only screen and (max-width: 1100px) {
    .littie__wrapper {
      width: 350px;
      height: 550px;
    }
    .pop_up {
      min-height: 800px;
    }
  }
  @media only screen and (max-width: 1024px) {
    .pop_up {
      min-height: 840px;
    }
  }
  @media only screen and (max-width: 991px) {
    .pop_up {
      display: none;
    }
  }
</style>
