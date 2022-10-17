<script>
	import { makeWithdrawal, updateGlobalDataObj } from '$lib/api/axios.js';
	import { withdrawBalance, withdrawContribution } from './../withdrawStore.js';
	import { verificationId, isFetching } from '$lib/globalStore.js';
	import { t } from '$lib/translations/i18n.js';
	export let withdrawMethods = [],
		successFormStatus,
		formStep;
	const addNewItemKey = 'ADD_NEW_ITEM';
	let radioValue = 0,
		options = [],
		isLoading = false,
		submitBtnText = $t('NEXT');
	console.log(withdrawMethods);
	withdrawMethods.forEach((item, index) => {
		options[index] = { value: index };
	});
	const confirmSelection = async () => {
		if (radioValue != addNewItemKey) {
			isLoading = true;
			submitBtnText = `${$t('LOADING')}...`;
			$isFetching = true;
			const body = {
				verificationId: $verificationId,
				withdrawalMethodId: withdrawMethods[radioValue].idobject,
				amount: $withdrawBalance,
				greenSafe: $withdrawContribution.safeValue,
				greenAdventure: $withdrawContribution.adventureValue,
				greenFounder: $withdrawContribution.founderValue
			};
			const res = await makeWithdrawal(body);
			if (res.status) {
				await updateGlobalDataObj()
				successFormStatus = true;
			}
			$isFetching = false;
			isLoading = false;
			submitBtnText = $t('SAVE');
		} else {
			formStep = 4;
		}
	};
</script>

<div class="withdraw__methods grid mt-2" role="radiogroup">
	{#each withdrawMethods as element, index}
		<div
			class="withdraw__item method b-radius-10 p-2 relative text-left"
			class:active_item={radioValue === index}
			on:click={() => (radioValue = index)}
		>
			<div class="text-3">Bank transfer #{element.accountNumber}*{element.currencyName}</div>
			<div class="text-xsm text-green mt-0_5">{element.fullName || ''}</div>
			<div class="absloute__radio">
				<div class="group-container single_item">
					<input class="sr-only" type="radio" bind:group={radioValue} value={index} />
					<label for={index} class="single_item">
						<span><div class="dot" /></span>
					</label>
				</div>
			</div>
		</div>
	{/each}
	<div
		class="withdraw__item add__method b-radius-10 p-2 d-flex align-center"
		class:active_item={radioValue === addNewItemKey}
		on:click={() => (radioValue = addNewItemKey)}
	>
		<div class="plus__wrapper mr-1"><span /></div>
		<div class="withdraw__item--text text-3 text-left">{$t('MANAGE_ADD_WITHDRAW')}</div>
	</div>
</div>
<button class="btn mt-2_5 btn_center" on:click={confirmSelection} class:is_fetching={$isFetching}
	>{submitBtnText}
</button>

<style>
	.withdraw__methods {
		grid-template-columns: 1fr 1fr;
		grid-gap: 1rem;
	}
	.withdraw__item {
		border: 1px solid var(--grey-color);
		max-width: 360px;
		cursor: pointer;
		transition: all ease 0.3s;
	}
	.withdraw__item.active_item {
		border-color: #6db94f;
	}
	.absloute__radio {
		position: absolute;
		top: 8px;
		right: 8px;
	}
	.add__method {
		cursor: pointer;
	}
	.add__method span {
		position: relative;
		min-width: 32px;
		height: 32px;
	}
	.add__method span::after,
	.add__method span::before {
		content: '';
		position: absolute;
		width: 5px;
		height: 32px;
		background-color: #6db94f;
	}
	.add__method span::before {
		transform: rotate(90deg);
	}

	.plus__wrapper {
		padding: 7px 7px 7px 0;
		min-width: 46px;
		height: 46px;
	}
	/* radio style */
	:root {
		--accent-color: CornflowerBlue;
		--gray: #ccc;
	}

	.group-container {
		border-radius: 2px;
		display: flex;
		flex-direction: row;
	}
	.group-container.single_item {
		display: inline-block;
	}

	label {
		cursor: pointer;
		user-select: none;
		color: var(--label--color-secondary);
		line-height: 24px;
		padding: 0;
		margin-bottom: 10px;
	}
	label.single_item {
		margin: 0;
		z-index: -1;
	}
	input[type='radio'] + label.single_item span {
		margin: 0;
	}

	.sr-only {
		position: absolute;
		padding: 0;
		border: 0;
		height: 1px;
		width: 1px;
		overflow: hidden;
	}

	input[type='radio'] {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		right: 0;
		opacity: 0;
		cursor: pointer;
	}

	input[type='radio'] + label {
		display: flex;
		align-items: center;
		position: relative;
		text-align: left;
	}

	input[type='radio'] + label span {
		line-height: 20px;
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-right: 16px;
		width: 20px;
		height: 20px;
		background: transparent;
		border: 2px solid #5a7186;
		border-radius: 50%;
	}

	input[type='radio']:checked + label span {
		border: 2px solid #0085ff;
		border-radius: 50%;
	}

	input[type='radio'] + label span .dot {
		position: absolute;
		width: 10px;
		height: 10px;
		background: #0085ff;
		border-radius: 50%;
		transform: scale(0);
	}

	input[type='radio']:checked + label span .dot {
		opacity: 1;
		transform: scale(1);
	}

	input[type='radio']:focus + label span {
		box-shadow: 0 0 0 1px var(--accent-color, #282828);
		border-radius: 50%;
	}

	input[type='radio']:disabled + label {
		color: darken(var(--gray, #ccc), 10);
	}

	input[type='radio']:disabled + label span {
		background: var(--gray, #ccc);
	}

	input[type='radio'] + label span {
		transition: background 0.3s ease-out;
	}

	input[type='radio']:checked + label span {
		transition: background 0.3s ease-in;
	}

	input[type='radio'] + label span .dot {
		transition: transform 0.2s ease-out;
	}

	input[type='radio']:checked + label span .dot {
		transition: transform 0.2s ease-in;
	}

	input[type='radio']:focus + label span {
		box-shadow: 0 0px 8px var(--accent-color, #282828);
		border-radius: 50%;
	}
	@media only screen and (max-width: 767px) {
		.withdraw__methods.grid {
			grid-template-columns: 1fr;
		}
		.withdraw__item {
			max-width: 100%;
		}
	}
</style>
