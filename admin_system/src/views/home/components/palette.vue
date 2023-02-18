<template>
  <article class="palette">
    <section class="palette__item">
      <div class="circle">
        <div class="circle__inner">
          <div class="circle__inner__min">
            <i class="circle__inner__min--border">
              <i></i>
            </i>
          </div>
        </div>
      </div>
    </section>
    <section class="palette__item content">
      <!-- 具体内容 -->
      <div class="content__row">
        <span class="content__row__chunk"></span>
        <p class="content__row__text">确诊颜色</p>
      </div>
      <div class="content__row">
        <span class="content__row__chunk"></span>
        <p class="content__row__text">死亡颜色</p>
      </div>
      <div class="content__row">
        <span class="content__row__chunk"></span>
        <p class="content__row__text">治愈颜色</p>
      </div>
    </section>
  </article>
</template>

<script>
export default {
  name: 'AdminSystemPalette',

};
</script>

<style lang="scss" scoped>
.palette {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  
  &__item {
    position: relative;
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 24px;
    .circle {
      position: relative;
      border-radius: 50%;
      background-color: #eef1f8;
      box-shadow: 5px 5px 10px #bebebe,
        -5px -5px 10px #ffffff;
      height: 100%;
      aspect-ratio: 1/1;
        &__inner {
        position: relative;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background: #fff;
        box-shadow: inset 5px 5px 10px #bebebe,
          inset -5px -5px 10px #ffffff;
        display: flex;
        align-items: center;
        justify-content: center;

        &__min {
          position: relative;
          width: 50%;
          height: 50%;
          border-radius: 50%;
          background: #eef1f8;
          box-shadow: 5px 5px 10px #cacdd3,
            -5px -5px 10px #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;

          &--border {
            position: relative;
            width: 70%;
            height: 70%;
            border-radius: 50%;
            background: linear-gradient(90deg, rgba(197, 127, 252, 1) 0%, rgba(207, 136, 255, 1) 35%, rgba(212, 143, 242, 1) 100%);
            display: block;
            display: flex;
            align-items: center;
            justify-content: center;

            i {
              position: relative;
              width: 90%;
              height: 90%;
              border-radius: 50%;
              background-color: #eef1f8;
            }
          }
        }
      }
    }
  }
}

.content {
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, 1fr);

  &__row {
    display: flex;
    align-items: center;

    &__chunk {
      position: relative;
      height: 40px;
      width: 50px;
      margin-right: 8px;
      border-radius: 8px;
      background: linear-gradient(90deg, rgba(197, 127, 252, 1) 0%, rgba(207, 136, 255, 1) 35%, rgba(212, 143, 242, 1) 100%);
      display: block;
    }

    &__text {
      position: relative;
      height: 100%;
      width: 100%;
      font-weight: bold;
    }
  }
}
</style>