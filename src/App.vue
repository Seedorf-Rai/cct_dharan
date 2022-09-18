<template>
  <div id="app">
      <div class="loader" v-if="donkey == true">
        <self-building-square-spinner
  :animation-duration="6000"
  :size="40"
  color="#333C78"
/>
      </div>
    <router-view v-else/>
  </div>
</template>
<script>
import { mapActions,mapGetters } from 'vuex'
import {SelfBuildingSquareSpinner} from 'epic-spinners'
  export default{
    components:{SelfBuildingSquareSpinner},
    computed:{
      ...mapGetters({
        donkey: 'GET_LOADER'
      })
    },
    methods:{
      ...mapActions(['getMenus','getCompanyDetails'])
    },
    mounted(){
      this.getMenus()
      this.getCompanyDetails()
    }
  }
</script>
<style>
.bgPrimary {
  background-color: #333C78;
}
.txtPrimary {
  color: #333C78;
}
.loader{
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
