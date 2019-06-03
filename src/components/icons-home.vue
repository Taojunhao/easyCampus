<template>
  <div class="icons">
    <van-swipe :show-indicators='false'>
      <van-swipe-item v-for="(page,index) in pages" :key="index">
        <div class="icon"  v-for="item in page" :key="item.id">
          <div class="icon-content" @click="to(item.path)">
            <img :src='item.imgurl' class="icon-img">
            <p class="icon-desc">{{item.desc}}</p>
          </div>
        </div>
      </van-swipe-item>

    </van-swipe>
  </div>

</template>

<script>
  export default {
    name:'icons-home',
    data(){
      return{
        iconsList:[{
          id:"0001",
          imgurl:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1555320336&di=8a9d697d3fcc90f1f1f86c33d3fa935a&imgtype=jpg&er=1&src=http%3A%2F%2Fpic.51yuansu.com%2Fpic3%2Fcover%2F03%2F04%2F99%2F5af95bfe68578_610.jpg",
          desc:"二手商城",
          path:'/shopping'
        },{
          id:"0002",
          imgurl:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1555320424&di=810cac78123599b85d231688ef7889a2&imgtype=jpg&er=1&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01cbe4597194d6a8012193a399d749.jpg%401280w_1l_2o_100sh.png",
          desc:"运动打卡",
          path:'/punch'
        },{
          id:"0003",
          imgurl:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1555320470&di=be7de3dd869cd140d7a611e58f59721e&imgtype=jpg&er=1&src=http%3A%2F%2Fpic.51yuansu.com%2Fpic2%2Fcover%2F00%2F30%2F03%2F58106edb06512_610.jpg",
          desc:"新闻推荐",
          path:'/recommend'
        }]
      }
    },
    computed:{
      pages () {
        const pages=[]
        this.iconsList.forEach((item,index)=>{
          const page = Math.floor(index/8)
          if(!pages[page]){
            pages[page]=[]
          }
          pages[page].push(item)
        })
        return pages
      }
    },
    methods: {
      to(path){
        this.$router.push(path)
      }
    }

  }
</script>

<style scoped>
  .icons{
    border-radius: 0.625rem;
    text-align: center;

  }
  .van-swipe{
    border-radius: 0.9375rem;
    margin: 0.3125rem;
    background: #f3f3f3f3;
  }
  .icon{
    width: 25%;
    height: 50%;

    float: left;
    overflow: hidden;
  }
  .icon-content{
    margin: 10px;
  }
  .icon-img{
    width: 35px;
    height: 35px;
    border-radius: 50%;
  }
  .icon-desc{
    margin-top: 0;
    margin-bottom: 0;
    font-size: 0.75rem;
  }
</style>
