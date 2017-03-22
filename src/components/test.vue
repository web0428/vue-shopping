<script>
export default {
  data(){
    return{
      img:""
    }
  },
  created: function(){
    this.show()
  },
  methods:{
    show(){
    this.$http.get("https://api.douban.com/v2/book/1220562").then(res => {
    console.log(res.data.image)
    this.img=res.data.image
}, res => {
    // error callback
})
    }
  }
};
</script>
<style>

</style>
<template>
<div>
  <img :src="img" alt="">
</div>
</template>

