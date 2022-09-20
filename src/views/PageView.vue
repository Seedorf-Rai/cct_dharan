<template>

    <template-view>
       <div>
        <div class="container">
          <!-- <p v-html="singlePage.descriptions"></p>
           -->
           <h1>Single Page Application</h1>
        </div>
       </div>
    </template-view>

</template>

<script>
    import { mapGetters } from 'vuex';
import TemplateView from './TemplateView.vue'
export default {
  name: 'PageView',
  components: {TemplateView},
  computed: {
    ...mapGetters({
      menus: 'GET_MENU',
    }),
    page(){
      return this.menus.find((e)=> e.pages.find((p)=> p.id == this.id))
    },
    singlePage(){
      return this.page['pages'].find((p) => p.id == this.id)
    }
  }
}
</script>

<style>

</style>