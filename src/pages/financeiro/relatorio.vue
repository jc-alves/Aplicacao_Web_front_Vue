<template>
    <div class="busca">
        
         <form action=""  class="cleanForm" method="GET"  >         
         <input type="text" name="nome" v-model="nome"  placeholder="Digite o nome do grupo" autocomplete="off"> <br>
           
            <button type="submit" @click.prevent.stop="busca(nome)">Consultar</button>
    
        </form>
    <div class="heard">
     
     <div class="result">
     
   
    


    <table id="grupos" >
            <tr>
              <th>Codigo</th>
              <th>Grupo</th>
              <th>Depositos</th>
              <th>Data </th>
     
              
            </tr>     
         

            
            <tr v-for="financeiro in listaPag" :key="financeiro.id">    
                <td>{{ financeiro.id }}</td>
                <td>{{ financeiro.nome }}</td>
                <td style="color: blue;">R$ {{ financeiro.entrada }}</td>
                <td >{{ financeiro.datapag ? (new Date(financeiro.datapag)).toLocaleDateString('pt-BR') : '' }}</td>  
                              
            </tr>
            

            
        </table>
          </div>
        </div>
    </div>
</template>


<script>
export const baseURL = process.env.VUE_APP_SERVER


export default {
    name: 'Relatorio',

    data() {
        return {
            
          nome:  '',
            listaPag: []        
        }
    },
    methods: {
      
  busca (nome) {

                  const self = this
                  

                  fetch(baseURL+'/buscap/'+ nome, {
                     headers: new Headers([
                    ['Authorization', `Bearer ${ localStorage.toke}`]
                    ])
                  } )
                 
                     .then(res => res.json()) 
                     .then(function(res){
                         self.listaPag = res                      
                      })
                  .catch(function(ex) {
                      console.error(ex)
                      self.message = 'Erro'
                })
                }, 
    },

 

  
      
                 
}


</script>

<style scoped>
.busca {
    margin-top: 20px;
}
.result {

    position: absolute;
    overflow: auto;
    height: 305px;
    width: 942px;
    margin-top: 40px;
    border: 1px solid black;
    border-radius: 5px;


        
  
}



#grupos {     
  font-family: Arial, Helvetica, sans-serif;
  font-size: 15px;
  border-collapse: collapse;
  width: 940px;
 
  
}


#grupos td, #grupos th {
  border: 1px solid #ddd;
  padding: 8px;


}

#grupos tr:nth-child(even){background-color: #f2f2f2;}

#grupos tr:hover {background-color: #ddd; }

#grupos th {
  
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: rgb(40, 39, 71);
  color: white;
}

</style>