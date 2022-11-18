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
            {{ product[field] }}   <!--JSON.stringify(field.keys)-->
          </router-link>
        </td>
      </tr>
    </tbody>
  </table>



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
      //fields: ["ProductId", "Name", "Description", "Category", "Price", "Unit"], toLowerCase() funktioniert bei productId nicht

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

a {
  text-decoration: none;
  color: black;
}

a:hover{
  text-decoration: none;
  color: #cd5c5c;
}

</style>
