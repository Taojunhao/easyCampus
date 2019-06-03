<template>
  <div class="Header">
    <router-link to="/login">
      <div class="header-btn">
        <a href="" class="header-btn-a">登录</a>

      </div>
    </router-link>
    <van-search  placeholder="请输入搜索关键词"  />

    <div class="header-palce">
      <span>地区</span>
      <van-icon name="arrow-down" class="header-arrow" />
    </div>
  </div>
</template>

<script>

  export default {
    name:"Header",
    methods: {
      login() {
        this.$router.push({path:'/login'})
      }
    }

  }
</script>

<style scoped>
  .Header{
    background: #199ED8;
    height: 2.8rem;
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 2222222;
  }
  .header-btn{
    float: left;
    cursor: pointer;
    width: 15%;
  }
  .header-btn-a{
    text-decoration: none;
    display: block;
    font-size: 0.75rem;
    height: 2.8rem;
    line-height: 2.8rem;
    margin: 0 0.625rem;
    text-align: center;
    color:#fff;

  }
  .header-palce{
    float: right;
    cursor: pointer;
    width: 15%;
    color: #fff;
    height: 2.8rem;
    line-height: 2.687rem;
    font-size: 0.75rem;
  }
  .van-search{
    background: none !important;
    float: left;
    padding: 0.3125rem;
    width: 70%
  }
  .van-search__content{

  }


</style>
