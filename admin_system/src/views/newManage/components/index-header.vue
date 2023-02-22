<template>
  <article class="header">
    <section class="mimesis__card header__count" v-for="item of list" :key="item">
      <p class='title'>标题</p>
      <div class="header__body">
      </div>
    </section>
  </article>
</template>

<script>
export default {
  name: 'AdminSystemIndexHeader',
  data() {
    return {
      list: [1, 2, 3, 4, 5, 6]
    }
  },
}
</script>

<style lang="scss" scoped>
@import '../../../assets/style/new-mimesis.scss';

.header {
  position: relative;
  width: 100%;
  height: 100%;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: 1fr;
  column-gap: 24px;
  display: grid;

  &__body {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background: url('../../../assets/ikon/1.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
  }

  &__count {
    padding: 24px;
    box-sizing: border-box;
    flex-flow: column;
    display: flex;

    .title {
      width: 100%;
      height: 38px;
      line-height: 38px;
      font-size: 18px;
      font-weight: bold;
    }

    .img {
      position: relative;
      width: 100%;
      height: 100%;
      flex: 1;
      display: block;
    }

  }
}
</style>