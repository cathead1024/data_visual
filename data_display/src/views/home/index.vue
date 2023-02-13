<template>
  <div class="home">
    <header class="home__header">
      <h1>疫情数据可视化平台</h1>
    </header>
    <main class="home__center">
      <article class="home__center__left">
        <h2 class="home__title">新闻播报</h2>
        <section class="home__content">
          <news></news>
        </section>
      </article>
      <div class="home__center__center">
        <earth-effect></earth-effect>
      </div>
      <div class="home__center__right">
        <data-statistics></data-statistics>
      </div>
    </main>
    <footer class="home__footer">
      <article class="home__footer__left">
        <data-count title="各省疫情情况"></data-count>
      </article>
      <article class="home__footer__right">
        <data-count title="各国疫情情况"></data-count>
      </article>
    </footer>
  </div>
</template>

<script>
import news from '../components/news.vue'
import dataStatistics from '../components/data_statistics.vue'
import dataCount from '../components/data_count.vue'
import earthEffect from '../components/earthEffect.vue';
export default {
  name: 'DataDisplayIndex',
  components: {
    news,
    dataStatistics,
    dataCount,
    earthEffect
  }
};
</script>
<style lang="scss" scoped>
.home {
  position: relative;
  width: 100%;
  height: 100%;
  background: url('../../assets/image/background.png');
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding-bottom: 24px;
  background-size: 100%;

  &__header {
    position: relative;
    height: 102px;
    width: 100%;
    background: url('../../assets/image/header1.png');
    background-position: center;
    background-size: 100%;
    background-repeat: no-repeat;

    h1 {
      position: relative;
      height: 100%;
      width: 100%;
      line-height: 102px;
      text-align: center;
      font-size: 24px;
      color: #fff;
      letter-spacing: 2px;
      background: url('../../assets/image/header-dynamic.gif');
      background-repeat: no-repeat;
    }
  }

  &__center {
    position: relative;
    width: 100%;
    height: 582px;
    margin-top: 24px;
    display: grid;
    grid-template-columns: 450px 924px 450px;
    grid-template-rows: 1fr;
    column-gap: 24px;
    padding: 0 24px;
    box-sizing: border-box;
    overflow: hidden;

    &__left {
      position: relative;
      display: flex;
      flex-direction: column;
    }

  }

  &__footer {
    position: relative;
    width: 100%;
    height: 100%;
    flex: 1;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 24px;
    margin-top: 24px;
    height: 316px;
    padding: 0 24px;
    box-sizing: border-box;
  }

  &__title {
    position: relative;
    height: 68px;
    background-image: url('../../assets/image/block-title-1.png');
    background-size: 100%;
    background-position: center;
    background-repeat: no-repeat;
    color: #fff;
    line-height: 68px;
    padding-left: 48px;
  }

  &__content {
    position: relative;
    flex: 1;
    background: linear-gradient(90deg, rgba(42, 130, 250, 0.1) 0%, rgba(42, 130, 250, 0.05) 100%);
    margin-top: 16px;
  }
}
</style>