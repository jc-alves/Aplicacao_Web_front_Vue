<template>
  <div id="conteiner">
    <h3>Lista do Estoque</h3>
  <div class="table">
    <div class="rolagem">
    <table id="grupos">
      <thead>
        <tr>
            <th>Qtd</th>
            <th>Descrição</th>
            <th>Fabricante</th>
            <th>Cod. Ref.</th>
            <th>Setor</th>         
            <th>Ação</th>            
        </tr>
      </thead>
     
      <tbody >
        <tr  v-for="item in listaEstoque" :key="item.id">
      
           <td>{{item.quantidade}}</td>
            <td>{{item.descricao}}</td>
            <td>{{item.fabricante}}</td>
            <td>{{item.codigo_ref}}</td>
            <td>{{item.nome_setor}}</td>
            <td></td>
       
         
       
        </tr>
      </tbody>
     
    </table>
  </div>
    
  </div>
  </div>
</template>

<script>
export default {
    name: 'estoque',
    data() {
        return {
            listaEstoque: [],
        }

    },

    
    mounted() {
const self = this;

    fetch("http://localhost:3000/listaestoque", {
        headers: new Headers([
            ["Authorization", `Bearer ${localStorage.toke}`]
        ]),
    })
        .then(res => res.json())
        .then(function (res) {
        self.listaEstoque = res              
    })
        .catch(function (ex) {
        console.error(ex);
    });

},
};
</script>

<style scoped>
#conteiner {

  position: absolute;


}
tbody {
  display: table;
  position: relative;
  height: 300px;
  max-height: 300px;
  overflow: overlay;
  display: table-row-group;
  vertical-align: middle;
  border-color: inherit;
}
tr {
  display: table-row;
  vertical-align: inherit;
  border-color: inherit;
}
.table {
  width: 100%;
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
    font: menu;
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

  .rolagem {
   
    overflow: auto;
    max-height: 500px;
  }
  thead {
    display: table-header-group;
    vertical-align: middle;
    border-color: inherit;
}

</style>