<template>
    <div>
      
      <navigation-content></navigation-content>
      <category-contents></category-contents>
    </div>
</template>

<script>
  import headContent from "../../components/categorycompoents/categoryhead.vue"
  import navigationContent from "../../components/categorycompoents/categorynavigation.vue"
  import categoryContents from "../../components/categorycompoents/categoryContents.vue"

  export default {
      name: "category",
    components:{
      headContent,
      navigationContent,
      categoryContents
    }

    }
</script>

<style scoped>
div{
  position: center;
}
</style>
