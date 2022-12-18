<template>
    <div class="grupo">
    
     <button ><router-link class="link" to="/grupo/novogrupo">Novo</router-link></button>
      <button ><router-link class="link" to="/grupo/buscagrupo">Grupos</router-link></button>
      
       <router-view />

    </div>
</template>

<script>
export default {
    name: "Grupo",
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