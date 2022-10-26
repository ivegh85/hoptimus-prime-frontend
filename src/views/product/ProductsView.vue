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
</template>

<script>
export default {
  name: "ProductsView.vue",
  data() {
    return {
      strName: "name",
      products: [
        { id: 1, name: "Ottakringer", category: "Beer"},
        { id: 2, name: "Gösser", category: "Beer"},
        { id: 3, name: "Grüner Veltliner", category: "Wine"}
      ],
      fields: ["id", "name", "category"]
    }
  }
}
</script>

<style scoped>

</style>
