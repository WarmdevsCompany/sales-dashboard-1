<script>
	import WalletValue from './header-items/WalletValue.svelte';
	import NextContribution from './header-items/NextContribution.svelte';
	import NextContrDate from './header-items/NextContrDate.svelte';
	import SubscriptionStatus from './header-items/SubscriptionStatus.svelte';

	export let status, statusId
	
</script>

<header class="d-flex  b-radius-8 align-center text-white justify-cc">
	<div class="d-flex justify-cc header__left--column">
		<div class="contribution__data d-flex justify-sb relative">
			<WalletValue {status} />
			<NextContribution {status} />
			<NextContrDate status={status || 'active'} {statusId}/>
			<SubscriptionStatus
				status={status.toLowerCase() || 'active'} {statusId}
			/>
		</div>
	</div>
</header>

<style>
	header {
		box-shadow: 0px 6px 14px rgba(3, 22, 2, 0.14), 0px 3px 6px rgba(3, 22, 2, 0.24);
		background: var(--green-dark-color);
		padding: 1.375rem 2rem 1.437rem 2rem;
	}
	.header__left--column {
		width: 100%;
		max-width: 900px;
	}
	.contribution__data {
		width: 100%;
		max-width: 980px;
	}
	:global(.contribution__data--item img) {
		margin-right: 0.5rem;
	}
	:global(.contribution__data--item > :first-child) {
		margin-right: 0.5rem;
	}

	:global(.header__tooltip) {
		padding: 0.625rem 0.625rem 0.625rem 0.625rem;
		background: var(--white);
		z-index: 10;
		color: #5f5f5f;
		min-width: 150px;
		font-weight: var(--font-weight-normal);
		text-align: center;
		box-shadow: 0px 25px 35px rgba(0, 0, 0, 0.15);
	}

	:global(.header__tooltip::after) {
		content: '';
		position: absolute;
		top: -5px;
		right: 45%;
		border-radius: 2px;
		transform: rotate(45deg);
		border-top: 7px solid white;
		border-bottom: 7px solid transparent;
		border-left: 7px solid white;
		border-right: 7px solid transparent;
	}

	@media only screen and (max-width: 1280px) {
		header {
			padding: 1.375rem 1.5rem 1.437rem 4.8125rem;
		}
		:global(.header_text) {
			font-size: 1.6vw;
		}
	}
	@media only screen and (min-width: 992px) and (max-width: 1199px) {
		header {
			padding: 1.375rem 1.5rem;
		}
	}
	@media only screen and (max-width: 991px) {
		header {
			padding: 1rem;
			flex-wrap: wrap;
		}
		.contribution__data {
			flex-wrap: wrap;
		}
		:global(.contribution__data--item) {
			width: 100%;
			margin-bottom: 1rem;
		}
		:global(.header_text) {
			font-size: 20px;
		}
		:global(.contribution__data--item:last-child) {
			position: absolute;
			right: 0;
			left: auto;
			width: auto;
			margin-top: 1rem;
			margin-right: 10px;
		}
	}
</style>
