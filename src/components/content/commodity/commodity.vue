<template>
  <div>
    <NavBar class="nav-bar">
      <div slot="left">
        <a href="/home">
          <img src="../../../assets/img/基础图标-向左箭头.svg" alt /> 返回
        </a>
      </div>
      <div slot="center">商品</div>
    </NavBar>
    <div class="goods">
      <van-swipe class="goods-swipe" :autoplay="3000">
        <van-swipe-item v-for="thumb in goods.thumb" :key="thumb">
          <img :src="thumb" />
        </van-swipe-item>
      </van-swipe>

      <van-cell-group>
        <van-cell>
          <div class="goods-title">{{ goods.title }}</div>
          <div class="goods-price">{{ formatPrice(goods.price) }}</div>
        </van-cell>
        <van-cell class="goods-express">
          <van-col span="10">运费：{{ goods.express }}</van-col>
          <van-col span="14">剩余：{{ goods.remain }}</van-col>
        </van-cell>
      </van-cell-group>

      <van-cell-group class="goods-cell-group">
        <van-cell value="进入店铺" icon="shop-o" is-link @click="sorry">
          <template slot="title">
            <span class="van-cell-text">衣服店</span>
            <van-tag class="goods-tag" type="danger">官方</van-tag>
          </template>
        </van-cell>
        <van-cell title="线下门店" icon="location-o" is-link @click="sorry" />
      </van-cell-group>

      <van-cell-group class="goods-cell-group">
        <van-cell title="查看商品详情" is-link @click="sorry" />
      </van-cell-group>

      <van-goods-action>
        <van-goods-action-icon icon="chat-o" text="客服" />
        <van-goods-action-icon icon="cart-o" text="购物车" info="5" />
        <van-goods-action-icon icon="shop-o" text="店铺" info="12" />
        <van-goods-action-button type="warning" text="加入购物车" />
        <van-goods-action-button type="danger" text="立即购买" />
      </van-goods-action>
    </div>
  </div>
</template>

<script>
import {
  Tag,
  Col,
  Icon,
  Cell,
  CellGroup,
  Swipe,
  Toast,
  SwipeItem,
  GoodsAction,
  GoodsActionIcon,
  GoodsActionButton
} from "vant";
import NavBar from "../../common/navbar/NavBar";
export default {
  components: {
    NavBar,
    [Tag.name]: Tag,
    [Col.name]: Col,
    [Icon.name]: Icon,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [GoodsAction.name]: GoodsAction,
    [GoodsActionIcon.name]: GoodsActionIcon,
    [GoodsActionButton.name]: GoodsActionButton
  },
  data() {
    return {
      goods: {
        title: "情侣短袖来图定制定做t恤中袖落肩半袖印图片logo字diy衣服装班服",
        price: 4680,
        express: "免运费",
        remain: 19,
        thumb: [
          "https://cbu01.alicdn.com/img/ibank/2019/599/611/10659116995_1215553684.jpg",
          "https://cbu01.alicdn.com/img/ibank/2019/994/891/10655198499_2006536812.jpg"
        ]
      }
    };
  },
  methods: {
    formatPrice() {
      return "¥" + (this.goods.price / 100).toFixed(2);
    },
    onClickCart() {
      this.$router.push("cart");
    },
    sorry() {
      Toast("暂无后续逻辑~");
    }
  }
};
</script>

<style lang="less">
.nav-bar {
  background-color: #e5645b;
  color: #e6e6e6;
}
.nav-bar a {
  color: #e6e6e6;
}

.goods {
  padding-bottom: 50px;
  &-swipe {
    img {
      width: 100%;
      display: block;
    }
  }
  &-title {
    font-size: 16px;
  }
  &-price {
    color: #f44;
  }
  &-express {
    color: #999;
    font-size: 12px;
    padding: 5px 15px;
  }
  &-cell-group {
    margin: 15px 0;
    .van-cell__value {
      color: #999;
    }
  }
  &-tag {
    margin-left: 5px;
  }
}
</style>Ｆ