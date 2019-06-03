<template>
  <div>
    <div class="dv"></div>
    <!-- 搜索栏 -->
    <div class="header">
      <van-search placeholder="请输入搜索关键词" v-model="value" />
    </div>
    <!--<van-notice-bar-->
      <!--text="足协杯战线连续第2年上演广州德比战，上赛季半决赛上恒大以两回合5-3的总比分淘汰富力。"-->
      <!--left-icon="volume-o"-->
    <!--/>-->
    <div class="punch">
      <div class="punch-content">
        <p class="punch_times">打卡天数:12天</p>
        <van-button round type="info" to="/punch" >我要打卡</van-button>
      </div>
    </div>
    <!-- 菜单栏 -->
    <icons-home></icons-home>
    <!-- 广播条 -->

    <!-- 新闻栏 -->
    <div class="news ">
      <p class="news-title">习近平十六字方针 为新时代工作定调！</p>
      <van-tag plain class="label" type="primary">时政</van-tag>
      <p class="comments">央视新闻·32条评论</p>
    </div>

    <div class="news ">
      <p class="news-title">文明交流互鉴何以重要？习近平这篇讲话引人深思</p>
      <van-tag plain class="label" type="primary">时政</van-tag>
      <p class="comments">央视新闻·32条评论</p>
    </div>

    <div class="news ">
      <p class="news-title">愿谈则谈 要打便打</p>
      <van-tag plain class="label" type="primary">时政</van-tag>
      <p class="comments">央视新闻·32条评论</p>
    </div>
    <!-- 打卡 -->
    <home-buttom></home-buttom>
  </div>
</template>

<script>
  import HomeButtom from "../../components/bottom.vue"
  import IndexIcons from "../../components/icons.vue"
  import IconsHome from "../../components/icons-home"
  export default {
    name: "smartLife",
    components:{
      IconsHome,
      IndexIcons,
      HomeButtom
    },
    data(){
      return{
        active:0
      }
    }
  }
</script>

<style scoped>
  .dv{
    height: 54px;
  }
  .van-search{
    height: 54px;
    background-color: #199ED8 !important;
    position: fixed;
    z-index: 1;
    width: 100%;
    top: 0;
  }
  .punch{
    height: 170px;
    width: 100%;
    position: relative;
  }
  .punch::before{
    position: absolute;
    top: 0;
    left: 0;
    content: "";
    z-index: -1;
    height: 100%;
    width: 100%;
    background-image: url("../../imgs/img2.jpg");
    -webkit-filter: blur(2px); /* Chrome, Safari, Opera */
    filter: blur(2px);
    background-size: cover;
    overflow:hidden;
  }
  .punch-content{
    text-align: center;
    position: absolute;
    left: 30%;
    top: 20%;

  }
  .punch_times{
    font-size: 25px;
    margin: 0;
    padding: 0;
    color: #000000a8;
  }
  .van-button--normal{
    margin-top: 25px;
  }
  .news{
    margin: 15px 0;
    border-bottom:1px solid #e5e5e5;
  }
  .news-title{
    color: black;
    font-size: 17px;
    word-wrap: break-word;
    margin: 5px 10px;
    font-weight: bold;
  }
  .label{
    /*border: 1px solid #0000ffba;*/
    /*color: #0000ffba;*/
    margin: 10px;
    font-size: 12px;
    display: inline-block;
    width: 25px;
    line-height: 15px;
    text-align: center;

  }
  .comments{
    margin: 0;
    padding: 0;
    font-size: 14px;
    display: inline-block;
  }

</style>
