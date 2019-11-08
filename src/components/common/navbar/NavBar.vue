 <template>
  <div class="nav-bar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBaritem"
};
</script>

<style scoped>
.nav-bar {
  display: flex;
  line-height: 44px;
  text-align: center;
  box-shadow: 0px 2px 5px rgba(100, 100, 100, 0.4);
  /* font-size: 20px; */
  /* position: fixed;
  left: 0;
  right: 0;
  bottom: 0; */
}
.left,
.right {
  width: 60px;
}

.center {
  flex: 1;
}
</style>