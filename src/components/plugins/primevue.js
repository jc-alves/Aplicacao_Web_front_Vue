import Vue from 'vue'
import PrimeVue from 'primevue/config'

import Card from 'primevue/card'
import InputText from 'primevue/inputtext'
import Button from 'primevue/button'
import { locale } from './primevue-locale-dictionary'

import 'primevue/resources/themes/saga-blue/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'

Vue.use(PrimeVue, { locale })

Vue.component('Card', Card)
Vue.component('InputText', InputText)
Vue.component('Button', Button)