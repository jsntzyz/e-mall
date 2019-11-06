<template>
  <div id="app">
    <TabBar>
      <TabBaritem path="/home">
        <img slot="item-icon" src="../assets/img/tab-bar/shouye.png" alt />
        <img slot="item-icon-active" src="../assets/img/tab-bar/shouye2.png" alt />
        <div slot="item-text">首页</div>
      </TabBaritem>
      <TabBaritem path="/About">
        <img slot="item-icon" src="../assets/img/tab-bar/category.png" alt />
        <img slot="item-icon-active" src="../assets/img/tab-bar/category2.png" alt />
        <div slot="item-text">分类</div>
      </TabBaritem>
      <TabBaritem path="/profile">
        <img slot="item-icon" src="../assets/img/tab-bar/cart- full.png" alt />
        <img slot="item-icon-active" src="../assets/img/tab-bar/cart- full2.png" alt />
        <div slot="item-text">购物车</div>
      </TabBaritem>
      <TabBaritem path="/User/:userId">
        <img slot="item-icon" src="../assets/img/tab-bar/bussiness-man.png" alt />
        <img slot="item-icon-active" src="../assets/img/tab-bar/bussiness-man2.png" alt />
        <div slot="item-text">我的</div>
      </TabBaritem>
    </TabBar>
  </div>
</template>

<script>
import TabBar from "./content/tabbar/TabBar";
import TabBaritem from "./content/tabbar/TabBaritem";
export default {
  name: "MainTabBar",
  components: {
    TabBar,
    TabBaritem
  }
};
</script>

<style>
body {
  padding: 0;
  margin: 0;
}
</style>