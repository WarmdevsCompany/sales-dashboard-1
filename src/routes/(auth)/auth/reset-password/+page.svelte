<script>
	import { t } from '$lib/translations/i18n.js';
	import ResetForm from './ResetForm.svelte';
</script>

<svelte:head>
	<title>Reset password</title>
	<meta name="description" content="Login page" />
</svelte:head>
<div class="greenForm">
	<div class="box_shadow-medium form__content">
		<div class="content d-flex flex-col justify-cc align-center">
			<img
				src="https://assets-global.website-files.com/6089254f4962ce24139217ac/62fb58aa7d076b85fe8a58bf_WarmDevs_Logo_Horizontal.svg"
				alt=""
			/>
			<div class="text-1 mb-1">{$t('RESET_PASSWORD')}</div>
			<div class=" mt-1">{$t('VERIFY_ACCOUNT')}</div>

			<ResetForm />
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
		background: linear-gradient(0deg, #020039, #06358b), #ffffff;
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
</style>
