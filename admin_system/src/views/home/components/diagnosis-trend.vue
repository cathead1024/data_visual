<template>
  <div class="trend">
    <div id="trend-chart"> </div>
  </div>
</template>

<script>
import * as echarts from 'echarts/core';
import { GridComponent } from 'echarts/components';
import { LineChart } from 'echarts/charts';
import { UniversalTransition } from 'echarts/features';
import { CanvasRenderer } from 'echarts/renderers';

echarts.use([GridComponent, LineChart, CanvasRenderer, UniversalTransition]);

export default {
  name: 'AdminSystemDiagnosisTrend',
  methods: {
    initChart() {
      var chartDom = document.getElementById('trend-chart');
      var myChart = echarts.init(chartDom);
      var option;

      option = {
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: 'line',
            areaStyle: {}
          }
        ]
      };

      option && myChart.setOption(option);

    }

  },
  mounted() {
    this.initChart()
  },
};
</script>

<style lang="scss" scoped>
.trend {
  position: relative;
  width: 100%;
  height: 100%;
}
#trend-chart{
  width: 100%;
  height: 100%;
}
</style>