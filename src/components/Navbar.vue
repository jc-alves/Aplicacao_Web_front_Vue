<template>
   <div id="nav">
        <div class="usuario">
       

<p>{{nome}} <i class="pi pi-user"  /> </p> 
<p @click="outSubmit" class="pi pi-sign-out" ></p>
 
    </div>

              
    </div>

</template>

<script>
import { signOut } from './auth/auth'

export default {
    name: 'Navbar',

    data () {
    return {
      nome: '',
   
    }
  
  },
    mounted () {                    
                 const user = localStorage
                 const self = this              
        fetch(localStorage)
         
        .then(() => {
            self.nome = user.nome,
            console.log("deu certo")
       
             
         
        }).catch((error) => {
            console.error(error)
            console.log("erro esta aqui", nome)
        })
           
     },
     methods: {
      async outSubmit () {
        await signOut();
        this.$router.push('/');
      }
    }


}
</script>




<style scoped>

.usuario {
  font-size: 1.1rem;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  text-align: end;
  text-transform: uppercase;
  color: 	#A9A9A9;
}


</style>