<script>
	import Modal, { getModal } from '$lib/components/Modal.svelte';
	import greenLogo from '$lib/assets/img/logo-green.svg';
	import Dropdown from '$lib/components/Dropdown.svelte';
	import Checkbox from '$lib/components/inputs/Checkbox.svelte';
	import { t } from '$lib/translations/i18n.js';
	let stopCheckboxValue = false;
	let chackboxErrorStatus = false;
	$: {
		stopCheckboxValue;
		if (stopCheckboxValue) {
			chackboxErrorStatus = false;
		}
	}

	async function stopContribution() {
		let rawResponse = await fetch('/api/manage/stopContribution', {
			method: 'POST'
		});
		const response = await rawResponse.json();
		if (response.status) {
			getModal('stop').close();
		}
	}
	async function restartContribution() {
		if (stopCheckboxValue) {
			let rawResponse = await fetch('/api/manage/restartContribution', {
				method: 'POST'
				
			});
			const response = await rawResponse.json();
			if (response.status) {
				getModal('restart').close();
			}
		} else {
			chackboxErrorStatus = true;
		}
	}
  async function pauseContribution() {
	const data = {};
		let rawResponse = await fetch('/api/manage/pauseContribution', {
			method: 'POST',
			headers: {
				accept: 'application/json',
				'Access-Control-Allow-Origin': '*',
				'Access-Control-Allow-Credentials': true
			},
			body: data && JSON.stringify(data)
		});
		const response = await rawResponse.json();
		if (response.status) {
			getModal('pause').close();
		}
	}
</script>

<div class="b-radius-8 box_shadow-medium take__break text-center text-dark-green mt-2">
	<div class="text-3">{$t('MANAGE_TAKE_BREAK')}</div>
	<div class="text-xsm mt-0_5">{$t('MANAGE_PSR')}</div>

	<div class="contribution__btns d-flex justify-sb mt-1_5">
		<button class="btn pause mb-1" on:click={() => getModal('pause').open()}
			>{$t('MANAGE_PAUSE')}</button
		>
		<button class="btn stop mb-1" on:click={() => getModal('stop').open()}
			>{$t('MANAGE_STOP')}</button
		>
		<button class="btn restart mb-1" on:click={() => getModal('restart').open()}
			>{$t('MANAGE_RES')}</button
		>
	</div>
</div>
<Modal id="pause">
	<div class="modal_main pause text-center">
		<img src={greenLogo} alt="esi logo img" />
		<div class="modal_head_medium mt-2">
			{$t('MANAGE_PAUSE_TITLE')}
		</div>
		<div class="pause__modal--main">
			<div class="dropdown__head">{$t('MANAGE_CHOOSE_TIMEFRAME')}</div>
			<Dropdown itemsData={[$t('MANAGE_PAUSE_1'), $t('MANAGE_PAUSE_2'), $t('MANAGE_PAUSE_3')]} />
			<button class="btn confirm pause__modal--btn " on:click={() => getModal('pause').close()}
				>{$t('MANAGE_PAUSE')}</button
			>
		</div>
	</div>
</Modal>
<Modal id="stop">
	<div class="modal_main stop text-center">
		<img src={greenLogo} alt="esi logo img" />
		<div class="modal_head_medium mt-2">
			{$t('MANAGE_STOP_TITLE')}
		</div>
		<div class="stop__modal--main ">
			<button class="btn confirm stop__modal--btn" on:click={stopContribution}
				>{$t('MANAGE_STOP')}</button
			>
		</div>
	</div>
</Modal>
<Modal id="restart">
	<div class="modal_main restart text-center">
		<img src={greenLogo} alt="esi logo img" />
		<div class="modal_head_medium mt-2">
			{$t('MANAGE_RES_TITLE')}
		</div>
		<div class="restart__modal--main ">
			<div class="d-flex justify-sb mt-2 mobile-block">
				<div>
					<div class="text-sm">{$t('MANAGE_TOTAL_SAVE')}</div>
					<div class="restart__value text-green text-2 mt-1_5">$7,437</div>
				</div>
				<div>
					<div class="text-sm">{$t('MANAGE_NEXT_RECURRING')}</div>
					<div class="restart__value text-green text-2 mt-1_5">$1,000/mo</div>
				</div>
				<div>
					<div class="text-sm">{$t('MANAGE_NEXT_DATE')}</div>
					<div class="restart__value text-green text-2 mt-1_5">01 July 2022</div>
				</div>
			</div>
			<div class="terms__checkbox">
				<Checkbox group={'terms'} bind:checkboxStatus={stopCheckboxValue} value={1}
					>{$t('MANAGE_AGREE')}</Checkbox
				>
				{#if chackboxErrorStatus}
					<small class="error_text mt-0_5">Fill required field</small>
				{/if}
			</div>

			<button class="btn confirm restart__modal--btn" on:click={restartContribution}
				>{$t('MANAGE_STOP')}</button
			>
		</div>
	</div>
</Modal>

<style>
	.take__break {
		background: var(--white);
		padding: 2.31rem;
	}
	.contribution__btns {
		width: 100%;
		max-width: 721px;
		margin-right: auto;
		margin-left: auto;
	}

	/* modal */
	.modal_main {
		max-width: 780px;
		margin: 0 auto;
	}
	.modal_main.pause {
		padding-top: 26px;
		padding-bottom: 50px;
	}
	.modal_main.stop {
		padding-top: 84px;
		padding-bottom: 50px;
	}
	.modal_main.restart {
		padding-top: 30px;
		padding-bottom: 50px;
	}
	.modal_main .modal_head_medium {
		color: var(--green-dark-color);
	}

	.btn.confirm.pause__modal--btn,
	.btn.confirm.stop__modal--btn {
		width: 100%;
		margin: 1.5rem auto 0 auto;
		transition: none;
	}
	.restart__modal--btn {
		width: 100%;
		margin: 2rem auto 0 auto;
		transition: none;
		max-width: 282px;
	}
	.pause__modal--main,
	.stop__modal--main {
		width: 100%;
		max-width: 282px;
		margin: 0 auto;
	}
	.restart__modal--main {
		width: 100%;
		max-width: 608px;
		margin: 0 auto;
	}
	.dropdown__head {
		margin-top: 2.75rem;
		padding: 10px;
	}
	.terms__checkbox {
		max-width: 500px;
		margin: 1.375rem auto 0 auto;
	}
	.restart__modal--grid {
	}
	.restart__grid--item {
	}
	.restart__value {
	}
	@media only screen and (max-width: 991px) {
		.contribution__btns {
			display: block;
		}
		.contribution__btns .btn {
			margin-left: auto;
			margin-right: auto;
			margin-bottom: 50px;
		}
		.contribution__btns .btn:last-child {
			margin-bottom: 0;
		}
		.take__break {
			margin-bottom: 4rem;
		}
	}
</style>
