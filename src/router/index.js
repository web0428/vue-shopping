import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/login.vue'
import Getback from '../components/get_back.vue'
import Reg from '../components/reg.vue'
import Shop from '../components/shop.vue'
import Magazine from '../components/magazine.vue'
import Share from '../components/share.vue'
import Person from '../components/person.vue'
import Shopcart from '../components/shop_cart.vue'
import Test from '../components/test.vue'
import Brand from '../components/brand.vue'
import Classify from '../components/classify.vue'
// const Shop = resolve => require(['../components/shop.vue'], resolve)
// const Login = resolve => require(['../components/login.vue'], resolve)
// const Getback = resolve => require(['../components/get_back.vue'], resolve)
// const Reg = resolve => require(['../components/reg.vue'], resolve)
// const Magazine = resolve => require(['../components/magazine.vue'], resolve)
// const Share = resolve => require(['../components/share.vue'], resolve)
// const Person = resolve => require(['../components/person.vue'], resolve)
// const Shopcart = resolve => require(['../components/shop_cart.vue'], resolve)
// const Share = resolve => require(['../components/share.vue'], resolve)
Vue.use(Router)

export default new Router({
	mode: 'history',
  	routes: [
    { path:'/', component:resolve => require(['../components/login.vue'], resolve)},
    { path:'/getback', component:resolve => require(['../components/get_back.vue'], resolve)},
    { path:'/reg', component:resolve => require(['../components/reg.vue'], resolve)},
    { path:'/shop', component:resolve => require(['../components/shop.vue'], resolve)},
    { path:'/magazine', component:resolve => require(['../components/magazine.vue'], resolve)},
    { path:'/share', component:resolve => require(['../components/share.vue'], resolve)},
    { path:'/person', component:resolve => require(['../components/person.vue'], resolve)},
    { path:'/shopcart', component:resolve => require(['../components/shop_cart.vue'], resolve)},
    { path:'/test', component:Test},
    { path:'/brand/:id', component:resolve => require(['../components/brand.vue'], resolve)},
    { path:'/classify', component:resolve => require(['../components/classify.vue'], resolve)},
  ],
  scrollBehavior (to, from, savedPosition) {
    if (to.hash) {
    return {
      selector: to.hash
    }}else{
      return { x: 0, y: 0 }
    }
    
  }
})


