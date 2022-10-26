<template>
  <div>
    <h1>Home</h1>
    <button v-on:click="requestUsers">Button test</button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Home.vue',
  methods: {
    async requestUsers() {
      /* console.log('before equestusers')
      axios.get('https://reqres.in/api/users?page=1')
          .then((response) => console.log(response))
      console.log('after requestUsers')
      */
      console.log('before async call')
      try {
        const response = await axios
            .get('https://reqres.in/api/users?page=1');
        console.log(response);
      } catch (err) {
        console.log(err);
      }
      console.log('after asnyc call')

    },
  }
}
</script>


<style>

</style>
