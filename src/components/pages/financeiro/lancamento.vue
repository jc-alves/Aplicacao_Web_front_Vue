<template>
    <div class="main">
    <h1>Recebimentos</h1>


        <form action="" class="cleanForm" method="POST" @submit.prevent.stop="save"   >
         
       
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
           
 
            Selecione o Grupo
        <label>
        
    
         <select  name="nome" required v-model="id_grupo"   >
        
         
        
        <option  v-for="grupos in listaGrupo" :key="grupos.id"  :value="grupos.id" >
             {{ grupos.nome}} 
        </option>
     
         </select>
         </label>

         <input type="number" name="entrada"  placeholder="R$ 0,00" required v-model="entrada" autocomplete="off"> <br> <br> <br>
           
            <button type="submit" >Depositar</button>
    
        </form>
    
    </div>
</template>

<script>
export const baseURL = process.env.VUE_APP_SERVER

export default {
    data() {
        return {
            selected: '',
            entrada: '',
            motivo: '',
            listaGrupo: []
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
    }
       
  
}
</script>

<style>

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

</style>