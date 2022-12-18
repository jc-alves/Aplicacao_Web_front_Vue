<template>
    <div class="main">  
    <h1>Recebimentos</h1>   
     <br>
        <input type="radio" id="one" value="inscricao" v-model="tipo">
          <label for="inscricao">Inscrições</label>
     <br>

        <input type="radio" id="two" value="mensalidade" v-model="tipo">
           <label for="mensalidade">Mensalidades</label>
    
        <div v-if="tipo == 'mensalidade'">
         <form action="" class="cleanForm" method="POST" @submit.prevent.stop="save" >
         
       
          <select name="motivo" required v-model="motivo">
	<option value="" selected="selected">Referência</option>
	<option value="Janeiro">Janeiro</option>
	<option value="Fevereiro">Fevereiro</option>
	<option value="Março">Março</option>
	<option value="Abril">Abril</option>
	<option value="Maio">Maio</option>
    <option value="Junho">Junho</option>
    <option value="Julho">Julho</option>
    <option value="Agosto">Agosto</option>
    <option value="Setembro">Setembro</option>
    <option value="Outubro">Outubro</option>
    <option value="Novembro">Novembro</option>
    <option value="Dezembro">Dezembro</option>
           </select>
          
            
        <label>
        
    
         <select  name="nome" required v-model="id_grupo"  >
        
         
       
        <option  v-for="grupos in listaGrupo" :key="grupos.id"  :value="grupos.id" >
             {{ grupos.nome}} 
        </option>
     
         </select>
         </label>

         <input type="number" name="entrada"  placeholder="R$ 0,00" required v-model="entrada" autocomplete="off"> <br> <br> 
           
            <button type="submit" >Depositar</button>
    
        </form>
     </div>
     <div v-else-if="tipo == 'inscricao'" class="novo">
          <form action="" class="cleanForm" method="POST" @submit.prevent.stop="sav" >
          <label>
          <input type="text" name="participante" style="width:350px;"  placeholder="Participante / evento" required v-model="motivo" autocomplete="off">
          </label>
         
          <input type="number" name="entrada"  placeholder="R$ 0,00" required v-model="entrada" autocomplete="off"> <br> <br> 
           
            <button type="submit" >Depositar</button>
 
 </form>
     </div>
   
   


    </div>
</template>

<script>


export const baseURL = process.env.VUE_APP_SERVER

export default {
    
    data() {
        return {
            descricao: '',
            tipo: '',
            selected: '',
            entrada: '',
            motivo: '',
            listaGrupo: [],
            upDocs: null
        }
    },
    computed: {
                 datap: function () {
                 return Date.now()
                 }
             },
     mounted() {

                  const self = this
                  

                  fetch(baseURL+'/grupos', {
                        headers: new Headers([
                    ['Authorization', `Bearer ${ localStorage.toke}`]
                        ] )
                  })
                     .then(res => res.json()) 
                     .then(function(res){
                         self.listaGrupo = res                      
                      })
                  .catch(function(ex) {
                      console.error(ex)
                     
                      
                })
        },  

    methods: {

                        
        save () {
            
            
            const self = this

            fetch(baseURL+'/payment', {
                method: 'POST',
             
                      headers: new Headers([
                    ['Authorization', `Bearer ${ localStorage.toke}`],
                    ['Content-Type', 'application/json']
                ]),
                body: JSON.stringify({ id_grupo: this.id_grupo, entrada: this.entrada, motivo: this.motivo }),
                mode: 'cors'
                
            })
                .then(function () {
                    
                    self.menssage = alert("Depisito realizado")
                    self.entrada = ''
                    self.datapag = ''
                    
                    //location.reload();
                    // self.message = 'Sucesso'
                })
                .catch(function (ex) {
                    console.error(ex)
                    console.log(self)
                   
                })
        },

         sav () {
            
            
            const self = this

            fetch(baseURL+'/payment', {
                method: 'POST',
             
                      headers: new Headers([
                    ['Authorization', `Bearer ${ localStorage.toke}`],
                    ['Content-Type', 'application/json']
                ]),
                body: JSON.stringify({ entrada: this.entrada, motivo: this.motivo }),
                mode: 'cors'
                
            })
                .then(function () {
                    
                    self.menssage = alert("Depisito realizado")
                    self.entrada = ''
                    self.datapag = ''
                    
                    //location.reload();
                    // self.message = 'Sucesso'
                })
                .catch(function (ex) {
                    console.error(ex)
                    console.log(self)
                   
                })
        },
    }
       
  
}
</script>

<style scoped>
.novo {
    margin-top: 60px
}
form.cleanForm {
    width:700px;
    margin:50px auto;
}

form.cleanForm p {
    margin-bottom:15px;
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
top: 15px;
}

select {
    font-family: Arial, Sans-Serif;
    font-size: 18px;
    color: #adadad;
    margin-left: 40px;
    padding: 10px;
    outline:none;   
    float:left;
    border: solid 1px #adadad;
    width: 230px;
    transition: all 2s ease-in-out;
    -webkit-transition: all 2s ease-in-out;
    -moz-transition: all 2s ease-in-out;
    -moz-border-radius: 8px;
    -webkit-border-radius: 8px;
    border-radius: 8px;
    -moz-box-shadow:inset 0 0 5px 5px #E6E6E6;
    -webkit-box-shadow:inset 0 0 5px 5px #E6E6E6;
    box-shadow:inset 0 0 5px 5px #E6E6E6;
    clear: right;

}

input[type="number"], input[type="password"], input[type="text"]  {
    font-family: Arial, Sans-Serif;
    font-size: 18px;
    color: #adadad;
    margin-left: 40px;
    padding: 10px;
    outline:none;   
    float:left;
    border: solid 1px #adadad;
    width: 230px;
    transition: all 2s ease-in-out;
    -webkit-transition: all 2s ease-in-out;
    -moz-transition: all 2s ease-in-out;
    -moz-border-radius: 8px;
    -webkit-border-radius: 8px;
    border-radius: 8px;
    -moz-box-shadow:inset 0 0 5px 5px #E6E6E6;
    -webkit-box-shadow:inset 0 0 5px 5px #E6E6E6;
    box-shadow:inset 0 0 5px 5px #E6E6E6;
    clear: right;
}


.btn {
 color: white;
 font-size: 25px;
 height: 50px;
 width: 180px;
 border-radius: 5px;
 background-color: blue;
 margin-left: -470px;
}
</style>