<template>
  <Navigation></Navigation>
  <router-view/>
  <Auctions></Auctions>

  <button @click="isOpen = true">Show Modal</button>

  <ErrorModal :open="isOpen" @close="isOpen = !isOpen">
    <p>
      An error occurred
    </p>
  </ErrorModal>

</template>

<script>
import { ref } from "vue";

import NavigationBar from "@/components/NavigationBar";
import Auctions from "@/views/auction/Auctions";
import ErrorModal from "@/components/ErrorModal";



export default {
  name: 'App',
  components: {
    'Navigation': NavigationBar,
    'Auctions': Auctions,
    'ErrorModal': ErrorModal
  },
  setup(){
    const isOpen = ref(false)
    return { isOpen }
  }
}
</script>

<style>


</style>
