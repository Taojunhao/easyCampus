<template>
    <div>
     <div class="navigation">
       <div class="navigation-item"><a href="">热门</a></div>
       <div class="navigation-item"><a href="">关注</a></div>
       <div class="navigation-item"><a href="">附近</a></div>
       <div class="navigation-item"><a href="">书籍</a></div>
       <div class="navigation-item"><a href="">手机</a></div>
       <div class="navigation-item"><a href="">数码</a></div>
       <div class="navigation-item"><a href="">其他</a></div>

     </div>
    </div>
</template>

<script>
    export default {
        name: "categorynavigation"
    }
</script>

<style scoped>
  .top{
    height: 2.8125rem;
  }
  .navigation{
    width: 100%;
    height: 50px;
    display: flex;
  }

.navigation-item{
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  line-height: 1;
  font-size: 12px;
  color: #7d7e80;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;

}
.navigation-item a{
  color: black;
}
</style>
