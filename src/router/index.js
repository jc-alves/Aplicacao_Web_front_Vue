import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import grupo from '../pages/grupos/grupo.vue'
import novogrupo from '../pages/grupos/novogrupo.vue'
import buscagrupo from '../pages/grupos/buscagrupo.vue'
import editargrupo from '../pages/grupos/alterargrupo.vue'
import financeiro from '../pages/financeiro/financeiro.vue'
import historico from '../pages/financeiro/historico.vue'
import lancamento from '../pages/financeiro/historico.vue' 
import saque from '../pages/financeiro/saque.vue'
import relatorio from  '../pages/financeiro/relatorio.vue'
import usuarios from '../pages/usuarios/usuarios.vue'
import novousuario from '../pages/usuarios/novousuario.vue'
import usuario from '../pages/usuarios/usuario.vue'
import { isSignedIn } from '../components/auth/auth';


const routes = [
  
  {
    path: '/home',
    name: 'Home',
    
    component: Home,
    beforeEnter (_, __, next) { // Impede usuários não assinados
      if (isSignedIn()) {       // de acessar a página Home.
        next();
        return;
      }
      next('/')
    },


    
          children: [
            {
              path: '/produtos',
              name: 'Produtos',
              component: () => import( '../pages/produtos/produtos')
            },
            {
              path: '/alterarpeca',
              component: () => import('../pages/produtos/alterarPeca')
            },
         
         
            {
               path: '/cadastroproduto',
               component: () => import( '../pages/produtos/cadastroProduto')

            },            
                
            {
                path: '/incluirproduto',
                component: () => import('../pages/produtos/incluirProduto')
            },
            {
              path: '/entradaestoque',
              component: () => import('../pages/produtos/entradaProduto')
            },
            {
              path: '/estoque',
              component: () => import('../pages/produtos/estoque')
            },
         
 
            {
              path: '/novofornecedor',
              component: () => import('../pages/fornecedores/novofornecedor')
            },
            
            {
                path: '/novocliente',
                name: 'NovoCliente',
                component: () => import( '../pages/client/novocliente')
            },

            {
              path: '/novaos',
              name: 'novaOS',
              component: () => import(/* webpackChunkName: "about" */ '../pages/servicos/novaOS'),

            },
            { path: '/mecanicos',
            name: 'Mecanicos',
              children: [
              
                {
                  path: '/relatorio',
                  component: () => import(/* webpackChunkName: "about" */ '../pages/mecanicos/Relatorio'),
                }
                
              ],
              component: () => import(/* webpackChunkName: "about" */ '../pages/mecanicos/Mecanicos'),

            },

            { path: '/usuarios',
              name: 'Usuarios',
             
                   children: [
                    {
                        path: 'novousuario',
                        component: novousuario,
            
                    },
                    {
                      path: 'usuario',
                      component: usuario,
          
                  },
                   ],
                
               
        component: usuarios
            },   


            { path: '/grupo',
              name: 'Grupo',

                   children: [
                     {
                       path: 'novogrupo',      
                       component: novogrupo

                     },
                     {
                       path: 'buscagrupo',
                       component: buscagrupo
                     },
                     {
                      path: 'alterargrupo',
                      component: editargrupo
                      }
                      ],
           component: grupo

             },
  {
    path: '/financeiro',
    name: 'Financeiro',

    children: [
      {
        path: 'historico',
        component: historico,
      },
      {
        path: 'recebimento',
        component: lancamento,
      },
      {
        path: 'saque',
        component: saque,
      },
      {
        path: 'relatorio',
        component: relatorio,
      }
    ],
    component: financeiro
  },
    ]
  },
  {
    path: '/',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue'),
   
  }, 

  
  

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// router.beforeEach((to, from, next) => {
//   if(to.path.toLocaleLowerCase() != '/') {                     // const { exp } = JSON.parse(atob(localStorage.toke.split('.')[1]))
//     if (localStorage.toke) { // se existe e se ainda é válido (Date.now() < exp * 1000)
//       next()
//       return
//     }
//     next('/')
//   } else {
//     next()
//   }
// })


export default router

