 <template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TabBar"
};
</script>

<style scoped>
/* @import "./assets/css/base.css"; */

#tab-bar {
  display: flex;
  background: #dbdbdb;

  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  /* 
  box-shadow: 10px 10px 10px rgba(100,100,100,.15) */
}

</style>
 
 
 
 