import instance from '@/config'
export const state = {
    menus: [],
    pageLoading: false
}
export const getters = {
    GET_MENU(state) {
        return state.menus
      },
      GET_LOADER(state) {
        return state.pageLoading
      }
}
export const mutations = {
    SET_MENU(state,data){
        state.menus = data
      },
      SET_LOADER(state,data){
        state.pageLoading = data
      }
}
export const actions = {
    async getMenus({commit}){
        try{
          commit('SET_LOADER',true)
       let response = await instance.get("menu")
       if(response.status == 200){
        console.warn(response.data.data)
        commit('SET_MENU',response.data.data)
       }
        }
        catch(e){
            console.warn(e.toString());
        }
        finally{
          commit('SET_LOADER',false)
        }
    }
}