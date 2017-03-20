<template>
<div>
    <mu-appbar title="杂志" zDepth="0">
          <mu-icon-button slot="left" icon='search' style="color: #4E4C4C;"/>
          <mu-icon-button icon='menu' slot="right" style="color: #4E4C4C;"/>
    </mu-appbar>
    <div class="magazine_content">
    <div class="magazine">
        <img v-lazy="magazine1"  width="100%" alt="">
        <span class="magazine_words">如何玩转欧式街头风</span>
    </div>
    <div class="magazine">
        <img v-lazy="magazine2"   width="100%" alt="">
        <span class="magazine_words">怎么穿西装才不像卖保险的</span>
    </div>
    <div class="magazine">
        <img v-lazy="magazine1"   width="100%" alt="">
        <span class="magazine_words">如何玩转欧式街头风</span>
    </div>
    <div class="magazine">
        <img v-lazy="magazine2"   width="100%" alt="">
        <span class="magazine_words">怎么穿西装才不像卖保险的</span>
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
import magazine1 from '../assets/images/magazine1.png'
import magazine2 from '../assets/images/magazine2.png'
export default {
  data () {
    return {
      activeTab: 'tab1',
      bottomNav: 'favorites',
      magazine2:magazine2,
      magazine1:magazine1
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
    }
  }
}
</script>
<style>
.magazine{
    width: 100%;
    position: relative;
}
.magazine_content{
    margin-top: 56px;
}
.magazine_words{
    text-align: center;
    font-size: 1.5rem;
    color: #fff;
    width: 100%;
    text-align: center;
    position: absolute;
    top: 30%;
}
/*bottom*/
.mu-paper{
    position: fixed;
    bottom: 0;
    width: 100%;
}
</style>