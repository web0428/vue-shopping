<template>
<div>
    <div class="person_header">
      <span>个人<mu-icon value="settings" class="settings" :size="20"/></span>
      <div class="person_logo">
        <img src="../assets/images/person.png" height="100" width="100" alt="">
      </div>
      <span>如果我善解人意</span>
      <div class="follow">
        <p>091&emsp;我的关注</p>
      </div>
      <div class="follow">
        <p>191&emsp;我的粉丝</p>
      </div>
    </div>
    <ul class="classify">
      <li>
        <mu-icon value="collections"/><br>
        我的收藏
      </li>
      <li>
        <mu-icon value="folder_shared"/><br>
        我的分享
      </li>
      <li>
        <mu-icon value="chrome_reader_mode"/><br>
        订单管理
      </li>
      <li>
        <mu-icon value="location_on"/><br>
        收货地址
      </li>
      <li>
        <mu-icon value="contact_phone"/><br>
        客户中心
      </li>
      <li>
        <mu-icon value="textsms"/><br>
        我的消息
      </li>
    </ul>
    <mu-paper>
        <mu-bottom-nav :value="bottomNav" @change="handleChange">
        <router-link to="/shop"><mu-bottom-nav-item value="recents" title="商店" icon="shopping_basket" /></router-link>
        <router-link to="/magazine"><mu-bottom-nav-item value="favorites" title="杂志" icon="import_contacts" /></router-link>
        <router-link to="/share"><mu-bottom-nav-item value="nearby" title="分享" icon="toys" /></router-link>
        <router-link to="/person"><mu-bottom-nav-item value="person" title="个人" icon="person_outline"/></router-link>
        </mu-bottom-nav>
    </mu-paper>
</div>
</template>

<script>
export default {
  data () {
    return {
      bottomNav: 'person'
    }
  },
  methods: {
    handleTabChange (val) {
      this.activeTab = val
    },
    handleChange (val) {
      this.bottomNav = val
    }
  }
}
</script>
<style>
.person_header{
  width: 100%;
  height: 290px;
  background: url(../assets/images/person2.png)  no-repeat;
  background-size: cover;
}
.person_header span{
  display: block;
  width: 100%;
  text-align: center;
  color: #fff;
  font-size: 18px;
  padding-top: 10px;
  position: relative;
}
.settings{
  position: absolute;
  right: 20px;
}
.person_logo{
  width: 100%;
  height: 100px;
  text-align: center;
  margin-top: 30px;
}
.follow{
  width: 50%;
  float: left;
  text-align: center;
  margin-top: 20px;
}
.follow p{
  border:1px #fff solid;
  width: 90px;
  margin: 0 auto;
  height: 25px;
  line-height: 25px;

  color: #fff;
}
.classify{
  width: 90%;
  margin: 0 auto;
}
.classify li{
  float: left;
  text-align: center;
  width: 50%;
  height: 100px;
  border-bottom:1px solid #ccc;
  padding-top: 30px;
  color: #777777;
}
.classify li:nth-child(even){
    border-left: 1px solid #ccc;
}
/*bottom*/
.mu-paper{
    position: fixed;
    bottom: 0;
    width: 100%;
}
</style>