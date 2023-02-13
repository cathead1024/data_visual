<template>
  <article class="news">
    <section>
      <el-timeline>
        <el-timeline-item v-for="(activity, index) in activities" :key="index" :icon="activity.icon"
          :type="activity.type" :color="activity.color" :size="activity.size" :hollow="activity.hollow"
          :timestamp="activity.timestamp">
          {{ activity.content }}
        </el-timeline-item>
      </el-timeline>
    </section>
  </article>
</template>

<script>
import { MoreFilled } from '@element-plus/icons-vue'
export default {
  name: 'DataDisplayNews',

  data() {
    return {
      activities: [
        {
          content: '中疾控发布全国新型冠状病毒感染疫情情况-中新网',
          timestamp: '2018-04-12 20:46',
          size: 'large',
          type: 'primary',
          icon: MoreFilled,
        },
        {
          content: '病例呈“指数级”增长,已在多国传播,世卫警告!',
          timestamp: '2018-04-03 20:46',
          color: '#0bbd87',
        },
        {
          content: '中疾控:2月3日至9日,在院新冠相关死亡病例912例|病毒感染|疾控|...',
          timestamp: '2018-04-03 20:46',
          size: 'large',
        },
        {
          content: '2月11日中疾控又传来新消息,第七次公布新冠死亡人数,出现暴跌',
          timestamp: '2018-04-03 20:46',
          type: 'primary',
          hollow: true,
        },
        {
          content: '至少18 人死亡,世卫警告:疫情可能蔓延到其他国家',
          timestamp: '2018-04-03 20:46',
        },
        {
          content: '2月11日中疾控又传来新消息,第七次公布新冠死亡人数,出现暴跌',
          timestamp: '2018-04-03 20:46',
          type: 'primary',
          hollow: true,
        },
        {
          content: '至少18 人死亡,世卫警告:疫情可能蔓延到其他国家',
          timestamp: '2018-04-03 20:46',
        },
      ]
    };
  },
};
</script>

<style lang="scss" scoped>
.news {
  position: relative;
  width: 100%;
  height: 100%;
  padding: 24px;
  box-sizing: border-box;
}

::v-deep .el-timeline-item__content {
  color: #fff;
}
</style>