<template>
    <div id="conteiner">
   
        <h3>Incluir Produto</h3>
    
     <label style="margin-left: 20px;">
       <AutoComplete v-model="produto" optionLabel="descricao" minLength="3" :suggestions="produtosFiltrados" @complete="filtrarProduto" inputStyle="width: 400px;  text-transform: uppercase;" @item-select="selecionaProduto" placeholder="Pesquise a peça...">
            <template #item="slotProps" panelStyle="width: 400px; "  >              
               {{  formataProdutoAutocomplete(slotProps.item) }}            
            </template>
          </AutoComplete>
        <span v-if="visible" class="aplicacao"> {{aplicacao}}  {{aplicacao1}}   {{aplicacao2}}  {{aplicacao3}}</span>
     </label>
       

        <div class="line">       
        
            <label style="margin-left: 20px"> Fabricante  
              <InputText type="text"   style="width: 200px;"  class="inputText" v-model="fabricante" autocomplete="off" />
            </label>        
           <label style="margin-left: 20px">Cod. Ref.
            <InputText type="text"  style="width: 200px; " class="inputText" v-model="codigo_ref" autocomplete="off" />
           </label>

           <label style="margin-left: 20px">Fornecedor
            <select v-model="id_fornecedor" class="inputtext" value="Fornecedor"  required name="id_fornecedor">
              <option value="">Selecione um Fornecedor</option>
              <option v-for="f in list_fornecedores" :key="f.id" :value="f.id">{{f.nome}}</option>
            </select>
          </label>
          <label style="margin-left: 20px">Unidade
            <InputText type="text"  style="width: 100px; " class="inputText" v-model="unidade" autocomplete="off" />
           </label>
          

          
           <label style="margin-left: 20px"  >Grupo <i class="pi pi-question-circle"   v-tooltip.top="'Caso não tenha o Grupo na lista, clique no icon + ao lado'  "   ></i>
              <i class="pi pi-plus" @click="opModalGrupo"/>
            <select v-model="id_setor" class="inputtext" required name="id_setor" value="setor">            
              <option value="">Selecione o Grupo</option>   
              <option v-for=" s in listaSetor" :key="s.id" :value="s.id" >{{ s.nome_setor }}</option>
            </select>
            
           </label>
            <label class="incluir">
              <i class="pi pi-check"  @click="adicionar"/>
         
         </label>
           </div>

        <form action="" class="cleanForm" method="POST" @submit.prevent.stop="save">

  
           <div>
           
     
           </div>
           
            <br>           
                  <Button label="Fiscal"  icon="pi pi-external-link" @click="openModal" />
                  <Dialog header="Fiscal" v-model:visible="displayModal" :breakpoints="{'960px': '75vw', '640px': '90vw'}" :style="{width: '50vw'}" style=" background-color: #fff"  :modal="true">
                     
                      <template #footer    >
                        <p class="m-2" style="width: 700px;  ">
                          <InputText type="text"  placeholder="1" style="width: 300px; margin-left: 30px " autocomplete="off"/>
                  
    
                          <InputText type="text"  placeholder="2" style="width: 300px; margin-left: 30px"  autocomplete="off"/>
                          <InputText type="text"  placeholder="3" style="width: 300px;" autocomplete="off"/>
                  
    
                          <InputText type="text"  placeholder="4" style="width: 300px; margin-left: 30px; margin-top: 30px"   autocomplete="off"/>
                            <InputText type="text"  placeholder="5" style="width: 300px; margin-left: 30px" autocomplete="off"/>
                  
    
                            <InputText type="text"  placeholder="6" style="width: 300px; margin-left: 30px; margin-top: 30px"  autocomplete="off"/>
                            
                      
                        </p>
                          <Button label="No" icon="pi pi-times" @click="closeModal" class="p-button-text" style="width: 110px" />
                          <Button label="Yes" icon="pi pi-check" @click="closeModal" autofocus style="width: 110px;background-color: blue;"   />
                      </template>
                  </Dialog>
              
            
            <Button label="Salvar" icon="pi pi-check"  type="submit"  style="margin-left: 30px"/>
            <Button label="Limpar" @click="limpar()" class="p-button-secondary" style="margin-left: 30px"/>
            
        </form>
        <table id="grupos">
          <thead>
            <tr>
              <th>Descrição da Peça</th>
              <th>Fornecedor</th>
              <th>Fabricante</th>
              <th>Cod. / Ref.</th>              
              <th>Setor</th> 
              <th>Unidade</th>   
              <th>Ação</th>           
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in items" :key="item.id">            
              <td>{{ item.descricao }}</td>
              <td>{{ item.fornecedor }}</td>            
              <td>{{ item.fabricante }}</td>
              <td>{{ item.codigo_ref }}</td>
              <td>{{ item.setor }}</td>
              <td>{{ item.unidade }}</td>
              <td>
                <i i class="pi pi-trash" @click="remover(item.id)"/>
              </td>
             
            </tr>
          </tbody>
        </table>
        <div >
        <Dialog position="top" v-model:visible="display" :breakpoints="{'960px': '75vw', '640px': '100vw'}" :style="{width: '50vw'}+{BlockList}" class="line">
           <label >Nome Grupo
             <InputText v-model="nomeGrupo" />
            <i class="pi pi-check" style="margin-left: 50px" @click="salvarGrupo"></i>
            </label>
           
  
         
        </Dialog>
        </div>
        <div>
       
          <Toast />
          <Toast position="top-left" group="tl" />
          <Toast position="bottom-left" group="bl" />
          <Toast position="bottom-right" group="br" />
  
          <Toast position="bottom-center" group="bc">
              <template #message="slotProps">
                  <div class="flex flex-column">
                      <div class="text-center">
                          <i class="pi pi-exclamation-triangle" style="font-size: 3rem"></i>
                          <h4>{{slotProps.message.summary}}</h4>
                          <p>{{slotProps.message.detail}}</p>
                      </div>
                      <div class="grid p-fluid">
                          <div class="col-6">
                              <Button class="p-button-success" label="Yes" @click="onConfirm"></Button>
                          </div>
                          <div class="col-6">
                              <Button class="p-button-secondary" label="No" @click="onReject"></Button>
                          </div>
                      </div>
                  </div>
              </template>
          </Toast>
    
        </div>
        
    </div>  
</template>

<script>



export default {
    name: "incluirproduto",
    props: ['items', 'filterby'],
    data() {
        return {
          nomeGrupo: null,
            display: false,
            id: "",
            unidade: "",     
            setor: "",
            fornecedor: "",
            items: [],
            lucro: "",
            preco: "",
            descricao: "",
            fabricante: "",
            codigo_ref: "",
            valor_venda: "",
            id_setor: "",
            list_fornecedores: [],
            listaSetor: [],
            list_produto: [],
            lista_produtos: [],
            displayModal: false,
            id_fornecedor: "",
            id_produto: "",
            visible: false,      
            texto: "",
       produto: '',
       produtosFiltrados: []

        };
        
    },


    mounted() {



        const self = this;
        fetch("http://localhost:3000/fornecedores", {
          method: 'GET',
            headers: new Headers([
                ["Authorization", `Bearer ${localStorage.toke}`]
            ]),
        })
            .then(res => res.json())
            .then(function (res) {
            self.list_fornecedores = res;
           
        })
            .catch(function (ex) {
            console.error(ex);
        })
            fetch("http://localhost:3000/produtos", {
                headers: new Headers([
                    ["Authorization", `Bearer ${localStorage.toke}`]
                ]),
            })
                .then(res => res.json())
                .then(function (res) {
                self.list_produto = res              
            })
                .catch(function (ex) {
                console.error(ex);
            });

            this.atualizarSetor()
    },
   
    methods:     
    {
      showSuccess() {
            this.$toast.add({severity:'success', summary: 'Sucesso', detail:'Grupo Criado!', life: 3000});
        },
      showError(msg) {
        console.log("me chamou função erro")
            this.$toast.add({severity:'error', summary: 'Erro', detail: msg, life: 3000});
        },
       

      salvarGrupo () {
        const nomeGrupo = this.nomeGrupo
        if (nomeGrupo != null && nomeGrupo.length > 3) {    
          fetch("http://localhost:3000/novonomegrupo", {
                method: "POST",
                headers: new Headers([
                    ["Authorization", `Bearer ${localStorage.toke}`],
                    ["Content-Type", "application/json"]
                ]),
                body: JSON.stringify({nome_setor: this.nomeGrupo.toUpperCase()}),
                mode: "cors"
            }).then((response) => {
              if (response.ok) {
                this.showSuccess()
                this.nomeGrupo = ''
                this.display = false
                this.listaSetor = ''
                this.atualizarSetor() 
              } else {
                this.showError('ver depois o motivo')
              }
            }).catch((error) => {
                this.showError('sem conexão. api off')
            })  

           
        } else {
          this.showError('campo vazio')
          this.nomeGrupo = ''
        }
       
         

      },
      remover(id) {
      this.items = this.items.filter((item) => item.id !== id);
    },
      adicionar() {        
      this.items.push({
        id: Date.now().toString(36),

        id_produto: this.id_produto,
        id_fornecedor: this.id_fornecedor,
        id_setor: this.id_setor,
        unidade: this.unidade,
        fabricante: this.fabricante,
        codigo_ref: this.codigo_ref, 
        fornecedor: this.list_fornecedores.find(f => f.id == this.id_fornecedor).nome, 
        setor: this.listaSetor.find(s => s.id == this.id_setor).nome_setor,
        descricao: this.descricao, 
                  
      });
      this.fabricante = ''
      this.codigo_ref = ''
      this.fornecedor = ''
      this.nome_setor = ''
      this.nome = ''
 
    },

    atualizarSetor () {
      const self = this;
      fetch("http://localhost:3000/setor", {
              method: 'GET',
              headers: new Headers([
                    ["Authorization", `Bearer ${localStorage.toke}`]
                ]),               
            })
              .then(res => res.json())
              .then(function (res) {
                self.listaSetor = res
              })
              .catch(function (e) {
                console.error(e)
              })
    },

    filtrarProduto() {
      if (this.produto.trim().length) {
        this.produtosFiltrados = this.list_produto.filter(p => p.descricao.toUpperCase().startsWith(this.produto.toUpperCase()))
      } else {
        this.produtosFiltrados = [...this.list_produto]
      }
    },

    formataProdutoAutocomplete({ descricao, aplicacao, aplicacao1, aplicacao2, aplicacao3 }) {
      return [descricao, aplicacao, aplicacao1, aplicacao2, aplicacao3]
        .filter(s => s && s.length > 0)
        .join(' - ') 
    },

        selecionaProduto({value: { id, aplicacao, aplicacao1, aplicacao2, aplicacao3, descricao}  }) {
          this.id_produto = id
          this.aplicacao = aplicacao
          this.aplicacao1 = aplicacao1
          this.aplicacao2= aplicacao2
          this.aplicacao3 = aplicacao3
          this.descricao = descricao
          this.visible = true   
        },

        
        limpar() {
            const self = this;
            self.id_produto = "";
            self.codigo_ref = "";    
            self.id_setor = "";
            self.id_fornecedor = "";
            self.fabricante = "";
            this.visible = false  
        },
        openModal() {
            this.displayModal = true;
        },
        closeModal() {
            this.displayModal = false;
        },
        opModalGrupo() {
          this.display = true;
        },
        save() {
            const self = this;
            fetch("http://localhost:3000/referencia", {
                method: "POST",
                headers: new Headers([
                    ["Authorization", `Bearer ${localStorage.toke}`],
                    ["Content-Type", "application/json"]
                ]),
                body: JSON.stringify(self.items.map(i => {
                  const  { id_produto, id_fornecedor, id_setor, fabricante, codigo_ref, unidade } = i

                  return { id_produto, id_fornecedor, id_setor, fabricante, codigo_ref, unidade }
                })),
                mode: "cors"
            })
                .then(function () {
                self.menssage = alert("inclusão Realizada!");
                self.id_produto = "";
                self.codigo_ref = "";
                self.lucro = "";
                self.preco = "";
                self.valor_venda = "";
                self.id_setor = "";
                self.id_fornecedor = "";
                self.fabricante = ""; 
                self.unidade = "",               
                self.limpar();
               self.items = '';
               
            })
                .catch(function (ex) {
                console.error(ex);
                console.log(self);
                self.message = "Erro";
            });
        },
    },

}
</script>

<style scoped>
.custom-error .p-tooltip-text {
  background-color: var(--pink-800);
  color: rgb(255, 255, 255);
}
.custom-error.p-tooltip-right .p-tooltip-arrow {
  border-right-color: var(--pink-800);
}
.incluir {
  margin-top: 15px;
}
.line {
  display: flex;
  padding: 10px 0 10px;
}
.aplicacao {
  font-size: 1.1rem;
  font-family: monospace;
  border: outset;
  padding: 10px 10px;
  margin-left: 10px;
  text-transform: uppercase;
}
.inputText {
  display: block;
  border-bottom: groove;
  border-top: none; 
  text-transform: uppercase;
}

.p-component * {
 
  background-color: #fff;
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
    display: block;  
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


#grupos {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 15px;
  border-collapse: collapse;
  width: 940px;
  text-align-last: center;
}

#grupos td,
#grupos th {
  border: 1px solid #ddd;
  padding: 8px;
}

#grupos tr:nth-child(even) {
  background-color: #f2f2f2;
}

#grupos tr:hover {
  background-color: #ddd;
}

#grupos th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: rgb(40, 39, 71);
  color: white;
}
.control {
 
    height: 60px;
}

</style>