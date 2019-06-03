<template>
  <div>
      <van-row v-for="(page, index) of pages" :key="index">
            <van-col span="12" v-for="item of page" :key="item.id">  
                <router-link to="/goods">
                    <div class="category-item" >
                            <a   href="" >
                                <img class="category-item-img" :src="item.imgurl">
                            </a>
                            <p class="desc">{{item.desc}}</p>
                            <span class="price">
                                <span class="fuhao">{{'¥'}}</span>
                                {{item.price}}
                            </span>
                    </div>   
                </router-link>   
            </van-col>
        </van-row>

  </div>

</template>

<script>
    export default {
        name: "categoryContents",
         data () {
        return{
            imgList:[{
                id:'001',
                imgurl:'http://img11.360buyimg.com/babel/s260x260_jfs/t1/32860/1/2752/330757/5c6e1c53Eca18fb05/cf243e60baf8b140.jpg!q90!cc_130x130',
                desc:'笔记本电脑',
                price:'128'
            },{
                id:'002',
                imgurl:'http://img14.360buyimg.com/babel/s260x260_jfs/t2551/38/808471936/121954/40e10aeb/566a3ea8N925ccd55.jpg!q90!cc_130x130',
                desc:'游戏耳机',
                price:'128'
            },{
                id:'003',
                imgurl:'http://img12.360buyimg.com/babel/s260x260_jfs/t1/8056/37/12310/159032/5c3588c6Ec569be32/bc738d5cfdccb388.jpg!q90!cc_130x130',
                desc:'智能手表',
                price:'128'
            },{
                id:'004',
                imgurl:'http://img13.360buyimg.com/babel/s260x260_jfs/t1/2857/18/13058/61635/5bd80dedE79ba7283/f10c989f6453f098.jpg!q90!cc_130x130',
                desc:'电动剃须刀',
                price:'128'
            },{
                id:'005',
                imgurl:'http://img10.360buyimg.com/babel/s260x260_jfs/t1/22531/20/252/256220/5c087c7fE70a2ceb2/066c79a104f1bc19.jpg!q90!cc_130x130',
                desc:'鸭舌帽',
                price:'128'
            }]
        }
    },
    computed:{
    pages () {
        const pages=[]
        this.imgList.forEach((item,index)=>{
            const page = Math.floor(index/2)
            if(!pages[page]){
                pages[page]=[]
            }
            pages[page].push(item)
        })
        return pages
    },
 
},

    }
</script>

<style scoped>
  .box-item{
    width: 45%;
    height:200px;
    border: 1px solid #000;
    float:left;
    margin-right:10px;
    margin-left:5px;
    margin-bottom:20px;
    text-align:center;
    /*line-height:200px;*/
    font-size:20px;
    color:#F00;
  }
  .category-item-img{
    width: 100%;
  }
  .van-col--12{
    width: 45%;
    margin: 5px 9px;
    box-shadow: #0000003d 0 0 10px 0px;
  }
 .price{
     margin: 0;
     padding: 0;
     color: #f44;
     font-size: 0.8125rem;
       
    }
  .desc{
      margin: 0;
      padding: 0;
      font-size: 0.8125rem;
      text-align: left;
      font-weight: 500;
      color: rgb(51, 51, 51);
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      line-height: 1.3;
      margin-left: 5px;
    }
  .fuhao{
      color: #f44;
      font-size: 10px;
      margin-left: 5px;
    }
 

 
</style>
