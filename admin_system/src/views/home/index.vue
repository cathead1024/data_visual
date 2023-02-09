<template>
  <article class="home container">
    <!-- 左边 -->
    <div class="left home__colum">
      <!-- 各类人员占比 -->
      <section class="people-ratio home-section">
        <people-ratio></people-ratio>
      </section>
      <!-- 从2019年到现在的每个月的确诊情况  -->
      <section class="diagnosis-trend">
        <diagnosis-trend></diagnosis-trend>
      </section>
      <!-- 全球感染人数top3 -->
      <section class="diagnosis-top">
        <diagnosis-top></diagnosis-top>
      </section>
    </div>
    <!-- 中间  -->
    <div class="center home__colum">
      <!--  治愈率 -->
      <section class="cure-rate">
        <cure-rate></cure-rate>
      </section>
      <!-- 全球的治愈 感染 死亡  -->
      <section class="global-statistics">
        <global-statistics></global-statistics>
      </section>
      <!-- 全球从2019到现在的死亡人数 -->
      <section class="global-die">
        <global-die></global-die>
      </section>
    </div>
    <!-- 右边  -->
    <div class="right home__colum">
      <!-- 四年确诊人数情况 -->
      <section class="diagnostic-statistics">
        <diagnostic-statistics></diagnostic-statistics>
      </section>
      <!-- 调色盘 -->
      <section class="public-palette">
        <palette></palette>
      </section>
      <!-- 数据更新情况 -->
      <section class="data-status">
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
  background: #eef1f8;
  padding: 24px;
}

.home {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
 
}

.home-section {
  position: relative;
  background: #f1f2f7;
  box-shadow: 15px 15px 30px #d9deee,
    -15px -15px 30px #ffffff;
  border-radius: 16px;
}

.global-die,
.global-statistics,
.diagnosis-top,
.diagnosis-trend,
.people-ratio {
  width: 400px;
  height: 200px;
}

.public-palette {
  height: 170px;
  width: 400px;
}

.data-status {
  position: relative;
  width: 400px;
  height: 150px;
}

.diagnosis-trend {
  height: 250px;
}

.global-die {
  margin-top: 24px;
}

.cure-rate {
  position: relative;
  height: 200px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
}

.diagnostic-statistics {
  position: relative;
  width: 400px;
  height: 300px;
}
</style>