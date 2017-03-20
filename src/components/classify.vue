<template>
    <div>
       <div class="header_search">
        <div class="sweep">
            <mu-icon value="keyboard_arrow_left"  color="#909090" onclick="window.history.go(-1)"/>
        </div>
        <div class="search">
            <mu-icon value="search" :size="16" class="search_icon"/>
            <input type="text" >
        </div>
        <div class="shopping_cart">
            <div class="goods_num">{{this.$store.state.goods}}</div>
            <router-link to="shopcart"><mu-icon value="shopping_cart" color="#909090"/></router-link>
        </div>
        <div class="menu">上衣</div>
        <div class="menu">价格筛选</div>
         <ul class="brand_goods" v-if="!show" style="width:95%;margin:0 auto;color:#7A7A7A;line-hegiht:30px;margin-top:20px;overflow:hidden;">
        <li><img src="../assets/images/brand_d2.png"  width="100%" alt="">PARKA|冬季欧美复古设计师款军绿色羽绒服</li>
        
    </ul>
    </div>
    </div>
</template>

<script>
   export default {
 }
</script>
<style>
.menu{
    float: left;
    width: 50%;
    height: 40px;
    line-height: 40px;
    text-align: center;
    color: #A0A0A0;
}
</style>
