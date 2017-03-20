<template>
  <div id="app">
  <keep-alive>
    <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
body,html{
	font-size: 10px !important;
	margin-bottom:56px;
}
ul{
	padding: 0;
}
li{
	list-style: none;
}
</style>
