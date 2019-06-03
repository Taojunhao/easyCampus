<template>
    <div >
        <div class="bottom"></div>
        <van-tabbar v-model="active" class="bottom-class" >
            <van-tabbar-item icon="home-o" to="/smartlife">首页</van-tabbar-item>
            <van-tabbar-item icon="star"  to="/recommend">推荐</van-tabbar-item>
            <van-tabbar-item  to="/shopping">
              <div slot="icon" style="text-align: center">
                <i class="iconfont icon-shangcheng" style="font-size: 20px"/>
              </div>
              <div>
                <span>交易市场</span>
              </div>
            </van-tabbar-item>
            <van-tabbar-item icon="manager" to="/my">我的</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>

export default {

      name:'bottom',
      data() {
         return {
        active: 0
    }
  },
  methods:{
    go_category(){
      this.$router.push('../category')
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
