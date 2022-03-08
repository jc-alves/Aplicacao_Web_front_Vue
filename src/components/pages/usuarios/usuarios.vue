<template>
<div class="user">
 
  <button><router-link class="link" to="/usuarios/novousuario">Novo</router-link></button>
  <button><router-link class="link" to="/usuarios/usuario">Usuarios</router-link></button>


<router-view></router-view>
</div>

</template>

<script>
export default {
    name: 'Usuarios',

}

</script>

<style scoped>

button:hover {
    background: #001dc2;
		color: rgb(255, 255, 255);
    transition: .3s ;

}

.link:hover {
background: #001dc2;
color: rgb(255, 255, 255);
transition: .3s ;

}

button {
position: relative;
border: 5px ;
border-radius:5px ;
margin: 4px;
background: rgb(214, 214, 241);
height: 30px;
width: 100px;

}


</style>