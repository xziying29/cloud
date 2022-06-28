<template>
  <div class="simple-page">
    <div class="simple-page-wrap">

    <!-- logo -->
    <div class="simple-page-logo ">
      <span style="color: #ffffff">分布式云盘系统</span>
    </div>

    <div class="simple-page-form" id="login-form">
      <h4 class="form-title m-b-xl text-center">用户注册</h4>
      <div class="form-group">
        <input type="text" id="register-account" class="form-control" placeholder="用户名" value="">
      </div>

      <div class="form-group">
        <input type="password" id="register-password" class="form-control" placeholder="密码">
      </div>

      <div class="form-group">
        <input type="text" id="register-email" class="form-control"  placeholder="邮箱地址" value="">
      </div>


      <div class="form-group">
        <input type="text" id="register-verification" class="form-control" style="height: 50px; width: 100px; float: left" placeholder="验证码">
        <img @click="refresh" id="verificationCodeImg" :src="this.$store.state.apiUrl + '/kaptcha/jpg'" style="cursor: pointer;margin-left: 20px" title="看不清？换一张"  alt=""/>

      </div>

      <div class="form-group" style="text-align: right">

      </div>

      <!--<input type="submit" class="btn btn-primary" value="登录">-->
      <button id="register" class="btn btn-primary" style="width: 100%">注册</button>
    </div>

    <div class="simple-page-footer">
      <p>
        <small>已有账户 ?</small>
        <router-link to="./"><a>跳转登录</a></router-link>
      </p>
    </div>
  </div>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import $ from 'jquery/dist/jquery.min'
export default {
  name: "Register",
  methods : {
    refresh : function () {
      $("#verificationCodeImg").attr("src", this.$store.state.apiUrl + "/kaptcha/jpg?t=" + new Date().getTime())
    }
  }
}
</script>

<style scoped>
@import "./misc-pages.css";
.simple-page{
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
}
</style>