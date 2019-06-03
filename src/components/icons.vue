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
    name:'icons',
    data(){
      return{
        iconsList:[{
          id:"0001",
          imgurl:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1555320336&di=8a9d697d3fcc90f1f1f86c33d3fa935a&imgtype=jpg&er=1&src=http%3A%2F%2Fpic.51yuansu.com%2Fpic3%2Fcover%2F03%2F04%2F99%2F5af95bfe68578_610.jpg",
          desc:"二手手机"
        },{
          id:"0002",
          imgurl:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1555320424&di=810cac78123599b85d231688ef7889a2&imgtype=jpg&er=1&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01cbe4597194d6a8012193a399d749.jpg%401280w_1l_2o_100sh.png",
          desc:"数码"
        },{
          id:"0003",
          imgurl:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1555320470&di=be7de3dd869cd140d7a611e58f59721e&imgtype=jpg&er=1&src=http%3A%2F%2Fpic.51yuansu.com%2Fpic2%2Fcover%2F00%2F30%2F03%2F58106edb06512_610.jpg",
          desc:"二手图书"
        },{
          id:"0004",
          imgurl:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1555320685&di=38a34a0a3d7a7b8028101526cb3afc2a&imgtype=jpg&er=1&src=http%3A%2F%2Fpic.qiantucdn.com%2F58pic%2F15%2F57%2F03%2F66d58PIC6FH_1024.png",
          desc:"母婴玩具"
        },{
          id:"0005",
          imgurl:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1555320736&di=9931eb66a134f86a7e17a07090221a92&imgtype=jpg&er=1&src=http%3A%2F%2Fpic.51yuansu.com%2Fpic2%2Fcover%2F00%2F35%2F44%2F58119ff026f87_610.jpg",
          desc:"家居家电"
        },{
          id:"0006",
          imgurl:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1555320802&di=3ef4a4fc8955a8d02a0af88ff094f47a&imgtype=jpg&er=1&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F015cda5b2381cea8012034f777b804.png%401280w_1l_2o_100sh.png",
          desc:"服饰鞋包"
        },{
          id:"0007",
          imgurl:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1555320866&di=a08b942064a15609b66052e58139c66a&imgtype=jpg&er=1&src=http%3A%2F%2Fpic.51yuansu.com%2Fpic3%2Fcover%2F02%2F94%2F36%2F5ac49bb9a3da1_610.jpg",
          desc:"美妆捡漏"
        },
          {
            id:"0008",
            imgurl:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557342868140&di=9c968083aa9a02848410ce7d2249d427&imgtype=0&src=http%3A%2F%2Fpic.51yuansu.com%2Fpic3%2Fcover%2F01%2F15%2F10%2F5904545a6e35c_610.jpg",
            desc:"超值推荐"
          },
          {
            id:"0009",
            imgurl:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1555320906&di=591e7a282531b835ebace8a2db353735&imgtype=jpg&er=1&src=http%3A%2F%2Ftoutiao.image.mucang.cn%2Ftoutiao-image%2F2017%2F03%2F20%2F19%2Fae96ec144f3d4c63abadc82f4046b588.jpeg",
            desc:"二手车"
          },{
            id:"0010",
            imgurl:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1555320951&di=106a31c703143a4dbecbb53351fb3460&imgtype=jpg&er=1&src=http%3A%2F%2Fs.yingle.com%2Fuploads%2Fallimg%2F17%2F4-1F330152S01R.jpg",
            desc:"超值租"
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
        this.$router.push("/category")
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
