<template>
  <div class="chart-outer">
    <Bar :data="data" :options="options" />
  </div>
</template>
<style lang="scss">
.chart-outer {
  height: 278px;
}
</style>
<script lang="ts">
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import { Bar } from "vue-chartjs";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
export default {
  name: "HiringSourceChartComponent",
  components: {
    Bar,
  },
  data() {
    return {
      data: {
        labels: [
          "Direct",
          "Linkdin",
          "Referral",
          "Twitter",
          "Hired",
          "College",
          "Naukri",
        ],
        datasets: [
          {
            data: [31, 22, 18, 25, 25, 20, 20],
            backgroundColor: "#37CADE",
            barThickness: 12,
            label: "Technical",
          },
          {
            data: [10, 5, 10, 10, 12, 7, 7],
            backgroundColor: "#86E8F5",
            barThickness: 12,
            label: "Non-Technical",
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: "bottom",
            align: "center",
            labels: {
              color: "#606060",
              boxWidth: 10,
              boxHeight: 10,
              borderRadius: 5,
              useBorderRadius: true,
              padding: 16,
              font: {
                size: 12,
                lineHeight: 18,
                weight: 500,
                family: "'Poppins', sans-serif",
              },
            },
          },
        },
        scales: {
          x: {
            ticks: {
              color: "#989898",
              font: {
                size: 12,
                lineHeight: "18px",
                family: "'Poppins', sans-serif",
              },
              padding: 8,
            },
            grid: {
              drawTicks: false,
              display: false,
            },
            border: {
              color: "#E2E2E2",
            },
            stacked: true,
          },
          y: {
            ticks: {
              color: "#989898",
              font: {
                size: 12,
                lineHeight: "18px",
                family: "'Poppins', sans-serif",
              },
              padding: 8,
              stepSize: 10,
            },
            grid: {
              drawTicks: false,
              display: false,
            },
            border: {
              color: "#E2E2E2",
            },
            stacked: true,
          },
        },
      },
    };
  },
};
</script>
