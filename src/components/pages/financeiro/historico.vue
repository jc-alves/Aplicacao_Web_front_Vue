<template>
    <div class="busca">
        
    <div class="heard">
     <div class="result">
     
   
    


    <table id="grupos" >
            <tr>
              <th>Codigo</th>
              <th>Grupo</th>
              <th>Depositos</th>
              <th>Data </th>
              <th>Saque</th>
              <th>Descrição</th>
              
            </tr>     
         

            
            <tr v-for="financeiro in listaPag" :key="financeiro.id">    
                <td>{{ financeiro.id }}</td>
                <td>{{ financeiro.nome }}</td>
                <td style="color: blue;">{{ financeiro.entrada ? `R$ ${financeiro.entrada}` : '---' }}</td>
                <td >{{ financeiro.datapag ? (new Date(financeiro.datapag)).toLocaleDateString('pt-BR') : '' }}</td> 
                <td style="color: red;" >{{  financeiro.retirada ? `R$ ${financeiro.retirada}` : '---'   }}</td> 
                <td>{{ financeiro.motivo }}</td>
              
              

                
               
                
            </tr>
            

            
        </table>
          </div>
        </div>
    </div>
</template>


<script>
export const baseURL = process.env.VUE_APP_SERVER

export default {
    name: 'Historico',

    data() {
        return {
            retirada: '',
            id: '',
            nome: '',
            datapag: '',
            entrada: '',
            tesoureiro: '',
            listaPag: []        
        }
        
    },
     mounted() {

                  const self = this
                  

                  fetch(baseURL+'/extract', {
                     headers: new Headers([
                    ['Authorization', `Bearer ${ localStorage.toke}`]
                ]),
                  })
                     .then(res => res.json()) 
                     .then(function(res){
                         self.listaPag = res                      
                      })
                  .catch(function(ex) {
                      console.error(ex)
                      self.message = 'Erro'
                })
                },
        
      
                 
}

</script>

<style scoped>
.busca {
    margin-top: 30px;
}
.result {
    border: 1px solid black;
    border-radius: 5px;
    position: absolute;
    overflow: auto;
    height: 395px;
    width: 960px;


        
  
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