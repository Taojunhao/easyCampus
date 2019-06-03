<template>
  <div>
    <van-nav-bar
      title="确认订单"
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
          <van-button size="mini">举报商品</van-button>
        </div>
      </van-card>
      <van-cell  title="地址" icon="location-o" value="重庆市巴南区重庆理工大学花溪校区
        小明同学 15723319678"  size="large" is-link to="addressEdit">
      </van-cell>
      <van-cell-group>
        <van-field
          v-model="message"
          label="备注"
          type="textarea"
          placeholder="请输入备注"
          rows="3"
          cols="2"
          autosize
        />
      </van-cell-group>

      <van-cell title="运费" class="price-1" value="￥ 20" />
      <van-cell title="实付款" class="price-2" value="￥ 40" />
      <van-cell title="优惠券" class="normal" value="无" is-link   :coupons="coupons"
                :chosen-coupon="chosenCoupon"
                @click="showList = true"/>
      <div class="btn-placeholder"></div>
      <van-button size="large" type="danger" class="fixed-btn" @click="submitOrder">提交订单</van-button>
    </van-cell-group>
    <!-- 优惠券列表 -->
    <van-popup v-model="showList" position="bottom">
      <van-coupon-list
        :coupons="coupons"
        :chosen-coupon="chosenCoupon"
        :disabled-coupons="disabledCoupons"
        @change="onChange"
        @exchange="onExchange"
      />
    </van-popup>
  </div>
</template>

<script>
import { setTimeout } from 'timers';
  const coupon = {
    available: 1,
    condition: '无使用门槛\n最多优惠12元',
    reason: '',
    value: 150,
    name: '优惠券名称',
    startAt: 1489104000,
    endAt: 1514592000,
    valueDesc: '1.5',
    unitDesc: '元'
  };
  export default {
    name: "cart",
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
      formatPrice(price) {
        return (price / 100).toFixed(2);
      },
      onSubmit() {
        this.$toast('点击结算');
      },
      onClickLeft() {
        this.$router.push({path:'/cart'})
      },
      onChange(index) {
        this.showList = false;
        this.chosenCoupon = index;
      },
      onExchange(code) {
        this.coupons.push(coupon);
      },
      submitOrder() {
        this.$toast('提交成功');
       this.$router.push({path:'/shopping'})
      }
    }
  };
</script>

<style lang="less">
  .btn-placeholder {
    height: 50px;
    width: 100%;
  }
  .fixed-btn {
    bottom: 0;
    position: fixed;
    z-index: 99999;
  }
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
</style>
