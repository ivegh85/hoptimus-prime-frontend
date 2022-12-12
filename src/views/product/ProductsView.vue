<template>

  <div>
    <!--error modal eifügen-->
    <div>{{ errMessage }}</div>

    <table v-if="isAuthorized" id="productsTable" class="table table-bordered table-striped" >
      <thead>
      <tr>
        <th v-for="fieldsHeader in fieldsHeader" :key="fieldsHeader">
          {{ fieldsHeader }}
        </th>
      </tr>
      </thead>
      <tbody >
      <tr v-for="product in products" v-bind:key="product.productId">
        <td v-for="field in fields" :key="field">
          <router-link v-if="product.name" :to="{ name: 'ProductDetails', params: { id: product.productId, name: product.name }}">
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
  </div>




</template>

<script>

import ProductService from "@/services/product.service";
import HelperService from "@/services/helper.service";
export default {
  name: "ProductsView.vue",

  data() {
    return {
      isAuthorized: this.isAuthorizedToSeeProducts(),
      products: [],
      errMessage : '',
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
      this.errMessage = '';
      ProductService.getProducts()
          .then(
              (response) => {
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
                console.log(response)
                this.getProducts()
              },
              (error) => {
                this.errMessage = (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString();
              })

    },
    isAuthorizedToSeeProducts() {
      console.log(HelperService.permittedUser())
      return HelperService.permittedUser()
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
