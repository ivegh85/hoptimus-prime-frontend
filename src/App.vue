<template>
  <Navigation></Navigation>
  <router-view/>
  <Auctions></Auctions>
</template>

<script>
import NavigationBar from "@/components/NavigationBar";
import Auctions from "@/views/auction/Auctions";


export default {
  name: 'App',
  components: {
    'Navigation': NavigationBar,
    'Auctions': Auctions
  }
}
</script>

<style>


</style>
