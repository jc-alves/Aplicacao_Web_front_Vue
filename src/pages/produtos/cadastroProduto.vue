<template>
    <div id="conteiner">
   
        <h3>Cadastra Nova Peça</h3>
    
    
        <form action="" class="cleanForm" method="POST" @submit.prevent.stop="save">

            <div>
            
            <span class="p-input-icon-left">             
                <InputText type="text"  placeholder="Descrição" style="width: 300px;" class="inputText"  required v-model="descricao" autocomplete="off"/>
            </span>
      

        <div>
            <span class="p-input-icon-left">               
              <InputText type="text"  class="inputText" placeholder="Aplicação" style="width: 200px;"  v-model="aplicacao" autocomplete="off"/>
                    </span>
                    <span class="p-input-icon-left">               
                      <InputText type="text"  placeholder="Aplicação" class="inputText"  style="width: 200px;" v-model="aplicacao1" autocomplete="off"/>
                            </span>
                            <span class="p-input-icon-left">               
                              <InputText type="text"  placeholder="Aplicação" class="inputText"  style="width: 200px;"  v-model="aplicacao2" autocomplete="off"/>
                                    </span>
                                    <span class="p-input-icon-left">               
                                      <InputText type="text"  placeholder="Aplicação" class="inputText"  style="width: 200px;"  v-model="aplicacao3" autocomplete="off"/>
                                    </span>
        </div>

        </div>
        <br>
    
    
            <br> 
            <Button label="Save" icon="pi pi-check"  type="submit"/>
            <Button label="Limpar" @click="limpar()" class="p-button-secondary" style="margin-left: 30px"/>
        </form>
    
    </div>  
</template>

<script>
export default { 
  

    name: 'cadastroproduto',
    data() {
		return {
      descricacao: '',
      aplicacao: '',
      aplicacao1: '',
      aplicacao2: '',
      aplicacao3: '',   		
	}
  
    
},

methods : {

  openModal() {
            this.displayModal = true;
        },
        closeModal() {
            this.displayModal = false;
        },
        
save () {
    
    const self = this

    fetch('http://localhost:3000/produtos', {
        method: 'POST',
            headers: new Headers([                       
            ['Authorization', `Bearer ${ localStorage.toke}`],              
            ['Content-Type', 'application/json']
        ]),
        body: JSON.stringify({ descricao: this.descricao.toUpperCase(), aplicacao: this.aplicacao.toUpperCase(), aplicacao1: this.aplicacao1.toUpperCase(), aplicacao2: this.aplicacao2.toUpperCase(), aplicacao3: this.aplicacao3.toUpperCase()}),
        mode: 'cors'
        
    })
        .then(function () {
            
            self.menssage = alert("Produto cadastrado!")
            self.descricao = ''
            self.aplicacao = ''
            self.aplicacao1 = ''
            self.aplicacao2 = ''
            self.aplicacao3 = ''                     
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


.p-component * {
 
  background-color: #fff;
}
.inputText {
  display: block;
  border-bottom: groove;
  border-top: none; 
}


.inputtext {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font-size: 1rem;
    color: #495057;
    background: #ffffff;
    padding: 0.75rem 0.75rem;
    border: 1px solid #ced4da;
    transition: background-color 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s;
    border-radius: 6px;
    border-bottom: groove;
    border-top: none;  
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
    border-bottom: groove;
    border-top: none; 
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
  
element.style {
  width: 50vw;
  margin: 0px;
  position: fixed;
  left: 400px;
  top: 244px;
  background: #fff;
}

</style>