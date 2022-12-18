<template>
    <div id="main">
       <div class="header">           
        
   

         </div>
      
        
    </div>
  

  

</template>

<script>
export default {
  name: 'Header',

  data () {
    return {
      name: ''
    }
  },
  props: {
    msg: String
  },
  mounted () {                    
                 const user = localStorage
                 const self = this              
        fetch(localStorage)
      
        .then(() => {
            self.nome = user.nome,
            self.nome1 = user.nome.split(" ")[0]
            self.nome2 = user.nome.split(" ")[1]
            self.inciais = this.nome1[0] + this.nome2[0] 
         
        }).catch((error) => {
            console.error(error)
        })
           
     },
}
</script>

<style>
#main {

  width: 100px;
    height: 100px;
}


</style>
