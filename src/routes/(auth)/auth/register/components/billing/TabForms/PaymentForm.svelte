<script>
	import { clientSecretToken, userAuthToken } from '../../../stores/store';
	import { onMount } from 'svelte';
	import Preloader from '../../Preloader.svelte';
	import { contributionData } from '../../../stores/contributionsStore';
	import { postalCode } from '../../../stores/billingStore';
	import InfoDemo from '../demo/InfoDemo.svelte';
	import { infoFormData } from '../../../stores/infoStore';
	export let addressData;

	let currentBillingMethod = 0;
	$: currentBillingMethod;

	let stripeReady = false;
	let mounted = false;
	let preloaderState = false;
	let stripeLoadedStatus = false;

	const client_secret = $clientSecretToken;

	onMount(async () => {
		mounted = true;
		if (stripeReady) {
			console.log('strype is ready');
			loadStripeElements();
		}
	});

	function stripeLoaded() {
		stripeReady = true;
		if (mounted) {
			loadStripeElements();
		}
	}

	const options = {
		clientSecret: client_secret,
		// Fully customizable with appearance API.
		appearance: {}
	};

	function loadStripeElements() {
		// await sleep(500);
		// Create a Stripe client.
		// Note: this merchant has been set up for demo purposes.

		const stripe = Stripe(
			'pk_test_51JAyWcC77lileg3b0o6iLVl0d1gk3KbajmNK1CZZNeh22fK67ZJg7s0fUUkToSVxPGdiLFlwyvKeihifBFS6UL1b005wevv4GM'
		);

		// Create an instance of Elements.
		var elements = stripe.elements({ clientSecret: client_secret });

		// Create an instance of the idealBank Element.
		var paymentForm = elements.create('payment', {
			defaultValues: {
				billingDetails: {
					name: `${$addressData.firstName} ${$addressData.lastName}`,
					email: $infoFormData.email,
					address: {
						country: $contributionData.country['2DigitCode'],
						postal_code: $postalCode,
						line1: $addressData.streetNumber,
						city: $addressData.city,
						state: $addressData.state
					}
				}
			}
		});

		// Add an instance of the idealBank Element into the `ideal-bank-element` <div>.
		paymentForm.mount('#payment-element');
		paymentForm.on('ready', function (event) {
			setTimeout(() => {
				stripeLoadedStatus = true;
			}, 700);
		});

		// Handle form submission.

		const form = document.getElementById('payment-form');

		form.addEventListener('submit', async (event) => {
			event.preventDefault();
			preloaderState = true;
			// set data to pass to webflow
			localStorage.setItem(
				'stripe_PK',
				'pk_test_51JAyWcC77lileg3b0o6iLVl0d1gk3KbajmNK1CZZNeh22fK67ZJg7s0fUUkToSVxPGdiLFlwyvKeihifBFS6UL1b005wevv4GM'
			);
			localStorage.setItem('AuthToken', $userAuthToken);

			const { error } = await stripe.confirmSetup({
				//`Elements` instance that was used to create the Payment Element
				elements,
				confirmParams: {
					return_url: 'https://sales-dashboard-1.vercel.app/auth/successful'
				}
			});

			if (error) {
				// This point will only be reached if there is an immediate error when
				// confirming the payment. Show error to your customer (for example, payment
				// details incomplete)
				preloaderState = false;
				const messageContainer = document.querySelector('#error-message');
				messageContainer.textContent = error.message;
			} else {
				// Your customer will be redirected to your `return_url`. For some payment
				// methods like iDEAL, your customer will be redirected to an intermediate
				// site first to authorize the payment, then redirected to the `return_url`.
			}
		});
	}
</script>

<svelte:head>
	<script src="https://js.stripe.com/v3/" on:load={stripeLoaded}></script>
</svelte:head>
<InfoDemo />
<div class="tab__wrapper">
	{#if !stripeLoadedStatus}
		<div class="preloader__wrapper">
			<Preloader loaderWidth={7} loaderHeight={7} borderWidth={0.8} />
		</div>
	{/if}

	<!-- this is where your Stripe components go -->
	<form on:submit|preventDefault id="payment-form">
		<div id="payment-element">
			<!-- Elements will create form elements here -->
		</div>
		<button class="btn-sv" id="submit">
			{#if preloaderState}
				<div class="preload_btn_wrapper">
					<Preloader loaderWidth={1.5} loaderHeight={1.5} borderWidth={0.3} />
				</div>
			{/if}
			Open Account</button
		>
		<div id="error-message">
			<!-- Display error message to your customers here -->
		</div>
	</form>
</div>

<style>
	#error-message {
		color: var(--error-color);
		text-align: left;
	}
	.tab__wrapper {
		min-height: 400px;
		padding-top: 20px;
	}
	.preloader__wrapper {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		z-index: 2;
		background: #fff;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	button.btn-sv {
		bottom: 0;
		right: 20px;
		position: absolute;
		width: 100%;
		max-width: 200px;
		font-size: 16px;
		height: 66px;
		background: var(--btn-color);
		border: 1px solid var(--btn-color);
		color: white;
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 5;
		overflow: hidden;
	}
	.preload_btn_wrapper {
		position: absolute;
		top: 0%;
		left: 0%;
		width: 100%;
		height: 100%;
		background: var(--btn-color);
		z-index: 6;
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
