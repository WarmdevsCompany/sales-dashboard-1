<script>
	import { convertDateToUTC } from '$lib/functions/convertDateToUTC.js';
	import { onMount } from 'svelte';
	import { t } from '$lib/translations/i18n.js';
	export let withdrawalsList, currencySymbol;
	let datesObj;
	let dates = [];
	

	$: if (withdrawalsList === null || !withdrawalsList) {
		datesObj = [];
		dates = [];
	} else {
		datesObj = withdrawalsList
		datesObj.forEach((item) => {
			dates.push(item.date);
		});
	}

	const lang = localStorage.getItem('lang');

	function findObjValueByDate(array, dateItem) {
		let sum;
		array.forEach((item, ind) => {
			if (item.date === dateItem) {
				sum = item.sum;
			}
		});
		return sum;
	}

	onMount(() => {
		new Chart('line-chart', {
			type: 'line',
			plugins: [
				{
					afterDraw: (chart) => {
						let ctx = chart.ctx;
						ctx.save();
						let xAxis = chart.scales['x'];
						let yAxis = chart.scales['y'];
						chart.data.labels.forEach((l, i) => {
							let x = xAxis.getPixelForTick(i);
							let y = yAxis.getPixelForValue(0);
						});
						ctx.restore();
					}
				}
			],
			data: {
				labels: dates,
				datasets: [
					{
						data: [0, 0, 0, 0, 0, 0, 0],

						backgroundColor: 'transparent',
						borderColor: 'transparent',
						pointBackgroundColor: '#033246',
						pointBorderWidth: 1,
						lineTension: 0,
						pointBorderColor: 'blue',
						pointRadius: 4,
						pointHoverRadius: 5
					}
				]
			},
			options: {
				layout: {
					padding: {
						left: 10,
						right: 10
					}
				},
			
				plugins: {
					legend: {
						display: false
					},
					tooltip: {
						callbacks: {
							title: function (tooltipItem) {
								let intDate = parseInt(tooltipItem[0].label);
								const sum = findObjValueByDate(datesObj, intDate);
								return currencySymbol + sum;
							},
							label: function (tooltipItem) {
								let date = convertDateToUTC(tooltipItem.label);

								return `${date.day} ${$t('MONTH_SHORT_' + date.month)} ${date.year}`;
							}
						},
						padding: 10,
						backgroundColor: '#287393',
						bodyColor: 'white',
						bodyFont: {
							font: {
								size: 13
							},
							weight: '300'
						},
						titleColor: 'white',
						titleFont: {
							font: {
								size: 13
							},
							weight: '500'
						},
						displayColors: false
					}
				},
				scales: {
					y: {
						display: false
					},
					x: {
						display: false
					}
				}
			}
		});
	});
</script>

<div class="chart__wrapper d-flex align-center">
	<canvas id="line-chart" height="80" />
</div>

<style>
	.chart__wrapper {
		max-width: 580px;
		width: 100%;
		position: relative;
		padding-left: 150px;
		margin-top: 20px;
	}
	.chart__wrapper::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0px;
		bottom: 0;
		margin: auto;
		width: 780px;
		height: 1px;
		background: rgb(188, 222, 240);
		background: linear-gradient(
			90deg,
			rgba(188, 222, 240, 0) 0%,
			rgba(3, 50, 70, 1) 50%,
			rgba(188, 222, 240, 0) 100%
		);
		z-index: -1;
	}
	@media only screen and (min-width: 768px) and (max-width: 1279px) {
		.chart__wrapper {
			margin-top: auto;
			margin-bottom: auto;
		}
	}
	@media screen and (max-width: 1280px) {
		.chart__wrapper {
			max-width: 480px;
			padding-left: 80px;
		}
		.chart__wrapper::before {
			width: 580px;
		}

	}


	@media only screen and (min-width: 992px) and (max-width: 1200px) {
		.chart__wrapper {
			max-width: 50%;
			padding-left: 50px;
			padding-right: 50px;
		}
		.chart__wrapper::before {
			max-width: 100%;
		}
	}
	@media only screen and (max-width: 991px) {
		.chart__wrapper {
			padding: 0 2rem;
			overflow: hidden;
		}
		.chart__wrapper::before {
			max-width: 100%;
		}
	}
	@media only screen and (max-width: 540px) {
		.chart__wrapper::before {
			width: 85vw;
		}
		.chart__wrapper {
			padding-left: 30px;
			padding-right: 30px;
			max-width: 100%;
			margin: 0;
		}
	}
</style>
