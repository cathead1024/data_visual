<template>
  <article class="statistics">
    <section v-for="item of Object.keys(info)" :key="item">
      <h2 class="title">{{ item }}</h2>
      <div class="content">
        <article class="content__item" v-for="key of Object.keys(info[item])" :key="key">
          <section class="content__item__title">{{ key }}</section>
          <section class="content__item__count">{{ info[item][key] }}</section>
          <section class="content__item__title2">较昨日</section>
          <section class="content__item__count2">100</section>
        </article>
      </div>
    </section>
  </article>
</template>

<script>
export default {
  name: 'DataDisplayDataStatistics',
  data() {
    return {
      info: {
        '国内情况': {
          '累计确诊': 100,
          '现有确诊': 200,
          '累计死亡': 500,
          '累计治愈': 600,
        },
        '全球情况': {
          '累计确诊': 400,
          '现有确诊': 800,
          '累计死亡': 900,
          '累计治愈': 10000,
        }
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.statistics {
  position: relative;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(2, 1fr);
  row-gap: 8px;

  section {
    display: flex;
    flex-direction: column;

    &:first-child {
      margin-bottom: 8px;
    }

    &:nth-of-type(2) {
      .content__item__count2 {
        display: block;
      }
    }
  }
}

.title {
  position: relative;
  height: 68px;
  background-image: url('../../assets/image/block-title-1.png');
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
  color: #fff;
  line-height: 68px;
  padding-left: 48px;
}

.content {
  position: relative;
  flex: 1;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr;
  column-gap: 8px;

  &__item {
    position: relative;
    height: 100%;
    background: linear-gradient(90deg, rgba(42, 130, 250, 0.1) 0%, rgba(42, 130, 250, 0.05) 100%);
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    margin-top: 8px;

    &__title,
    &__title2 {
      position: relative;
      width: 100%;
      height: 38px;
      line-height: 38px;
      color: white;
      font-size: 16px;
      text-align: center;
      font-weight: bold;
    }

    &__count2 {
      position: relative;
      height: 24px;
      line-height: 24px;
      text-align: center;
      font-size: 18px;
      flex: 1;
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    &__count {
      height: 70px;
      line-height: 70px;
      color: white;
      font-weight: bold;
      font-size: 30px;
      text-align: center;
    }
  }
}
</style>