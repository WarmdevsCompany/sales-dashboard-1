<script>
	import { globalData } from '$lib/globalStore';
	export let hasMessageStatus = true,
		messageCount = $globalData.data.notifications.badgeCount,
		bgColor = '';
</script>

<div class="relative notification__wrapper">
	<svg
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		class={bgColor}
	>
		<path
			d="M12 22C13.1 22 14 21.1 14 20H10C10 21.1 10.89 22 12 22ZM18 16V11C18 7.93 16.36 5.36 13.5 4.68V4C13.5 3.17 12.83 2.5 12 2.5C11.17 2.5 10.5 3.17 10.5 4V4.68C7.63 5.36 6 7.92 6 11V16L4 18V19H20V18L18 16Z"
			fill="#032B01"
		/>
	</svg>
	{#if hasMessageStatus}
		<div class="absolute notification b-radius-50 d-flex justify-cc align-center text-white">
			{messageCount}
		</div>
	{/if}
</div>

<style>
	.notification__wrapper {
		width: 24px;
		height: 24px;
	}
	.notification {
		top: 0;
		right: 0;
		width: 12px;
		height: 12px;
		background-color: var(--red-color);
		font-weight: var(--font-weight-medium);
		font-size: var(--text-font-xxsmall);
		line-height: var(--text-line-height-xxsmall);
	}
	svg.white path {
		fill: var(--white);
	}
</style>
