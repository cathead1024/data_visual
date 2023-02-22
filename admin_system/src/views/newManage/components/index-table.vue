<template>
  <article class="table">
    <section class="table__btn">
      <button class="mimesis__btn" v-for="item of list" :key="item">测试按钮</button>
    </section>
    <section class="table__list">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="date" label="日期" width="180">
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="180">
        </el-table-column>
        <el-table-column prop="address" label="地址">
        </el-table-column>
      </el-table>
    </section>
  </article>
</template>

<script>
export default {
  name: 'AdminSystemIndexTable',

  data() {
    return {
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      },
      {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }],
      list: [1, 2, 3, 4, 5, 6]
    };
  },
};
</script>

<style lang="scss" scoped>
@import '../../../assets/style/new-mimesis.scss';

.table {
  position: relative;
  width: 100%;
  height: 100%;
  padding: 24px;
  box-sizing: border-box;
  flex-flow: column;
  align-items: center;
  display: flex;

  &__btn {
    width: 100%;
    height: 50px;
    margin-bottom: 24px;
    display: flex;
    align-items: center;
    button{
      margin-right: 24px;
    }
  }
    &__list {
    flex: 1;
  }
}
</style>