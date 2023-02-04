<template>
  <article class="ct-container">
    <section>
      <h1>Post请求测试</h1>
      <div class="send-group">
        <span>请求内容：</span>
        <input type="text" class="post_input" v-model="sendValue">
        <button @click="send">send</button>
      </div>
      <p class="result-box"></p>
    </section>
    <section>
      <h1>GET请求测试</h1>
      <p class="result-box"></p>
    </section>
  </article>
</template>
<script>
import axios from 'axios'
export default {
  name: 'ShowSyStemHome',
  data() {
    return {
      sendValue: ''
    }
  },
  methods: {
    initGet() {
      axios.get('/api/test/getData')
        .then(res => {
          document.querySelectorAll('.result-box')[1].innerText = res.data
        })
    },
    send() {
      axios.post('/api/test/postData', {
        age: '18',
        name: this.sendValue
      })
        .then(res => {
          document.querySelectorAll('.result-box')[0].innerText = res.data
        })
    }
  },
  created() {
    this.initGet();
  }
};
</script>

<style lang="less" scoped>
.ct-container {
  position: relative;
  width: 100%;
  height: 700px;
  margin-top: 24px;
  display: flex;
  align-items: center;

  h1 {
    position: relative;
    height: 38px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 24px;
    font-size: 2rem;
  }

  section {
    position: relative;
    height: 100%;
    flex: 1;
    background-color: white;
    backdrop-filter: blur(5px);
    background-color: rgba(255, 255, 255, 1);
    border-radius: 35px;
    box-shadow: 35px 35px 68px 0px rgba(145, 192, 255, 0.5), inset -6px -6px 16px 0px rgba(145, 192, 255, 0.6), inset 0px 11px 28px 0px rgb(255, 255, 255);
    padding: 24px;
    display: flex;
    flex-direction: column;

    &:first-child {
      margin-right: 24px;
    }

    .send-group {
      span {
        font-size: 1.5rem;
      }

      input {
        margin: 0 24px;
        height: 38px;
        width: 50%;
        outline: none;
        background: #ebf3f9;
        border: 1px solid #b5d4ff;
        border-radius: 8px;
      }

      button {
        width: 150px;
        height: 38px;
        border-radius: 8px;
        border: none;
        background: linear-gradient(#69cdfd, #45a5fc);
        color: white;
        font-size: 1rem;
        transition: all .35s ease-out;

        &:hover {
          transform: scale(.9);
        }
      }
    }

  }
}

.result-box {
  position: relative;
  width: 100%;
  height: 100%;
  flex: 1;
  background: #ebf3f9;
  margin-top: 24px;
  border-radius: 8px;
  padding: 24px;
  font-size: 1.5rem;
}
</style>