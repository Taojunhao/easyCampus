<template>
  <div>
    <div>
      <van-tabs v-model="active" animated swipeable style="border-bottom: 1px solid #E5E5E5">
        <van-tab title="推荐">
          <new-list type="dy"></new-list>
        </van-tab>
        <van-tab title="校园">
          <router-view />
        </van-tab>
        <van-tab title="科技">
          <new-list type="tech"></new-list>
        </van-tab>
        <van-tab title="运动">
          <new-list type="sports"></new-list>
        </van-tab>
      </van-tabs>
    </div>
    <home-buttom></home-buttom>
  </div>
</template>

<script>
  import HomeButtom from "../../components/bottom.vue"
  import SchoolNew from "./schoolNew";
  import NewList from "./newList";
  export default {
    name: "index",
    components: {NewList, SchoolNew,HomeButtom},
    data() {
      return {
        activate: ''
      }
    }
  }
</script>

<style scoped>
  .news-title {
    font-size: 15px;
    color: #666666;
    text-align: center;
    line-height: 30px;
    background: #F4F4F4;
  }
  /deep/ .van-tabs__nav {
    width: 100% !important;
    margin: 0 !important;
    color:#199ed8 !important;
  }
</style>
