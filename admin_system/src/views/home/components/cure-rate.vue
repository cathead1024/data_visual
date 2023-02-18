<template>
  <article class="rate">
    <section>
      <div class="annular">
        <el-progress type="circle" :percentage="25" width="150" color="#e6e887" stroke-widt="8"></el-progress>
      </div>
      <p>全球治愈率</p>
      <span>Cure rate of the epidemic</span>
    </section>
    <section>
      <div class="annular">
        <el-progress type="circle" :percentage="70" width="150" color="#e088aa" stroke-widt="8"></el-progress>
      </div>
      <p>中国治愈率</p>
      <span>Cure rate of the epidemic</span>
    </section>
  </article>
</template>

<script>
export default {
  name: 'AdminSystemCureRate',
};
</script>

<style lang="scss" scoped>
.rate {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
}

section {
  position: relative;
  width: 100%;
  flex: 1;
  display: flex;
  align-items: center;
  flex-direction: column;

  p {
    margin: 8px 0;
    text-align: center;
    font-weight: bold;
  }

  span {
    color: #848891;
    font-size: 12px;
  }
}

.annular {
  position: relative;
  width: 60%;
  aspect-ratio: 1/1;
  background: #f1f2f7;
  box-shadow: 15px 15px 30px #d9deee,
    -15px -15px 30px #ffffff;
  border-radius: 50%;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
}

::v-deep .el-progress--circle .el-progress__text,
.el-progress--dashboard .el-progress__text {
  font-size: 24px !important;
  font-weight: bold;
}
</style>