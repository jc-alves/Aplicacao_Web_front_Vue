<template>
    <div id="sidebar">   
        <div id="menu">
            <div class="user">
               
            <h2 class="titulo">SysWeb </h2>
            <i class="pi pi-cloud" style="font-size: 2.5rem" ></i>
            <p>Sistema Web para Auto Peças</p>
            <hr />
            </div>
       
            <PanelMenu  id="nav" :model="items" />

        </div>

  </div>
    
    
</template>

<script>

  export default {

    data() {
		return {
			items: [
                {
                    label: 'Vendas',
                    icon:'pi pi-fw pi-file',
                    items: [
                 
                     
                        {
                            label: 'Nova Venda',
                            icon:'pi pi-shopping-cart'
                        },
                        {
                            label: 'Pesquisa',
                            icon:'pi pi-search'
                        }
                    ]
                },
                {
                    label: 'Serviços',
                    icon:'pi pi-fw pi-pencil',
                    
                    items: [
                        {
                            label: 'Nova',
                            icon:'pi pi-fw pi-plus',
                            to: '/novaOS'
                        },
                        {
                            label: 'Right',
                            icon:'pi pi-fw pi-align-right'
                        },
                        {
                            label: 'Center',
                            icon:'pi pi-fw pi-align-center'
                        },
                        {
                            label: 'Justify',
                            icon:'pi pi-fw pi-align-justify'
                        }
                    ]
                },
                {
                  label: 'Fornecedores',
                  icon: 'pi pi-box',

                  items: [
                    {
                      label: 'Novo',
                      icon:'pi pi-fw pi-user-plus',
                      to: '/novofornecedor',
                    }
                  ]

                },
                {
                  
                    label: 'Clientes',
                    icon:'pi pi-fw pi-user',
                    items: [
                        {
                            label: 'Novo',
                            icon:'pi pi-fw pi-user-plus',
                            to: '/novocliente'

                        },
                        {
                            label: 'Pesquisar',
                            icon:'pi pi-search',
                        },
                
                            
                        
                    ]
                },
                {
                    label: 'Produtos',
                    icon:'pi pi-box',
                    items: [
                        {
                            label: 'Cadastros',
                            icon: 'pi pi-inbox',
                           
                        items:  [                                   
                                    {
                                        label: 'Peça',
                                        icon:'pi pi-inbox', 
                                        to: '/cadastroproduto'                                                 
                                    },
                                    {
                                        label: 'Referência',
                                        icon:'pi pi-inbox', 
                                        to: '/incluirproduto'                                                    
                                    },
                                    {
                                        label: 'Localizar Peça',
                                        icon: 'pi pi-inbox',
                                        to: '/alterarpeca'
                                    }
                                ]
                
                        },
                        { 
                            label: 'Lista Geral',
                            icon: 'pi pi-inbox',
                            to: '/estoque' 
                        },                   
                        {
                            label: 'Entrada no Estoque',
                            icon: 'pi pi-inbox',
                            to: '/entradaestoque'
                        },
                        {
                            label: 'Lista Testes',
                            icon: 'pi pi-inbox',
                            to: '/listaprodutos'
                        }
                      
                    ]
                },
                {
                    label: 'Manuntenção',
                    icon: 'pi pi-wrench',
                    items: [
                        {
                            label: 'Setor',
                            icon: 'pi pi-wrench',
                            to: 'setor'
                        },
                        {
                            label: 'Usuario',
                            icon: 'pi pi-user',
                            to: 'setor'
                        }
                    ]
                }
            ]
		}
	}     
 
  }
</script>

<style>

#menu {
    background-color: rgba(24, 24, 212, 0.7);
    width: 250px;
    height: 100%;
    padding: 10px 10px;
    margin-top: 0;
    } 


#sidebar {

    width: 250px;
    height: 780px;
    background: url("./../img/sidebar.png");

               
	}

.user {
    height: 150px;
    color: #ffff;
    text-align: center;
    font-size: 1rem;
}
#menu .p-panelmenu-header-action {
    background: rgb(rgb(255, 255, 255), green, blue, 0,1);
    
  
  }
  .nav {
    padding-block: 10px;
  }
  .p-panelmenu .p-panelmenu-header {
    outline: 0 none;
    padding: 0.0rem;
  
  }
  .p-panelmenu .p-panelmenu-header .p-panelmenu-header-content {
    border: none;
    color: #ffffff;
    background: none;
    border-radius: 6px;
    transition: box-shadow 0.2s;
    width: 230px;
    text-align: center;
}
.p-component * {
    box-sizing: border-box;
    
}
.p-panelmenu .p-panelmenu-panel {
    margin-bottom: -5px;
}
.pi {
    font-family: 'primeicons';
    speak-as: none;
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    text-transform: none;
    line-height: 1;
    display: inline-block;
    -webkit-font-smoothing: antialiased;
    text-align: initial;
    -moz-osx-font-smoothing: grayscale;
}
.p-panelmenu .p-panelmenu-header .p-panelmenu-header-content .p-panelmenu-header-action {
    padding: 1.25rem;
    font-weight: 780;
    width: 15px;
}
</style>
