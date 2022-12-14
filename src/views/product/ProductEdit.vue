<template>
  <div >
    <div>
      {{ product.name }}
    </div>
    <div>
      <label for="pname">Product Name: </label>
      <input type="text" id="pname" name="pname" v-model="product.name"/>
      <SubmitButtonAtom @click="updateProduct"></SubmitButtonAtom>
    </div>
  </div>
</template>

<script>
//import ProductsView from "@/views/product/ProductsView";
import ProductService from "@/services/product.service";
import SubmitButtonAtom from "@/atoms/SubmitButtonAtom";

export default {
  name: "ProductEdit",
  components: {SubmitButtonAtom},
  //props: ['products'],

  data() {
    return{
      product: [],
      errMessage: '',
    }

  },
  mounted() {
    this.getProduct()
  },
  methods: {
    getProduct() {
      let id = this.$route.params.id
      ProductService.getProductById(id)
          .then(
              (response) => {
                this.product = response;
              },
              (error) => {
                this.product = (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString();
              }
          )
    },
    updateProduct() {
      console.log("updateProduct")
      let id = this.$route.params.id
      let product = this.product
      ProductService.updateProduct(id, product)
          .then((response) => {
            console.log(id)
            console.log(product)
            console.log(response)
            this.product = response
          },
              (error) => {
                this.errMessage = (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString();
              }
          )


    }
  }
}
</script>

<style scoped>

</style>