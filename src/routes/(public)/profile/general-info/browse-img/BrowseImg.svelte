<script>
	import Preloader from '$lib/components/Preloader.svelte';
	import addImage from '$lib/assets/img/image-add.svg';
	import border from '$lib/assets/img/border.png';
	import { t } from '$lib/translations/i18n.js';
	import { globalData } from '$lib/globalStore';
	import { onMount } from 'svelte';
	import { changePhoto } from '$lib/api/axios';
	import { slide } from 'svelte/transition';

	let input;
	let image;
	let imageSrc = '';
	let showImage = false;
	let uploading = false;

	onMount(async () => {
		if ($globalData) {
			imageSrc = $globalData.data.photo;
			if (imageSrc) {
				showImage = true;
			}
		}
	});

	let response;

	async function onChange() {
		const file = input.files[0];
		const reader = new FileReader();

		reader.onloadend = async function () {
			uploading = true;
			response = await changePhoto(reader.result);
			uploading = false;
		};

		if (file) {
			showImage = true;
			reader.addEventListener('load', function () {
				image.setAttribute('src', reader.result);
			});
			reader.readAsDataURL(file);
			return;
		}

		showImage = false;
	}
</script>

<div class="d-flex flex-col">
	<div class="browse__wrapper" class:active={!showImage}>
		{#if uploading}
			<div class="absolute__loader d-flex justify-cc align-center">
				<Preloader loaderWidth={4} loaderHeight={4} borderWidth={0.5} />
			</div>
		{/if}
		{#if showImage}
			<img bind:this={image} src={imageSrc} class="ava-image" alt="Preview" />
		{/if}
		<div class="d-flex flex-col align-center relative_upload">
			<img src={addImage} alt="browse" class="add-placeholder" />
			<div class="browse--head text-sm text-center">
				{$t('PROFILE.GENERAL.DROP')}
				<span class="text-blue"> {$t('PROFILE.GENERAL.BROWSE')}</span>
			</div>
			<div class="supported-files">{$t('PROFILE.GENERAL.SUPPORTS')}: JPG, JPEG2000, PNG</div>
			<img src={border} alt="border" class="browse-border" />
		</div>

		<input bind:this={input} on:change={onChange} type="file" />
	</div>
	{#if response?.status && !uploading}
		<div class="text-xsm mt-1 text-center success_text" transition:slide|local>
			Image uploaded successfuly
		</div>
	{:else if response?.status === false && !uploading}
		<div class="text-xsm mt-1 text-center error_text" transition:slide|local>
			Image upload failed
		</div>
	{/if}
</div>

<style>
	.browse__wrapper {
		width: 303px;
		height: 286px;
		position: relative;
		z-index: 2;
		padding: 61px 2rem;
	}
	.ava-image {
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		width: 100%;
		height: 100%;
		max-width: 100%;
		border-radius: 10px;
		object-fit: cover;
		z-index: -1;
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
		opacity: 0;
	}
	.browse-border {
		opacity: 0;
	}
	.relative_upload {
		position: relative;
		opacity: 0;
		z-index: 1;
	}
	.browse__wrapper.active .relative_upload,
	.browse__wrapper.active .relative_upload .browse-border,
	.browse__wrapper.active .relative_upload .add-placeholder {
		opacity: 1;
	}

	.browse__wrapper:hover .relative_upload,
	.browse__wrapper:hover .browse--head,
	.browse__wrapper:hover .supported-files,
	.browse__wrapper:hover .text-blue {
		opacity: 1;
		color: var(--white);
	}

	.browse__wrapper {
		border-radius: 10px;
		overflow: hidden;
	}
	.browse__wrapper::before {
		content: '';
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		z-index: 1;
		background: rgba(0, 70, 6, 0.9);
		opacity: 0;
		transition: all ease 0.3s;
	}

	.browse__wrapper:hover::before,
	.browse__wrapper:hover {
		opacity: 1;
	}
	.browse__wrapper.active:hover .relative_upload {
		background: transparent;
	}
	.success_text {
		color: var(--green-medium-color);
	}
	.absolute__loader {
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		width: 100%;
		height: 100%;
		background: var(--white);
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
		z-index: 2;
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
