<script>
	import { goto } from '$app/navigation';
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';
	import Loader from '$lib/components/Loader.svelte';
	let loaderStatus = true;
	$: loaderStatus;

	let username,
		messageText = '',
		dateString = '';

	const monthArray = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December'
	];

	function convertDateToUTC(date) {
		let year, month, day, hours, minutes;
		const dateUTC = new Date(date * 1000);
		month = dateUTC.getMonth();
		day = dateUTC.getDate();
		year = dateUTC.getFullYear();
		hours = dateUTC.getHours();
		minutes = dateUTC.getMinutes();

		return {
			year,
			month,
			day,
			hours,
			minutes
		};
	}

	async function setSetupIntentToDB(userToken, stripeIntentId) {
		const mainEndpoint =
			'https://be.esi.kdg.com.ua/esi_private2/esi_private/backend/confirmPaymentMethod';
		try {
			const rawResponse = await fetch(mainEndpoint, {
				method: 'POST',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
					Authorization: userToken
				},
				body: JSON.stringify({ paymentMethodId: stripeIntentId })
			});
			const content = await rawResponse.json();

			const dateObj = convertDateToUTC(content.data.firstContributionDate);
			dateString = dateObj.day + 'th ' + monthArray[dateObj.month] + ' ' + dateObj.year;
			loaderStatus = false;
		} catch (e) {
			console.error(e.message);
			loaderStatus = false;
		}
	}

	onMount(() => {
		if (browser) {
			let publishable_key = localStorage.getItem('stripe_PK');
			let authToken = localStorage.getItem('AuthToken');
			let userName = localStorage.getItem('userName');
			if (!publishable_key && !authToken) {
				goto('/auth/register');
			}

			if (publishable_key && authToken) {
				username = userName;

				localStorage.removeItem('AuthToken');
				localStorage.removeItem('stripe_PK');
				localStorage.removeItem('userName');
				// Initialize Stripe.js using your publishable key
				const stripe = Stripe(publishable_key);

				// Retrieve the "setup_intent_client_secret" query parameter appended to
				// your return_url by Stripe.js
				const clientSecret = new URLSearchParams(window.location.search).get(
					'setup_intent_client_secret'
				);

				// Retrieve the SetupIntent
				stripe.retrieveSetupIntent(clientSecret).then(({ setupIntent }) => {
					//console.log(setupIntent)
					setSetupIntentToDB(authToken, setupIntent.payment_method);

					// Inspect the SetupIntent `status` to indicate the status of the payment
					// to your customer.
					//
					// Some payment methods will [immediately succeed or fail][0] upon
					// confirmation, while others will first enter a `processing` state.
					//
					// [0]: https://stripe.com/docs/payments/payment-methods#payment-notification
					switch (setupIntent.status) {
						case 'succeeded': {
							messageText = 'Success! Your payment method has been saved.';
							loaderStatus = false;
							break;
						}

						case 'processing': {
							messageText =
								"Processing payment details. We'll update you when processing is complete.";
							loaderStatus = false;
							break;
						}

						case 'requires_payment_method': {
							messageText = 'Failed to process payment details. Please try another payment method.';
							loaderStatus = false;
							// Redirect your user back to your payment page to attempt collecting
							// payment again

							break;
						}
					}
				});
			}
		}
	});
</script>

<div class="wrapper">
	<div class="success__message">
		{#if loaderStatus}
			<Loader loaderColor="#fff" />
		{/if}

		<div class="success__top"><div>Thanks for registering!</div></div>
		<div class="success__body">
			<div class="like_h2">You have opened your account and added a payment / withdraw source!</div>
			<div class="text-base">Your first contribution will on the {dateString}</div>

			<a href="/" class="btn">Open Account</a>
			<!-- <p class="success__text">Share with your friends</p>
			<div class="success__icons">
				<a href="#" class="success__icon w-inline-block"
					><img
						src="https://uploads-ssl.webflow.com/627ca4b5fcfd5674acf264e6/628b8ff16ae2f89abf979078_Facebook%20-%20Negative.svg"
						loading="lazy"
						alt=""
					/></a
				><a href="#" class="success__icon w-inline-block"
					><img
						src="https://uploads-ssl.webflow.com/627ca4b5fcfd5674acf264e6/628b9087dc3e1e5c47d96b35_entypo-social_linkedin-with-circle.svg"
						loading="lazy"
						alt=""
					/></a
				><a href="#" class="success__icon w-inline-block"
					><img
						src="https://uploads-ssl.webflow.com/627ca4b5fcfd5674acf264e6/628b9097061243a2b52c214a_ant-design_twitter-circle-filled.svg"
						loading="lazy"
						alt=""
					/></a
				>
			</div> -->
		</div>
	</div>
</div>

<style>
	.btn {
		max-width: 217px;
		margin: 40px auto;
	}
	.wrapper {
		max-width: 1100px;
		margin: 0 auto;
		padding-top: 40px;
	}
	.success__message {
		width: 100%;
		height: 100px;
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 0px 0px 180px;
		background-color: transparent;
		position: relative;
		min-height: 690px;
		background: rgba(255, 255, 255, 0.8);
		box-shadow: 0px 25px 35px rgba(0, 0, 0, 0.15), inset 0px 0px 35px rgba(255, 255, 255, 0.15);
		backdrop-filter: blur(5px);
		border-radius: 10px;
	}

	.success__top {
		position: absolute;
		left: 0%;
		top: 0%;
		right: 0%;
		bottom: auto;
		width: 100%;
		padding-top: 13.5px;
		padding-bottom: 13.5px;
		background-color: #6cc800;
		color: #fff;
		font-size: 14px;
		line-height: 21px;
		text-align: center;
		border-radius: 10px 10px 0 0;
	}
	.success__body {
		text-align: center;
		padding: 0 20px;
		max-width: 625px;
		margin-top: 97px;
		margin-right: auto;
		margin-left: auto;
	}
	.like_h2 {
		font-weight: 500;
		font-size: 30px;
		line-height: 46px;
	}
	.text-base {
		font-size: 18px;
		line-height: 26px;
		font-weight: 500;
		margin-top: 1rem;
	}

	.success__text {
		margin-top: 32px;
		margin-bottom: 24px;
	}
	.success__icons {
		display: -webkit-box;
		display: -webkit-flex;
		display: -ms-flexbox;
		display: flex;
		width: 162px;
		margin-right: auto;
		margin-left: auto;
		-webkit-box-pack: justify;
		-webkit-justify-content: space-between;
		-ms-flex-pack: justify;
		justify-content: space-between;
	}
	.success__icon {
		display: -webkit-box;
		display: -webkit-flex;
		display: -ms-flexbox;
		display: flex;
		width: 36px;
		height: 36px;
		-webkit-box-pack: center;
		-webkit-justify-content: center;
		-ms-flex-pack: center;
		justify-content: center;
		-webkit-box-align: center;
		-webkit-align-items: center;
		-ms-flex-align: center;
		align-items: center;
		border-radius: 50%;
		background-color: rgba(0, 110, 255, 0.1);
		-webkit-transition: all 300ms ease;
		transition: all 300ms ease;
	}
	@media only screen and (max-width: 768px) {
		.like_h2 {
			font-size: 20px;
			line-height: 28px;
		}
	}
</style>
