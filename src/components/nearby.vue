<template>
  <div class="nearby">
    <p class="nearby-title">附近好货</p>
    <van-row v-for="(page, index) of pages" :key="index">
      <van-col span="8" v-for="item of page" :key="item.id">
        <div class="nearby-item">
          <router-link   :to="item.url">
            <img class="nearby-item-img" :src="item.imgurl">
          </router-link>
          <p class="desc">{{item.desc}}</p>
          <span class="price">
            <span class="fuhao">{{'¥'}}</span>
            {{item.price}}
          </span>
        </div>
      </van-col>
    </van-row>

  </div>
</template>

<script>
  export default {
    name:'naearby',
    data () {
      return{
        imgList:[{
          id:'001',
          imgurl:'http://img20.360buyimg.com/mobilecms/s350x250_jfs/t15106/29/1927707359/667852/a5faa0a8/5a5dce98Nb3cba160.png!q90!cc_350x250.webp',
          desc:'手机',
          price:'128',
          url: '/goods'
        },{
          id:'002',
          imgurl:'http://img11.360buyimg.com/mobilecms/s350x250_jfs/t4342/248/1746420183/180870/6786516f/58c62e07N4ba03fe9.jpg!q90!cc_350x250.webp',
          desc:'mate20X',
          price:'128',
          url: '/goods'
        },{
          id:'003',
          imgurl:'http://img14.360buyimg.com/mobilecms/s350x250_jfs/t11131/291/1385961727/1107532/a1302f9c/5a0114e4N2b929c21.png!q90!cc_350x250.webp',
          desc:'HUAWEI P20',
          price:'128',
          url: '/goods'
        },{
          id:'004',
          imgurl:'http://img14.360buyimg.com/n2/jfs/t1/14165/27/11795/117879/5c944b75Eb6272e21/14e292723f6f7c04.jpg',
          desc:'时间之问',
          price:'128',
          url: '/goods'
        },{
          id:'005',
          imgurl:'http://img12.360buyimg.com/n2/jfs/t26767/160/2047825766/208854/81a02b25/5bf656baN599bb586.jpg',
          desc:'十分钟脑部运动',
          price:'128',
          url: '/goods'
        },{
          id:'006',
          imgurl:'http://img14.360buyimg.com/n2/jfs/t29614/43/853166277/515821/5570e2/5bff8139N3d0fccbc.jpg',
          desc:'亿亿万万',
          price:'128',
          url: '/goods'
        },{
          id:'007',
          imgurl:'http://img14.360buyimg.com/n2/jfs/t30874/84/321479951/106466/f02dfc53/5befc7bfN1d787368.jpg',
          desc:'天气预报',
          price:'128',
          url: '/goods'
        },{
          id:'008',
          imgurl:'http://img11.360buyimg.com/n2/jfs/t27838/80/1553504551/322234/3ed84c14/5be55cc8Ned834220.jpg',
          desc:'性本自然',
          price:'128',
          url: '/goods'
        },{
          id:'009',
          imgurl:'http://img14.360buyimg.com/n2/jfs/t1/21428/17/2773/290724/5c209eabEf3b417c3/ad6420550299135f.jpg',
          desc:'基因魔盒',
          price:'128',
          url: '/goods'
        }]
      }
    },
    computed:{
      pages () {
        const pages=[]
        this.imgList.forEach((item,index)=>{
          const page = Math.floor(index/3)
          if(!pages[page]){
            pages[page]=[]
          }
          pages[page].push(item)
        })
        return pages
      }
    }
  }
</script>

<style scoped>
  .nearby-title{
    margin: 0;
    padding: 0;
    font-size: 0.8125rem;
    text-align: left;
    height: 1.5625rem;
    line-height: 1.5625rem;
    padding-left: 0.625rem;
    font-weight: 800;
  }
  .nearby{
    margin: 0.625rem 0.3125rem;
    border-radius: 0.625rem;
    overflow: auto;
    zoom: 1;
    background: #f3f3f3f3;

  }
  .nearby-item{
    display: block;
    height: auto;
    float: left;
    margin: 0.3125rem 0.375rem;
    cursor: pointer;
    border-radius: 0.625rem;

  }
  .nearby-item-img{
    width: 100%;
    height: 80%;
    border-radius: 0.625rem;
  }
  .nearby-item p{
    margin: 0;
    padding: 0;
    text-align: left;
    font-size: 0.8125rem;
  }
   .price{
     margin: 0;
     padding: 0;
     color: #f44;
     font-size: 0.8125rem;
       
    }
    .desc{
    
      margin: 8px;
      font-size: 12px;
      font-weight: 500;
      color: rgb(51, 51, 51);
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      line-height: 1.3;
    }
    .fuhao{
      color: #f44;
      font-size: 10px;
    }
</style>
