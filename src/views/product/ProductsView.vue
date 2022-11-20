<template>

  <table id="productsTable" class="table table-bordered table-striped" >
    <thead>
      <tr>
        <th v-for="fieldsHeader in fieldsHeader" :key="fieldsHeader">
          {{ fieldsHeader }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="product in products" v-bind:key="product.id">
        <td v-for="field in fields" :key="field">
          <router-link v-if="product.name" :to="{ name: 'ProductDetails', params: { id: product.productId, name: product.name, description: product.description }}">
            {{ product[field] }}
          </router-link>
        </td>
        <td>
          <router-link class="btn btn-success" :to="{ name: 'ProductEdit', params: { id: product.productId }}">edit</router-link>
        </td>
        <td>
          <button class="btn btn-danger" @click="deleteProduct(product.productId, /*product.id*/)">delete</button>
        </td>
      </tr>
    </tbody>
  </table>



</template>

<script>

import ProductService from "@/services/product.service";

export default {
  name: "ProductsView.vue",

  data() {
    return {
      products: [],
      //möglich ohne exakt dieselbe schreibweise wie in datenbank
      fieldsHeader:
        {
          productId: "ID",
          name: "Name",
          description: "Description",
          category: "Category",
          price: "Price",
          unit: "Unit"

        },
      fields: ["productId", "name", "description", "category", "price", "unit"],
    }
  },

  mounted:
      function() {
        console.log("mounted")
        this.getProducts();
      },
  methods: {
    getProducts() {
      ProductService.getProducts()
          .then(
              (response) => {
                //console.log(response)
                //this.products = response.data;
                //this.products = JSON.stringify(response);
                //this.products = JSON.stringify(response.data);
                this.products = response;
              },
              (error) => {
                this.products = (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString();
              }
          )
    },
    deleteProduct(id, /*index*/) {
      console.log("delete function called")
      ProductService.deleteProduct(id)
          .then(
              (response) => {
                //console.log(response)
                //this.products = response.data;
                //this.products = JSON.stringify(response);
                //this.products = JSON.stringify(response.data);
                console.log(response)
                this.getProducts()
              })
         /* .then(response => {
            this.products.splice(index, 1)
                .push(response.data);
          })*/
      //funktioniert nicht perfekt. ladet erst
      //bei zweiten delete click die table neu
      //ProductService.getProducts();
    }
  }



}
</script>

<style scoped>

a {
  text-decoration: none;
  color: black;
}

a:hover{
  text-decoration: none;
  color: #cd5c5c;
}

</style>
