<template>
  <div>
    <van-nav-bar
      title="地址编辑"
      left-arrow
      :fixed="true"
      @click-left="onClickLeft"
    />
    <div style="height: 50px;width: 100%"></div>
    <van-address-edit
      :area-list="areaList"
      show-postal
      show-delete
      show-set-default
      show-search-result
      :search-result="searchResult"
      @save="onSave"
      @delete="onDelete"
      @change-detail="onChangeDetail"
    />
  </div>
</template>

<script>
  export default {
    name: "addressEdit",
    data() {
      return {
        areaList,
        searchResult: []
      }
    },

    methods: {
      onSave() {
        Toast('save');
      },
      onDelete() {
        Toast('delete');
      },
      onChangeDetail(val) {
        if (val) {
          this.searchResult = [{
            name: '黄龙万科中心',
            address: '杭州市西湖区'
          }];
        } else {
          this.searchResult = [];
        }
      },
      onClickLeft() {
        this.$router.push({path:'/express'})
      },
    }
  }
</script>

<style scoped>

</style>
