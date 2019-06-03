<template>
    <div>
      <router-view />
      <!-- <home-bottom></home-bottom> -->
    </div>
</template>

<script>
    import HomeBottom from "../../components/bottom.vue"
    export default {
        name: "index",
        components:{
            HomeBottom,
        }
    }
</script>

<style scoped>

</style>
