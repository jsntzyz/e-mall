<template>
  <div>
    <h2>我是首页</h2>
    <p>我是首页内容，哈哈</p>
    <router-link to="/home/message">消息</router-link>
    <router-link to="/home/news">新闻</router-link>
    <router-view></router-view>
    <h2>{{message}}</h2>
    <h2>{{$store.state.counter}}</h2>
    <button @click="addition">+</button>
    <button @click="subtraction">-</button>
  </div>
</template>

<script>
import store from "../../store(状态管理)/indexStore";
export default {
  name: "Home",
  data() {
    return {
      message: "我是App组件",
      // counter: ""
    };
  },
  // created(){
  //   this.counter = this.$store.state.counter;
  //   console.log(this.$store.state.counter)
  // },
  methods: {
    addition() {
      this.$store.commit("increment");
    },
    subtraction() {
      this.$store.commit("decrement");
    }
  }
};
</script>

<style>
/* @import "./assets/css/normalize"; */
</style>