<template>
  <div>
    <!-- 导航栏 -->
    <NavBar class="nav-bar">
      <div slot="center">首页</div>
    </NavBar>

    <!-- 轮播图 -->
    <Swiper>
      <!-- 循环写法 -->
      <!-- 必选要v-bind实时更新 -->
      <SwiperItem v-for="item in banner" :key="item">
        <a :href="item.link">
          <img :src="item.image" alt="wufaxianshi" />
        </a>
      </SwiperItem>
    </Swiper>

    <!-- 活动精选 -->
    <RecommendView :recommend="recommend"></RecommendView>

    <!-- 流行新款精选 -->
    <van-tabs v-model="active" sticky>
      <van-tab v-for="index in options" :key="index" :title="index">
        <van-grid :column-num="2">
          <van-grid-item v-for="value in 10" :key="value" icon="photo-o" text="文字" to="/commodity"/>
        </van-grid>
      </van-tab>
    </van-tabs>
    <!-- <van-tabs v-model="active" sticky>
      <van-tab v-for="index in options" :key="index" :title="index">内容 {{ index }}</van-tab>
    </van-tabs>-->
  </div>
</template>

<script>
import NavBar from "../../common/navbar/NavBar";
import { Swiper, SwiperItem } from "../../common/swiper";
import RecommendView from "./homechildren/RecommendView";
import { Tab, Tabs, Grid, GridItem } from "vant";
import { getHomeMultidata } from "../../../network(网络封装)/home";
// import store from "../../store(状态管理)/indexStore";
export default {
  name: "Home",
  components: {
    NavBar,
    Swiper,
    SwiperItem,
    RecommendView,
    [Tab.name]: Tab,
    [Tabs.name]: Tabs,
    [Grid.name]: Grid,
    [GridItem.name]: GridItem
  },
  data() {
    return {
      // result: null
      banner: [],
      recommend: [],
      options: ["流行", "新款", "精选"]
    };
  },
  created() {
    // 1.请求多个数据
    getHomeMultidata().then(res => {
      console.log(res);
      // this.result = res;
      this.banner = res.data.banner.list;
      this.recommend = res.data.recommend.list;
    });
  }
};
</script>

<style scoped>
.nav-bar {
  background-color: #f18b82;
  color: #fff;
}
</style>