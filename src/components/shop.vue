<template>
<div>
    <div class="header_search">
        <div class="sweep">
            <mu-icon value="fullscreen"  color="#909090"/>
        </div>
        <div class="search">
            <mu-icon value="search" :size="16" class="search_icon"/>
            <input type="text" >
        </div>
        <div class="shopping_cart">
            <div class="goods_num">{{this.$store.state.goods}}</div>
            <router-link to="shopcart"><mu-icon value="shopping_cart" color="#909090"/></router-link>
        </div>
    </div>
    <div>
        <mu-tabs :value="activeTab" @change="handleTabChange">
            <mu-tab value="tab1" title="首页" @click="pageScroll"/>
            <mu-tab value="tab2" title="品牌" @click="pageScroll"/>
            <mu-tab value="tab3"  title="分类" @click="pageScroll"/>
            <mu-tab value="tab4"  title="搭配" @click="pageScroll"/>
        </mu-tabs>
          <div v-if="activeTab === 'tab1'" class="tab">
              <div class="block">
                <el-carousel height="150px">
                  <el-carousel-item v-for="n in 4" key="1">
                    <img src="../assets/images/index1.png" height="100%" width="100%" alt="">
                  </el-carousel-item>
                </el-carousel>
              </div>
            <ul class="shops_msg">
                <li>
                    <img v-lazy="index2" height="100%" width="100%" alt="">
                    <img v-lazy="index3" height="100%" width="100%" alt="">
                    <img v-lazy="index2" height="100%" width="100%" alt="">
                </li>
                <li>
                    <img v-lazy="index3" height="100%" width="100%" alt="">
                    <img v-lazy="index2" height="100%" width="100%" alt="">
                    <img v-lazy="index3" height="100%" width="100%" alt="">
                </li>

            </ul>
          </div>
          <div v-if="activeTab === 'tab2'" class="tab">
            <router-link :to="'/brand/'+id1"><div class="brand">
                <img src="../assets/images/brand1.png" height="20" width="60" alt="">
                <div class="brand_intro">
                    <span>Supreme</span>
                    <div class="brand_way">全球购</div>
                </div>
                <mu-icon value="keyboard_arrow_right" color="#909090" class="arrow_right" :size="36"/>
            </div></router-link>
            <router-link :to="'/brand/'+id2"><div class="brand">
                <img src="../assets/images/brand5.png" height="20" width="60" alt="">
                <div class="brand_intro">
                    <span>Gucci</span>
                    <div class="brand_way">全球购</div>
                </div>
                <mu-icon value="keyboard_arrow_right" color="#909090" class="arrow_right" :size="36"/>
            </div></router-link>
            <router-link :to="'/brand/'+id3"><div class="brand">
                <img src="../assets/images/brand6.png" height="20" width="60" alt="">
                <div class="brand_intro">
                    <span>Nike</span>
                    <div class="brand_way">全球购</div>
                </div>
                <mu-icon value="keyboard_arrow_right" color="#909090" class="arrow_right" :size="36"/>
            </div></router-link>
            <router-link :to="'/brand/'+id4"><div class="brand">
                <img src="../assets/images/brand2.png" height="20" width="60" alt="">
                <div class="brand_intro">
                    <span>Volcom</span>
                    <div class="brand_way">全球购</div>
                </div>
                <mu-icon value="keyboard_arrow_right" color="#909090" class="arrow_right" :size="36"/>
            </div></router-link>
            <router-link :to="'/brand/'+id5"><div class="brand">
                <img src="../assets/images/brand3.png" height="20" width="60" alt="">
                <div class="brand_intro">
                    <span>Red Wing</span>
                    <div class="brand_way">全球购</div>
                </div>
                <mu-icon value="keyboard_arrow_right" color="#909090" class="arrow_right" :size="36"/>
            </div></router-link>
            <router-link :to="'/brand/'+id6"><div class="brand">
                <img src="../assets/images/brand4.png" height="20" width="60" alt="">
                <div class="brand_intro">
                    <span>Ermenegildo Zegna</span>
                    <div class="brand_way">全球购</div>
                </div>
                <mu-icon value="keyboard_arrow_right" color="#909090" class="arrow_right" :size="36"/>
            </div></router-link>
          </div>
          <div v-if="activeTab === 'tab3'" class="tab">
            <ul class="genre">
                <li>
                    <router-link to="/classify">
                        <img v-lazy="genre1" height="100%" width="100%" alt="">
                    </router-link>
                </li>
                <li><img v-lazy="genre2" height="100%" width="100%" alt=""></li>
                <li><img v-lazy="genre3" height="100%" width="100%" alt=""></li>
                <li><img v-lazy="genre4" height="100%" width="100%" alt=""></li>
                <li><img v-lazy="genre5" height="100%" width="100%" alt=""></li>
                <li><img v-lazy="genre6" height="100%" width="100%" alt=""></li>
            </ul>
          </div>
          <div v-if="activeTab === 'tab4'" class="tab">
            <ul class="collocation">
                <li><img src="../assets/images/collocation1.png" height="64px" width="64px" alt=""><br>休闲</li>
                <li><img src="../assets/images/collocation2.png" height="64px" width="64px" alt=""><br>商务</li>
                <li><img src="../assets/images/collocation3.png" height="64px" width="64px" alt=""><br>运动</li>
                <li><img src="../assets/images/collocation4.png" height="64px" width="64px" alt=""><br>街头</li>
                <li><img src="../assets/images/collocation5.png" height="64px" width="64px" alt=""><br>复古</li>
                <li><img src="../assets/images/collocation6.png" height="64px" width="64px" alt=""><br>英伦</li>
                <li><img src="../assets/images/collocation7.png" height="64px" width="64px" alt=""><br>日韩</li>
                <li><img src="../assets/images/collocation8.png" height="64px" width="64px" alt=""><br>欧美</li>
            </ul>
            <div class="collocation_title">
                <span>搭配精选</span>
            </div>
            <ul class="collocation_clothes">
                <li>
                  <img v-lazy="collocation9" height="100%" width="100%" alt="">
                  <img v-lazy="collocation10" height="100%" width="100%" alt="">
                  <img v-lazy="collocation9" height="100%" width="100%" alt="">
                </li>
                <li>
                    <img v-lazy="collocation10" height="100%" width="100%" alt="">
                    <img v-lazy="collocation9" height="100%" width="100%" alt="">
                    <img v-lazy="collocation10" height="100%" width="100%" alt="">
                </li>
            </ul>
          </div>
        </div>
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
import index2 from '../assets/images/index2.png'
import index3 from '../assets/images/index3.png'
import genre1 from '../assets/images/genre1.png'
import genre2 from '../assets/images/genre2.png'
import genre3 from '../assets/images/genre3.png'
import genre4 from '../assets/images/genre4.png'
import genre5 from '../assets/images/genre5.png'
import genre6 from '../assets/images/genre6.png'
import collocation9 from '../assets/images/collocation9.png'
import collocation10 from '../assets/images/collocation10.png'
export default {
  data () {
    return {
      activeTab: 'tab1',
      bottomNav: 'recents',
      id1:"Supreme",
      id2:"Gucci",
      id3:"Nike",
      id4:"Volcom",
      id5:"Red Wing",
      id6:"Ermenegildo",
      index2:index2,
      index3:index3,
      genre1:genre1,
      genre2:genre2,
      genre3:genre3,
      genre4:genre4,
      genre5:genre5,
      genre6:genre6,
      collocation9:collocation9,
      collocation10:collocation10,
    }
  },
  methods: {
    handleTabChange (val) {
      this.activeTab = val
    },
    handleChange (val) {
      this.bottomNav = val
    },
    pageScroll(){
       scrollTo(0,0);
    },
    shop(){
        alert("请进入购物车进行结算")
    }
  },
    created(){
            this.shop();
        },
}
</script>
<style>
/*头部搜索*/
.header_search{
    height: 48px;
    width: 100%;
    border-bottom: 1px solid #ECECEC;
    position: fixed;
    top: 0;
    background: #fff;
    z-index: 100;
}
.mu-tabs{
    position: fixed !important;
    top: 48px;
}
.search{
    float: left;
    position: relative;
    width:60%;
}
.search_icon{
    position: absolute;
    top: 17px;
    left: 8px;
}
.search input{
    width: 100%;
    margin-top: 9px;
    height: 30px;
    background: #EAEBED;
    border:none;
    outline: none;
    padding-left: 25px;
    border-radius: 5px;
}
.sweep,.shopping_cart{
    float: left;
    width: 20%;
    text-align: center;
    height: 48px;
    vertical-align: middle;
}
.sweep i,.shopping_cart i{
    margin-top: 12px;
}
.shopping_cart{
    position: relative;
}
.goods_num{
    position: absolute;
    border-radius: 50px;
    height: 15px;
    width: 15px;
    background: #C60B0A;
    right: 20px;
    top: 5px;
    line-height: 15px;
    text-align: center;
    color: #fff;
}
/*tab*/
.tab{
    margin-top: 100px;
}
.mu-tabs{
    background:#fff !important;
    border-bottom: 1px solid #909090;
}

.mu-tab-link{
    color: #909090 !important;
}
.mu-tab-active{
    color: #B81B22 !important;
}
/*tab1*/
.shops_msg{
    width: 95%;
    margin: 0 auto;
    height: 500px;
    margin-top: 5px;
}
.shops_msg li{
    float: left;
    width: 49%;
    text-align: center;
}
.shops_msg li:nth-of-type(even){margin-left: 2%;}
/*tab2*/
.brand{
    height: 80px;
    width: 100%;
    border-bottom: 1px solid #909090;
    position: relative;
}
.brand img{
    margin-top: 30px;
    margin-left: 20px;
    float: left;
}
.brand_intro{
    float: left;
    color: #909090;
    margin-top: 10px;
    margin-left: 20px;
}
.brand_intro span{
    font-size: 20px;
}
.brand_way{
    border:1px solid #909090 ;
    text-align: center;
    width: 50px;
}
.arrow_right{
    position: absolute;
    right: 24px;
    top: 20px;
}
/*tab3*/
.genre{
    height: 500px;
    width: 95%;
    margin: 0 auto;
    margin-top:5px;
}
.genre li{
    float: left;
    width: 49%;

}
.genre li:nth-of-type(even){margin-left: 2%;}
/*tab4*/
.collocation{
    width: 80%;
    margin:0 auto;
    height: 200px;
    margin-top: 110px;
    overflow: hidden;
}
.collocation li{
    display: block;
    float: left;
    border-radius: 50px;
    height: 100px;
    width: 25%;
    text-align: center;
    color: #909090;
}
.collocation_title{
    width: 120px;
    border-bottom: 1px #777777 solid;
    position: relative;
    margin:0 auto;
    height: 30px;
}
.collocation_title span{
    display: block;
    position: absolute;
    color: #777777;
    background: #fff;
    bottom: -10px;
    width: 80px;
    left: 20px;
    font-size:15px;
    margin: 0 auto;
    text-align: center;
}
.collocation_clothes{
    width: 95%;
    margin:0 auto;
    height: 500px;
    margin-top: 20px;
}
.collocation_clothes li{
    float: left;
    width: 49%;

}
.collocation_clothes li:nth-of-type(even){margin-left: 2%;}
/*bottom*/
.mu-paper{
    position: fixed;
    bottom: 0;
    width: 100%;
}
</style>