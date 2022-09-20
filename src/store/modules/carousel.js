import instance from "@/config"

export const state = {
    slides: []
}
export const getters = {
    'GET_SLIDE':(state) => state.slides
}
export const mutations = {
    'SET_SLIDE':(state,data) => state.slides = data
}
export const actions = {
   async getSlide({commit}){
        try{
          let response = await instance.get("carousel")
          if(response.status == 200){
            console.warn(response.data.data)
            commit('SET_SLIDE',response.data.data)
          }
        }
        catch(e){
          console.warn(e.toString());
        }
    }
}