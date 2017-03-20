<script>
import IMG from '../assets/images/brand2.png'
export default {
  name: 'hello',
  data() {
    return {
      src:IMG
    };
  }
};
</script>

<template>
  <div class="hello">
	  
      <img v-lazy="src" alt="" width="300" height="150"/>

</div>
</template>

<style>
img[lazy=loading]{
}
img[lazy=loaded]{
  animation:fade 1s;
}
@keyframes fade {
  0%{
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
}
</style>