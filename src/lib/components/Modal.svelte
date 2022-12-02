<script context="module">
	let onTop; //keeping track of which open modal is on top
	const modals = {}; //all modals get registered here for easy future access
	// https://svelte.dev/repl/514f1335749a4eae9d34ad74dc277f20?version=3.37.0

	// 	returns an object for the modal specified by `id`, which contains the API functions (`open` and `close` )
	export function getModal(id = '') {
		return modals[id];
	}
</script>

<script>
	import { onDestroy } from 'svelte';
	import closeIcon from '$lib/assets/img/close.svg';
	import { fade } from 'svelte/transition';

	let visible = false;
	let prevOnTop;
	let closeCallback;

	export let id = '';
	export let className = '';
	export let resetModalState = () => {};

	/**  API **/
	function open(callback) {
		closeCallback = callback;
		if (visible) return;
		prevOnTop = onTop;

		//this prevents scrolling of the main window on larger screens
		hideScrollbar();

		visible = true;
		//Move the modal in the DOM to be the last child of <BODY> so that it can be on top of everything
	}
	function hideScrollbar() {
		document.body.classList.add('hidden');
	}
	function showScrollbar() {
		document.body.classList.remove('hidden');
	}

	function close(retVal) {
		if (!visible) return;
		onTop = prevOnTop;
		if (onTop == null) showScrollbar();
		visible = false;
		if (closeCallback) closeCallback(retVal);
	}

	//expose the API
	modals[id] = { open, close };

	const closeAndResetModalState = () => {
		close();
		resetModalState();
	};
	onDestroy(() => {
		delete modals[id];
	});
</script>

<!-- 
<svelte:window on:keydown|preventDefault={keyPress} /> -->
{#if visible}
	<div
		id="topModal"
		class={className}
		transition:fade={{ delay: 50, duration: 150 }}
		on:click={() => close()}
	>
		<div id="modal" class="box_shadow-medium {className}" on:click|stopPropagation={() => {}}>
			{#if className != 'greenForm'}
				<img
					id="close"
					class={className}
					on:click={() => close()}
					src={closeIcon}
					alt="esi close icon"
				/>
			{/if}

			<div id="modal-content" class:scroll__wrapper={className === 'greenForm'}>
				<slot />
				{#if className === 'greenForm'}
					<img
						id="close"
						class="greenClose {className}"
						on:click={closeAndResetModalState}
						src={closeIcon}
						alt="esi close icon"
					/>
				{/if}
			</div>
			<div class="absolute">
				<div class="circle_bg left" />
				<div class="circle_bg right" />
			</div>
		</div>
	</div>
{/if}

<style>
	#topModal {
		z-index: 9999;
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		padding: 2rem;
		background: #4448;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	#topModal.greenForm {
		z-index: 99;
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		padding: 0rem;

		display: flex;
		align-items: center;
		justify-content: center;
	}
	#modal {
		position: relative;
		border-radius: 10px;
		background: white;
		padding: 2.125rem;
		width: 100%;
		max-width: 950px;
		min-height: 584px;
		margin-left: 257px;
		max-height: 97vh;
	}
	.scroll__wrapper {
		max-height: 100vh;
		padding-bottom: 60px;
	}
	/* Hide scrollbar for Chrome, Safari and Opera */
	.scroll__wrapper::-webkit-scrollbar {
		display: none;
	}

	/* Hide scrollbar for IE, Edge and Firefox */
	.scroll__wrapper {
		-ms-overflow-style: none; /* IE and Edge */
		scrollbar-width: none; /* Firefox */
	}

	.visible {
		visibility: visible !important;
	}
	#modal.plan__modal {
		padding: 0;
		overflow: hidden;
		background: transparent;
	}
	#modal.greenForm {
		padding: 0;
		overflow: hidden;
		background: linear-gradient(0deg, #020039, #06358b), #ffffff;
		border-radius: 0;
		max-width: none;
		height: 100%;
		max-height: 100vh;
		margin: 0;
	}
	#modal.greenForm #modal-content {
		max-width: 767px;
		width: 100%;
		min-height: 100%;
		border-radius: 0;
		margin: 0 auto;
		padding-top: 55px;
		background: var(--white);
		box-shadow: 0px 25px 35px rgba(0, 0, 0, 0.15), inset 0px 0px 35px rgba(255, 255, 255, 0.15);
		overflow: auto;
		backdrop-filter: blur(5px);
		z-index: 2;
		position: relative;
	}
	#close {
		position: absolute;
		top: 34px;
		right: 34px;
		width: 24px;
		height: 24px;
		cursor: pointer;
		transition: transform 0.3s;
	}
	#close.greenForm {
		display: none;
	}
	#close.greenClose.greenForm {
		display: block;
	}

	#close:hover {
		transform: scale(1.15);
	}

	#modal-content {
		max-width: calc(100vw - 20px);
		max-height: calc(100vh - 20px);
		border-radius: 10px;
	}
	#modal.greenForm .absolute {
		display: block;
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

	@media only screen and (max-width: 1439px) {
		#modal {
			min-height: 0;
		}
	}
	@media only screen and (min-width: 992px) and (max-width: 1439px) {
		#close {
			top: 16px;
			right: 16px;
		}
	}
	@media only screen and (max-width: 991px) {
		#modal {
			max-width: 100%;
			max-height: 90vh;
			overflow: auto;
			margin: auto;
		}
		#modal.greenForm {
			max-height: 100vh;
		}
		#modal.greenForm #modal-content {
			padding-left: 20px;
			padding-right: 20px;
		}
	}
	@media only screen and (max-width: 480px) {
		#topModal {
			padding: 0;
		}
		#modal {
			max-height: 100vh;
			border-radius: 0;
			height: 100%;
			margin: 0;
		}
	}
</style>
