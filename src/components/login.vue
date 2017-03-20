<template>
<div>
    <div v-if="show">
        <mu-appbar title="登录">
          <mu-icon-button slot="left"/>
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
        <mu-text-field label="用户名/手机/邮箱" hintText="请输入用户名/手机/邮箱" type="text" labelFloat style="width:100%;"/>
        <mu-text-field label="密码" hintText="请输入密码" type="password" labelFloat class="input_in" style="width:100%;"/>
        </div>
        <div class="login">
        <router-link to="/shop"><mu-flat-button class="demo-flat-button" backgroundColor="#B81B22" color="#FFF" style="width:100%;height:45px;"
        label="登 录"/></router-link>
        </div>
        <div class="getback_reg">
            <router-link to="/getback" class="getback">忘记密码?</router-link>
            <router-link to="/reg" class="reg">立即注册</router-link>
        </div>
        <div class="cooperate">
            <div class="cooperate_in">合作账号登录</div>
        </div>
        <div class="other_login">
            <div class="wx"><img src="../assets/images/wx.png" height="50" width="50" alt="">微信登录</div>
            <div class="qq"><img src="../assets/images/qq.png" height="50" width="50" alt="">QQ登录</div>
        </div>
    </div>
    <div v-if="!show" class="ad">
    </div>
</div>
</template>

<script>
    export default{
        data(){
            return {
                show:false
            }
        },
        methods:{
            ad(){
              setTimeout(() => {
                this.show=true
              }, 3000)    
            }
        },
        mounted(){
            this.ad()
        }
    }    
</script>
<style>
.ad{
    width: 100%;
    height: 500px;
    background: url(../assets/images/loading.png) 100% 100%;
    background-size: cover;
}
.mu-appbar{
    background-color: #fff !important;
    position: fixed;
    top: 0px;
}
.mu-appbar-title{
    text-align: center;
    color: #4E4C4C;
}
.logo{
    width: 166px;
    margin: 0 auto;
    margin-top: 96px;
    margin-bottom: 20px;
    overflow: hidden;
}
.logo_img{
    float: left;
}
.logo_words{
    float: left;
    margin-left: 8%;
    font-size: 20px;
    color: #B81B22;
}
.input_in{
    width: 85%;
    margin: 0 auto;
}
.login{
    width: 85%;
    margin: 0 auto;
    margin-top: 15px;
}
.getback_reg{
    width: 85%;
    margin: 0 auto;
    margin-top: 30px;
    overflow: hidden;
    text-align: right;
}
.getback_reg a{
    border-bottom:1px solid #B81B22;
    padding-bottom: 1px;
}
.getback{
    border-bottom:1px solid #B81B22;
    padding-bottom: 1px;
    color: #B81B22;
    display: block;
    float: left;
}
.reg{
    border-bottom:1px solid #B81B22;
    padding-bottom: 1px;
    color: #B81B22;
    display: block;
    float: right;
}
.cooperate{
    border-bottom: 1px solid #979798;
    width: 85%;
    margin: 0 auto;
    margin-top: 80px;
    position: relative;
}
.cooperate_in{
    width: 30%;
    font-size: 1.2rem;
    text-align: center;
    margin: 0 auto;
    background-color: #fff;
    color: #979798;
    position: absolute;
    left: 35%;
    top: -9px;
}
.other_login{
    width:55%;
    margin: 0 auto; 
    margin-top: 15px;
}
.wx{
    float: left;
    text-align: center;
    color: #979798;
    font-size: 1.2rem;
}
.qq{
    float: right;
    text-align: center;
    color: #979798;
    font-size: 1.2rem;
}
.wx img,.qq img{
    display: block;
}
</style>