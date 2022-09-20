<template>
  <template-view>
    <el-carousel :interval="4000" type="card" class="mt-4" height="550px">
    <el-carousel-item v-for="(item,index) in slides" :key="index">
      <img :src="item['image']" alt="">
    </el-carousel-item>
  </el-carousel>
  </template-view>
</template>

<script>
  import { mapGetters } from 'vuex';
import TemplateView from './TemplateView.vue'
export default {
   name: 'HomeView',
   components: {TemplateView},
   computed: {
    ...mapGetters({
      slides: 'GET_SLIDE',
    })
   }
}
</script>

<style>

</style>