<script>
  import { plansModalState, plansModalData } from "./planStore";
  import { afterUpdate } from "svelte";

  let lottieWidth = 450;
  let windowWidth;
  $: windowWidth;
  if ($plansModalData.class === "safe") {
    lottieWidth = 370;
  }

  afterUpdate(() => {
    if (windowWidth < 1100) {
      lottieWidth = 350;
      if ($plansModalData.class === "safe") {
        lottieWidth = 300;
      }
    }
  });
</script>

<svelte:window bind:scrollY={windowWidth} />

<div
  class="pop_up {$plansModalData.class}"
>
  <div class="column">
    <div class="content">
      <div class="content__head text-2">{$plansModalData.name}</div>
      <div class="content__text">{$plansModalData.desc}</div>
    </div>
  </div>
  <div class="column">
    <div class="littie__wrapper">
     <lottie-player
          src={$plansModalData.lottie}
          background="transparent"
          speed="1"
          style="width:{lottieWidth}px;"
          loop
          autoplay
        />
    </div>
  </div>
</div>

<style>
  .pop_up {
    width: 100%;
    height: auto;
    z-index: 10;
    padding: 64px;
    display: flex;
    width: 100%;
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
  .pop_up.safe {
    background: var(--plan-safe-popup-bg);
  }
  .pop_up.adventure {
    background: var(--plan-adventure-popup-bg);
  }
  .pop_up.founder {
    background: var(--plan-founder-popup-bg);
  }

  .content {
    color: var(--white);
    max-width: 417px;
    margin-right: 74px;
  }
  .content__head {
    font-weight: var(--font-weight-bold);
  }
  .content__text {
    margin-top: 16px;
  }
  .littie__wrapper {
    width: 400px;
    height: 500px;
    background: var(--white);
    box-shadow: 0px 25px 35px rgba(0, 0, 0, 0.15);
    border-radius: 20px;
    overflow: hidden;
    display: flex;
    justify-content: center;
  }
  @media only screen and (max-width: 1280px) {
    .littie__wrapper {
      width: 30vw;
      height: 450px;
    }
    .content {
      margin-right: 4vw;
    }
    .pop_up {
      min-height: 600px;
      padding: 5vw;
    }
  }

  @media only screen and (max-width: 1124px) {
    .littie__wrapper {
      width: 28vw;
    }
  }
  @media only screen and (max-width: 991px) {
    .pop_up {
      display: none;
    }
  }
</style>
