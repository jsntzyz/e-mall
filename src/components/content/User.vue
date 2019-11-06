<template>
  <div>
    <h2>我是用户</h2>
    <p>我是用户内容，呵呵呵</p>
    <h2>{{userId}}</h2>
    <h2>{{$route.params.userId}}</h2>
  </div>
</template>

<script>
export default {
  name: "User",
  computed: {
    userId() {
      return this.$route.params.userId;
    }
  },
  methods: {
    btnClick() {
      //所有组件都继承自vue类的原型
      console.log(this.$router);
      console.log(this.$route);
    }
  }
  // components: null
};
</script>

<style>
/* @import "./assets/css/normalize"; */
</style>