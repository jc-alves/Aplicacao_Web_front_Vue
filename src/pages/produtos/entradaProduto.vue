<template>
  <div>
    <div>
      <div class="line">
        <label>
          Nota Fiscal 
          <InputText type="text" v-model="nota" class="inputText" style="width: 150px"/>
        </label>
        <label style="margin-left: 20px">Fornecedor
          <select v-model="id_fornecedor" class="inputtext" value="Fornecedor"  required name="id_fornecedor">
            <option v-for="f in list_fornecedores" :key="f.id" :value="f.id">{{f.nome}}</option>
          </select>
        </label>
        <label>
          Valor Total 
          <InputText type="number" v-model="valorCompra" class="inputText" style="width: 150px"/>
        </label>
        <label class="data">
          Data Entrada
          <InputText type="date" v-model="data" />
          <!-- <Calendar inputId="basic" v-model="data"  style="width: 200px" autocomplete="off" />       -->
        </label>
      </div>
      <div class="line">
      
        <label>
          Referência/Descrição
          <inputText ref="codigoDesc" type="text" v-model="codigoDescricao" @blur="consultaCodigoDescricao" class="inputText" style="width: 300px"/>
        
        </label>     
        <label>
          Referência
          <InputText type="text" v-model="codigo_ref" class="inputText" style="width: 100px"/>
        </label>
        <label>
          Quantidade
          <inputText type="number" v-model="quantidade" class="inputText"  style="width: 80px"/>
        </label>

        <label>
            Preço Compra
            <inputText type="text" v-model="precoCompra" class="inputText" style="width: 100px"/>
            </label>
    
        <label>
          Margem %
          <inputText
            type="text"
            v-model="margem"
            @input="setMargem"
            class="inputText"
            style="width: 100px"
          />
        </label>
        <label>
            Preço Venda
            <inputText
              type="text"
              v-model="precoVenda"
              @input="setPrecoVenda"
              class="inputText"
              style="width: 100px"
            />
          </label>
          <Button label="Adicionar" @click="adicionar"  style=" height: 45px; margin-top: 3px; width: 120px;"/>
      </div>
     
    </div>

    <table id="grupos">
      <thead>
        <tr>
          <th>Ref.</th>
          <th>Descrição</th>
          <th>Qtd.</th>
          <th>Preço Compra</th>
          <th>Preço Venda</th>
          <th>Ação</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items" :key="item.id">
          <td>{{ item.referencia }}</td>
          <td>{{ item.descricao }}</td>
          <td>{{ item.quantidade }}</td>
          <td>{{ item.precoCompra }}</td>
          <td>{{ item.precoVenda }}</td>
          <td>
            <button @click="remover(item.id)" class="button">Del</button>
          </td>
        </tr>
      </tbody>
 {{nota}}
    </table>
    <div>
      <button @click="inserirProdutos()">Gravar</button>
    </div>
    <Dialog position="top" :visible="display">
      <table>
        <thead>
          <tr>
            <th>Referência</th>
            <th>Descrição</th>
            <th>qualque coisa</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in produtosEncontrados" :key="item.id" @click="preencherCampos(item)">
            <td>{{item.codigo_ref}}</td>
            <td>{{item.descricao}}</td>
            <td>Mari clara</td>
          </tr>
        </tbody>
      </table>
    </Dialog>
  </div>
</template>

<script>

export default {
  data() {
    return {
      nota: '',
      valorCompra: 0,
      data: '',
      codigo_ref: '',
      display: false,
      id: "",
      codigoDescricao: '',
      items: [],
      referencia: "",
      descricao: "",
      precoCompra: "",
      precoVenda: "",
      margem: "",
      quantidade: "",
      id_fornecedor: "",
      produtosEncontrados: [],
      list_fornecedores: [],
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
  },

  computed: {
    total() {
      return this.items.reduce((prev, curr) => {
        return prev + curr.quantidade * curr.precoCompra;
      }, 0);
    },
  },

  methods: {
    preencherCampos (item) {
      this.id = item.id
      this.codigoDescricao = item.descricao
      this.precoCompra = item.preco
      this.precoVenda = item.valor_venda
      this.margem = item.lucro
      this.codigo_ref = item.codigo_ref
      this.referencia = item.codigo_ref
      this.descricao = item.descricao
      this.display = false
    },

    adicionar() {
      if ( this.referencia == null || this.precoCompra === null ) {
      return  alert('Todos os campos devem ser preenchidos!')
      }
      this.items.push({
        id: Date.now().toString(36),
        referencia: this.referencia,
        descricao: this.descricao,
        precoCompra: this.precoCompra,
        precoVenda: this.precoVenda,
        margem: this.margem,
        quantidade: this.quantidade,
        preco: this.precoCompra,
        referencia_id: this.id
      })
        this.codigoDescricao = ''
        this.codigo_ref = ''
        this.quantidade = ''
        this.precoCompra = ''
        this.margem = ''
        this.precoVenda = ''
      
    },
    
    inserirProdutos() {
       if (this.nota.length < 1) {
          return alert('Preechar os seguintes campo Nota Fiscal!')
        }
       if (this.id_fornecedor.length < 1 ) {
          return alert('Selecione um Fornecedor!')
        }
        if (this.valorCompra < 1) {
          return alert('Informar o valor da nota')
        }
        if (this.data < 1) {
          return alert('Informe a Data de Entrada')
        }
        

  
   console.log(this.id_fornecedor)
    

  fetch('http://localhost:3000/entradaprodutos', {
    method: 'POST',
        headers: new Headers([                       
        ['Authorization', `Bearer ${ localStorage.toke}`],              
        ['Content-Type', 'application/json']
    ]),
    body: JSON.stringify({ nota: this.nota, fornecedor: this.id_fornecedor, total: this.valorCompra, data: this.data, items: this.items 
        
    }),
    mode: 'cors'
    
})
    .then(function () {
    
        self.mensagem = alert("Produto cadastrado!")
        
                         
    })
    .catch(function (ex) {
        console.error(ex)
        console.log(self)
        self.mensagem = 'Erro'
    })
    },

    consultaCodigoDescricao() {
      if (this.codigoDescricao.length < 3) 
        return alert('Digite no minino 3 caractes para consulta')
    
      if (this.items.find(item => item.referencia == this.codigoDescricao)) {
        alert('Referência já consta na lista')

        setTimeout(() => {
          this.$refs['codigoDesc'].$el.focus()
        }, 200)

        return;
      }

      const self = this
        fetch("http://localhost:3000/buscarporcondigoreferencia", {
                method: "POST",
                headers: new Headers([
                    ["Authorization", `Bearer ${localStorage.toke}`],
                    ["Content-Type", "application/json"]
                ]),  
                body: JSON.stringify({descricaoCodigo: self.codigoDescricao}),
                mode: "cors"

        }).then(async function (resultado) {
          if (resultado.ok) {
            self.produtosEncontrados = await resultado.json()
           if (self.produtosEncontrados.length === 0) {
            alert('Descrição / referência não localizada')
           }
            if (self.produtosEncontrados.length === 1) {
              self.preencherCampos(self.produtosEncontrados[0])
            }

            if (self.produtosEncontrados.length > 1) {
              self.display = true
            }
          }
        })
      }, 

    setMargem(e) {
      const { value } = e.target;
      this.precoVenda =
        Number(this.precoCompra) +
        (Number(value) * Number(this.precoCompra)) / 100;
      this.margem = value;
    },

    setPrecoVenda(e) {
      const { value } = e.target;
      this.margem =
        ((Number(value) - Number(this.precoCompra)) /
          Number(this.precoCompra)) *
        100;
      this.precoVenda = value;
    },

    remover(id) {
      this.items = this.items.filter((item) => item.id !== id);
    },

    gravar() {
      // lança preço compra, venda, margem, quantidade,
    },
  },
};
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
.inputText {
  display: block;
  border-bottom: groove;
  border-top: none; 
}
.data {
  display: grid;

}

label {
  box-sizing: border-box;
  margin-inline: 10px;
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
.button {
    /* position: relative; */
    border: 5px;
    border-radius: 5px;
    margin: 4px;
    background: rgb(214, 214, 241);
    height: 30px;
    width: 100px;
    top: 15px;
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
</style>