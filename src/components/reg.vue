<template>
    <div>
        <mu-appbar title="注册">
          <mu-icon-button icon='keyboard_arrow_left' slot="left" style="color: #4E4C4C;"onclick="window.history.go(-1)"/>
          <mu-icon-button icon='clear' slot="right" style="color: #4E4C4C;"/>
        </mu-appbar>
        <div class="logo">
            <img src="../assets/images/logo.png" height="70" width="50" alt="" class="logo_img">
            <div class="logo_words">
                闲片子<br>
                IDLE SLICE
            </div>
        </div>
        <div class="input_in">
        <mu-text-field label="请输入用户名" hintText="请输入用户名" type="text" labelFloat class="input_in" style="width:100%;"/>
        <mu-text-field label="设置密码" hintText="设置密码" type="password" labelFloat class="input_in" style="width:100%;"/>
        <mu-text-field label="确认密码" hintText="确认密码" type="password" labelFloat class="input_in" style="width:100%;"/>
        <mu-text-field label="请输入手机号" hintText="请输入手机号" type="text" labelFloat style="width:60%;"/><mu-flat-button  class="demo-flat-button" backgroundColor="#fff" color="#B81B22" style="border:1px #B81B22 solid;width:40%"label="获取验证码"/>
        <mu-text-field label="6位验证码" hintText="请输入6位验证码" type="text" labelFloat class="input_in" style="width:100%;"/>
        </div>
        <div class="login">
        <mu-flat-button class="demo-flat-button" backgroundColor="#B81B22" color="#FFF" style="width:100%;height:45px;"
        label="确 认"/>
        </div>
        <div class="getback_reg">
            <router-link to="/">已有账号登录</router-link>
        </div>
    </div>
</template>

<script>
    export default{
        }
</script>
