<template>
  <h2>Auctions List</h2>
  <div v-for="auction in auctions" :key="auction.id">
    <router-link :to="{ name: 'AuctionDetails', params: { id: auction.id }}">
      <h3> {{ auction.title }} </h3>
    </router-link>
  </div>
</template>

<script>

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Auctions.vue",

  data() {
    return {
      auctions: [
        {title: 'Auction 1', category: 'beer', id: 1, details: 'whatever'},
        {title: 'Auction 2', category: 'beer', id: 2, details: 'whatevski'},
        {title: 'Auction 3', category: 'wine', id: 3, details: 'whateverz'},
        {title: 'Auction 4', category: 'whisky', id: 4, details: 'what-ever'},
      ]
    }
  }
}

</script>

<style scoped>

</style>
