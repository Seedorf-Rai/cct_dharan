<template>
  <div>
    <!-- Header Section with NavBar -->
    <header>
      <!-- Top Bar Section -->
      <top-bar/>
      <!-- Top Bar Ends -->
      <!-- Middle Heading -->
      <div>
        Middle Heading
      </div>
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
export default {
  name: "TemplateView",
  components: {TopBar,MenuComp}
};
</script>

<style>

</style>