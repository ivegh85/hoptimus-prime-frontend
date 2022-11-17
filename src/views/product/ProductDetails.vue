<template>
  <h1>Product Details</h1>
  <h3>ID: {{ $route.params.id }}<br>Name: {{ $route.params.name}}</h3>
  <div>{{ $route.params.description }} </div> <!--description etc soll auch angezeigt werden, aber nicht als teil der url-->
</template>

<script>

export default {
  name: "ProductDetails.vue",
  props: ['id', 'name', 'description'],

}
</script>

<style scoped>

</style>
