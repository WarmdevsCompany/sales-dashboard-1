<script>
	import logo from '$lib/assets/img/logo-green.svg';
	import { t } from '$lib/translations/i18n.js';
	import logoutIcon from '$lib/assets/img/logout-green.svg';
	import { logout } from '$lib/api/axios';
	export let statusId;
</script>

<div class="modal d-flex justify-cc align-center">
	<div class="content d-flex justify-cc align-center flex-col">
		<img
			class="logo"
			src="https://assets-global.website-files.com/6089254f4962ce24139217ac/62fb58aa7d076b85fe8a58bf_WarmDevs_Logo_Horizontal.svg"
			alt="logo"
		/>
		<div class="message">
			{#if statusId === 5237003}
				{$t('ACCOUNT_BLOCKED')}
			{:else if statusId === 5237004}
				{$t('ACCOUNT_FROZEN')}
			{/if}
		</div>
		<a href="#" class="btn confirm support">{$t('CONTACT_SUPPORT')}</a>
		<div class="logout">
			<button class="btn d-flex text-sm" style="min-width:auto;" on:click={logout}
				><img src={logoutIcon} alt="logout" />
				<span>{$t('LOGOUT')}</span></button
			>
		</div>
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
	.logout button {
		padding: 20px 0;
		justify-content: flex-start;
		width: auto;
		appearance: none;
		background: transparent;
		border: none;
		color: var(--text-secondary-color);
		font-weight: var(--font-weight-medium);
		font-size: var(--text-font-small);
		line-height: var(--text-line-height-small);
	}
	.logout img {
		margin-right: 0.5rem;
	}
	@media only screen and (max-width: 991px) {
		.modal {
			padding-top: 160px;
			align-items: flex-start;
		}
		.content {
			padding: 0 30px;
		}
	}
</style>
