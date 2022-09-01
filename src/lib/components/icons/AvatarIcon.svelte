<script>
  export const avatarIsSet = false,
    avatarImg = null;

</script>

<div class="avatar__wrapper b-radius-50" class:green_border={avatarIsSet && avatarImg}>
  {#if avatarIsSet && avatarImg}
    <div class="avatar_img-wrapper">
      <img src={avatarImg} alt="avatar" />
    </div>
  {:else}
    <div class="avatar__placeholder d-flex justify-cc align-center">
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14 14.001C17.7221 14.001 20.7368 10.9863 20.7368 7.26419C20.7368 3.54208 17.7221 0.527344 14 0.527344C10.2779 0.527344 7.26315 3.54208 7.26315 7.26419C7.26315 10.9863 10.2779 14.001 14 14.001ZM14 17.3695C9.50315 17.3695 0.526306 19.6263 0.526306 24.1063V27.4747H27.4737V24.1063C27.4737 19.6263 18.4968 17.3695 14 17.3695Z"
          fill="#032B01"
        />
      </svg>
    </div>
  {/if}
</div>

<style>
  .avatar__wrapper {
    width: 64px;
    height: 64px;
    overflow: hidden;
  }
  .avatar_img-wrapper {
    border: 1px solid var(--green-medium-color);
  }
  .avatar__placeholder {
    width: 100%;
    height: 100%;
    background: #d9d9d9;
  }
</style>
