<template>
<div>
    <mu-appbar title="分享" zDepth="0">
          <mu-icon-button slot="left" icon='search' style="color: #4E4C4C;"/>
          <mu-icon-button icon='menu' slot="right" style="color: #4E4C4C;"/>
    </mu-appbar>
    <div class="share_content">
        <ul>
            <li>
                <img v-lazy="share1"  width="100%" alt="">
                <img v-lazy="share2"   width="100%" alt="">
                <img v-lazy="share1"   width="100%" alt="">
            </li>
            <li>
                <img v-lazy="share2"   width="100%" alt="">
                <img v-lazy="share1"   width="100%" alt="">
                <img v-lazy="share2"   width="100%" alt="">
            </li>
        </ul>
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
import share2 from '../assets/images/share2.png'
import share1 from '../assets/images/share1.png'
export default {
  data () {
    return {
      activeTab: 'tab1',
      bottomNav: 'nearby',
      share1:share1,
      share2:share2
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
.share_content{
    width: 100%;
    margin-top: 56px;
}
.share_content ul{
    width: 95%;
    margin:0 auto;
}
.share_content ul li{
    float: left;
    width: 49%;
}
.share_content ul li:nth-child(even){
    margin-left: 2%;
}
/*bottom*/
.mu-paper{
    position: fixed;
    bottom: 0;
    width: 100%;
}
</style>