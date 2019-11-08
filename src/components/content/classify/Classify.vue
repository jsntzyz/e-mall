<template>
  <div>
    <NavBar class="nav-bar">
      <div slot="center">分类</div>
    </NavBar>
    <van-sidebar v-model="activeKey">
      <van-sidebar-item title="标签名称"><ul><li></li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li></li></ul></van-sidebar-item>
      <van-sidebar-item title="标签名称" >
      </van-sidebar-item>
      <van-sidebar-item title="标签名称" />
      <van-sidebar-item title="标签名称" />
      <van-sidebar-item title="标签名称" />
      <van-sidebar-item title="标签名称" />
      <van-sidebar-item title="标签名称" />
      <van-sidebar-item title="标签名称" />
      <van-sidebar-item title="标签名称" />
      <van-sidebar-item title="标签名称" />
      <van-sidebar-item title="标签名称" />
      <van-sidebar-item title="标签名称" />
      <van-sidebar-item title="标签名称" />
      <van-sidebar-item title="标签名称" />
      <van-sidebar-item title="标签名称" />
      <van-sidebar-item title="标签名称" />
      <van-sidebar-item title="标签名称" />
      <van-sidebar-item title="标签名称" />
    </van-sidebar>
  </div>
</template>

<script>
import NavBar from "../../common/navbar/NavBar";
import { Sidebar, SidebarItem } from "vant";

// import store from "../../store(状态管理)/indexStore";
export default {
  name: "Classify",
  components: {
    NavBar,
    [Sidebar.name]: Sidebar,
    [SidebarItem.name]: SidebarItem
  },
  data() {
    return {
      activeKey: 0
    };
  }
};
</script>

<style>
.nav-bar {
  background-color: #f18b82;
  color: #fff;
}
</style>