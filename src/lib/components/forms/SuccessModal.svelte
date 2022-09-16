<script>
	import { fade } from 'svelte/transition';
	import { t } from '$lib/translations/i18n.js';
	import closeIcon from '$lib/assets/img/close.svg';
</script>

<div class="form__wrapper" out:fade={{ delay: 50, duration: 110 }}>
	<div class="confirm__form text-center">
		<div class="finish__content">
			<div class="modal_head_medium text-1">
				{($$props.mainText = $t('PROFILE_UPDATED'))}
			</div>
			<button class="btn success" on:click={() => $$props.closeModals()}
				>{($$props.btnText = $t('BACK'))}</button
			>
		</div>
		<img
			class="close_icon"
			on:click={() => $$props.closeModals()}
			src={closeIcon}
			alt="esi close icon"
		/>
	</div>
</div>

<style>
	.form__wrapper {
		z-index: 999;
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		width: 100%;
		height: 100%;
		padding: 2rem;
		background: #4448;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.confirm__form {
		position: relative;
		border-radius: 10px;
		background: white;
		padding: 2.125rem;
		width: 100%;
		max-width: 950px;
		min-height: 584px;
	}
	.close_icon {
		position: absolute;
		top: 34px;
		right: 34px;
		width: 24px;
		height: 24px;
		cursor: pointer;
		transition: transform 0.3s;
	}
	.close_icon:hover {
		transform: scale(1.2);
	}
	.btn.success {
		margin: 2.125rem auto 0 auto;
	}
	.finish__content {
		padding-top: 141px;
		margin: 0 auto;
		max-width: 374px;
	}
	.finish__content .modal_head_medium {
		margin: 0;
	}
</style>
