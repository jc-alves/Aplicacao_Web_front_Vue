import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import grupo from '../components/pages/grupos/grupo.vue'
import novogrupo from '../components/pages/grupos/novogrupo.vue'
import buscagrupo from '../components/pages/grupos/buscagrupo.vue'
import editargrupo from '../components/pages/grupos/alterargrupo.vue'
import financeiro from '../components/pages/financeiro/financeiro.vue'
import historico from '../components/pages/financeiro/historico.vue'
import lancamento from '../components/pages/financeiro/lancamento.vue'
import saque from '../components/pages/financeiro/saque.vue'
import relatorio from  '../components/pages/financeiro/relatorio.vue'
import usuarios from '../components/pages/usuarios/usuarios.vue'
import novousuario from '../components/pages/usuarios/novousuario.vue'
import usuario from '../components/pages/usuarios/usuario.vue'
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

