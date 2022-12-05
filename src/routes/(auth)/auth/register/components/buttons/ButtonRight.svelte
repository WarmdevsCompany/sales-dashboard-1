<script>
  export let buttonState = true;
  import Button_right_ico from "../../../public/images/Button_right_ico.svelte";
</script>

<button class="btn-sv" on:click disabled={!buttonState}>
  <Button_right_ico className={!buttonState? 'disabled': ''}/>
</button>

<style>
  .btn-sv {
    width: 142px;
    height: 66px;
    display: flex;
    justify-content: center;
    background: rgba(0, 110, 255, 0.1);
    border: 1px solid var(--btn-color);
    color: var(--btn-color);
  }
  .btn-sv:hover {
    background: var(--btn-color-hover);
    color: var(--white-color);
  }
  .btn-sv:active {
    background: rgba(0, 110, 255, 0.2);
  }

  @media only screen and (max-width: 768px) {
    .btn-sv {
        width: auto;
    }
  }
</style>
