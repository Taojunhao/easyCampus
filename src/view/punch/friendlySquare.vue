<template>
  <div class="friendlySquare-background">
    <div class="friendlySquare-header is-fixed">
      <van-row>
        <van-col span="4">
          <img src="../../assets/punched/back.png" class="friendlySquare-img" @click="returnBack"/>
        </van-col>
        <van-col span="16">好友广场</van-col>
        <van-col span="4"><img src="../../assets/punched/more.png" class="friendlySquare-img img"/></van-col>
      </van-row>
    </div>
    <div class="friendlySquare-div"></div>
    <div class="friendlySquare-body">

      <div v-for="(item,index) in friendList" v-bind:key="index">
        <div class="friendlySquare-body-top"></div>
        <div class="friendlySquare-body-item">
          <van-row style="padding-top: 15px;padding-left: 15px">
            <van-col span="6" style="text-align: center">
              <img :src="item.imgUrl" class="item-header"/>
            </van-col>
            <van-col span="18">
              <div style="font-size: 18px;font-weight: 700;">{{item.nickName}}</div>
              <div>{{item.time}}</div>
            </van-col>
          </van-row>
          <van-row style="text-align: center;padding-left: 22px">
            <van-col span="12" style="    line-height: 6vh;">今天完成{{item.punchedNums}}项打卡目标</van-col>
            <van-col span="12">
              <img src="../../assets/punched/good-click.png" style="width: 25px"/>
            </van-col>
          </van-row>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "friendlySquare",
    data() {
      return {
        friendList: [
          {
            nickName: '圆圆',
            time: '2019/5/10 下午7:55:34',
            imgUrl:'http://img3.redocn.com/20120724/Redocn_2012072413524645.jpg',
            punchedNums: 10
          },
          {
            nickName: '红红',
            time: '2019/4/10 下午7:55:34',
            imgUrl:'http://img4.imgtn.bdimg.com/it/u=1410237526,109961724&fm=26&gp=0.jpg',
            punchedNums: 5
          }
        ]
      }
    },
    methods: {
      returnBack() {
        this.$router.push("/punch")
      }
    }
  }
</script>

<style scoped>
  .friendlySquare-background {
    background: url('../../assets/punched/friendlySquare.jpg');
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-size: cover; /*铺满*/
  }

  .friendlySquare-header {
    width: 100%;
    line-height: 6vh;
    background: #199ed8;
    text-align: center;
    color: white;
  }
  .img {
    width: 25px !important;
  }
  .friendlySquare-img {
    width: 30px;
    vertical-align: middle;
  }
  .is-fixed {
    position:fixed;
    top:0;
  }
  /*占位div*/
  .friendlySquare-div {
    height: 8vh;
  }
  .friendlySquare-body {
    width: 100%;
    /*height: 1000px;*/
  }
  .friendlySquare-body-item {
    width: 95%;
    height: 15vh;
    margin: 0 auto;
    background-color: #ECECEC;
    border-radius: 20px;
  }
  .friendlySquare-body-top {
    width: 100%;
    height: 20px;
  }
  .item-header {
    width: 50px;
    border-radius: 50%;
  }
</style>
