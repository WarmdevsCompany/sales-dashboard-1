<script>
	import Radio from '$lib/components/inputs/Radio.svelte';
	import { t } from '$lib/translations/i18n.js';

	let radioValue;
	const options = [
		{
			value: '0',
			label: `${$t('MANAGE_SAME')} %`
		},
		{
			value: '1',
			label: $t('MANAGE_EQ_AM')
		},
		{
			value: '2',
			label: $t('MANAGE_PUT_AM')
		}
	];
</script>

<div class="withdraw__manager b-radius-8 box_shadow-medium">
	<div>
		<div class="text-3">{$t('MANAGE_WD_MANAGER')}</div>
		<div class="text-xsm mt-0_5">
			{$t('WHERE_WITHDRAW')}*
		</div>
	</div>
	<div class="withdraw__main d-flex justify-sb align-top mobile-block">
		<div class="d-flex align-center withdraw__input--body mr-2">
			<div class="withdraw__input">
				<input class="" type="text" placeholder="1000" id="name" name="name" />
			</div>
			<div class="withdraw__label">{$t('OVERVIEW_TOTAL')}</div>
		</div>
		<div class="radio__wrapper">
			<Radio {options} fontSize={16} bind:userSelected={radioValue} />
		</div>
	</div>
</div>

<style>
	.withdraw__manager {
		color: var(--label--color-secondary);
		background: #c4cdd7;
		border: 1px solid #5a7186;
		padding: 2.125rem 8.5rem 2.125rem 4rem;
	}
	.withdraw__main {
		margin-top: 2.5rem;
	}
	.withdraw__input {
		margin-right: 2.5rem;
		font-weight: var(--font-weight-bold);
		width: 100%;
		max-width: 360px;
	}
	.radio__wrapper {
		min-width: 275px;
	}
	.withdraw__input--body {
		width: 100%;
	}

	@media only screen and (max-width: 991px) {
		.withdraw__manager {
			padding: 2rem 1rem;
		}
		.withdraw__input--body {
			flex-direction: column-reverse;
			align-items: flex-start;
			margin-bottom: 20px;
		}
		.withdraw__label {
			padding-left: 1rem;
		}
	}
</style>
