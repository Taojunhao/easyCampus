<template>
  <div>
{{testMessage}}
  </div>
</template>

<script>
  import {Test} from "./api";

  export default {
    name: "test",
    data() {
      return {
        testMessage: ''
      }
    },
    methods: {
      test() {
        let data = {}
        Test.test(data).then((res) => {
          this.testMessage = res;
        }).catch((err) => {
          console.log(err)
        });
      }
    },
    mounted() {
      this.test()
    }
  }
</script>

<style scoped>

</style>
