<script>
  import StatusIcon from "$lib/components/icons/StatusIcon.svelte";
  import { onMount } from "svelte";
  import { numberWithCommas } from "$lib/functions/numberWithCommas";
import {getMonthName} from '$lib/functions/getMonthName'
  let myChart;

  // drawHorisontalLines plugin
  const drawHorisontalLines = {
    id: "drawHorisontalLines",
    beforeDatasetsDraw(chart) {
      const {
        ctx,
        scales: { x, y },
        chartArea: { left, bottom },
      } = chart;

      ctx.save();
      // draw points on y grid axios
      y._gridLineItems.forEach((item, ind) => {
        ctx.beginPath();
        ctx.lineWidth = 1;
        ctx.strokeStyle = "rgba(255, 255, 255, 0.2)";
        ctx.moveTo(left - 2, y._gridLineItems[ind].ty1);
        ctx.lineTo(left + 2, y._gridLineItems[ind].ty1);
        ctx.stroke();
        ctx.closePath();
      });
      // draw points on x grid axios
      x._gridLineItems.forEach((item, ind) => {
        ctx.beginPath();
        ctx.lineWidth = 1;
        ctx.strokeStyle = "rgba(255, 255, 255, 0.2)";
        ctx.moveTo(x._gridLineItems[ind].tx1, bottom + 2);
        ctx.lineTo(x._gridLineItems[ind].tx1, y.getPixelForValue(1) - 2);
        ctx.stroke();
        ctx.closePath();
      });
    },
  };
  const data = {
    labels: $$props.yearsArray,
    datasets: [
      {
        data: $$props.currentTraject,
        backgroundColor: "#6cc800",
        borderColor: "white",
        pointStyle: "circle",
        pointRadius: 4,
        pointHoverRadius: 5,
        color: "white",
        tooltipText: "some text",
      },
      {
        data: $$props.prevTraject,
        pointBackgroundColor: "#6cc800",
        borderColor: "#6cc800",
        pointBorderColor: "white",
        backgroundColor: "#6cc800",
        color: "#6cc800",
        pointRadius: 4,
        pointHoverRadius: 5,
        pointStyle: "circle",
        tooltipText: "some text 2",
      },
    ],
  };

  const config = {
    type: "line",
    data: data,
    options: {
      tension: "0.4",

      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          padding: 10,
          backgroundColor: "white",
          bodyColor: "black",
          bodyFont: {
            font: {
              size: 13,
            },
            weight: "300",
          },
          titleColor: "#6cc800",
          titleFont: {
            font: {
              size: 13,
            },
            weight: "500",
          },
          displayColors: false,
          callbacks: {
            title: function (tooltipItem) {
              return "$" + numberWithCommas(tooltipItem[0].raw, 0);
            },
            label: function (tooltipItem) {
              console.log(tooltipItem.dataset.tooltipText);
              return "Saving to " + tooltipItem.label;
            },
          },
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          grid: {
            display: false,
            borderColor: "rgba(255, 255, 255, 0.2)",
          },
          ticks: {
            color: "white",
            padding: 10,
            // Include a dollar sign in the ticks
            callback: function (value, index, values) {
              return "$" + numberWithCommas(value, 0);
            },
          },
        },
        x: {
          grid: {
            display: false,
            borderColor: "rgba(255, 255, 255, 0.2)",
          },
          ticks: {
            color: "white",
            padding: 10,
            callback: function (value, index) {
              return getMonthName() +' '+ this.getLabelForValue(value);
            },
          },
        },
      },
      maintainAspectRatio: false,
      responsive: true,
    },
    plugins: [drawHorisontalLines],
  };

  // init chat
  function initChat() {
    const ctx = document.getElementById("myChart");
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
      console.log("chat is empty");
    }
  }
  onMount(initChat);
</script>

<div class="chat-top d-flex justify-sb align-top text-white mb-1_5">
  <div class="column">
    <div class="row text-3 chat-top-head">Saving Projection</div>
    <div class="row d-flex align-top text-sm">
      <span class="mr-0_5">Total Save over 5 years</span><StatusIcon
        bgColor="white"
      />
    </div>
  </div>
  <div class="column">
    <button class="chat-label green" on:click={() => toggleData(1)}
      >Current Trajectory</button
    >
    <button class="chat-label" on:click={() => toggleData(0)}
      >Previous Trajectory</button
    >
  </div>
</div>
<div>
  <canvas id="myChart" width="500" height="253" />
</div>

<style>
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
    content: "";
    position: absolute;
    top: 7px;
    left: 0px;
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
</style>
