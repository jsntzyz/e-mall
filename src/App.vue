<template>
  <div id="app">

    <router-view></router-view>
    <!-- <MainTabBar/> -->
    <!-- tag="" 可以指定渲染成什么标签  不加默认a标签-->
    <!-- repalce 不会留下history记录，后退键不会返回上一个界面-->
    <!-- url ：协议：//主机:端口/路径？查询（query）
    schema：//host:port/path?query#fragment-->
    <!-- <router-link to="/home" tag="button" repalce>首页</router-link>
    <router-link to="/About" tag="button">关于</router-link>
    <router-link :to="'/User/'+userId" tag="button">用户</router-link>
    <router-link :to="{path:'/profile',query:{name:'why',age:18,height:18}}" tag="button">档案</router-link>-->
  </div>
</template>

<script>
import MainTabBar from "./components/MainTabBar";
export default {
  name: "app",
  components: {
     MainTabBar
  }
};
</script>

<style>
@import './assets/css/base.css';
</style>
