<template>
  <div class="statistics">
    <div class="card">
      <div class="chart" id="global-chart"></div>
      <p class="des">2019~2023全球疫情确证人数</p>
    </div>
    <div class="card">
      <div class="chart" id="domestic-chart"></div>
      <p class="des">2019~2023全国疫情确证人数</p>
    </div>
  </div>
</template>

<script>
import * as echarts from 'echarts/core';
import { GridComponent } from 'echarts/components';
import { BarChart } from 'echarts/charts';
import { CanvasRenderer } from 'echarts/renderers';
echarts.use([GridComponent, BarChart, CanvasRenderer]);

export default {
  name: 'AdminSystemDiagnosticStatistics',
  methods: {
    initGlobalChart() {
      var chartDom = document.getElementById('global-chart');
      var myChart = echarts.init(chartDom);
      var option;
      option = {
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: [120, 200, 150, 80, 70, 110, 130],
            type: 'bar',
            showBackground: true,
            backgroundStyle: {
              color: 'rgba(180, 180, 180, 0.2)'
            }
          }
        ]
      };

      option && myChart.setOption(option);

    },
    initDomesChart() {
      var chartDom = document.getElementById('domestic-chart');
      var myChart = echarts.init(chartDom);
      var option;
      option = {
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: [120, 200, 150, 80, 70, 110, 130],
            type: 'bar',
            showBackground: true,
            backgroundStyle: {
              color: 'rgba(180, 180, 180, 0.2)'
            }
          }
        ]
      };

      option && myChart.setOption(option);
    }
  },
  mounted() {
    this.initDomesChart()
    this.initGlobalChart()
  },
};
</script>

<style lang="scss" scoped>
.statistics {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .card {
    position: relative;
    width: 180px;
    height: 100%;
    display: flex;
    flex-direction: column;

    .chart {
      position: relative;
      width: 100%;
      flex: 1;
      border-radius: 16px;
      background: #f1f2f7;
      box-shadow: 15px 15px 30px #d9deee,
        -15px -15px 30px #ffffff;
    }

    .des {
      font-size: 12px;
      color: #848891;
      text-align: center;
    }
  }
}
</style>