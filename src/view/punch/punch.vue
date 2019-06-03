<template>
    <div class="punch-header">
        <!-- 打卡头部 -->
        <van-nav-bar   title="打卡"
        left-arrow
        @click-left="onClickLeft">
        <van-icon name="plus" slot="right" />
        </van-nav-bar>
        <!-- 打卡目标菜单 -->
        <van-row>
          <van-col span="8">今日目标</van-col>
          <van-col span="8">本周目标</van-col>
          <van-col span="8">本月目标</van-col>
        </van-row>
        <!-- 打卡内容栏 -->
     
         <van-panel title="早上六点起床" desc="开始时间：2019年5月10日" status="打卡12天">
        </van-panel>
       
          <van-panel title="早上做练习" desc="开始时间：2019年5月1日" status="打卡32天">
        </van-panel>

         <van-panel title="早睡" desc="开始时间：2019年5月1日" status="打卡32天">
        </van-panel>

    </div >

</template>

<script>

export default {
  name:"punchHeader",
  data(){
    return{
         punchrecord:[]
    }
  },


  methods: {
    onClickLeft() {
       this.$router.push('../smartLife')
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
   }
}
</script>


<style scoped>


  .banner-inner li{
    float: left;
  }
  .van-col{
    border:1px solid #199ED8;
    text-align: center;
    font-size: 13px;
    line-height: 25px;
    height: 25px;
  }
  .van-panel__header-value{
    font-size: 15px;
    line-height: 35px;
  }
  .van-nav-bar{
    background-color: #199ed8;
  }
  .van-nav-bar__title{
    color: #fff;
  }
  .van-icon-plus:before{
    color: #fff;
  }
  .van-icon-arrow-left:before{
    color: #fff;
  }
</style>
