<template>
  <div class="text-center">
    <p>Not a member? <router-link :to="{ name: 'Registration' }">Register</router-link></p>
  </div>
</template>

<script>

export default {
  name: "NotAMember.vue",
  components: {

  }
}
</script>

<style scoped>

</style>
