<script>
	import greenLogo from '$lib/assets/img/logo-green.svg';
	import LoginForm from './LoginForm.svelte';
	import { t } from '$lib/translations/i18n.js';
</script>

<svelte:head>
	<title>Login</title>
	<meta name="description" content="Login page" />
</svelte:head>
<div class="greenForm">
	<div class="box_shadow-medium form__content">
		<div class="content d-flex flex-col justify-cc align-center">
			<img src={greenLogo} alt="esi logo img" />
			<div class="text-1 mb-1">{$t('LOGIN')}</div>
			<LoginForm />
		</div>
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
	.text-1 {
		color: var(--text-color);
		margin-top: 41px;
	}
	@media only screen and (max-width: 991px) {
		.form__content {
			padding: 2rem 1rem;
		}
	}
</style>
