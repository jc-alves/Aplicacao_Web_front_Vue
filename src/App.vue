<template>
  <div id="nav">

   

    
   <Header></Header>
<router-view />
       
  </div>
 
</template>

<script>

import Header from "./components/Header.vue";
import Home from "./views/Home.vue";
import Pages from "./components/Pages.vue";


export default {
    name: "app",
    components: { Header, Home, Pages }

}
</script>


<style>
#app {
 
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;


}

</style>
