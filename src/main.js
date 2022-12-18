import Vue, { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import PrimeVue from 'primevue/config'
import SimpleTypeahead from 'vue3-simple-typeahead'
import 'vue3-simple-typeahead/dist/vue3-simple-typeahead.css'

import InputNumber from 'primevue/inputnumber'
import Button from 'primevue/button'
import Toast from 'primevue/toast'
import InputText from  'primevue/inputtext'
import Textarea from 'primevue/textarea'
import PanelMenu from 'primevue/panelmenu'
import InputMask from 'primevue/inputmask'
import Breadcrumb from 'primevue/breadcrumb'
import CascadeSelect from 'primevue/cascadeselect'
import TreeSelect from 'primevue/treeselect'
import {FilterService} from 'primevue/api'
import Dialog from 'primevue/dialog'
import AutoComplete from 'primevue/autocomplete'
import Tooltip from 'primevue/tooltip'
import ToastService from 'primevue/toastservice'
import Calendar from 'primevue/calendar';


const app = createApp(App);


createApp(App).use(store)
.directive('Tooltip', Tooltip)
.component('InputNumber', InputNumber)
.component('Button', Button)
.component('InputText', InputText)
.component('Textarea', Textarea)
.component('Toast', Toast)
.component('PanelMenu', PanelMenu)
.component('InputMask', InputMask)
.component('Breadcrumb', Breadcrumb)
.component('CascadeSelect', CascadeSelect)
.component('TreeSelect', TreeSelect)
.component('FilterService', FilterService)
.component('Dialog', Dialog)
.component('AutoComplete', AutoComplete)
.component('Calendar', Calendar)
.use(ToastService)
.use(SimpleTypeahead)
.use(PrimeVue).use(router).mount('#app')
