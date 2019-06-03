<template>
  <div>
    <div class="login-icon">
      <div class="login-icon-img">
        <img src="../../assets/logo.png"/>
      </div>
    </div>
    <div class="login-form">
      <div class="login-form-item">
        <van-field v-model="username" class="login-form-input" clearable placeholder="请输入用户名" />
      </div>
      <div class="login-form-item">
        <van-field v-model="password" type="password" class="login-form-input" clearable placeholder="请输入密码" />
      </div>
    </div>
    <div class="login-btn login-btn-top">
      <van-button    type="default" size="large" class="login-btn-btn" @click="login()">登陆</van-button>
      <div class="login-btn-href">
        <span class="href-1" @click="findPassword()">找回密码</span>
        <span class="href-1" style="margin-left: 10px" @click="faceLogin()">人脸登陆</span>
        <span class="href-2" @click="register()">注册</span>
        <div style="clear: both"></div>
      </div>
    </div>
  </div>
</template>

<script>
  import {Login} from "./api";

  export default {
    name: "login",
    data() {
      return {
        username: '',
        password: ''
      }
    },
    methods: {
      findPassword() {
        this.$router.push({path:'/forget'})
      },
      register() {
        this.$router.push({path:'/register'})
      },
      login() {
        let data = {
          username: this.username,
          password: this.password
        }
        this.$store.dispatch('accountLoginSubmit', data).then(() => {
          this.$router.push({path: '/'})
        })
      },
      faceLogin() {

      }
    }
  }
</script>

<style scoped>
  .login-btn-btn {
    background-color: #199ED8;
    color: white;
    font-size: 14px;
  }
  .href-1 {
    float: left;
    color: rgba(100, 100, 100, 1);
  }
  .href-2 {
    float: right;
    color: rgba(100, 100, 100, 1);
  }
  .login-btn-href {
    width: 100%;
    margin: 0 auto;
    margin-top: 15px;

    font-size: 14px;
  }
  .login-btn-top {
    padding-top: 20px;
  }
  .login-btn {
    border-radius: 5px;
    width: 90%;
    margin: 0 auto;
  }
  .login-icon-img {
    text-align: center;
  }
  .login-icon-img img{
    width: 85px;
    border-radius: 50%;
    border: 1px solid rgba(153, 153, 153, 1);
  }
  .login-icon {
    padding-top: 100px;
  }
  .login-form {
    padding-top: 20px;
  }
  .login-form-item {
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
  .login-form-input {
    width: 90%;
  }

  /deep/ .van-button--large {
    width: 100%;
    height: 38px;
    line-height: 39px;
  }
</style>
