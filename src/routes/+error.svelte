<!-- <script>
	import { fade } from 'svelte/transition';
	import { browser } from '$app/environment';
	import greenLogo from '$lib/assets/img/logo-green.svg';
	import { t, locale } from '$lib/translations/i18n.js';
	import { afterUpdate, onMount } from 'svelte';
	import '../app.css';
	let error_404 = '',
		goToDashboard = '';

	onMount(() => {
		if (browser) {
			$locale = localStorage.getItem('lang') || "EN";
			(error_404 = $t('404_ERROR')), (goToDashboard = $t('GO_TO_DASHBOARD'));
		}
	});
</script>

<div class="greenForm">
	<div class="box_shadow-medium form__content">
		{#if error_404 != '' && goToDashboard != ''}
			<div class="content d-flex flex-col justify-cc align-center" in:fade>
				<img src={greenLogo} alt="esi logo img" />
				<div class="text-404"><h1>404</h1></div>

				<p class="text-center">{error_404}</p>

				<a href="/overview/general" class="btn mt-2">{goToDashboard}</a>
			</div>
		{/if}

		<div class="absolute">
			<div class="circle_bg left" />
			<div class="circle_bg right" />
		</div>
	</div>
</div>

<style>
	.greenForm {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		min-height: 100vh;
		background: linear-gradient(0deg, #053900, #053900), #ffffff;
	}

	.form__content {
		position: relative;
		background: white;
		padding: 2.125rem;
		width: 100%;
		max-width: 767px;
		min-height: 100vh;
	}

	.content {
		width: 100%;
		margin: 0 auto;
		padding-top: 55px;
	}

	.absolute {
		display: none;
		position: absolute;
		width: 767px;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		margin: 0 auto;
		z-index: 1;
	}
	.circle_bg {
		width: 665px;
		height: 665px;
		background: #00b2ff;
		position: absolute;
		border-radius: 50%;
		z-index: -1;
		opacity: 0.05;
		filter: blur(400px);
	}
	.circle_bg.left {
		top: 77px;
		left: -465px;
	}
	.circle_bg.right {
		bottom: -152px;
		right: -545px;
	}
	.text-404 h1 {
		color: var(--text-color);
		font-size: 6rem;
		line-height: 6.5rem;
		margin: 3rem 0 2rem 0;
	}
</style> -->
