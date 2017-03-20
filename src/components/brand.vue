<template>
<div>
    <mu-appbar :zDepth="0" class="brand_title">
        <mu-icon-button icon='keyboard_arrow_left' slot="left" style="color: #4E4C4C;" onclick="window.history.go(-1)"/>
        <mu-icon-button icon='favorite_border' slot="right" style="color: #4E4C4C;"/>
    </mu-appbar>
    <div class="brand_head">
        <div class="brand_logo">
            <img src="../assets/images/brand1.png" height="30" width="70" alt="">
        </div>
        {{$route.params.id}}
    </div>
    <div>
    <div class="brand_tab">
        <div class="tab_1" v-bind:class="{ showThis: isActive }" @click="show1">品牌故事</div>
        <div class="tab_1" v-bind:class="{ showThis: !isActive }" @click="show2">品牌产品</div>
    </div>
    <div v-if="show" style="width:95%;margin:0 auto;color:#7A7A7A;line-hegiht:30px;margin-top:20px;">
            &emsp;Supreme于1994年秋季诞生于美国纽约曼哈顿，由James Jebbia创办，产品以纽约刚刚兴起的滑板运动为主轴，店内吸引了不少城中有名的滑板好手和街头艺术家常常聚会到Supreme的店面。渐渐地Supreme成为纽约街头主流文化，特别是滑板文化的街头潮流品牌。
        </div>
    <ul class="brand_goods" v-if="!show" style="width:95%;margin:0 auto;color:#7A7A7A;line-hegiht:30px;margin-top:20px;overflow:hidden;">
        <li><img src="../assets/images/brand_d2.png"  width="100%" alt=""></li>
        <li><img src="../assets/images/brand_d2.png"  width="100%" alt=""></li>
        <li><img src="../assets/images/brand_d2.png"  width="100%" alt=""></li>
        <li><img src="../assets/images/brand_d2.png"  width="100%" alt=""></li>
    </ul>
</div>
</div>
</template>

<script>
export default {
  data () {
    return {
        isActive:true,
        show:true
    }
  },
  methods: {
    show1(){
        this.isActive=true;
        this.show=true;
    },
    show2(){
        this.isActive=false;
        this.show=false;
    },
    showid(){
        console.log(this.$route.query.id)
    }
  },
  created: function(){
    this.showid();
  }
}
</script>
<style>
.showThis{
    background: #C50B0C !important;
}
.brand_head{
    background: url(../assets/images/brand_d1.png) no-repeat;
    height: 230px;
    width: 100%;
    background-size: cover;
    padding-top: 80px;
    text-align: center;
    font-size: 20px;
    color: #fff
}
.brand_title{
    opacity: 0.5;
}
.brand_logo{
    background: #fff;
    border-radius: 50px;
    height: 80px;
    width: 80px;
    margin: 0 auto;
    text-align: center;
    padding-top: 25px;
}
.brand_tab{
    width: 100%;
    height: 40px;
}
.tab_1{
    width: 50%;
    background: #333333;
    color: #fff;
    text-align: center;
    height: 40px;
    line-height: 40px;
    float: left;
}
.brand_goods li{
    float: left;
    width: 49%;
}
.brand_goods li:nth-of-type(even){margin-left: 2%;}
</style>