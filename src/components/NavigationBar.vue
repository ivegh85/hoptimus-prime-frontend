<template>
  <div>
    <nav class="navbar navbar-expand-lg">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggler"
              aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <router-link class="navbar-brand" :to="{ name: 'Home' }">
        <img class="resize" src="../assets/beer.png" alt="Beer Icon by Freepik">
      </router-link>
      <div class="collapse navbar-collapse " id="navbarToggler">
        <div v-for="routes in links"
             v-bind:key="routes.id">
          <router-link class="nav-item nav-item-format navbar-nav mr-auto mt-2 mt-lg-0 "
                       :to="`${routes.page}`">
            {{ routes.text }}
          </router-link>
        </div>
        <div v-for="routes in linksAdmin"
             v-bind:key="routes.id">
          <router-link v-if="showAdminPages" class="nav-item nav-item-format navbar-nav mr-auto mt-2 mt-lg-0 "
                       :to="`${routes.page}`">
            {{ routes.text }}
          </router-link>
        </div>
        <div v-for="routes in linksUser"
             v-bind:key="routes.id">
          <router-link v-if="showUserPages" class="nav-item nav-item-format navbar-nav mr-auto mt-2 mt-lg-0 "
                       :to="`${routes.page}`">
            {{ routes.text }}
          </router-link>
        </div>
      </div>

      <div v-if="currentUser" class="navbar-nav ml-auto">
        <div class="nav-item">
          <router-link to="/MyProfile" class="nav-link">
            <font-awesome-icon icon="user"/>
            {{ currentUser.username }}
          </router-link>
        </div>
        <div class="nav-item">
          <button class="nav-link" @click.prevent="logOut">
            <font-awesome-icon icon="sign-out-alt"/>
            LogOut
          </button>
        </div>
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
        {id: 1, text: 'Home', page: '/'},
        {id: 2, text: 'Registration', page: '/registration'},
        {id: 3, text: 'Login', page: '/login'},
        {id: 4, text: 'Imprint', page: '/imprint'},
        {id: 5, text: 'Help', page: '/help',},
        {id: 7, text: 'Auctions', page: '/AuctionsView'},
      ],
      linksAdmin: [
        {id: 6, text: 'Products', page: '/ProductsView'},
        {id: 8, text: 'My Profile', page: '/MyProfile/' + this.getProfilePage(), props: true}
      ],
      linksUser: [
        {id: 8, text: 'My Profile', page: '/MyProfile/' + this.getProfilePage(), props: true}
      ]
    }
  },
  computed: {
    currentUser() {
      return this.$store.state.auth.user
    },
    showAdminPages() {
      if (this.currentUser && this.currentUser['roles']) {
        return this.currentUser['roles'].includes('ADMIN');
      }
      return false;
    },
    showUserPages() {
      if (this.currentUser && this.currentUser['roles']) {
        return this.currentUser['roles'].includes('USER');
      }
      return false;
    },
  },
  methods: {
    getProfilePage() {
      let index = "";
      if (localStorage.getItem('user') === null) {
        index = "";
      } else {
        index = JSON.parse(localStorage.getItem('user')).id;
      }
      return index;
    },
    logOut() {
      this.$store.dispatch('auth/logout');
      this.$router.push('/login');
    }
  },
}


</script>

<style scoped>

.navbar {
  background: #EAE7DC;
  font-family: "Bradley Hand ITC", serif;
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

