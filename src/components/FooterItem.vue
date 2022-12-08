<template>
  <footer class="bg-light text-black text-center">
    <button class="btn btn-danger" @click="logout">
      Logout
    </button>
  </footer>
</template>

<script>
import AuthService from "@/services/auth.service";
export default {
  name: "FooterItem",
  methods: {
    logout() {
      console.log("logout")
      console.log(JSON.parse(localStorage.getItem('user')))
      AuthService.logout()
      console.log(JSON.parse(localStorage.getItem('user')))
    }
  }
}
</script>

<style scoped>
footer {
  z-index: 1;
  position: fixed;
  bottom: 0;
  width: 100%;
}
</style>