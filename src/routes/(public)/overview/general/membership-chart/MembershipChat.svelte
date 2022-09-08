<script>
	import { onMount } from 'svelte';
	export let chartName, className, chartValue;
	let mainColor = '#6CC800';
	let chartData = [];
	function checkClassNameAndSetStyle() {
		switch (className) {
			case 'seed':
				mainColor = '#6CC800';
				break;

			case 'eucalyptus':
				mainColor = '#5F8575';
				break;

			case 'sequoia':
				mainColor = '#3E6B2C';
				break;
			default:
		}
	}

	function generateDataArray() {
		const max = 100;
		let secondArrayElement = max - chartValue;
		chartData = [chartValue, secondArrayElement];
	}

	function beforeComponentUpdated() {
		checkClassNameAndSetStyle();
		generateDataArray();
	}

	let myChart;
	let myChartCircle;

	// draw text inside
	const drawTextInsideChart = {
		id: 'text',
		beforeDraw: function (chart, a, b) {
			var width = chart.width,
				height = chart.height,
				ctx = chart.ctx;

			ctx.restore();

			ctx.font = 'bold 24px sans-serif';
			ctx.textBaseline = 'middle';
			ctx.fillStyle = mainColor;
			const currentValue = chart.data.datasets[0].data[0];
			var text = currentValue + '%',
				textX = Math.round((width - ctx.measureText(text).width) / 2),
				textY = height / 2;

			ctx.fillText(text, textX, textY);
			ctx.save();
		}
	};

	function initChat() {
		const data = {
			labels: [chartName, ''],
			datasets: [
				{
					label: chartName,
					data: chartData,
					backgroundColor: [mainColor, 'transparent'],
					borderColor: ['transparent'],
					rotation: 0,
					cutout: '90%',
					circular: true,
					borderRadius: 20,
					hoverOffset: 4
				}
			]
		};
		const config = {
			type: 'doughnut',
			data: data,
			options: {
				plugins: {
					legend: false,
					tooltip: {
						enabled: false
					}
				},
				hover: { mode: null }
			},
			plugins: [drawTextInsideChart]
		};

		const ctx = myChartCircle;
		myChart = new Chart(ctx, config);
	}

	onMount(() => {
		beforeComponentUpdated();
		initChat();
	});
</script>

<div class="chat__main">
	<div class="smallChat {className}">
		<canvas width="96" height="96" bind:this={myChartCircle} />
	</div>
</div>

<style>
	.chat__main {
		max-width: 96px;
	}
	.smallChat {
		position: relative;
		filter: drop-shadow(0px 7px 20px rgba(62, 107, 44, 0.14));
	}
	canvas {
		position: relative;
		z-index: 10;
		width: 96px !important;
		height: 96px !important;
	}
	.smallChat::before {
		content: '';
		position: absolute;
		border-radius: 50%;
		top: 0;
		left: 0;
		width: 96px;
		height: 96px;
		z-index: 1;
		border-radius: 50%;
		background: white;
	}
	.smallChat::after {
		content: '';
		position: absolute;
		border: 6.5px solid #6cc800;
		opacity: 4%;
		border-radius: 50%;
		top: 0;
		left: 0;
		width: 83px;
		height: 83px;
		z-index: 1;
	}
	.smallChat.eucalyptus::after {
		border-color: var(--membership-grey-2);
	}
	.smallChat.sequoia::after {
		border-color: var(--membership-grey-3);
	}

	.chat-top-head {
		margin-bottom: 0.25rem;
	}
	.chat-label:before {
		content: '';
		position: absolute;
		top: 0;
		left: 0px;
		bottom: 0;
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
	.chat-label.green {
		margin-bottom: 0.25rem;
	}

	@media only screen and (max-width: 1199px) {
		.chat__main {
			margin: auto;
		}
	}
</style>
