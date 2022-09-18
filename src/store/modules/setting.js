import instance from "@/config"

export const state = {
    company: {}
}
export const getters = {
    GET_COMPANY(state){
      return state.company
    }
}
export const mutations = {
    SET_COMPANY(state,data){
        state.company = data
    }
}
export const actions = {
    async getCompanyDetails({commit}){
        try {
          let response = await instance.get("company")
          if(response.status == 200){
            console.warn(response.data.data);
            commit('SET_COMPANY',response.data.data)
          }
        }catch(e){
            console.warn(e.toString());
        }
    }
}