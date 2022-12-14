<template>
  <div class="auctionlist">
    <div class="box">
      <article class="media">
        <div class="media-left">
          <figure class="image is-64x64">
            <img class="resize" :src="auction.image" alt="Image">
          </figure>
        </div>
        <div class="media-content">
          <div class="content">
            <router-link :to="{ name: 'AuctionDetails', params: { id: auction.id }}">
              <strong>{{auction.title}}</strong><br><small>{{auction.price}}</small> <small>{{auction.highest_bid}}</small>
              <br>
              {{auction.state}}
            </router-link>
          </div>
          <div class="level-left">
            <a class="level-item">
              <span class="icon is-small"><i class="fas fa-heart"></i></span>
            </a>
          </div>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
export default {
  name: "AuctionListComponent",
  props: {
    auction: Object,
  }
}
</script>

<style scoped>

.auctionlist {
  max-width: 500px;
  margin: 0 auto;
  padding-bottom: 15px;
  padding-top: 15px;
}

.resize {
  width:128px;
  height: auto;
}
</style>
