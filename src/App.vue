<template>
  <Navigation></Navigation>
  <router-view/>
  <Footer></Footer>
</template>

<script>
import NavigationBar from "@/components/NavigationBar";
import FooterItem from "@/components/FooterItem";

export default {
  name: 'App',
  components: {
    'Footer': FooterItem,
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
