<script>
	import { onMount } from 'svelte';
	export let withdrawalsList;
	let datesObj;
	let dates = [];

	let date1 = new Date('11/08/2021').getTime();
	let date2 = new Date('10/05/2021').getTime();
	let date3 = new Date('6/06/2021').getTime();

	$: if (withdrawalsList === null) {
		datesObj = [];
		dates = [];
	} else {
		datesObj = [
			{ date: date1, sum: 123 },
			{ date: date2, sum: 223 },
			{ date: date3, sum: 843 }
		];
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
								return '$' + sum;
							},
							label: function (tooltipItem) {
								let date = new Date(parseInt(tooltipItem.label));
								let ye = new Intl.DateTimeFormat(lang, {
									year: 'numeric'
								}).format(date);
								let mo = new Intl.DateTimeFormat(lang, {
									month: 'short'
								}).format(date);
								let da = new Intl.DateTimeFormat(lang, {
									day: '2-digit'
								}).format(date);
								return `${mo} ${da},${ye}`;
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
	<canvas id="line-chart" height="80" width="500" />
</div>

<style>
	.chart__wrapper {
		max-width: 580px;
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
	@media screen and (max-width: 1280px) {
		.chart__wrapper {
			max-width: 480px;
			padding-left: 80px;
		}
		.chart__wrapper::before {
			width: 580px;
		}
		canvas {
			width: 400px;
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
	@media only screen and (min-width: 992px) and (max-width: 1200px) {
		.chart__wrapper {
			max-width: 50%;
			padding-left: 0;
		}
		.chart__wrapper::before {
			max-width: 100%;
		}
	}
</style>
