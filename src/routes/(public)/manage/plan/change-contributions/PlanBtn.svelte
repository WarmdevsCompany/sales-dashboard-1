<script>
	import Info_ico from '$lib/components/icons/plan-icons/Info_ico.svelte';
	export let content;
	export let className;
</script>

<div class="wrapper">
	<button class={className} on:click>
		{content}
		<Info_ico />
	</button>
</div>

<style>
	.wrapper {
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 0 0 90px 0;
	}
	button,
	.btn-sv {
		font-size: var(--text-font-normal);
		line-height: var(--text-line-height);
		position: relative;
		padding: 12px 24px;
		border: 1px solid var(--white);
		border-radius: 10px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		color: var(--white);
		cursor: pointer;
		transition: all ease-in 0.15s;
	}
	button.blue,
	.btn-sv.blue {
		background: #8dc5f6;
	}
	button.green,
	.btn-sv.green {
		background: rgba(55, 48, 163, 0.55);
	}
	button.violet,
	.btn-sv.violet {
		background: rgba(94, 11, 201, 0.25);
	}
	button.blue:hover,
	.btn-sv.blue:hover {
		background: rgba(0, 110, 255, 0.55);
	}
	button.blue:active,
	.btn-sv.blue:active {
		background: var(--btn-color-active);
	}
	button.green:hover,
	.btn-sv.green:hover {
		background: rgba(0, 110, 255, 0.85);
	}
	button.green:active,
	.btn-sv.green:active {
		background: rgba(0, 110, 255, 0.25);
	}
	button.violet:hover,
	.btn-sv.violet:hover {
		background: var(--btn-color-prev-hover);
	}
	button.violet:active,
	.btn-sv.violet:active {
		background: var(--btn-color-prev-active);
	}
	@media only screen and (max-width: 991px) {
		.wrapper {
			display: none;
		}
	}
	@media only screen and (max-width: 1439px) {
		button,
		.btn-sv {
			font-size: 1vw;
			padding: 12px 8px;
			justify-content: center;
			width: 100%;
		}
	}
	@media only screen and (min-width: 992px) and (max-width: 1439px) {
		.wrapper {
			padding: 0 1rem 2rem 1rem;
		}
	}
</style>
