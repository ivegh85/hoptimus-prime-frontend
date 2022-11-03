<template>
  <Navigation></Navigation>
  <router-view/>

  <button @click="isOpen = true">Show Modal</button>
  <ErrorModal :open="isOpen" @close="isOpen = !isOpen"></ErrorModal>




</template>

<script>
import { ref } from "vue";

import NavigationBar from "@/components/NavigationBar";
import ErrorModal from "@/components/ErrorModal";





export default {
  name: 'App',
  components: {
    'Navigation': NavigationBar,
    'ErrorModal': ErrorModal,

  },
  setup(){
    const isOpen = ref(false)
    return { isOpen }
  },

}
</script>

<style>


</style>
