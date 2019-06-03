<template>
  <div style="width: 100%;height: 100%;">
    <router-view />
    <!-- 打卡底部栏 -->
    <van-tabbar v-model="active" class="bottom-class" >
      <van-tabbar-item  icon="home-o" to="/friendlySquare">好友广场</van-tabbar-item>
      <van-tabbar-item icon="star"  to="/punchedStart">我要打卡</van-tabbar-item>
      <van-tabbar-item icon="manager" to="/my">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
  export default {
    name: "index",
    data() {
      return {
        activate: 1
      }
    }
  }
</script>

<style scoped>
  .van-tabbar--fixed{
    background: rgb(154, 135, 234);
  }
  .van-tabbar-item--active[data-v-10e356bb]{
    color: rgba(17, 85, 163, 0.82);
  }
  .bottom{
    height: 50px;
  }
  .van-tabbar-item{
    color: #fff;
  }
  .bottom-class {
    background-color: #199ED8;
  }

</style>
