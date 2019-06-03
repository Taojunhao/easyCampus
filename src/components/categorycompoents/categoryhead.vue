<template>
    <div class="head">
      <van-nav-bar
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
      />
    </div>
</template>

<script>
    export default {
      name:"categoryhead",
      methods:{
         onClickLeft() {
        this.$router.push({path:'/home'})
      },

      }
  }

</script>

<style scoped>

.head{
  position: fixed;
  width: 100%;
} 

</style>
