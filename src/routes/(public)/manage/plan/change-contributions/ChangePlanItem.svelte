<script>
	import { globalData } from './../../../../../lib/globalStore.js';
	import clickOutside from '$lib/functions/clickOutside';
	import { priceConvertation } from '$lib/functions/priceConvertation';
	import {
		plansModalState,
		plansModalData,
		sortPersantageVariable,
		planModalData,
		errorMessageState,
		allocatedContributions,
		subscribeAllState
	} from './planStore';

	import PlanBtn from './PlanBtn.svelte';
	import MobArrow_ico from '$lib/components/icons/plan-icons/MobArrow_ico.svelte';
	import Checkbox_ico from '$lib/components/icons/plan-icons/Checkbox_ico.svelte';
	import Dropdown_ico from '$lib/components/icons/plan-icons/Dropdown_ico.svelte';
	import { t } from '$lib/translations/i18n.js';

	// images
	import safeImage from '$lib/assets/img/plans/safe-icon.svg';
	import advImage from '$lib/assets/img/plans/adventure-icon.svg';
	import founderImage from '$lib/assets/img/plans/founder-icon.svg';
	import Tooltip from './Tooltip.svelte';
	import Modal, { getModal } from '$lib/components/Modal.svelte';
	import PlanModalContent from './PlanModalContent.svelte';

	export let current,
		currentPlan,
		className = '',
		label,
		allowPercentageVal,
		savePercentages,
		isDisebled,
		currentPrice,
		activeClass,
		activeState = false,
		btnText,
		btnClass;

	let modalData = planModalData[0];
	function setPercentage(item, plan, disableState) {
		if (disableState) {
			return false;
		} else {
			$sortPersantageVariable = item.sortName;
			$subscribeAllState = false;
			switch (plan) {
				case 'safe':
					$allocatedContributions.safe = item.persentage;
					$allocatedContributions.safeName = item.value;
					break;
				case 'adventure':
					$allocatedContributions.adventure = item.persentage;
					$allocatedContributions.adventureName = item.value;
					break;
				case 'founder':
					$allocatedContributions.founder = item.persentage;
					$allocatedContributions.founderName = item.value;
					break;
				default:
					console.log('Error');
			}
		}
		$errorMessageState = false;
		activeState = !activeState;
	}
	let svgIcons = {
		safe: safeImage,
		adventure: advImage,
		founder: founderImage
	};

	let currentSvgIcon = svgIcons[className];

	function showModal(plan) {
		$plansModalData.class = modalData[plan].class;
		$plansModalData.name = modalData[plan].head;
		$plansModalData.desc = modalData[plan].desc;
		$plansModalData.lottie = modalData[plan].lottie;

		$plansModalState = true;
	}

	// close dropdown by click ouside
	function handleClickOutside(event) {
		activeState = false;
	}
	function checkItemDisableState(item) {
		let status =
			item.persentage > allowPercentageVal &&
			allowPercentageVal + $allocatedContributions[className] < item.persentage;
		return status;
	}
</script>

<div class="plans__item {className}" class:active={current === currentPlan}>
	<div
		class="item__head"
		on:click={() => (current === currentPlan ? (current = '') : (current = currentPlan))}
	>
		<div class="column">
			<img class="plan__icon" src={currentSvgIcon} alt="" />

			<div class="item__head__name">{$t('MANAGE_SELECT')} {label}</div>
		</div>
		<div class="column">
			<div class="item__head__checkbox" class:visible={$allocatedContributions[className] != 0}>
				<Checkbox_ico />
			</div>
			<div class="mob__arrow">
				<MobArrow_ico />
			</div>
		</div>
	</div>
	<div class="item__body">
		<div>
			<div class="item__top">
				<div class="item__top__head">{$t('MANAGE_TO_GREEN')}</div>
				<div class="dropdown__wrapper">
					<div
						class="dropdown  {activeState ? activeClass : ''} plan__dropdown"
						use:clickOutside
						class:error={$errorMessageState}
						class:disabled={isDisebled}
						on:click_outside={handleClickOutside}
					>
						<Dropdown_ico on:click={() => {
							activeState = !activeState;
						}}/>
						<div
							class="dropdown__item--current"
							on:click={() => {
								$errorMessageState = false;
								activeState = !activeState;
							}}
						>
							{$allocatedContributions[className]}% {$t('MANAGE_TOTAL')}
						</div>
						<div class="dropdown__items">
							{#each savePercentages as item}
								{#if item.persentage > allowPercentageVal && allowPercentageVal + $allocatedContributions[className] < item.persentage}
									<div style="position:relative">
										<Tooltip title={$t('MANAGE_REMOVE')}>
											<div
												class="dropdown__item"
												class:disabled={item.persentage > allowPercentageVal &&
													allowPercentageVal + $allocatedContributions[className] < item.persentage}
												on:click={function () {
													let status = checkItemDisableState(item);
													setPercentage(item, currentPlan, status);
												}}
											>
												{item.persentage}%
											</div>
										</Tooltip>
									</div>
								{:else}
									<div
										class="dropdown__item"
										class:disabled={item.persentage > allowPercentageVal &&
											allowPercentageVal + $allocatedContributions[className] < item.persentage}
										on:click={function () {
											let status = checkItemDisableState(item);
											setPercentage(item, currentPlan, status);
										}}
									>
										{item.persentage}%
									</div>
								{/if}
							{/each}
						</div>
					</div>
				</div>
				<div class="item__current__money text-2 {className}">
					<div class="money">
						{$globalData.data.currency.symbol +
							priceConvertation(Math.round(currentPrice * 100) / 100)}
					</div>
				</div>
			</div>

			<div class="mob__plan__info">
				<div class="plan__info__head">{modalData[className].head}</div>
				<div class="plan__info__text">{modalData[className].desc}</div>
			</div>
			<!-- <Portfolio name={className} /> -->
		</div>
		<PlanBtn
			content={btnText}
			className={btnClass}
			on:click={() => {
				getModal('planModal').open();
				showModal(currentPlan);
			}}
		/>
	</div>
</div>

<Modal id="planModal" className="plan__modal">
	<PlanModalContent />
</Modal>

<style>
	.mob__plan__info {
		display: none;
	}
	.plans__items {
		margin-top: 16px;
		display: flex;
		align-items: flex-start;
	}
	.plans__item {
		width: 100%;
		border-radius: 6px;
		display: flex;
		flex-direction: column;
		filter: drop-shadow(0px 6px 14px rgba(3, 22, 2, 0.14));
	}
	.plan__icon {
		width: 38px;
		height: 38px;
	}
	.plans__item .item__head {
		display: flex;
		justify-content: space-between;
		padding: 11px 24px 11px 24px;
		border-top-left-radius: 6px;
		border-top-right-radius: 6px;
	}
	.plans__item.safe .item__head {
		background: var(--plan-safe-bg);
	}
	.plans__item.adventure .item__head {
		background: var(--plan-adventure-bg);
	}
	.plans__item.founder .item__head {
		background: var(--plan-founder-bg);
	}
	.plans__item .item__body {
		height: 100%;
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		border-bottom-left-radius: 6px;
		border-bottom-right-radius: 6px;
	}
	.plans__item.safe .item__body {
		background: #C0E4F6;
	}
	.plans__item.adventure .item__body {
		background: #ABD790;
	}
	.plans__item.founder .item__body {
		background: #F0DEF8;
	}
	.item__head__checkbox {
		width: 24px;
		height: 24px;
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		background: var(--white);
		border: 1px solid var(--border-color);
		border-radius: 3px;
		opacity: 0;
		transition: all ease 0.2s;
	}

	.item__head__checkbox.visible {
		opacity: 0.7;
	}

	.item__head__name {
		color: var(--white);
		text-transform: uppercase;
		margin-left: 8px;
	}
	.mob__arrow {
		margin-left: 10px;
		display: none;
	}

	.item__head .column {
		display: flex;
		align-items: center;
	}
	.item__top {
		padding: 2rem;
	}
	.item__top__head {
		color: var(--black-color);
		padding: 10px;
	}
	.item__current__money {
		border-radius: 10px;
		width: 100%;
		height: 70px;
		padding: 23px 30px;
		margin-top: 10px;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.item__current__money .money {
		font-weight: var(--font-weight-bolder);
		color: var(--white);
	}
	.item__current__money.safe {
		background: var(--plan-safe-bg);
	}
	.item__current__money.adventure {
		background: var(--plan-adventure-bg);
	}
	.item__current__money.founder {
		background: var(--plan-founder-bg);
	}
	/* .portfolio {
      padding: 32px 20px 40px 43px;
      width: 100%;
      min-height: 257px;
      background: var(--plan-safe-portfolio-bg);
      border: 2px solid var(--plan-safe-portfolio-border);
      color: var(--white-color);
    } */
	.plans__item.safe .portfolio {
		background: var(--plan-safe-portfolio-bg);
		border: 2px solid var(--plan-safe-portfolio-border);
	}
	.plans__item.adventure .portfolio {
		background: var(--plan-adventure-portfolio-bg);
		border: 2px solid var(--plan-adventure-portfolio-border);
	}
	.plans__item.founder .portfolio {
		background: var(--plan-founder-portfolio-bg);
		border: 2px solid var(--plan-founder-portfolio-border);
	}
	.portfolio__head {
		font-weight: var(--font-weight-bold);
		font-size: 18px;
		line-height: 27px;
	}
	.dropdown__wrapper {
		position: relative;
		width: 100%;
		height: 70px;
	}
	.dropdown__wrapper.disabled,
	.dropdown__wrapper.disabled * {
		background: var(--grey-color);
		border-radius: 10px;
		pointer-events: none;
		user-select: none;
	}
	.dropdown {
		position: absolute;
		width: 100%;
		z-index: 10;
		cursor: pointer;
		background-color: var(--white);
		border: 1px solid var(--border-color);
		border-radius: 10px;
	}
	:global(.dropdown svg) {
		position: absolute;
		right: 30px;
		top: 25px;
		z-index: 3;
	}
	.dropdown.disabled {
		pointer-events: none;
		background: var(--grey-color);
	}
	.dropdown.error {
		border-color: var(--red-color);
	}
	.dropdown__items {
		display: none;
	}
	.dropdown__item {
		position: relative;
		padding: 12px 30px;
		transition: all ease-in 0.3s;
	}
	.dropdown__item--current {
		padding: 23px 30px;
	}
	.dropdown__item.disabled {
		/* pointer-events: none; */
		opacity: 0.5;
	}
	.dropdown__item:hover {
		background-color: var(--grey-color-lightest);
	}
	.plans__item.adventure {
		margin: 0 20px;
	}
	.dropdown.activeDropdownSave,
	.dropdown.activeDropdownAdv,
	.dropdown.activeDropdownFound {
		background-color: var(--white);
		padding: 11px 0;
	}
	.dropdown.activeDropdownSave .dropdown__item--current,
	.dropdown.activeDropdownAdv .dropdown__item--current,
	.dropdown.activeDropdownFound .dropdown__item--current {
		display: none;
	}
	.dropdown.activeDropdownSave .dropdown__items,
	.dropdown.activeDropdownAdv .dropdown__items,
	.dropdown.activeDropdownFound .dropdown__items {
		display: block;
	}

	@media only screen and (max-width: 1320px) {
		.item__top {
			padding: 32px 1.5vw 24px 1.5vw;
		}
		:global(.dropdown svg) {
			right: 15px;
		}
		.dropdown__item--current {
			padding: 23px 1.5vw;
		}
		.portfolio {
			padding: 20px;
		}
		.dropdown__item--current,
		.dropdown__item,
		.item__head__name {
			font-size: var(--text-font-small);
		}
	}
	@media only screen and (max-width: 1080px) {
		:global(.dropdown svg) {
			right: 5px;
			max-width: 20px;
		}
		.item__top {
			padding: 32px 1.1vw 24px 1.1vw;
		}
	}

	@media only screen and (max-width: 991px) {
		.item__top {
			padding: 32px 21px 24px 21px;
		}
		.plans__item.adventure {
			margin: 0;
		}
		.dropdown__item--current,
		.dropdown__item {
			color: var(--black-color);
			padding: 23px 30px;
		}
		:global(.dropdown svg) {
			right: 30px;
		}
		.mob__plan__info {
			display: block;
			text-align: center;
			padding: 24px 21px;
			color: var(--color-darkest);
		}
		.plan__info__head {
			font-weight: var(--font-weight-bold);
			font-size: var(--h3-size);
			line-height: var(--h3-line-height);
		}
		.plan__info__text {
			font-size: var(--text-font-small);
			line-height: 21px;
			margin-top: 16px;
		}
		.plans__items {
			margin-top: 20px;
			gap: 0;
		}
		.plans__item {
			max-width: 100%;
		}
		.plans__item.adventure {
			margin-top: 22px;
			margin-bottom: 22px;
		}
		.mob__arrow {
			display: flex;
			align-items: center;
			color: var(--white);
		}
		.dropdown__wrapper {
			max-width: none;
		}
		.portfolio {
			padding: 20px 24px;
			min-height: 150px;
		}
		.plans__item.active .mob__arrow {
			transform: rotate(180deg);
		}
		/* accordion logic style */
		.plans__item .item__body {
			padding: 0;
			max-height: 0rem;
			overflow: hidden;
			transition: all ease 0.4s;
		}
		.plans__item.active .item__body {
			padding-bottom: 36px;
			max-height: 55rem;
		}
	}
	@media only screen and (max-width: 480px) {
		.item__head__checkbox {
			width: 16px;
			display: flex;
			height: 16px;
		}
	}
	@media only screen and (min-width: 992px) and (max-width: 1439px) {
		.plans__item.adventure {
			margin: 0 1vw;
		}
		.plans__item .item__head {
			padding: 1rem 0.5rem;
		}
		.item__top {
			padding: 1rem;
		}
		.item__top__head {
			font-size: 1.2vw;
		}
		.item__head__name {
			font-size: 0.9vw;
		}
	}
</style>
