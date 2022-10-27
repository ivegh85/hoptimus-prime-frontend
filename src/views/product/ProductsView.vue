<template>

  <table id="productsTable" class="table table-bordered table-striped" @click="toggleTest" v-if="isVisible">
    <thead>
      <tr>
        <th v-for="field in fields" :key="field">
          {{ field }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="product in products" v-bind:key="product">
        <td v-for="field in fields" :key="field">
          <router-link v-if="product.Name" to="/ProductDetails">
           {{ product[field] }}
          </router-link>
        </td>
      </tr>
    </tbody>
  </table>


</template>

<script>
export default {
  name: "ProductsView.vue",
  data: () => ({
    isVisible: true,
    //return {
      products: [
        { Id: 1, Name: "Ottakringer Bio-Zwickl", Description: "Das weltbeste Zwickl", Category: "Beer", Price: 3, Unit: "Liter"},
        { Id: 2, Name: "Zwettler Festbock", Description: "Mit seiner tiefgoldenen Farbe...", Category: "Beer", Price: 3, Unit: "Liter"},
        { Id: 3, Name: "Zwetschkenbrand Very Old", Description: "Dieser altgelagerte Zwetschkenbrand...", Category: "Spirits", Price: 3.5, Unit: "Case"},
      ],
      fields: ["Id", "Name", "Description", "Category", "Price", "Unit"]
    //}
  }),
  methods: {
    toggleTest() {
      this.isVisible = !this.isVisible;
    }
  }
}
</script>

<style scoped>

td a {
  text-decoration: none;
  color: black;
}

</style>
