<template>
    <div id="sidebar">
    <router-link to="/">
    <img src="" alt="" id="logo">
   

    </router-link>
  
   
    <router-link to="/home"><li>Inico</li></router-link> 
    <router-link to="/grupo"><li>Grupos</li></router-link> 
    <router-link to="/financeiro"><li>Financeiro</li></router-link>   
     <router-link to="/usuarios"><li>Usuarios</li></router-link>

     <button @click="outSubmit"
     style="width: 50px; height: 50px; border: 1px solid black;  border-radius: 50px;">Sair</button>
   
   
   

 
  </div>
    
    
</template>

<script>
import { signOut } from './auth/auth'

  export default {
      
    methods: {
      async outSubmit () {
        await signOut();
        this.$router.push('/');
      }
    }
  }
</script>

<style>

#sidebar {
	
    position: fixed;
    left: 0px;
    width: 170px;
    height: 90%;
    background: rgb(235, 235, 243);
               
	}
#sidebar li  {
		margin: 0; padding: 0px;
		border-bottom: 1px solid rgb(0, 0, 0);
		text-align: left;
		list-style-type: none;
        color: rgb(0, 0, 0);
        
        
		}

#sidebar a:link 
    {
		background: rgb(235, 235, 243);
		color: rgb(255, 255, 255);
		font-weight: bold;
		text-decoration: none;
		padding: 8px;
		display: block;
		}   
#sidebar li:hover {
		background: #c1c7ff;
		color: rgb(0, 0, 0);
        transition: .5s ;


        
		}  

</style>
