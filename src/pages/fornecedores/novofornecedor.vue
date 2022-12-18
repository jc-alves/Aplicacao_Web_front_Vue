<template>
    <div id="conteiner">
   
        <h3>Cadastro Fornecedor</h3>
    
    
        <form action="" class="cleanForm" method="POST" @submit.prevent.stop="save">
           <div>
            <span class="p-input-icon-left">             
                <InputText type="text" class="inputText" placeholder="Razão Social" style="width: 410px;" required v-model="nome" autocomplete="off"/>
            </span>

            <span class="p-input-icon-left">             
              <InputText type="text" class="inputText" placeholder="Nome Fantasia" style="width: 400px;" required v-model="nome_fantasia" autocomplete="off"/>
          </span>

          </div>
     
           <div>
            <span class="p-input-icon-left">             
                <InputText type="text" class="inputText" placeholder="Rua" style="width: 350px;" required v-model="endereco" autocomplete="off" />
            </span>
            <span class="p-input-icon-left">             
                <InputText type="text" class="inputText" placeholder="N°" style="width: 100px;" required v-model="numero" autocomplete="off" />
            </span>
          
                <span class="p-input-icon-left">             
                    <InputText type="text" class="inputText" placeholder="Bairro" style="width: 350px;" required v-model="bairro" autocomplete="off"/>
                </span>
                <span class="p-input-icon-left">             
                    <InputText type="text" class="inputText" placeholder="Cidade" style="width: 350px;" required v-model="cidade" autocomplete="off"/>
                </span>
                <span class="p-input-icon-left">     
          
                <select v-model="estado" class="inputText" style="width: 100px;">
                    <option v-for="option in options" :value="option.text">
                      {{ option.text }}
                    </option> 
                   </select>
                    </span>  
                    <span class="p-input-icon-left">             
                        <InputText type="text" class="inputText" placeholder="Obs:" style="width: 350px;" required v-model="obs" autocomplete="off" />
                    </span>     
           </div>
           <div>
            <span class="p-input-icon-left">             
                <InputText type="text" class="inputText" placeholder="Email" style="width: 350px;" required v-model="email" autocomplete="off"/>
            </span>
            <span>
                <InputMask type="text" 
                mask="99999-999"
                placeholder="CEP" style="width: 200px;" class="inputText" required v-model="cep" autocomplete="off"/>
            </span>
            <span class="p-input-icon-left" >             
              <InputText type="text"  placeholder="Representante" class="inputText" style="width: 250px;" required v-model="representante" autocomplete="off"/>
          </span>
           </div>
           <div>
      
        
            <span class="p-input-icon-left" >    
                <InputMask v-model="cnpj"   style="width: 250px;" class="inputText" placeholder="CNPJ" mask="99.999.999/9999-99" autocomplete="off" />         
              
            </span>
        

            <span class="p-input-icon-left">             
                <InputText type="text" class="inputText" placeholder="IE" style="width: 200px;" required v-model="ie" autocomplete="off" />
            </span>
        

           </div>
         
          
           
            <span class="p-input-icon-left">             
                <InputMask type="text" placeholder="Celular" class="inputText" mask="(99) 99999-9999" style="width: 200px;" required v-model="celular" autocomplete="off"/>
            </span>
            <span class="p-input-icon-left">  
                <InputMask v-model="telefone" class="inputText" placeholder="Telefone" mask="(99) 9999-9999" style="width: 200px;" autocomplete="off" />           
            </span>
          
           
            <br>         
            <br> 
            <Button label="Save" icon="pi pi-check"  type="submit" />
            <Button label="Limpar" @click="limpar()" class="p-button-secondary" style="margin-left: 30px"/>
        </form>
    
    </div>   
    

    
    </template>
    
    <script>

    
    export default {
         name: 'novofornecedor',
         data () {
        return {
            nome: '',
            telefone: '',
          representante: '',
            cnpj: '',            
            endereco: '',
            numero: '',
            bairro: '',
            cidade: '',            
            estado: '',
            ie: '',
            celular: '',
            obs: '',
          
            nome_fantasia: '',
    
      options: [
        { text: 'AC' },
        { text: 'AL' },
        { text: 'AP' },
        { text: 'AM' },
        { text: 'BA' },
        { text: 'CE' },
        { text: 'DF' },
        { text: 'ES' },
        { text: 'GO' },
        { text: 'MA' },
        { text: 'MG' },
        { text: 'MT' },
        { text: 'MS' },
        { text: 'PA' },
        { text: 'PB' },
        { text: 'PR' },
        { text: 'PE' },
        { text: 'PI' },
        { text: 'RJ' },
        { text: 'RN' },
        { text: 'RS' },
        { text: 'RO' },
        { text: 'RR' },
        { text: 'SC' },
        { text: 'SP' },
        { text: 'SE' },
        { text: 'TO' },
      ]
             
        }

},


methods: {

    limpar() {
        const self = this

        self.nome = '',
        self.telefone = '',
        self.enderenco = '',
        self.bairro = '',
        self.cidade = '',
        self.ie = '',
        self.telefone = '',
        self.celular = '',
        self.obs = '',
        self.uf = ''.
        self.tipo_cliente = '',
        self.nome_fantasia = '',
        self.cnpj = ''
    
    },

save () {
    
    const self = this

    fetch('http://localhost:3000/fornecedor/novo', {
        method: 'POST',
            headers: new Headers([                       
            ['Authorization', `Bearer ${ localStorage.toke}`],              
            ['Content-Type', 'application/json']
        ]),
        body: JSON.stringify({ nome: this.nome, telefone: this.telefone, cnpj: this.cnpj,
             endereco: this.endereco , email: this.email, numero: this.numero, bairro: this.bairro,
             cidade: this.cidade, estado: this.estado, ie: this.ie, obs: this.obs, cep: this.cep,
            celular: this.celular, nome_fantasia: this.nome_fantasia, representante: this.representante }),
        mode: 'cors'
        
    })
        .then(function () {
            
            self.menssage = alert("Cadastro Realizado!")
            self.nome = ''
            self.telefone = ''
            self.cnpj = ''
            self.endereco = ''
            self.email = ''
            self.numero = ''
            self.bairro = ''
            self.cidade = ''
            self.estado = ''
            self.ie = ''
            self.obs = ''
            self.cep = '' 
            self.representante = ''           
        })
        .catch(function (ex) {
            console.error(ex)
            console.log(self)
            self.message = 'Erro'
        })
},

}
        
}
</script>

<style scoped>

.p-treeselect .p-treeselect-label {
  padding: 0.75rem 0.75rem;
  transition: background-color 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s;
}

form.cleanForm {
  width:900px;
  min-width: 900px;
  max-width: 10000px;
  margin:50px auto;
}

form.cleanForm p {
  margin-bottom:15px;
}



input[type="email"]:focus, input[type="email"]:hover, input[type="password"]:focus,
input[type="password"]:hover, input[type="text"]:focus, input[type="text"]:hover {
  border:1px solid #FF003F;   
} 
form.cleanForm em {
  font-size:12px;
}

.alert-box {
padding: 15px;
  margin-bottom: 20px;
  border: 1px solid transparent;
  border-radius: 4px;  
}

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

span {
  padding: 5px 8px 10px;
}

</style>