<template>
  <Navigation></Navigation>
  <router-view/>
</template>

<script>
import NavigationBar from "@/components/NavigationBar";

export default {
  name: 'App',
  components: {
    'Navigation': NavigationBar,

  },
}
</script>

<style>

#app {
  background: #EAE7DC;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-size: cover;
  height: 100%;
  position: absolute;
  width: 100%;
}

</style>
