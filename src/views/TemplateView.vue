<template>
  <div>
    <!-- Header Section with NavBar -->
    <header>
      <!-- Top Bar Section -->
      <top-bar/>
      <!-- Top Bar Ends -->
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
export default {
  name: "TemplateView",
  components: {TopBar}
};
</script>

<style>

</style>