<template>
  <div>
    <van-row v-for="(item, index) in items" :key="index" class="news-styles">
      <div class="news">
        <a :href="item.url" target="_blank" style="color: #666666">
          <van-col span="18" style="padding-left: 0.8rem">
            {{item.name}}
          </van-col>
        </a>
        <van-col span="6" 
            style="text-align: right;padding-right: 0.8rem;color: #f75000; font-size: 10px;white-space: nowrap;text-overflow: ellipsis;">
            {{item.author}}
        </van-col>
        <div style="clear: both"></div>
      </div>
    </van-row>
  </div>
</template>

<script>
  import {recommend} from "./api";

  export default {
    name: "schoolNew",
    data() {
      return {
        items: []
      }
    },
    methods: {
      init() {
        recommend.getNewList().then((res) => {
          this.items = res.data;
          console.log(res.data)
        }).catch((err) => {
          console.log(err)
        });

        // let data = {
        //   currentPage: '1',
        //   pageSize:'1'
        // }
        // recommend.findPunchRecords(data).then((res) => {
        //   console.log(res.data)
        // }).catch((err) => {
        //   console.log(err)
        // });
      }
    },
    created() {
      this.init()
    }
  }
</script>

<style scoped>
  .news-styles {
    font-size: 12px;
    color: #666666;
  }
  .news {
    margin-top: 0.5rem;
    /*margin-bottom: 0.5rem;*/
    padding-bottom: 0.4rem;

    border-bottom: 1px solid #E5E5E5;
    line-height: 25px;
  }
</style>
