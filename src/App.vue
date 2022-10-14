<template>
  <div id="app">
    <router-view/>
      <Navigation></Navigation>
  </div>
</template>

<script>
import NavigationBar from "@/components/NavigationBar";

export default {
  name: 'App',
  components: {
    'Navigation': NavigationBar
  }
}
</script>

<style>
@import '~bootstrap/dist/css/bootstrap.css';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
