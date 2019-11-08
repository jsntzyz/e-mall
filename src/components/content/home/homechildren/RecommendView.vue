<template>
  <div class="recommend">
    <div v-for="item in recommend" :key="item" class="recommend-item">
      <a href>
        <img :src="item.image" alt />
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecommendView",
  props: {
    recommend: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>

<style scoped>

.recommend {
  margin-top: 10px;
  display: flex;
  width: 100%;
  text-align: center;
  font-size: 12px;

  padding: 10px 0 10ox;
  border-bottom: 10px solid #eee;
}
.recommend-item {
  flex: 1;
}

.recommend-item img {
  width: 70px;
  height: 70px;
  margin-bottom: 10px;
}
</style>