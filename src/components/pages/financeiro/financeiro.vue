<template>
    <div class="financeiro">
    
    <button><router-link class="link" to="/financeiro/historico">Historico</router-link></button>
    <button><router-link class="link" to="/financeiro/recebimento">Despositos</router-link></button>
    <button><router-link class="link" to="/financeiro/saque">Saque</router-link></button>
    <button><router-link class="link" to="/financeiro/relatorio">Relatorio</router-link></button><br>

    <div class="saldo">
    <p>Saldo</p>
   
      R$: {{ Saldo }}  
    </div>

    <router-view></router-view>
    </div>
</template>    
    
    
<script>

export default {
    name: 'Financeiro',

    data () {
        return {
            Saldo: 0,
        }
    },

    mounted() {
               
                  const self = this
                 

                  fetch('https://api-rcc.herokuapp.com/saldo',{
                       headers: new Headers([
                    ['Authorization', `Bearer ${ localStorage.toke}`]
                ]),
                  }
                  
                  )
                     .then(res => res.json()) 
                     .then(function(res){
                         self.Saldo = res[0].saldo
                      })
                  .catch(function(ex) {
                      console.error(ex)
                     
                })
                },
     
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

.saldo {
    height: 70px;
    width: 120px;
    background-color: #cdcde7;  
    border-radius: 5px;
    margin-top:  -15px;
    margin-left: 10px;
    font-weight: bold;
    color: rgb(13, 13, 145);
}

</style>    
    
    
