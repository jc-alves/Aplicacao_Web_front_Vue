<template>
    <div id="main">
       <div class="header">
   
         <div class="logo"><img src="../img/logorcc.png" alt="">
         </div>  
         
      
         </div>
      
        
    </div>
  

  

</template>

<script>
export default {
  name: 'Header',
  props: {
    msg: String
  }
}
</script>

<style>
#main {
 display: inline-block;
  width: 100px;
    height: 100px;
}
.header {
    background: rgb(235, 235, 243);
    color: white;
    font-size: 25px;
    height: 115px;
    left: 0%;
     position: fixed;
    width: 100%;
    margin-top: 0%;    
}

.logo {
  margin-top: 10px;
  display: inline-block;
  height: 80px;
  width: 150px;
}




</style>
