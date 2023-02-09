<template>
  <article class="status">
    <section class="status__item">
      <p>
        <span>已更新</span>
        <span>updated</span>
      </p>
      <div class="circle-list">
        <div class="circle">
          <span></span>
        </div>
        <div class="circle">
          <span></span>
        </div>
        <div class="circle">
          <span></span>
        </div>
        <div class="circle">
          <span></span>
        </div>
        <div class="circle">
          <span></span>
        </div>
        <div class="circle">
          <span></span>
        </div>
        <div class="circle">
          <span></span>
        </div>
      </div>
    </section>
    <section class="status__item">
      <p>
        <span>未更新</span>
        <span>no updated</span>
      </p>
      <div class="circle-list">
        <div class="circle">
          <span></span>
        </div>
        <div class="circle">
          <span></span>
        </div>
        <div class="circle">
          <span></span>
        </div>
        <div class="circle">
          <span></span>
        </div>
        <div class="circle">
          <span></span>
        </div>
        <div class="circle">
          <span></span>
        </div>
        <div class="circle">
          <span></span>
        </div>
      </div>
    </section>
  </article>
</template>

<script>
export default {
  name: 'AdminSystemUpdataStatus',
};
</script>

<style lang="scss" scoped>
.status {
  position: relative;
  width: 100%;
  height: 70%;
  background: #f1f2f7;
  box-shadow: 15px 15px 30px #d9deee,
    -15px -15px 30px #ffffff;
  border-radius: 16px;
  margin-top: 24px;
  &__item {
    position: relative;
    height: 50%;
    width: 100%;
    box-sizing: border-box;
    padding: 0 12px;
    display: flex;
    align-items: center;


    p {
      position: relative;
      width: 70px;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;

      span {
        &:nth-of-type(1) {
          font-size: 1rem;
          font-weight: bold;
        }

        &:nth-of-type(2) {
          font-size: 3px;
          color: #848891;
        }
      }
    }

    .circle-list {
      position: relative;
      flex: 1;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-left: 24px;

      .circle {
        position: relative;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        background: #eb76a2;
        display: flex;
        align-items: center;
        justify-content: center;

        span {
          position: relative;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #f1f2f7;
          display: block;
        }

      }
    }
  }

}
</style>
