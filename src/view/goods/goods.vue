<template>
  <div class="goods">
    <van-nav-bar
      left-arrow
      title="商品详情"
      :fixed="true"
      @click-left="onClickLeft"
      style="border-bottom: 1px solid rgba(220, 220, 220, 1)"
    />
    <div style="height: 50px;width: 100%"></div>
    <van-swipe class="goods-swipe" :autoplay="3000">
      <van-swipe-item v-for=" item of goodsList.imgurl" :key="item" >
        <img :src="item" class="goods-img" >
      </van-swipe-item>
    </van-swipe>

    <van-cell-group>
      <van-cell>
        <div class="goods-title">笔记本电脑</div>
        <div class="goods-price">{{formatPrice(goodsList.price)}}</div>
      </van-cell>
      <van-cell class="goods-express">
        <van-col span="10">运费：{{goodsList.express}}</van-col>
        <van-col span="14">剩余：{{goodsList.remain}}</van-col>
      </van-cell>
    </van-cell-group>

    <van-cell-group class="goods-cell-group">
      <van-cell value="进入店铺" icon="shop-o" is-link @click="sorry">
        <template slot="title">
          <span class="van-cell-text">校园购</span>
          <van-tag class="goods-tag" type="danger">官方</van-tag>
        </template>
      </van-cell>
      <van-cell title="线下门店" icon="location-o" is-link @click="sorry" />
    </van-cell-group>

    <van-cell-group class="goods-cell-group">
      <van-cell title="查看商品详情" is-link @click="sorry" />
    </van-cell-group>


    <van-goods-action>
      <van-goods-action-mini-btn icon="chat-o" @click="sorry">
        客服
      </van-goods-action-mini-btn>
      <van-goods-action-mini-btn icon="cart-o" @click="onClickCart">
        购物车
      </van-goods-action-mini-btn>
      <van-goods-action-big-btn @click="addCart">
        加入购物车
      </van-goods-action-big-btn>
      <van-goods-action-big-btn primary @click="sorry">
        立即购买
      </van-goods-action-big-btn>
    </van-goods-action>

    <!-- <div class="bottom"></div> -->

  </div>
</template>

<script>
  export default {
    name:'goods',
    data (){
      return {
        goodsList:
          {
            id:'001',
            imgurl:[
              'http://img11.360buyimg.com/babel/s260x260_jfs/t1/32860/1/2752/330757/5c6e1c53Eca18fb05/cf243e60baf8b140.jpg!q90!cc_130x130',
              'http://img13.360buyimg.com/n1/s450x450_jfs/t1/23345/19/332/198605/5c08e346Ee2bec753/71a3e476ea86f80f.jpg'
            ],
            desc:'笔记本电脑',
            price:5000,
            express:12,
            remain:19,
          },

      }
    },
    methods: {
      formatPrice() {
        return '¥' + (this.goodsList.price / 100).toFixed(2);
      },
      onClickLeft() {
        this.$router.push({path:'/shopping'})
      },
      addCart() {
        this.$toast('加入成功！');
        this.$router.push({path:'/cart'})
      }
    },
  }
</script>

<style scoped>
  .goods{
    background: #f8f8f8;
    padding-bottom: 3.125rem;
  }
  .goods-img{
    width: 100%;
    height: 100%;
  }
  .goods-title{
    font-size: 1rem;
  }
  .goods-price{
    color: #f44;
  }
  .goods-express{
    color: #999;
    font-size: 0.75rem;
    padding: 0.3125rem 0.9375rem;
  }
  .goods-cell-group{
    margin-top: 0.9375rem;
  }
  .van-cell__title{
    text-align: left;
  }
  .van-swipe-item{
    height: 18.75rem !important;
  }
  .bottom{
    height: 50px;
  }
  .van-button--large{
    height: 50px;
    line-height: 50px;
  }
</style>
