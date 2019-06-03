<template>
  <div>
    <van-nav-bar
      title="注册"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
      style="border-bottom: 1px solid rgba(220, 220, 220, 1)"
    />
    <div v-if="isEdit">
      <div class="create-form">
        <van-cell-group>
          <van-field
            v-model="form.username"
            clearable
            label="用户名"
            placeholder="请输入用户名"
          />

          <van-field
            v-model="form.password"
            type="password"
            label="密码"
            clearable
            placeholder="请输入密码"
          />
          <van-field v-model="form.nickName"
                     label="昵称"
                     clearable placeholder="请输入昵称" />
          <van-field v-model="form.name"
                     label="姓名"
                     clearable placeholder="请输入姓名" />
          <van-field v-model="form.address"
                     label="地址"
                     clearable placeholder="请输入地址" />
          <van-field v-model="form.email"
                     label="邮箱"
                     clearable placeholder="请输入邮箱" />
          <van-field v-model="form.phoneNumber"
                     label="手机号码"
                     clearable placeholder="请输入手机号码" />
          <van-field v-model="form.school"
                     label="学校"
                     clearable placeholder="请输入学校" />

        </van-cell-group>
      </div>
      <div class="create-btn create-btn-top">
        <van-button    type="info" size="large" class="create-btn-btn" @click="next()">下一步</van-button>
      </div>
    </div>
    <div v-else>
      <div v-if="isOk">
        <div class="create-success">
          <img src="../../assets/login/success.png"/>
        </div>
        <div class="create-content">
          注册成功!
        </div>
        <div class="create-content">
          {{message}}
        </div>
      </div>
      <div v-else>
        <div class="create-success">
          <img src="../../assets/login/error.png"/>
        </div>
        <div class="create-content">
          发送失败！
          {{message}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {Login} from "./api";
  import {Msg} from "../../tools/message/Msg";
  import crypto from 'crypto';
  export default {
    name: "createNew",
    data(){
      return {
        isEdit: true,
        form: {},
        isOk: true,
        message: ''
      }
    },
    methods: {
      onClickLeft() {
        this.$router.push({path:'/login'})
      },
      next() {
        let md5 = crypto.createHash("md5");
        md5.update(this.form.password);
        let password = md5.digest('hex');
        this.form.password = password
        Login.register(this.form).then((res) => {

          if (res.data.status == 1) {
            Msg.success(res.data.message)
            this.isEdit = false;
            this.isOk = true;
            let second = 5;
            this.message = '5s后返回!'
            const timer = setInterval(() => {
              second--;
              if (second) {
                this.message = `${second}s后返回！`;
              } else {
                clearInterval(timer);
                this.$router.push({path:'/login'})
                Toast.clear();
              }
            }, 1000);
          } else {
            Msg.warn(res.data.message)
          }
        }).catch((err) => {
          Msg.error(err)
        });



      }
    }
  }
</script>

<style scoped>
  .create-success {
    margin-top: 100px;
  }
  .create-content {
    color: rgba(120, 120, 120, 1);
  }
  .create-success img{
    width: 80px;
  }
  .create-content {
    margin-top: 20px;
  }
  .create-btn-btn {
    background-color: #199ED8;
  }
  .create-btn-top {
    padding-top: 5px;
  }
  .create-btn {
    border-radius: 20px;
    width: 90%;
    margin: 0 auto;
  }
  .create-icon-img img{
    width: 85px;
    border-radius: 50%;
    border: 1px solid rgba(153, 153, 153, 1);
  }
  .create-form {
    /*padding-top: 120px;*/
  }
  .create-form-item {
    width: 100%;
    height: 44px;
    justify-content:center;
    align-items:center;
    display:-webkit-flex;
    margin: 0 auto;
    /*border: 1px solid rgba(153, 153, 153, 1);*/
    border-radius: 20px;
    margin-top: 5px;
  }
  .create-form-input {

    /*border: 1px solid rgba(200, 200, 200, 1);*/
    width: 100%;
  }
  /deep/ .van-button--large {
    width: 100%;
    height: 38px;
    line-height: 39px;
  }
</style>
