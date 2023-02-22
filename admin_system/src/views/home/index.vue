<template>
  <article class="home container">
    <!-- 左边 -->
    <div class="left home__colum">
      <!-- 各类人员占比 -->
      <section class=" home__colum__section  home__colum__section--warper">
        <people-ratio></people-ratio>
      </section>
      <!-- 从2019年到现在的每个月的确诊情况  -->
      <section class=" home__colum__section">
        <diagnosis-trend></diagnosis-trend>
      </section>
      <!-- 全球感染人数top3 -->
      <section class=" home__colum__section">
        <diagnosis-top></diagnosis-top>
      </section>
    </div>
    <!-- 中间  -->
    <div class="center home__colum">
      <!--  治愈率 -->
      <section class=" home__colum__section">
        <cure-rate></cure-rate>
      </section>
      <!-- 全球的治愈 感染 死亡  -->
      <section class=" home__colum__section">
        <global-statistics></global-statistics>
      </section>
      <!-- 全球从2019到现在的死亡人数 -->
      <section class=" home__colum__section">
        <global-die></global-die>
      </section>
    </div>
    <!-- 右边  -->
    <div class="right home__colum">
      <!-- 四年确诊人数情况 -->
      <section class=" home__colum__section">
        <diagnostic-statistics></diagnostic-statistics>
      </section>
      <!-- 调色盘 -->
      <section class=" home__colum__section">
        <palette></palette>
      </section>
      <!-- 数据更新情况 -->
      <section class=" home__colum__section">
        <updata-status></updata-status>
      </section>
    </div>
  </article>
</template>

<script>
  import d2Container from '@/components/d2-container/index';
  import peopleRatio from '@/views/home/components/people-ratio.vue'
  import cureRate from '@/views/home/components/cure-rate.vue'
  import diagnosticStatistics from '@/views/home/components/diagnostic-statistics.vue'
  import diagnosisTrend from '@/views/home/components/diagnosis-trend.vue'
  import diagnosisTop from '@/views/home/components/diagnosis-top.vue'
  import globalStatistics from '@/views/home/components/global-statistics.vue'
  import globalDie from '@/views/home/components/global-die.vue';
  import palette from '@/views/home/components/palette.vue';
  import updataStatus from '@/views/home/components/updata-status.vue';

  export default {
    name: "AdminSystemIndex",
    components: {
      d2Container, peopleRatio, cureRate,
      diagnosticStatistics, diagnosisTrend,
      diagnosisTop, globalStatistics,
      globalDie, palette,
      updataStatus
    }
  };
</script>

<style lang="scss" scoped>
  .container {
    position: relative;
    width: 100%;
    height: 100%;
    background: #eeeff8;
    padding: 24px;
  }

  .home {
    position: relative;
    height: 100%;
    box-sizing: border-box;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr;
    flex: 1;
    display: grid;
    column-gap: 24px;

    &__colum {
      height: 100%;
      grid-template-columns: 1fr;
      grid-template-rows: repeat(3, 1fr);
      row-gap: 24px;
      display: grid;

      &__section {
        position: relative;
        height: 100%;
        width: 100%;

        &--warper {
          background: #f1f2f7;
          box-shadow: 15px 15px 30px #d9deee,
            -15px -15px 30px #ffffff;
          border-radius: 16px;
        }
      }
    }
  }

  .right {
    grid-template-rows: 2fr 1fr 1fr;
  }
</style>