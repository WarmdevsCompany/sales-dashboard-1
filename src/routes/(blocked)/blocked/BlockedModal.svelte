<script>
	import logo from '$lib/assets/img/logo-green.svg';
	import { t } from '$lib/translations/i18n.js';
	export let statusId;
</script>

<div class="modal d-flex justify-cc align-center">
	<div class="content d-flex justify-cc align-center flex-col">
		<img class="logo" src={logo} alt="esi logo" />
		<div class="message">
			{#if statusId === 5237003}
				{$t('ACCOUNT_BLOCKED')}
			{:else if statusId === 5237004}
				{$t('ACCOUNT_FROZEN')}
			{/if}
		</div>
		<a href="#" class="btn confirm support">{$t('CONTACT_SUPPORT')}</a>
	</div>
</div>

<style>
	.logo {
		margin: 0 auto;
		display: block;
	}
	.modal {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		width: 100%;
		height: 100%;
		z-index: 99;
		background: rgba(255, 255, 255, 0.9);
		backdrop-filter: blur(5px);
		border-radius: 6px;
	}
	.content {
		max-width: 454px;
	}
	.message {
		margin-top: 3rem;
		margin-bottom: 4rem;
		font-weight: 600;
		font-size: 24px;
		line-height: 36px;
		text-align: center;
		color: var(--red-color);
	}
	.support {
		min-width: 282px;
	}
	@media only screen and (max-width: 991px) {
		.modal {
			padding-top: 160px;
			align-items: flex-start;
		}
		.content{
		padding: 0 30px;
		}
	}
</style>
