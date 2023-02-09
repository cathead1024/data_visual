<template>
  <article class="statistics">
    <section class=statistics__item v-for="item of info" :key="item">
      <div class="statistics__item__left item-box">
        <div class="left-icon"></div>
      </div>
      <div class="statistics__item__center item-box">
        2019~至今全球疫情xx人数
      </div>
      <div class="statistics__item__right item-box">
        2305
      </div>
    </section>
  </article>
</template>

<script>
export default {
  name: 'AdminSystemGlobalStatistics',

  data() {
    return {
      info: [{}, {}, {}]
    };
  },

  mounted() {

  },

  methods: {

  },
};
</script>

<style lang="scss" scoped>
.statistics {
  position: relative;
  width: 100%;
  height: 100%;
  background: #f1f2f7;
  box-shadow: 15px 15px 30px #d9deee,
    -15px -15px 30px #ffffff;
  border-radius: 16px;
  display: flex;
  flex-direction: column;

  section {
    position: relative;
    flex: 1;

    &:not(section:last-child) {
      border-bottom: 3px dashed #dfe2e7;
    }
  }

  &__item {
    position: relative;
    display: flex;

    .item-box {
      width: 100px;
      display: flex;
      flex-direction: column;
      justify-content: center;

      .left-icon {
        position: relative;
        width: 40px;
        height: 30px;
        background: #f682a7;
        margin-left: 30px;
        border-top-left-radius: 20px;
        border-bottom-left-radius: 20px;
      }
    }

    &__center {
      flex: 1;
    }

    &__right {
      font-weight: bold;
      font-size: 1.5rem;
      text-align: center;
    }
  }
}
</style>