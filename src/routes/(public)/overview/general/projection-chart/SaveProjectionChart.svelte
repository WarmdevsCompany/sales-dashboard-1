<script>
	import StatusIcon from '$lib/components/icons/StatusIcon.svelte';
	import { onMount } from 'svelte';
	import { numberWithCommas } from '$lib/functions/numberWithCommas';
	import { t } from '$lib/translations/i18n.js';
	import { createPopperActions } from 'svelte-popperjs';
	import { fade } from 'svelte/transition';
	const [popperRef, popperContent] = createPopperActions({
		placement: 'bottom',
		strategy: 'fixed'
	});
	const extraOpts = {
		modifiers: [{ name: 'offset', options: { offset: [0, 8] } }]
	};

	let showTooltip = false;
	let myChart;
	let month = new Date().getMonth() + 1;
	if (month < 10) {
		month = '0' + month;
	}
	const currentMonth = $t('MONTH_SHORT_' + month);
	console.log($$props.prevTraject);
	console.log($$props.currentTraject);

	let dataSets = [
		{
			data: $$props.prevTraject,
			backgroundColor: '#6cc800',
			borderColor: 'white',
			pointRadius: 0,
			pointHoverRadius: 0,
			color: 'white',
			pointHitRadius: 0,
			tooltipText: 'some text'
		},
		{
			data: $$props.currentTraject,
			pointBackgroundColor: '#6cc800',
			borderColor: '#6cc800',
			pointBorderColor: 'white',
			backgroundColor: '#6cc800',
			color: '#6cc800',
			pointRadius: 4,
			pointHoverRadius: 5,
			pointStyle: 'circle',
			tooltipText: 'some text 2'
		}
	];
	if (!$$props.prevTraject || $$props.prevTraject === null) {
		dataSets = [
			{
				data: $$props.currentTraject,
				pointBackgroundColor: '#6cc800',
				borderColor: '#6cc800',
				pointBorderColor: 'white',
				backgroundColor: '#6cc800',
				color: '#6cc800',
				pointRadius: 4,
				pointHoverRadius: 5,
				pointStyle: 'circle',
				tooltipText: 'some text 2'
			}
		];
	}

	// drawHorisontalLines plugin
	const drawHorisontalLines = {
		id: 'drawHorisontalLines',
		beforeDatasetsDraw(chart) {
			const {
				ctx,
				scales: { x, y },
				chartArea: { left, bottom }
			} = chart;

			ctx.save();
			// draw points on y grid axios
			y._gridLineItems.forEach((item, ind) => {
				ctx.beginPath();
				ctx.lineWidth = 1;
				ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
				ctx.moveTo(left - 2, y._gridLineItems[ind].ty1);
				ctx.lineTo(left + 2, y._gridLineItems[ind].ty1);
				ctx.stroke();
				ctx.closePath();
			});
			// draw points on x grid axios
			x._gridLineItems.forEach((item, ind) => {
				ctx.beginPath();
				ctx.lineWidth = 1;
				ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
				ctx.moveTo(x._gridLineItems[ind].tx1, bottom + 2);
				ctx.lineTo(x._gridLineItems[ind].tx1, y.getPixelForValue(1) - 2);
				ctx.stroke();
				ctx.closePath();
			});
		}
	};
	const data = {
		labels: $$props.yearsArray,
		datasets: dataSets
	};

	const config = {
		type: 'line',
		data: data,
		options: {
			// tension: '0.4',

			plugins: {
				legend: {
					display: false
				},
				tooltip: {
					padding: 10,
					backgroundColor: 'white',
					bodyColor: 'black',
					bodyFont: {
						font: {
							size: 13
						},
						weight: '300'
					},
					titleColor: '#6cc800',
					titleFont: {
						font: {
							size: 13
						},
						weight: '500'
					},
					displayColors: false,
					callbacks: {
						title: function (tooltipItem) {
							return $$props.currencySymbol + numberWithCommas(tooltipItem[0].raw, 0);
						},
						label: function (tooltipItem) {
							//console.log(tooltipItem.dataset.tooltipText);
							return `${$t('OVERVIEW_SAVING_TO')} ${tooltipItem.label}`;
						}
					}
				}
			},
			scales: {
				y: {
					beginAtZero: true,
					grid: {
						display: false,
						borderColor: 'rgba(255, 255, 255, 0.2)'
					},
					ticks: {
						color: 'white',
						padding: 10,
						// Include a dollar sign in the ticks
						callback: function (value, index, values) {
							return $$props.currencySymbol + numberWithCommas(value, 0);
						}
					}
				},
				x: {
					grid: {
						display: false,
						borderColor: 'rgba(255, 255, 255, 0.2)'
					},
					ticks: {
						color: 'white',
						padding: 10,
						callback: function (value, index) {
							return currentMonth + ' ' + this.getLabelForValue(value);
						}
					}
				}
			},
			maintainAspectRatio: false,
			responsive: true
		},
		plugins: [drawHorisontalLines]
	};

	// init chat
	function initChat() {
		const ctx = document.getElementById('myChart');
		myChart = new Chart(ctx, config);
	}
	// toogle lines
	function toggleData(value) {
		const visibilityData = myChart.isDatasetVisible(value);

		if (visibilityData) {
			myChart.hide(value);
		} else if (!visibilityData) {
			myChart.show(value);
		}
		if (!myChart.isDatasetVisible(0) && !myChart.isDatasetVisible(1)) {
			console.log('chat is empty');
		}
	}
	onMount(initChat);
</script>

<div class="chat-top d-flex justify-sb align-top text-white mb-1_5">
	<div class="column">
		<div class="row text-3 chat-top-head">{$t('OVERVIEW_SAVING_PROJECTION')}</div>
		<div class="row d-flex align-top text-sm">
			<span class="mr-0_5">{$t('OVERVIEW_TOTAL_SAVE_5')}</span>
			<div
				use:popperRef
				on:mouseenter={() => (showTooltip = true)}
				on:mouseleave={() => (showTooltip = false)}
			>
				<StatusIcon bgColor="white" />
			</div>
			{#if showTooltip}
				<div
					id="tooltip"
					class="b-radius-8 text-xsm "
					transition:fade={{ duration: 80, offset: 0 }}
					use:popperContent={extraOpts}
				>
					{$t('OVERVIEW_SAVING_PROJECTION')}

					<div id="arrow" data-popper-arrow />
				</div>
			{/if}
		</div>
	</div>
	<div class="column">
		<button class="chat-label green" on:click={() => toggleData(0)}
			>{$t('OVERVIEW_CURRENT_TRAJECTORY')}</button
		>
		{#if $$props.prevTraject}
			<button class="chat-label" on:click={() => toggleData(1)}
				>{$t('OVERVIEW_PREV_TRAJECTORY')}</button
			>
		{/if}
	</div>
</div>
<div>
	<canvas id="myChart" width="500" height="253" />
</div>

<style>
	#tooltip {
		padding: 0.75rem 0.75rem 0.75rem 0.75rem;
		background: var(--white);
		z-index: 10;
		color: #5f5f5f;
		max-width: 215px;
		font-weight: var(--font-weight-normal);
		box-shadow: 0px 25px 35px rgba(0, 0, 0, 0.15);
	}

	#tooltip::after {
		content: '';
		position: absolute;
		top: -5px;
		right: 50%;
		border-radius: 2px;
		transform: translate(50%, 0) rotate(45deg);
		border-top: 7px solid white;
		border-bottom: 7px solid transparent;
		border-left: 7px solid white;
		border-right: 7px solid transparent;
	}
	button.chat-label {
		display: block;
		font-size: 12px;
		line-height: 18px;
		appearance: none;
		background-color: transparent;
		border: none;
		color: var(--white);
		padding-left: 1rem;
		position: relative;
	}

	.chat-top-head {
		margin-bottom: 0.25rem;
	}
	.chat-label:before {
		content: '';
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0px;
		margin: auto;
		width: 10px;
		height: 2px;
		border-radius: 8px;
		z-index: 2;
		background: var(--white);
	}
	.chat-label.green:before {
		background: var(--secondary-color);
	}
	.chat-label {
		margin-bottom: 0.25rem;
	}
	@media only screen and (max-width: 1199px) {
		.chat-top {
			display: block;
		}
		.chat-top > div:last-child {
			display: flex;
			margin-top: 1rem;
		}
		.chat-label:last-child {
			margin-left: 24px;
		}
	}
</style>
