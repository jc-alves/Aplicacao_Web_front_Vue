<template>
   <div id="nav">
       <div class="head">
   
         <div class="logo"><img src="../img/logorcc.png" alt="">
         </div>  
         
      
         </div>
      
        
    </div>

</template>

<script>


export default {
    name: 'Navbar',


}
</script>




<style scoped>

.head {
 display: inline-block;
  width: 100px;
    height: 100px;
}

#nav {
    background: rgb(235, 235, 243);
    color: white;
        font-size: 25px;
    height: 115px;
    left: 0%;
    position: absolute;
    width: 100%;
    margin-top: 0%;    
}

.logo {
    
  margin-top: 10px;
  display: inline-block;
  height: 80px;
  width: 150px;

  

}

.cads {
  
  
  height: 90%;
  width: 100%;
  display: inline-block;
}
.cad {
    margin-left: 80px;
    padding: 15px;
    display: inline-block;
    height: 100px;
    width: 250px;
    border-radius: 5px;   
    background-color: rgb(246, 246, 250);

}

</style>