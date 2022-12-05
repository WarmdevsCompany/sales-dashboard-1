<script>
  import { fade } from "svelte/transition";
  export let errorMessage;
</script>

<div
  class="error__message"
  in:fade={{ duration: 200 }}
  out:fade={{ duration: 150 }}
>
  {errorMessage}<i class="mi mi-circle-warning" />
</div>

<style>
  .mi {
    font-size: 1.4rem;
    color: var(--error-color);
    padding-left: 4px;
  }
  .error__message {
    display: flex;
    position: absolute;
    right: 175px;
    bottom: 16px;
    font-size: var(--text-size-small);
    line-height: 21px;
  }
  @media only screen and (max-width: 768px) {
    .error__message {
      position: static;
      width: 100%;
      text-align: center;
      padding: 8px 16px;
      margin-top: 14px;
    }
  }
</style>
