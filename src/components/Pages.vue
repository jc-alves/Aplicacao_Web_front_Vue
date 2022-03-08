<template>


  <main>
   
    <div id="conteudo">
   

<router-view />



   
    </div>
</main>
  
        
    
</template>

<script>
export default {
    name: "pages",
   
}
</script>

<style scoped>

main {
   position: fixed;
   margin-top: 10px;
   margin-left: 180px; 
   width: 88%;
   height: 250px;
   float: left;
 
}
#conteudo {
    margin-top: 30px;
    margin-left: 15px; 
    height: 505px;
    width: 97%;
    border: 1px solid rgb(126, 123, 123);
    border-radius: 5px;

  
}


</style>