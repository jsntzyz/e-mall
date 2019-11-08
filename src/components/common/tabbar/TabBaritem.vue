 <template>
  <div class="tab-bar-item" @click="itemClick">
    <!-- 所有的item都展示同一个图片，同一个文字 -->
    <!-- 插槽为了图片和文字可以更新 -->
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <div :class="{active:isActive}">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBaritem",
  props: {
    path: String
  },
  data() {
    return {
      // isActive: true
    };
  },
  computed: {
    isActive(){
      // /home -> item1(home) = true
      return this.$route.path.indexOf(this.path) !== -1;
    }
  },
  methods: {
    itemClick() {
      this.$router.replace({path:this.path});
      // console.log("itemClick");
    }
  }
};
</script>

<style scoped>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 10px;
}

.tab-bar-item img {
  width: 24px;
  height: 24px;
  margin-top: 3px;
  vertical-align: middle;
  margin-bottom: 2px;
}
.active {
  color: #d81e06;
}
</style>