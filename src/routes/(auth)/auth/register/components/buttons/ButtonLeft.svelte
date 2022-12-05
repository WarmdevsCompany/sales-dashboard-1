<script>
  import Button_left_ico from "../../../public/images/Button_left_ico.svelte";
</script>
<button class="btn-sv" on:click>
  <Button_left_ico />
</button>

<style>
  .btn-sv {
    width: 142px;
    height: 66px;
    background: rgba(94, 11, 201, 0.2);
    border: 1px solid var(--btn-color-prev);
    color: var(--btn-color-prev);
    display: flex;
    justify-content: center;
  }
  
  .btn-sv:hover {
    background: var(--btn-color-prev-hover);
    color: var(--white-color);
  }
  
  .btn-sv:active {
    background: var(--btn-color-prev-active);
  }

  @media only screen and (max-width: 768px) {
    .btn-sv {
        width: auto;
    }
  }
</style>
