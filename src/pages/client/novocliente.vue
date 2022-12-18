<template>

    <div id="NovoGrupo">
        <h3>Cadastro novo Cliente</h3>
        <label>
        <input type="radio"  name="tipo" v-model="tipo_cliente" value="F"/>
        Pessoa Fisíca
        </label>
          <label>
        <input type="radio"  name="tipo" v-model="tipo_cliente" value="J"/>
        Pessoa Juridica
        </label>
    
        <form action="" class="cleanForm" method="POST" @submit.prevent.stop="save">
           <div>
            <span class="p-input-icon-left">             
                <InputText type="text"  placeholder="Nome completo" style="width: 350px;" required v-model="nome" autocomplete="off"/>
            </span>
            <span class="p-input-icon-left" v-if="tipo_cliente === 'F'" >    
                <InputMask v-model="cpf_cnpj"  style="width: 250px;" placeholder="CPF" mask="999.999.999-99" autocomplete="off" />         
              
            </span>
            <span class="p-input-icon-left" v-else>    
                <InputMask v-model="cpf_cnpj"  style="width: 250px;" placeholder="CNPJ" mask="99.999.999/9999-99" autocomplete="off" />         
              
            </span>
            <span class="p-input-icon-left" v-if="tipo_cliente === 'F'">             
                <InputText type="text"  placeholder="RG" style="width: 200px;" required v-model="ie" autocomplete="off" />
            </span>

            <span class="p-input-icon-left" v-else>             
                <InputText type="text"  placeholder="IE" style="width: 200px;" required v-model="ie" autocomplete="off" />
            </span>
        

           </div>
           <div>
            <span class="p-input-icon-left">             
                <InputText type="text"  placeholder="Rua" style="width: 350px;" required v-model="enderenco" autocomplete="off" />
            </span>
            <span class="p-input-icon-left">             
                <InputText type="text"  placeholder="N°" style="width: 100px;" required v-model="numero" autocomplete="off" />
            </span>
          
                <span class="p-input-icon-left">             
                    <InputText type="text"  placeholder="Bairro" style="width: 350px;" required v-model="bairro" autocomplete="off"/>
                </span>
                <span class="p-input-icon-left">             
                    <InputText type="text"  placeholder="Cidade" style="width: 350px;" required v-model="cidade" autocomplete="off"/>
                </span>
                <span class="p-input-icon-left">     
          
                <select v-model="estado" class="inputtext" style="width: 100px;">
                    <option v-for="option in options" :value="option.text">
                      {{ option.text }}
                    </option>
                  </select>
                    </span>  
                    <span class="p-input-icon-left">             
                        <InputText type="text"  placeholder="Obs:" style="width: 350px;" required v-model="obs" autocomplete="off" />
                    </span>     
           </div>
           <div>
            <span class="p-input-icon-left">             
                <InputText type="text"  placeholder="Email" style="width: 350px;" required v-model="email" autocomplete="off"/>
            </span>
            <span>
                <InputMask type="text" 
                mask="99999-999"
                placeholder="CEP" style="width: 200px;" required v-model="cep" autocomplete="off"/>
            </span>
           </div>
          
           
            <span class="p-input-icon-left">             
                <InputMask type="text" placeholder="Celular" mask="(99) 99999-9999" style="width: 200px;" required v-model="celular" autocomplete="off"/>
            </span>
            <span class="p-input-icon-left">  
                <InputMask v-model="telefone" placeholder="Telefone" mask="(99) 9999-9999" style="width: 200px;" autocomplete="off" />           
            </span>
            <span class="p-input-icon-left" v-if="tipo_cliente === 'J'">             
                <InputText type="text"  placeholder="Nome de Fantasia"  style="width: 350px;" required v-model="nome_fantasia" autocomplete="off"/>
            </span>
           
            <br>         
            <br> 
            <Button label="Save" icon="pi pi-check"  type="submit" />
            <Button label="Limpar" @click="limpar()" class="p-button-secondary" style="margin-left: 30px"/>
        </form>
    
    </div>   
    
</template>

<script>
import { ref } from 'vue';




export default {
    name: 'novocliente',

    
    data () {
        return {
            nome: '',
            telefone: '',
            cpf_cliente: '',
            cpf_cnpj: '',            
            enderenco: '',
            numero: '',
            bairro: '',
            cidade: '',            
            estado: '',
            ie: '',
            celular: '',
            obs: '',
            tipo_cliente: 'F',
            nome_fantasia: '',
            listaClientes: [],
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
        self.nome_fantasia = ''
    
    },

save () {
    
    const self = this

    fetch('http://localhost:3000/clients', {
        method: 'POST',
            headers: new Headers([                       
            ['Authorization', `Bearer ${ localStorage.toke}`],              
            ['Content-Type', 'application/json']
        ]),
        body: JSON.stringify({ nome: this.nome, telefone: this.telefone, cpf_cnpj: this.cpf_cnpj,
             enderenco: this.enderenco , email: this.email, numero: this.numero, bairro: this.bairro,
             cidade: this.cidade, estado: this.estado, ie: this.ie, obs: this.obs, cep: this.cep,
            celular: this.celular, tipo_cliente: this.tipo_cliente, nome_fantasia: this.nome_fantasia }),
        mode: 'cors'
        
    })
        .then(function () {
            
            self.menssage = alert("Cadastro Realizado!")
            self.nome = ''
            self.telefone = ''
            self.cpf_cnpj = ''
            self.enderenco = ''
            self.email = ''
            self.numero = ''
            self.bairro = ''
            self.cidade = ''
            self.estado = ''
            self.ie = ''
            self.obs = ''
            self.cep = '' 
            self.tipo_cliente = ''               
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
.inputtext {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font-size: 1rem;
    color: #495057;
    background: #ffffff;
    padding: 0.75rem 0.75rem;
    border: 1px solid #ced4da;
    transition: background-color 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s;
    border-radius: 6px;

 
}
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