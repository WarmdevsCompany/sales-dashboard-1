<script>
	import Preloader from '../../../../lib/components/Preloader.svelte';
	import SignUp from './SignUp.svelte';

	let loading = false;
</script>

<svelte:head>
	<title>Sign up</title>
	<meta name="description" content="Sign up page" />
</svelte:head>

<div class="wrapper">
	<SignUp />
	{#if loading}
		<div class="absolute_loader">
			<Preloader loaderWidth={10} loaderHeight={10} borderWidth={0.8} />
		</div>
	{/if}
</div>

<style>
	.wrapper {
		padding-top: 30px;
		position: relative;
	}
	.absolute_loader {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: #fff;
		z-index: 999;
		height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
