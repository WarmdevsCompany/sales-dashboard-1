<script>
	import { fade } from 'svelte/transition';
	import Modal, { getModal } from '$lib/components/Modal.svelte';
	import Dropdown from '$lib/components/Dropdown.svelte';
	import Checkbox from '$lib/components/inputs/Checkbox.svelte';
	import { t } from '$lib/translations/i18n.js';
	import { globalData, isFetching } from '$lib/globalStore';
	import {
		restartContribution,
		pauseContribution,
		stopContribution,
		updateGlobalDataObj
	} from '$lib/api/axios';
	import { convertDateToUTC } from '$lib/functions/convertDateToUTC.js';
	export let statusId;
	let stopCheckboxValue = false;
	let chackboxErrorStatus = false;
	let timeframeArray = [];
	let timeframe;

	const periodsMonths = $globalData.data.period_months;
	let pauseBtnText = $t('MANAGE_PAUSE'),
		stopBtnText = $t('MANAGE_STOP'),
		restartBtnText = $t('MANAGE_RES');

	// convert date to UTC
	let date;
	let nextDate;
	// generateMonthArray
	timeframeArray = periodsMonths.map((item) => {
		return item.text;
	});
	$: {
		stopCheckboxValue;
		if (stopCheckboxValue) {
			chackboxErrorStatus = false;
		}
		nextDate;
		date = convertDateToUTC($globalData.data.currentSubscription.nextDate);
		nextDate = `${date.day} ${$t('MONTH_SHORT_' + date.month)} ${date.year}`;
	}
	async function stop() {
		stopBtnText = `${$t('LOADING')}...`;
		$isFetching = true;
		const response = await stopContribution();
		if (response.status) {
			getModal('stop').close();
			stopBtnText = $t('MANAGE_STOP');
			await updateGlobalDataObj();
		}
		$isFetching = false;
	}
	async function restart() {
		if (stopCheckboxValue) {
			restartBtnText = `${$t('LOADING')}...`;
			$isFetching = true;
			const response = await restartContribution();
			if (response.status) {
				getModal('restart').close();
				restartBtnText = $t('MANAGE_RES');
				await updateGlobalDataObj();
				stopCheckboxValue = false;
			}
			$isFetching = false;
		} else {
			chackboxErrorStatus = true;
		}
	}
	async function pause() {
		pauseBtnText = `${$t('LOADING')}...`;
		$isFetching = true;
		const periodId = getPeriodId();
		const response = await pauseContribution(periodId);
		if (response.status) {
			getModal('pause').close();
			pauseBtnText = $t('MANAGE_PAUSE');
			await updateGlobalDataObj();
		}
		$isFetching = false;
	}
	function getPeriodId() {
		const arrayWithCurrentItem = periodsMonths.filter((item) => {
			if (item.text === timeframe) {
				return item.idobject;
			}
		});
		return arrayWithCurrentItem[0].idobject;
	}
</script>

<div class="b-radius-8 box_shadow-medium take__break text-center text-dark-green mt-2">
	<div class="text-3">{$t('MANAGE_TAKE_BREAK')}</div>
	<div class="text-xsm mt-0_5">{$t('MANAGE_PSR')}</div>

	<div class="contribution__btns d-flex justify-sb mt-1_5">
		<button
			class="btn pause mb-1"
			on:click={() => getModal('pause').open()}
			disabled={statusId === 5236999 || statusId === 5237000 || statusId === 5237002}
			>{$t('MANAGE_PAUSE')}</button
		>
		<button
			class="btn stop mb-1"
			on:click={() => getModal('stop').open()}
			disabled={statusId === 5237000 || statusId == 5237002}>{$t('MANAGE_STOP')}</button
		>
		<button
			class="btn restart mb-1"
			on:click={() => getModal('restart').open()}
			disabled={statusId === 5236998 || statusId === 5237001 || statusId === 5237002}
			>{$t('MANAGE_RES')}</button
		>
	</div>
</div>
<Modal id="pause">
	<div class="modal_main pause text-center">
		<img
			src="https://assets-global.website-files.com/6089254f4962ce24139217ac/62fb58aa7d076b85fe8a58bf_WarmDevs_Logo_Horizontal.svg"
			alt=""
		/>
		<div class="modal_head_medium mt-2">
			{$t('MANAGE_PAUSE_TITLE')}
		</div>
		<div class="pause__modal--main">
			<div class="dropdown__head">{$t('MANAGE_CHOOSE_TIMEFRAME')}</div>
			<Dropdown itemsData={timeframeArray} bind:activeItem={timeframe} />
			<button
				class:is_fetching={$isFetching}
				class="btn confirm pause__modal--btn "
				on:click={pause}>{pauseBtnText}</button
			>
		</div>
	</div>
</Modal>
<Modal id="stop">
	<div class="modal_main stop text-center">
		<img
			src="https://assets-global.website-files.com/6089254f4962ce24139217ac/62fb58aa7d076b85fe8a58bf_WarmDevs_Logo_Horizontal.svg"
			alt=""
		/>
		<div class="modal_head_medium mt-2">
			{$t('MANAGE_STOP_TITLE')}
		</div>
		<div class="stop__modal--main ">
			<button class:is_fetching={$isFetching} class="btn confirm stop__modal--btn" on:click={stop}
				>{stopBtnText}</button
			>
		</div>
	</div>
</Modal>
<Modal id="restart">
	<div class="modal_main restart text-center">
		<img
			src="https://assets-global.website-files.com/6089254f4962ce24139217ac/62fb58aa7d076b85fe8a58bf_WarmDevs_Logo_Horizontal.svg"
			alt=""
		/>
		<div class="modal_head_medium mt-2">
			{$t('MANAGE_RES_TITLE')}
		</div>
		<div class="restart__modal--main ">
			<div class="d-flex justify-sb mt-2 mobile-block">
				<div>
					<div class="text-sm subtitle">{$t('MANAGE_TOTAL_SAVE')}</div>
					<div class="restart__value text-green text-2 mt-1_5">
						{$globalData.data.currency.symbol}{$globalData.data.currentSubscription.balance}
					</div>
				</div>
				<div>
					<div class="text-sm subtitle">{$t('MANAGE_NEXT_RECURRING')}</div>
					<div class="restart__value text-green text-2 mt-1_5">
						{$globalData.data.currency.symbol}{$globalData.data.currentSubscription
							.subscriptionText}
					</div>
				</div>
				<div>
					<div class="text-sm subtitle">{$t('MANAGE_NEXT_DATE')}</div>

					<div class="restart__value text-green text-2 mt-1_5">
						{#if statusId === 5237000}
							{$globalData.data.currentSubscription.subscriptionText}
						{:else}
							{nextDate}
						{/if}
					</div>
				</div>
			</div>
			<div class="terms__checkbox">
				<Checkbox group={'terms'} bind:checkboxStatus={stopCheckboxValue} value={1}
					><div class="text-xsm agree_text">{$t('MANAGE_AGREE')}</div>
				</Checkbox>
				{#if chackboxErrorStatus}
					<small in:fade class="error_text text-xsm">{$t('MANAGE_AGREE_ERROR')}</small>
				{/if}
			</div>

			<button
				class:is_fetching={$isFetching}
				class="btn confirm restart__modal--btn"
				on:click={restart}>{restartBtnText}</button
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
		font-weight: var(--font-weight-medium);
	}

	.btn.confirm.pause__modal--btn,
	.btn.confirm.stop__modal--btn {
		width: 100%;
		margin: 1.5rem auto 0 auto;
		transition: none;
	}
	.restart__modal--btn {
		width: 100%;
		margin: 2.125rem auto 0 auto;
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
		color: var(--green-dark-color);
	}
	.terms__checkbox {
		max-width: 500px;
		margin: 1.375rem auto 0 auto;
		position: relative;
	}
	.terms__checkbox .error_text {
		position: absolute;
		bottom: -32px;
	}
	.subtitle {
		color: var(--text-color);
	}
	.agree_text {
		position: relative;
		top: 2px;
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
		.restart__modal--btn {
			margin: 2.5rem auto 0 auto;
		}
		.terms__checkbox {
			max-width: 400px;
		}
	}
	@media only screen and (min-width: 992px) and (max-width: 1279px) {
		.take__break {
			padding: 2.31rem 1rem;
		}
	}
</style>
