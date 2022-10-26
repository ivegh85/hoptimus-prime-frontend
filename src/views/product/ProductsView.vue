<template>

  <table id="productsTable" class="table table-bordered table-striped">
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
          {{ product[field] }}
        </td>
      </tr>
    </tbody>
  </table>

  <!--
  <table>
    <tr>
      {{"index"}}{{"name"}}{{"category"}}
    </tr>
    <tr v-for="(product, index) in products" v-bind:key="product.id">
      {{ index }} {{ product.name }} {{ product.category }}
    </tr>

  </table>

  <li v-for="(product, index) in products" v-bind:key="product.id">
    {{ index }} - {{ strName }} - {{ product.name }} - {{ product.category }}
  </li>
  -->


</template>

<script>
export default {
  name: "ProductsView.vue",
  data() {
    return {
      products: [
        { Id: 1, Name: "Ottakringer Bio-Zwickl", Description: "Das weltbeste Zwickl", Category: "Beer", Price: 3, Unit: "Liter"},
        { Id: 2, Name: "Zwettler Festbock", Description: "Mit seiner tiefgoldenen Farbe...", Category: "Beer", Price: 3, Unit: "Liter"},
        { Id: 3, Name: "Zwetschkenbrand Very Old", Description: "Dieser altgelagerte Zwetschkenbrand...", Category: "Spirits", Price: 3.5, Unit: "Case"},
      ],
      fields: ["Id", "Name", "Description", "Category", "Price", "Unit"]
    }
  }
}
</script>

<style scoped>

</style>
