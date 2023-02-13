<template>
  <article class="footer">
    <section class="footer__title ">{{ title }}</section>
    <section class="footer__content">
      <el-table :data="tableData" height="250" style="width: 100%">
        <el-table-column prop="date" label="Date" width="180" />
        <el-table-column prop="name" label="Name" width="180" />
        <el-table-column prop="address" label="Address" />
      </el-table>
    </section>
  </article>
</template>

<script>
export default {
  name: 'DataDisplayDataCount',
  props: ['title'],
  data() {
    return {
      tableData: [
        {
          date: '2016-05-03',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
        },
        {
          date: '2016-05-02',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
        },
        {
          date: '2016-05-04',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
        },
        {
          date: '2016-05-01',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
        },
        {
          date: '2016-05-08',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
        },
        {
          date: '2016-05-06',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
        },
        {
          date: '2016-05-07',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
        },
      ]
    }
  }
};
</script>

<style lang="scss" scoped>
.footer {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  &__title {
    position: relative;
    height: 64px;
    background-size: 100%;
    background-image: url('../../assets/image/block-title-2.png');
    background-repeat: no-repeat;
    width: 100%;
    line-height: 64px;
    box-sizing: border-box;
    padding-left: 54px;
    font-size: 18px;
    font-weight: bold;
    color: #fff;
    letter-spacing: 2px;
  }

  &__content {
    position: relative;
    flex: 1;
    margin-top: 24px;
    background: linear-gradient(90deg, rgba(42, 130, 250, 0.1) 0%, rgba(42, 130, 250, 0.05) 100%);
  }
}

::v-deep .el-table {
  height: 100% !important;
  background: linear-gradient(90deg, rgba(42, 130, 250, 0.1) 0%, rgba(42, 130, 250, 0.05) 100%);

  th,
  tr {
    background: none;
    color: white;
  }

  th {
    background: #2A82FA;
    color: white;
  }
}
</style>