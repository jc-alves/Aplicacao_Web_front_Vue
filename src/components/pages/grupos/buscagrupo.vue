<template>
              
        <div class="result">
                   
        <table id="grupo" >
            <tr>
              <th>Nome do grupo</th>
              <th>Coordenação</th>
              <th>Tesouraria</th>
              <th>Contato</th>
              <th style="width: 250px">Acão</th>
            </tr> 
            <tr v-for="(grupos, index) in listaGrupo" :key="grupos.id">    
                <td>{{ grupos.nome }}</td>
                <td>{{ grupos.coordenador }}</td>
                <td>{{ grupos.tesoureiro }}</td>
                <td>{{ grupos.celtesoureiro }}</td>                 
                <td> <button  @click="remover(grupos.id, index)">Remover</button> 
                
                <button ><router-link class="link" :to="`/grupo/alterargrupo?grupo=${grupos.id}`" >Editar</router-link></button> </td>
                   
            </tr>
                        
        </table>
    
 </div>       
</template>

<script>

export default {
    name: "buscagrupo",

    data () {
        return {
            id: '',
            nome: '',
            diocese: '',
            coordenador: '',
            tesoureiro: '',            
            email: '',
            celcoordenador: '',
            celtesoureiro: '',
            paroquia: '',            
            message: '',
            listaGrupo: [ ]
        }
    },
    
    
                mounted() {

                  const self = this
                  

                  fetch('https://api-rcc.herokuapp.com/grupos', {
                            headers: new Headers([
                    ['Authorization', `Bearer ${ localStorage.toke}`],
                    ['Content-Type', 'application/json']
                          ])
                  }
                  
                  )
                     .then(res => res.json()) 
                     .then(function(res){
                         self.listaGrupo = res                      
                      })
                  .catch(function(ex) {
                      console.error(ex)
                      self.message = 'Erro'
                })
                },  
   

    methods: {     
        


     remover (id, index) {
            
           if (confirm('Deseja realemtne remover...? ' )) {
                const self = this            
                fetch('https://api-rcc.herokuapp.com/grupos/' +id, 
                    {
                        method: 'DELETE',
                             headers: new Headers([
                    ['Authorization', `Bearer ${ localStorage.toke}`],
                    ['Content-Type', 'application/json']
                  
                        ]),
                        body: JSON.stringify({nome: this.nome }),
                        mode: 'cors'
                    })
                    .then(function () {
                        alert("Sucesso em Encluir")                       
                        self.listaGrupo.splice(index, 1)
                })
                .catch(function (ex) {
                    console.error(ex)
                    self.message = 'Erro'
                })
            }
        },  

        
   
    },
}


</script>

<style scoped>



.success {
    color: #3c763d;
    background-color: #dff0d8;
    border-color: #d6e9c6;
    display: none;
}

.failure {
    color: #a94442;
    background-color: #f2dede;
    border-color: #ebccd1;
    display: none;
}

.warning {
    color: #8a6d3b;
    background-color: #fcf8e3;
    border-color: #faebcc;
    display: none;
}
 

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
top: -2px;
}

.result {    
    position: fixed;
    overflow: auto;
    height: 330px;
    margin-top: 130px;
    border: 1px solid black;
    border-radius: 5px;
    margin-left: 30px;
    
  
}

#grupo {     
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  
 
  
}


#grupo td, #grupo th {
  border: 1px solid #ddd;
  padding: 8px;
    

}

#grupo tr:nth-child(even){background-color: #f2f2f2;}

#grupo tr:hover {background-color: #ddd; }

#grupo th {
  
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: rgb(40, 39, 71);
  color: white;
}


</style>