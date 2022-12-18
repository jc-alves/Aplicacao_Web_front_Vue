<template>


  <main>

   



<router-view />


</main>
  
        
    
</template>

<script>
import Navbar from './Navbar.vue'
export default {
  components: { Navbar },
    name: "pages",
   
}
</script>

<style scoped>

main {

   width: 100%;
   height: 100%;

   max-width: 1300px;
   min-width: 1300px; 
}



</style>