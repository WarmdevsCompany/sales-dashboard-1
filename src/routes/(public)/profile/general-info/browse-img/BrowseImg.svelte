<script>
  import addImage from "$lib/assets/img/image-add.svg";
  import border from "$lib/assets/img/border.png";
  import { t } from "$lib/translations/i18n.js";

  let input;
  let container;
  let image;
  let placeholder;
  let showImage = false;
  function onChange() {
    const file = input.files[0];

    if (file) {
      showImage = true;

      const reader = new FileReader();
      reader.addEventListener("load", function () {
        image.setAttribute("src", reader.result);
      });
      reader.readAsDataURL(file);

      return;
    }
    showImage = false;
  }
</script>

<div class="browse__wrapper d-flex flex-col align-center">
  {#if showImage}
    <img bind:this={image} src="" class="ava-image" alt="Preview" />
  {:else}
    <img src={addImage} alt="browse" class="add-placeholder" />
    <div class="browse--head text-sm text-center">
      {$t("PROFILE.GENERAL.DROP")} <span class="text-blue"> {$t("PROFILE.GENERAL.BROWSE")}</span>
    </div>
    <div class="supported-files">{$t("PROFILE.GENERAL.SUPPORTS")}: JPG, JPEG2000, PNG</div>
    <img src={border} alt="border" class="browse-border" />
  {/if}
  <input bind:this={input} on:change={onChange} type="file" />
</div>

<style>
  .browse__wrapper {
    width: 303px;
    height: 286px;
    position: relative;
    z-index: 2;
    padding: 61px 2rem;
  }
  .ava-image{
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 95%;
    height: 100%;
    max-width: 100%;
    border-radius: 50%;
    object-fit:cover;
  }

  .browse--head {
    margin-top: 2.125rem;
    color: var(--green-dark-medium);
    font-weight: var(--font-weight-medium);
  }
  .text-blue {
    font-weight: var(--font-weight-bold);
  }
  .supported-files {
    color: #a8a8a8;
    font-size: 12px;
    line-height: 18px;
  }
  .add-placeholder {
    height: 76px;
    width: 76px;
  }
  .browse-border,
  .browse__wrapper input {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }
  .browse__wrapper input {
    border: none;
    background: transparent;
    color: transparent;
    z-index: 99;
    cursor: pointer;
  }
  .browse__wrapper input::-webkit-file-upload-button {
    visibility: hidden;
  }
  @media only screen and (max-width: 1280px) {
    .browse__wrapper {
      width: 24.2vw;
      height: 22.7vw;
      padding: 4vw 1rem;
      min-width: 225px;
      min-height: 227px;
    }
    .browse--head {
      margin-top: 2vw;
    }
  }
  @media only screen and (max-width: 991px) {
    .browse__wrapper {
      width: 100%;
      min-height: 286px;
    }
    .add-placeholder {
      margin-top: auto;
    }
    .supported-files {
      margin-bottom: auto;
    }
	}
</style>
