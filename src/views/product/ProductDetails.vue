<template>
  <h1>Product Details</h1>
  <h3>ID: {{ $route.params.id }}<br>Name: {{ $route.params.name}}</h3>
</template>

<script>

export default {
  name: "ProductDetails.vue",
  props: ['id', 'name', 'description'],

}
</script>

<style scoped>

</style>
