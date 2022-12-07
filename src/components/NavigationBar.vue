<template>
  <div>
    <nav class="navbar navbar-expand-lg">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
        <router-link class="navbar-brand" :to="{ name: 'Home' }">
          <img class="resize" src="../assets/beer.png" alt="Beer Icon by Freepik">
        </router-link>
          <div class="collapse navbar-collapse " id="navbarToggler">
            <div v-for="routes in filteredLinks"
                 v-bind:key="routes.id">
              <router-link class="nav-item nav-item-format navbar-nav mr-auto mt-2 mt-lg-0 "

                           :to="`${routes.page}`">
                {{ routes.text }}
              </router-link>
            </div>
          </div>
        <form class="collapse navbar-collapse" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
    </nav>
  </div>
</template>

<script>
import HelperService from "@/services/helper.service";
export default {
  name: 'NavigationBar.vue',
  data() {
    return {
      links: [
        {
          id: 1,
          text: 'Home',
          page: '/',
          permitted: true,
        },
        {
          id: 2,
          text: 'Registration',
          page: '/registration',
          permitted: true,
        },
        {
          id: 3,
          text: 'Login',
          page: '/login',
          permitted: true,
        },
        {
          id: 4,
          text: 'Imprint',
          page: '/imprint',
          permitted: true,
        },
        {
          id: 5,
          text: 'Help',
          page: '/help',
          permitted: true,
        },
        {
          id: 6,
          text: 'Products',
          page: '/ProductsView',
          permitted: true,
        },
        {
          id: 7,
          text: 'Auctions',
          page: '/AuctionsView',
          permitted: true,
        },
        {
          id: 8,
          text: 'My Profile',
          page: '/MyProfile/' + JSON.parse(localStorage.getItem('user')).id,
          props: true,
          permitted: HelperService.permittedAdmin(),
        }
      ]
    }
  },
  computed: {
    filteredLinks() {
      return this.links.filter(links => {
        return (links.permitted === true)
      })
    }
  }

}
</script>

<style scoped>

.navbar {
  background: #EAE7DC;
  font-family: "Bradley Hand ITC",serif;
  font-weight: 600;
  text-align: center;

}

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

