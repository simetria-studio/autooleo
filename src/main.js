import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Select2 from 'v-select2-component';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'


Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueMaterial)
Vue.component('Select2', Select2);
new Vue({ 
  router,
  store,
  render: h => h(App)
}).$mount('#app')
