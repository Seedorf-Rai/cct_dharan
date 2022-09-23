import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Vuesax from 'vuesax'

import 'vuesax/dist/vuesax.css'

Vue.config.productionTip = false
Vue.use(axios)
Vue.use(ElementUI)
Vue.use(Vuesax)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
