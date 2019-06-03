<template>
  <div>
    <van-nav-bar
      title="查看物流"
      left-arrow
      :fixed="true"
      @click-left="onClickLeft"
    />
    <div style="height: 50px;width: 100%"></div>


    <van-cell-group title="订单详情">
      <van-card
        num="2"
        tag="特供"
        price="2.00"
        desc="高产蔬果，原生态"
        title="特供水果"
        :thumb="imageURL"
        origin-price="10.00"
      >
        <div slot="footer">
          <van-button size="mini">联系卖家</van-button>
        </div>
      </van-card>
      <van-cell-group title="物流状态">
        <van-steps direction="vertical" :active="0">
          <van-step>
            <h3>【重庆】重庆营业部收入</h3>
            <p>2018-07-12 12:40</p>
          </van-step>
          <van-step>
            <h3>【上海】离开上海正发往重庆</h3>
            <p>2018-07-11 10:00</p>
          </van-step>
          <van-step>
            <h3>快件已发货</h3>
            <p>2018-07-10 09:30</p>
          </van-step>
        </van-steps>
      </van-cell-group>
      <van-cell  title="地址" value="重庆市巴南区重庆理工大学花溪校区
        小明同学 15723319678"  size="large" >
      </van-cell>
      <van-cell-group>
        <van-cell  title="备注"  value="请尽快送货！"  size="large" />
      </van-cell-group>

      <van-cell title="运费" class="price-1" value="￥ 20" />
      <van-cell title="实付款" class="price-2" value="￥ 40" />

      <div class="btn-placeholder"></div>
    </van-cell-group>


  </div>
</template>

<script>
  export default {
    name: "order",
    data() {
      return {
        checkedGoods: ['1', '2', '3'],
        imageURL: 'http://img10.360buyimg.com/babel/s260x260_jfs/t1/22531/20/252/256220/5c087c7fE70a2ceb2/066c79a104f1bc19.jpg!q90!cc_130x130',
        chosenCoupon: -1,
        coupons: [coupon],
        disabledCoupons: [coupon],
        showList:false
      };
    },
    computed: {
      submitBarText() {
        const count = this.checkedGoods.length;
        return '结算' + (count ? `(${count})` : '');
      },
      totalPrice() {
        return this.goods.reduce((total, item) => total + (this.checkedGoods.indexOf(item.id) !== -1 ? item.price : 0), 0);
      }
    },
    methods: {
      onClickLeft() {
        this.$router.push({path:'/my'})
      },

    }
  };
</script>

<style lang="less">
  .van-cell__value {
    color: #000;
  }
  .price-2   .van-cell__value {
    color: #ff4444;
  }
  .price-1   .van-cell__value ,.van-cell__title{
    color: #000;
    font-size: 12px;
  }
  .van-step--vertical {
    font-size: 11px;
  }
</style>
