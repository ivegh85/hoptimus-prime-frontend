<template>
  <div>

    <nav class="navbar navbar-expand-lg bg-light">
      <div class="container-fluid">
        <div class="row">
          <div class="col-1">
            <router-link class="navbar-brand" :to="{ name: 'Home' }">
              <img class="resize" src="../assets/beer.png" alt="Beer Icon by Freepik">
            </router-link>
          </div>

          <div class="col-11">
            <router-link class="nav-item nav-item-format" v-for="routes in links"
                         v-bind:key="routes.id"
                         :to="`${routes.page}`">
              {{ routes.text }}
            </router-link>
          </div>
        </div>

        <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
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
          page: '/'
        },
        {
          id: 2,
          text: 'Registration',
          page: '/registration'
        },
        {
          id: 3,
          text: 'Login',
          page: '/login'
        },
        {
          id: 4,
          text: 'Imprint',
          page: '/imprint'
        },
        {
          id: 5,
          text: 'Help',
          page: '/help'
        },
        {
          id: 6,
          text: 'Products',
          page: '/ProductsView'
        }
      ]
    }
  }
}
</script>

<style scoped>

.nav-item-format {
  margin-right: 10px;
  text-decoration: none;
  padding: 10px;
  border-radius: 4px;
  text-align: center;
}

img.resize {
  width: 30px;
  height: auto;
}

</style>

