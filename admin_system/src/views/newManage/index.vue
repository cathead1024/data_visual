<template>
  <article class="new">
    <section class="new__panel">
      <index-header></index-header>
    </section>
    <section class="new__panel mimesis__card">
      <index-table></index-table>
    </section>
  </article>
</template>

<script>
export default {
  name: 'AdminSystemIndex',
  components: {
    'index-header': () => import('./components/index-header.vue'),

    'index-table': () => import('./components/index-table.vue')
  }
};
</script>

<style lang="scss" scoped>
@import '../../assets/style/new-mimesis.scss';

.new {
  position: relative;
  height: 100%;
  width: 100%;
  padding: 24px;
  background: $background;
  box-sizing: border-box;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 3fr;
  row-gap: 24px;
  display: grid;

  &__panel {
    position: relative;
    height: 100%;
    box-sizing: border-box;
  }
}
</style>