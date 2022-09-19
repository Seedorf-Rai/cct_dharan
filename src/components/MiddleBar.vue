<template>
  <div>
    <div class="d-flex container">
    <a href="" >
        <img src="https://cctdharan.edu.np/img/logo.png" @click.prevent="$router.push({name:'home'})" alt="" class="img-fluid" width="180" >
    </a>
         <div class="py-4">
            <h2>{{ company.name }}</h2>
            <p>{{ company.address_1 }}, {{ company.address_2 }}</p>
        </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
 name: 'MiddleBar',
 computed: {
    ...mapGetters({
       company: 'GET_COMPANY'
    })
 }
}
</script>

<style scoped>
h2{
    color: #333C8E;
}
p{
    color: #333C8E;
}
</style>