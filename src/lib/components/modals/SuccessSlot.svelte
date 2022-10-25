<script>
	import { fade } from 'svelte/transition';
	import closeIcon from '$lib/assets/img/close.svg';
    import logo from '$lib/assets/img/logo-green.svg';
	export let 
		closeModals = () => {};
</script>

<div class="form__wrapper" out:fade={{ delay: 50, duration: 110 }}>
	<div class="confirm__form text-center d-flex flex-col justify-cc">
		<div class="finish__content">
            <img src={logo} class="mb-1_5" alt="logo" />
			<slot></slot>
		</div>
		<img class="close_icon" on:click={closeModals} src={closeIcon} alt="esi close icon" />
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
	.finish__content {
		margin: 0 auto;
		max-width: 490px;
	}
	@media only screen and (max-width: 480px) {
		.form__wrapper {
			padding: 0;
		}
		.confirm__form {
			max-height: 100vh;
			border-radius: 0;
			height: 100%;
			margin: 0;
		}
	}
</style>
