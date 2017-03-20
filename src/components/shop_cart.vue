<template>
<div>
    <mu-appbar title="购物车">
        <mu-icon-button icon='keyboard_arrow_left' slot="left" style="color: #4E4C4C;" onclick="window.history.go(-1)"/>
        <mu-icon-button  slot="right" style="color: #4E4C4C;"/>
    </mu-appbar>
    <!-- 设置多选表单的value为商品单价，选择选中是获取单价并计算总价 -->
    <div class="goods">
        <div class="icon_false"><mu-checkbox name="group" nativeValue=770 v-model="list"  class="demo-checkbox"/></div>
        <img src="../assets/images/shopcart1.png" height="90" width="90" alt="">
        <div class="img_intro">
            <span class="img_intro_1">PARKA|冬季欧美复古设计师款军绿色羽绒服
            </span>
            <span class="img_intro_2">颜色分类：军绿色；尺码：M
            </span>
            <span class="img_intro_3"> ￥{{price[0]}}
            </span>
        </div>
    </div>
    <div class="goods">
        <div class="icon_false"><mu-checkbox name="group" nativeValue=880 v-model="list"  class="demo-checkbox"/></div>
        <img src="../assets/images/shopcart1.png" height="90" width="90" alt="">
        <div class="img_intro">
            <span class="img_intro_1">PARKA|冬季欧美复古设计师款军绿色羽绒服
            </span>
            <span class="img_intro_2">颜色分类：军绿色；尺码：M
            </span>
            <span class="img_intro_3"> ￥{{price[1]}}
            </span>
        </div>
    </div>
    <div class="goods">
        <div class="icon_false"><mu-checkbox name="group" nativeValue=990 v-model="list"  class="demo-checkbox"/></div>
        <img src="../assets/images/shopcart1.png" height="90" width="90" alt="">
        <div class="img_intro">
            <span class="img_intro_1">PARKA|冬季欧美复古设计师款军绿色羽绒服
            </span>
            <span class="img_intro_2">颜色分类：军绿色；尺码：M
            </span>
            <span class="img_intro_3"> ￥{{price[2]}}<num name="name" style="color:#3D3B3A">×{{num}}</num>
            <div class="counter">           
                <mu-icon value="remove_circle_outline" color="#F2F2E8"
                 @click="remove"/>
                <mu-icon value="add_circle_outline" color="#F2F2E8"
                @click="add"/>    
            </div> 
            </span>
        </div>
    </div>
    <div class="shop_cart_bot">
    <div class="bottom_ic"><mu-checkbox name="group" class="demo-checkbox" @change="checked"/></div>
    <div class="bottom_word">全选</div>
    <div class="amount">总计：￥{{all}}</div>
    <div class="balance">结算</div>
    </div>
</div>
</template>

<script>
    export default{
        data(){
            return {
                list:[],
                price:[770,880,990],
                sum:0,
                num:1
            }
        },
        methods:{
            checked(){
                if(this.list.length<3){
                this.list=[]
                this.list.push(770,880,990)
            }else{
                this.list=[]
            }
            },
            remove(){
                if(this.num){
                    this.num-=1;
                }
            },
            add(){
                this.num+=1
            }
        },
        computed:{
            all(){
                this.sum=0
                for (var i = 0; i < this.list.length; i++) {
                    // this.sum+=this.list[i]
                    var j=parseInt(this.list[i])
                    this.sum+=j
                }
                console.log(i)
                return this.sum
            }
        }
    }    
</script>
<style>
.goods{
    width: 100%;
    height: 120px;
    background: #e1dfc7;
    margin-bottom: 10px;
}
.goods:nth-child(2){
    margin-top: 56px;
}
.icon_false{
    float: left;
    margin-left: 10px;
    line-height: 120px;
    margin-top: 5px;
}
.goods img{
    vertical-align: middle;
    float: left;
    margin-top: 15px;
    margin-left: 10px;
}
.img_intro{
    float: left;
    margin-top: 15px;
    width: 55%;
    margin-left: 10px;
}
.img_intro span{
    display: block;
    margin-bottom: 5px;
}
.img_intro_1{
    font-size: 13px;
}
.img_intro_2{
    color: #808080;
}
.img_intro_3{
    color: red;
    position: relative;
}
.counter{
    position: absolute;
    right: 5px;
    top: -3px;
    text-align: center;
    vertical-align:middle;
    color: #fff;
    font-size: 16px;
}
.shop_cart_bot{
    position: fixed;
    bottom: 0;
    height: 48px;
    line-height: 48px;
    background: #fff;
    border-top:1px #ccc solid;
    width: 100%;
}
.bottom_ic{
    float: left;
    margin-top: 7px;
    margin-left: 10px;
}
.bottom_word{
    float: left;
    font-size: 16px;
    margin-left: 5px;
}
.amount{
    float: left;
    font-size: 14px;
    margin-left: 15px;
}
.balance{
    width: 100px;
    background:#C50B0C;
    color: #fff;
    float: right;
    text-align: center;
    font-size: 16px;
}
</style>