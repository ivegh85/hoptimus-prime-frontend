<template>
  <div class="text-center">
    <p>Already a member? <router-link :to="{ name: 'Login' }">Login</router-link></p>
  </div>
</template>

<script>
export default {
  name: "AlreadyAMember"
}
</script>

<style scoped>

</style>
