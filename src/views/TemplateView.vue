<template>
  <div>
    <!-- Header Section with NavBar -->
    <header>
      <!-- Top Bar Section -->
      <top-bar/>
      <!-- Top Bar Ends -->
      <!-- Middle Heading -->
      <middle-bar/>
      <!-- Middle Heading Ends -->
      <!-- NavBar -->
      <menu-comp/>
      <!-- NavBar Ends -->
    </header>
    <!-- Header Section with NavBar Ends-->

    <!-- Content Here -->
    <slot> </slot>
    <!-- Content Ends -->

    <!-- Footer Section Goes Here -->
    <footer></footer>
    <!-- Footer Section Ends -->
  </div>
</template>

<script>
import TopBar from '@/components/TopBar.vue'
import MenuComp from '@/components/MenuComp.vue';
import MiddleBar from '@/components/MiddleBar.vue'
export default {
  name: "TemplateView",
  components: {TopBar,MenuComp,MiddleBar}
};
</script>

<style>

</style>