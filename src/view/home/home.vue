<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-icons></home-icons>
    <home-nearby></home-nearby>
    <home-support></home-support>
    <home-buttom></home-buttom>
  </div>
</template>

<script>
import HomeButtom from "../../components/bottom.vue"
  import HomeHeader from "../../components/Header.vue"
  import HomeSwiper from "../../components/Swiper.vue"
  import HomeNearby from "../../components/nearby.vue"
  import HomeSupport from "../../components/HotSupport.vue"
  import HomeIcons from "../../components/icons.vue"
  export default {
    name: "home",
    components:{
      HomeHeader,
      HomeSwiper,
      HomeNearby,
      HomeSupport,
      HomeIcons,
      HomeButtom
    }
  }
</script>

<style scoped>

</style>
