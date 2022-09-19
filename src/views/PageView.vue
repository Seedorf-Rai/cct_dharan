<template>
  <div>
    <template-view>
        <h1>Welcome to Single Page App</h1>
    </template-view>
  </div>
</template>

<script>
    import TemplateView from './TemplateView.vue'
export default {
  name: 'PageView',
  components: {TemplateView}
}
</script>

<style>

</style>