<template>

  <!--table id="productsTable" class="table table-bordered table-striped" >
    <thead>
      <tr>
        <th v-for="field in fields" :key="field">
          {{ field }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="product in products" v-bind:key="product.id">
        <td v-for="field in fields" :key="field">
          <router-link v-if="product.Name" :to="{ name: 'ProductDetails', params: { id: product.Id, name: product.Name, description: product.Description }}">
            {{ product[field] }}
          </router-link>
        </td>
      </tr>
    </tbody>
  </table-->

  <!--div v-for="product in products" :key="product.id">
    <div>
      <span>
        ID: {{ product.productId }} NAME: {{ product.name }}
        DESCRIPTION: {{ product.description }} CATEGORY: {{ product.category }}
        PRICE: {{ product.price }} UNIT: {{ product.unit }}
      </span>
    </div>
  </div-->

  <div v-for="product in products" :key="product.id">
    <router-link :to="{ name: 'ProductDetails', params: { id: product.productId, name: product.name, description: product.description }}">{{ product.name }} +++ {{ product.description }}</router-link>
  </div>


  <button @click="getProductsRequest">Get Products</button>
  <!--div>
   {{ products }}
  </div-->


  <!--
  <div class="card-body">
    <ul>
      <li v-for="product in products" v-bind:key="product">
        {{products.id}}
      </li>
    </ul>
  </div>
  -->


</template>

<script>
//import axios from "axios";



import ProductService from "@/services/product.service";

export default {
  name: "ProductsView.vue",

  data() {
    return {
      products: [],
      /* products: [
         { Id: 1, Name: "Ottakringer Bio-Zwickl", Description: "Das weltbeste Zwickl", Category: "Beer", Price: 3, Unit: "Liter"},
         { Id: 2, Name: "Zwettler Festbock", Description: "Mit seiner tiefgoldenen Farbe...", Category: "Beer", Price: 3, Unit: "Liter"},
         { Id: 3, Name: "Zwetschkenbrand Very Old", Description: "Dieser altgelagerte Zwetschkenbrand...", Category: "Spirits", Price: 3.5, Unit: "Case"},
       ], */

      fields: ["id", "name", "description", "category", "price", "unit"],

    }

  },

    mounted() {
      console.log("mounted")
      ProductService.getProducts()
          .then(
          (response) => {
            console.log(response)
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



}
</script>

<style scoped>

td a {
  text-decoration: none;
  color: black;
}

</style>
