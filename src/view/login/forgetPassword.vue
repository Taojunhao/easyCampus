<template>
  <div>
    <van-nav-bar
      title="找回密码"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
      style="border-bottom: 1px solid rgba(220, 220, 220, 1)"
    />
    <div v-if="!isSendEmail">

      <div class="forget-form">
        <div class="forget-form-item">
          <van-field v-model="email" class="forget-form-input" clearable placeholder="请输入邮箱" />
        </div>
        <div class="forget-form-item">
          <van-field v-model="username"  class="forget-form-input" clearable placeholder="请输入用户名" />
        </div>
      </div>
      <div class="forget-btn forget-btn-top">
        <van-button    type="info" size="large" class="forget-btn-btn" @click="next()">下一步</van-button>
      </div>
    </div>
    <div v-else>
      <div v-if="isOk">
        <div class="forget-success">
          <img src="../../assets/login/success.png"/>
        </div>
        <div class="forget-content">
          发送成功，请前往邮箱查收!
        </div>
      </div>
      <div v-else>
        <div class="forget-success">
          <img src="../../assets/login/error.png"/>
        </div>
        <div class="forget-content">
          发送失败！
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "forgetPassword",
    data() {
      return {
        email: '',
        username: '',
        isSendEmail: false,
        isOk:true,
      }
    },
    methods: {
      onClickLeft() {
        this.$router.push({path:'/login'})
      },
      next() {
        this.isSendEmail = true;
        this.isOk = true;
        let second = 5;
        const timer = setInterval(() => {
          second--;
          if (second) {
            let message = `${second}s！`;
          } else {
            clearInterval(timer);
            this.$router.push({path:'/login'})
            Toast.clear();
          }
        }, 1000);

      }
    }
  }
</script>

<style scoped>
  .forget-success {
    margin-top: 100px;
  }
  .forget-content {
    color: rgba(120, 120, 120, 1);
  }
  .forget-success img{
    width: 80px;
  }
  .forget-content {
    margin-top: 20px;
  }
  .forget-btn-btn {
    background-color: #199ED8;
  }
  .forget-btn-top {
    padding-top: 20px;
  }
  .forget-btn {
    border-radius: 20px;
    width: 90%;
    margin: 0 auto;
  }
  .forget-icon-img img{
    width: 85px;
    border-radius: 50%;
    border: 1px solid rgba(153, 153, 153, 1);
  }
  .forget-form {
    padding-top: 10px;
  }
  .forget-form-item {
    width: 90%;
    height: 44px;
    justify-content:center;
    align-items:center;
    display:-webkit-flex;
    margin: 0 auto;
    border: 1px solid rgba(153, 153, 153, 1);
    border-radius: 5px;
    margin-top: 15px;
  }
  .forget-form-input {
    width: 90%;
  }
  /deep/ .van-button--large {
    width: 100%;
    height: 38px;
    line-height: 39px;
  }
</style>
