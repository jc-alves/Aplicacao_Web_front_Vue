import { createStore } from 'vuex'
import * as actions from './actions'
import state from './state'
import  mutations from './mutations'
// import modules from './modules'



export default createStore({
    

    actions,

    state, 

    mutations,
    
    namespaced: true,


})
