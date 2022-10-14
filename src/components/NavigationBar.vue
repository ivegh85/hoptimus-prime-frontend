<template>
  <div>
    <nav>
      <router-link class="spacing" v-for="routes in links"
                   v-bind:key="routes.id"
                   :to="`${routes.page}`">{{routes.text}}</router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'NavigationBar.vue',
  data() {
    return {
      links: [
               {
          id: 1,
          text: 'Home',
          page:'/'
        },
        {
          id: 2,
          text: 'Registration',
          page:'/Registration'
        },
        {
          id: 3,
          text: 'Login',
          page:'/Login'
        },
        {
          id: 4,
          text: 'Imprint',
          page:'/Imprint'
        },
        {
          id: 5,
          text: 'Help',
          page:'/Help'
        }
      ]
    }
  }
}
</script>

<style>
.spacing {
  margin-right: 10px;
}
</style>

