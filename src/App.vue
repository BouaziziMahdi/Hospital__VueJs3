<template>
  <div class="App">
    <Appheader />
    <router-view />
    <AppRating />
    <Appfooter/>
  </div>
</template>
<script>

import Appheader from "@/components/global/Appheader.vue";
import Appfooter from "@/components/global/Appfooter.vue" ;
import AppRating from '@/components/AppRating.vue';
export default {
  name: 'App',
  components: {
    Appheader,
     Appfooter,
     AppRating 
 
  },
  
};
</script>
<style lang="scss">

  @import 'https://fonts.googleapis.com/icon?family=Material+Icons';
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style> 

  