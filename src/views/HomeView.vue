<template>
  <template-view>
    <el-carousel :interval="4000" type="card" class="mt-4" height="550px">
    <el-carousel-item v-for="(item,index) in slides" :key="index">
      <img :src="item['image']" alt="">
    </el-carousel-item>
  </el-carousel>
  <div class="container py-3">
    <div class="row">
      <div class="col-md-4">
        <h1>About Us</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus a ipsum iste laudantium recusandae fuga labore dolorum, illo expedita tempore commodi deleniti aut officiis inventore soluta officia voluptatem quas magnam?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est vero ipsum ipsa, quia provident, esse, quod saepe delectus necessitatibus sit dicta! Architecto eius ratione suscipit! Voluptates optio accusantium aliquid numquam ut ratione eum quaerat excepturi maxime eligendi, impedit doloremque non quos voluptatum aut sint nisi neque minus, sit delectus? Earum rem vel perferendis doloribus doloremque quibusdam maiores sunt officiis expedita saepe delectus, praesentium dolore quia quidem consequuntur nam nesciunt quos.</p>
      </div>
      <div class="col-md-4">
        <h1>Notice</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate fugit itaque dicta labore. Modi sequi quos laborum facere quibusdam similique magnam atque labore, quo ex quia tenetur provident ut incidunt.</p>
        <hr>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem necessitatibus tempore laboriosam doloribus molestias ea. Quo nulla eum, illum libero maxime deleniti neque atque consectetur error veniam earum nostrum et quae ipsum eligendi voluptatem quia eos consequatur harum, cum dolorem molestias? Facere, architecto! Suscipit nisi, voluptatem eius laborum adipisci officiis?</p>
        <hr>
      </div>
    </div>
  </div>
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