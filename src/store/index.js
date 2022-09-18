import Vue from 'vue'
import Vuex from 'vuex'
import * as menus from './modules/menu'
import * as setting from './modules/setting'
Vue.use(Vuex)

export default new Vuex.Store({

  modules: {
   menus,
   setting
  }
})
