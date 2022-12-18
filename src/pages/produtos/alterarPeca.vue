<template>
  <div id="conteiner">
    <h3>Localizar peça</h3>
   
   <div class="line">
    <label>Descrição
      <InputText
        type="text"
        style="width: 300px"
        class="inputText"
        required
        v-model="descricao"
        autocomplete="off"
      />
    </label>

    <label>Aplicação
        <InputText
          type="text"
          style="width: 300px"
          class="inputText"
          required
          v-model="aplicacao"
          autocomplete="off"
        />
      </label>
      <button @click="consulta">Consultar</button>
   </div> 

   <table id="grupos">
    <thead>
        <tr>
            <th>Descrição</th>
            <th>Aplicação</th>
            <th>Aplicação</th>
            <th>Aplicação</th>
            <th>Aplicação</th>
            <th>Ação</th>
        </tr>        
    </thead>
    <tbody>
        <tr v-for="item in listaProdutos" :key="item.id">
            <td><a href="javascript:void(0)" @click="abrirDialogReferencias(item.id)">{{item.descricao}}</a></td>
            <td>{{item.aplicacao}}</td>
            <td>{{item.aplicacao1}}</td>
            <td>{{item.aplicacao2}}</td>
            <td>{{item.aplicacao3}}</td>
            <td>
              <i class="pi pi-pencil" style="cursor: pointer" @click="abrirDialog(item)"/>
              &nbsp;
              <i class="pi pi-trash" style="cursor: pointer" @click="excluir(item.id, item.descricao)"/>
            </td>
        </tr>
    </tbody>

   </table>
   <Dialog position="top" v-model:visible="display" :breakpoints="{'960px': '75vw', '640px': '100vw'}" :style="{width: '50vw'}+{BlockList}"> 
 <div class="dialog">

     <label class="aplicacoes">Cod. Interno
      <InputText v-model="itemSelecionado.id"  style="width: 150px" />
     </label> 
     <label class="aplicacoes">Aplicação
      <InputText v-model="itemSelecionado.descricao" />
     </label> 
     <label class="aplicacoes">Aplicação
      <InputText v-model="itemSelecionado.aplicacao"/>
     </label>
     <label class="aplicacoes">Aplicação
      <InputText v-model="itemSelecionado.aplicacao1" />
     </label>
     <label class="aplicacoes">Aplicação
            <InputText v-model="itemSelecionado.aplicacao2"/>
    </label>
    <label class="aplicacoes">Aplicação
      <InputText v-model="itemSelecionado.aplicacao3" />
    </label>    
    <Button label="Confirmar"  @click="alterar"  style="width: 120px; margin-top: 20px" />     
    </div> 
 </Dialog>

 <Dialog position="top" v-model:visible="showMoldalReferencias" :breakpoints="{'960px': '75vw', '640px': '100vw'}" :style="{width: '50vw'}+{BlockList}">
    <table>
      <thead>
        <tr>
          <th>Fabricante</th>
          <th>Referência</th>
          <th>Valor Venda</th>
          <th>Quantidade</th>
          <th>Unidade</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in referencias" :key="item.id">
          <td>{{ item.fabricante }}</td>
          <td>{{ item.codigo_ref }}</td>
          <td>{{ item.valor_venda }}</td>
          <td>{{ item.quantidade }}</td>
          <td>{{ item.unidade }}</td>
      </tr>
      </tbody>
    </table>
 </Dialog>
  </div>
</template>
<script>
export default {
  name: "alterarpeca",
  data() {
    return {
      showMoldalReferencias: false,
        display: false,
        id: '',
        descricao: '',
        aplicacao: '',
        aplicacao1: '',
        aplicacao2: '',
        aplicacao3: '',
        listaProdutos: [],
        itemSelecionado: {},
        referencias: []
    }

  },
  methods: {
    abrirDialogReferencias(id) {
      this.showMoldalReferencias = true
      this.buscarReferencias(id)
    },

    abrirDialog(item) {
      this.display = true
      this.itemSelecionado = item
    },

    buscarReferencias(id) {
      const self = this
      fetch(`http://localhost:3000/buscarreferenciasporid/${id}`, {
                headers: new Headers([
                    ["Authorization", `Bearer ${localStorage.toke}`],
                ]),
                mode: "cors"
      }).then(async function (response) {
        self.referencias = response.ok ? await response.json() : []
      }).catch(console.error)
    },

    alterar() { 
          
          fetch("http://localhost:3000/alterarproduto", {
                method: "PUT",
                headers: new Headers([
                    ["Authorization", `Bearer ${localStorage.toke}`],
                    ["Content-Type", "application/json"]
                ]),
                body: JSON.stringify({ id: this.itemSelecionado.id, descricao: this.itemSelecionado.descricao, aplicacao: this.itemSelecionado.aplicacao,  aplicacao1: this.itemSelecionado.aplicacao1,  aplicacao2: this.itemSelecionado.aplicacao2,  aplicacao3: this.itemSelecionado.aplicacao3} ),
                mode: "cors"
            }).then((response) => {
              if (response.ok) {
                this.display = false
              } else {
                this.showError('ver depois o motivo')
              }
            }).catch((error) => {
                this.showError('sem conexão. api off')
            })  

        
         

 
      this.display = false
    },


    async consulta () {
     
        try {
        const result = await fetch('http://localhost:3000/buscapordescricaoaplicacao', 
       {
        method:'POST',
        headers: new Headers([
                    ["Authorization", `Bearer ${localStorage.toke}`],
                    ["Content-Type", "application/json"]
                ]),
                body: JSON.stringify({ descricao: this.descricao.toUpperCase(), aplicacao: this.aplicacao.toUpperCase()}),
        mode: 'cors'        
    })

        this.listaProdutos = await result.json()
    } catch (e) { console.log(e) }
  },

  async excluir (id) {
    if (confirm( 'Deseja realmente excluir a peça?')) {
 try {
        const result = await fetch(`http://localhost:3000/excluirproduto/${id}`,
        {
        method:'DELETE',
        headers: new Headers([
                    ["Authorization", `Bearer ${localStorage.toke}`],
                    ["Content-Type", "application/json"]
                ]),              
        mode: 'cors'        
    })
    this.listaProdutos = this.listaProdutos.filter(i => i.id != id)        
    } catch (error) {
        
    }
    }
   
  }

  }
}
</script>

<style scoped>
.aplicacoes{
 display: table-caption;
 margin-left: -10px;
 width: 220px; 
}
.dialog {
  display: flex;
}
</style>