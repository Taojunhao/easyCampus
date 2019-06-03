<template>
  <div>
    <van-row v-for="(item, index) in items" :key="index" class="news-styles">
      <div class="news">
        <van-col span="6" style="padding-left: 0.5rem;">
          <img :src="item.picInfo[0].url" class="news-image"/>
        </van-col>
        <a :href="item.link" target="_blank" style="color: #666666">
          <van-col span="13" >
            <div style="font-size: 12px">{{item.title}}</div>
            <div style="font-size: 10px;margin-top: 3px">发布时间：{{item.ptime}}</div>
          </van-col>
        </a>
        <van-col span="5" style="" class="news-author">{{item.source}}</van-col>

        <div style="clear: both"></div>
      </div>
    </van-row>
  </div>
</template>

<script>
  import {recommend} from "./api";

  export default {
    name: "newList",
    data() {
      return {
        items: []
      }
    },
    props:{
      type: ''
    },
    methods: {
      init() {
        fetch('https://www.apiopen.top/journalismApi', {
          method: 'GET'
        })
          .then((res)=>{
            return res.text()
          })
          .then((res)=>{
            let resData = JSON.parse(res).data
            switch (this.type){
              case 'car': this.items = resData.auto;break;
              case 'dy': this.items = resData.dy;break;
              case 'tech': this.items = resData.tech;break;
              case 'sports': this.items = resData.sports;break;
            }

            console.log(this.items)
          })


      }
    },
    created() {
      setTimeout(this.init(),"2000");
      //2000毫秒后执行test()函数，只执行一次。setInterval("test()","2000");

    }
  }
</script>

<style scoped>
  .news-styles {
    font-size: 12px;
    color: #666666;
  }
  .news {
    border-bottom: 1px solid #E5E5E5;
    margin-top: 0.5rem;
    /*margin-bottom: 0.5rem;*/
    padding-bottom: 0.4rem;
    /*line-height: 20px;*/
  }
  .news-image {
    width: 80px;

  }
  .news-author {
    text-align: right;
    padding-right: 0.5rem;
    color: #f75000;
    font-size: 10px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
</style>
