<template>
    <div>
        <div class="top"></div>
        <van-swipe :autoplay="3000" class="swipe">
            <van-swipe-item v-for="(image, index) in images" :key="index">
                 <img v-lazy="image" class="swiper-img" />
            </van-swipe-item>
        </van-swipe>
    </div>
</template>

<script>
export default {
    name:'swiper',
    
    data() {
    return {
      images: [
        'http://img.alicdn.com/tfs/TB1YLXZzG6qK1RjSZFmXXX0PFXa-1125-350.jpg_1152x1920Q75s50.jpg_.webp',
        'http://img.alicdn.com/tfs/TB1C835DCzqK1RjSZFLXXcn2XXa-1120-350.jpg_1152x1920Q75s50.jpg_.webp',
        'https://img.alicdn.com/tfs/TB1mCJFhAvoK1RjSZFwXXciCFXa-1125-350.jpg'
        
      ]
    }
  }
}
</script>

<style scoped>
.swipe{
    height: 7.5rem;
}
.swiper-img{
    width: 100%;
}
.top{
    height: 2.8125rem;
}
</style>
