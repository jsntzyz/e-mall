<template>
  <div >
    <div class="user-head">
      <van-image round width="4rem" height="4rem" src="https://img.yzcdn.cn/vant/cat.jpeg" />
      <span>用户名</span>
    </div>
    <div class="user-links">
      <van-row >
        <van-col span="6">
          <van-icon name="pending-payment" />待付款
        </van-col>
        <van-col span="6">
          <van-icon name="records" />待接单
        </van-col>
        <van-col span="6">
          <van-icon name="tosend" />待发货
        </van-col>
        <van-col span="6">
          <van-icon name="logistics" />已发货
        </van-col>
      </van-row>
    </div>
    <van-cell-group class="user-group">
      <van-cell icon="records" title="全部订单" is-link />
    </van-cell-group>

    <van-cell-group>
      <van-cell icon="points" title="我的积分" is-link />
      <van-cell icon="gold-coin-o" title="我的优惠券" is-link />
      <van-cell icon="gift-o" title="我收到的礼物" is-link />
    </van-cell-group>
  </div>
</template>

<script>
import { Row, Col, Icon, Cell, CellGroup, Image } from "vant";
export default {
  components: {
    [Row.name]: Row,
    [Col.name]: Col,
    [Icon.name]: Icon,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    [Image.name]: Image
  }
};
</script>

<style lang="less">
.user {
  &-head {
    padding-top: 20px;
    padding-left: 20px;
    position: relative;
  }
  &-head span {
    position: relative;
    left: 10px;
    bottom: 40px;
  }
  &-poster {
    width: 100%;
    height: 53vw;
    display: block;
  }
  &-group {
    margin-bottom: 15px;
  }
  &-links {
    width: 94%;
    margin:0 auto;
    margin-top: 10px;
    padding: 15px 0;
    font-size: 12px;
    text-align: center;
    background-color: rgb(224, 221, 221);
    border-radius:5px;
    .van-icon {
      display: block;
      font-size: 24px;
    }
  }
}
</style>