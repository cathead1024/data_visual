<template>
  <div class="earth" id="earth-box"> </div>
</template>

<script>
import * as echarts from 'echarts';
import 'echarts-gl';
export default {
  name: 'DataDisplayEarthEffect',
  methods: {
    init() {
      var chartDom = document.getElementById('earth-box');
      var myChart = echarts.init(chartDom);
      var option;
      option = {
        backgroundColor: '#000',
        globe: {
          baseTexture: require('../../assets/image/earth.jpg'),
          heightTexture: require('../../assets/image/bathymetry_bw_composite_4k.jpg'),
          displacementScale: 0.1,
          shading: 'lambert',
          environment: require('../../assets/image/starfield.jpg'),
          light: {
            ambient: {
              intensity: 0.1
            },
            main: {
              intensity: 1.5
            }
          },
          layers: [
            {
              type: 'blend',
              blendTo: 'emission',
              texture: require('../../assets/image/night.jpg')
            },
            {
              type: 'overlay',
              texture: require('../../assets/image/clouds.png'),
              shading: 'lambert',
              distance: 5
            }
          ]
        },
        series: []
      };
      option && myChart.setOption(option);
    }
  },
  mounted() {
    this.init()
  }
};
</script>

<style lang="scss" scoped>
.earth {
  position: relative;
  width: 100%;
  height: 100%;
}
</style>