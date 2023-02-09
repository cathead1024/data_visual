<template>
  <div class="top">
    <article class="top__card">
      <section class="top__card__body" v-for="item of top" :key="item">
        <div class="body__title">
          <p>43%</p>
          <p>未知国家</p>
        </div>
        <div class="body__chart">
          <span style="width:70%"></span>
          <span style="width:30%"></span>
        </div>
      </section>
    </article>
  </div>
</template>

<script>
export default {
  name: 'AdminSystemDiagnosisTop',
  data() {
    return {
      top: [{}, {}, {}]
    }
  }
};
</script>

<style lang="scss" scoped>
.top {
  position: relative;
  width: 100%;
  height: 100%;
  padding-bottom: 24px;
  box-sizing: border-box;

  &__card {
    position: relative;
    width: 100%;
    height: 100%;
    padding: 8px;
    box-sizing: border-box;
    background: #f1f2f7;
    box-shadow: 15px 15px 30px #d9deee,
      -15px -15px 30px #ffffff;
    border-radius: 16px;
    display: flex;
    flex-direction: column;

    &__body {
      position: relative;
      width: 100%;
      flex: 1;
      display: flex;

      .body {
        position: relative;

        &__title {
          position: relative;
          width: 50px;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          margin-right: 8px;

          p {
            width: 100%;
            margin: 0;
            text-align: center;

            &:nth-of-type(1) {
              font-size: 1.2rem;
              font-weight: bold;
            }

            &:nth-of-type(2) {
              color: #848891;
              font-size: 8px;
            }
          }
        }

        &__chart {
          position: relative;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;

          span {
            position: relative;
            height: 15px;
            border-radius: 4px;
            background: greenyellow;
            display: block;

            &:nth-of-type(1) {
              margin-bottom: 8px;
            }
          }
        }
      }
    }
  }
}
</style>