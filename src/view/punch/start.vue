<template>
  <div class="start-background">
    <div class="start-header is-fixed">
      <van-row>
        <van-col span="4">
          <img src="../../assets/punched/back.png" class="start-img" @click="returnBack"/>
        </van-col>
        <van-col span="16">打卡</van-col>
        <!--<van-col span="4"><img src="../../assets/punched/more.png" class="start-img img"/></van-col>-->
      </van-row>
    </div>
    <div class="friendlySquare-body-top"></div>
    <div class="start-body">
      <van-row >
        <van-col span="6" style="text-align: center"> <img src="http://img4.imgtn.bdimg.com/it/u=1410237526,109961724&fm=26&gp=0.jpg" class="item-header"/></van-col>
        <van-col span="10">
          <div style="font-size: 16px">明明</div>
          <div style="font-size: 12px">2019.03.04~至今</div>
        </van-col>
        <van-col span="8">
          <van-button type="info" @click="punch()">打卡</van-button>
        </van-col>
      </van-row>
      <van-row style="margin-top: 10px;background-color: white;color: #333333;line-height: 45px">
        <van-col span="11" >
          <img src="../../assets/punched/wangluobanji.png" style="margin-left: 10px;width: 25px" class="start-img img"/>
          <span style="margin-left: 10px">打卡<span style="color: #199ed8">15</span>天</span>
        </van-col>
        <van-col span="1" >
          <span style="width: 1px;height: 5px;border: 0.5px solid #333333;margin: 0 auto"></span>
        </van-col>
        <van-col span="12">
          <img src="../../assets/punched/xunzhang.png" style="margin-left: 10px" class="start-img img"/><span style="margin-left: 10px">
          获得勋章<span style="color: #199ed8">15</span>
          个数</span>
        </van-col>
      </van-row>

      <van-row class="punch-items" >
        <van-col span="12" style="margin-top: 13px" v-for="(item, index) in punchrecord" :key="index">

          <div class="punched-card-background">
            <div class="start-title">{{item.title}}</div>
            <div class="start-time">{{item.datatime}}</div>
            <div style="padding-top: 10px;">
              <van-button type="info" @click="punch('getup')">打卡</van-button>
            </div>
          </div>
        </van-col>
      </van-row>
    </div>
  </div>
</template>

<script>

// import { recommend } from '../recommend/api';
  import axios from 'axios'
  export default {
    name: "start",
    data() {
      return{
        punchrecord:[]
      }
    },
    methods: {
      returnBack() {
        this.$router.push("/punch")
      },
    
      punch(){
        this.$toast.center('打卡成功!');
        setTimeout(() => {
            this.$router.push("/punch")
        }, 500);
      },
      getInfo(){
        axios.get('/static/json/punchrecord.json')
          .then(this.getInfoSucc)
      },
      getInfoSucc(res){
        res = res.data
        if(res.ret && res.data){
          this.punchrecord = res.data.punch
        }
     
      }
     
    },
    mounted (){
      this.getInfo()
    }
  }
</script>

<style scoped>
  .btn{
    font-size: 10px;
    color: black;

  }
  .start-title {
    padding-top: 10px;
    font-size: 18px;
    font-weight: 700;
  }
  .start-time {
    padding-top: 10px;
    font-size: 12px;
  }
  .start-background {
    background: url('../../assets/punched/back1.jpg');
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-size: cover; /*铺满*/
  }

  .start-header {
    width: 100%;
    line-height: 6vh;
    background: #199ed8;
    text-align: center;
    color: white;
  }
  .img {
    width: 25px !important;
  }
  .start-img {
    width: 30px;
    vertical-align: middle;
  }
  .is-fixed {
    position:fixed;
    top:0;
  }
  .item-header {
    width: 40px;
    border-radius: 50%;
  }
  .friendlySquare-body-top {
    width: 100%;
    height: 47px;
  }
  .start-body {
    height: 20vh;
    margin-top: 20px;
    color: white;
  }
  .punched-card-background{
    background-color: white;
    width: 85%;
    height: 15vh;
    border-radius: 20px;
    margin: 0 auto;
    text-align: center;
    color: #666666;
  }
  .punch-items{
    margin-top: 20px;
  }
  .van-button--normal{
    padding: 0;
  }
  .van-button{
    height: 25px;
    width: 60px;
    line-height: 25px;
  }
</style>
