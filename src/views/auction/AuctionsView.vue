<template>

  <div class="column">
    <AuctionListComponent v-for="auction in auctions" :auction="auction" :key="auction.id"></AuctionListComponent>
  </div>

</template>

<script>

import AuctionListComponent from "@/components/AuctionListComponent";

const auctions = [
  {
    id: 1,
    title: '100 Liter Ottakringer Wiener Original',
    start: '2022-10-26 14:03:58',
    end: '2022-10-16 17:34:00',
    quantity: '100',
    starting_bid: '20000',
    highest_bid: '25000',
    state: 'open',
    image: 'https://imgs.search.brave.com/tpro5XOf0PIu2fgBG_yXo8TzXVQGlvIM2A2qbuSuxSo/rs:fit:600:600:1/g:ce/aHR0cHM6Ly9kZXZw/YWNrc2hvcC5hdC9t/ZWRpYS9pbWFnZS84/MC8yMS9hOS9pbWFn/ZV9JLTAwMl8xLmpw/Zw'
  },
  {
    id: 2,
    title: '10 Flaschen Wein',
    start: '2022-10-26 14:03:58',
    end: '2022-10-16 17:34:00',
    quantity: '150',
    starting_bid: '45000',
    highest_bid: '45000',
    state: 'open',
    image: 'https://imgs.search.brave.com/tpro5XOf0PIu2fgBG_yXo8TzXVQGlvIM2A2qbuSuxSo/rs:fit:600:600:1/g:ce/aHR0cHM6Ly9kZXZw/YWNrc2hvcC5hdC9t/ZWRpYS9pbWFnZS84/MC8yMS9hOS9pbWFn/ZV9JLTAwMl8xLmpw/Zw'
  },
  {
    id: 3,
    title: '45 Flaschen Wein',
    start: '2022-10-26 14:03:58',
    end: '2022-10-16 17:34:00',
    quantity: '200',
    starting_bid: '35000',
    highest_bid: '36000',
    state: 'closed',
    image: 'https://imgs.search.brave.com/tpro5XOf0PIu2fgBG_yXo8TzXVQGlvIM2A2qbuSuxSo/rs:fit:600:600:1/g:ce/aHR0cHM6Ly9kZXZw/YWNrc2hvcC5hdC9t/ZWRpYS9pbWFnZS84/MC8yMS9hOS9pbWFn/ZV9JLTAwMl8xLmpw/Zw'
  },
  {
    id: 4,
    title: '23 Flaschen Wein',
    start: '2022-10-26 14:03:58',
    end: '2022-10-16 17:34:00',
    quantity: '200',
    starting_bid: '25000',
    highest_bid: '36000',
    state: 'closed',
    image: 'https://imgs.search.brave.com/tpro5XOf0PIu2fgBG_yXo8TzXVQGlvIM2A2qbuSuxSo/rs:fit:600:600:1/g:ce/aHR0cHM6Ly9kZXZw/YWNrc2hvcC5hdC9t/ZWRpYS9pbWFnZS84/MC8yMS9hOS9pbWFn/ZV9JLTAwMl8xLmpw/Zw'
  },
  {
    id: 5,
    title: '1111 Flaschen Wein',
    start: '2022-10-26 14:03:58',
    end: '2022-10-16 17:34:00',
    quantity: '200',
    starting_bid: '135000',
    highest_bid: '36000',
    state: 'closed',
    image: 'https://imgs.search.brave.com/tpro5XOf0PIu2fgBG_yXo8TzXVQGlvIM2A2qbuSuxSo/rs:fit:600:600:1/g:ce/aHR0cHM6Ly9kZXZw/YWNrc2hvcC5hdC9t/ZWRpYS9pbWFnZS84/MC8yMS9hOS9pbWFn/ZV9JLTAwMl8xLmpw/Zw'
  },
]

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Auctions.vue",
  components: {
    AuctionListComponent
  },
  props: {
    auction: Object,
  },
  data() {
    return {
      auctions
    }
  }
}

</script>

<style scoped>


</style>
