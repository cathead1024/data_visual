<template>
  <div class="people">
    <div id="people-chart">
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
  name: 'AdminSystemPeopleRatio',
  methods: {
    initCharts() {
      var chartDom = document.getElementById('people-chart');
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
            type: 'bar'
          }
        ]
      };
      option && myChart.setOption(option);
    }
  },
  mounted() {
    this.initCharts()
  },
};
</script>

<style lang="scss" scoped>
.people {
  position: relative;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 8px;
}

#people-chart {
  position: relative;
  width: 100%;
  height: 100%;
}
</style>