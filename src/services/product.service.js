import axios from "axios";
import authHeader from "@/services/auth-header";

const API_URL = 'https://auctionplatformbackend.stockidev.com/api/products/';

class ProductService {

    constructor() { return this }


    getProducts() {
        console.log("function getProducts called")
        return axios
            .get(API_URL , { headers: authHeader() })
            .then(response => {
                if(response.data.token) {
                    localStorage.setItem('products', JSON.stringify(response.data));
                }
                console.log(response.data);
                return response.data;

            })
            ;
    }

    getProductById(id){
        return axios
            .get(API_URL + id,{headers: authHeader()})
            .then(response => {

                console.log(response.data);
                return response.data;

            })
    }

    deleteProduct( id ) {
        //console.log(API_URL + id)
        return axios
            .delete(API_URL + id, { headers: authHeader() })
          /*  .then(function (response) {
                console.log(response)
            }) */


    }
    updateProduct(id, product) {
        console.log(id)
        console.log(product.name)
        return axios
            .put(API_URL + id, {
                name: product.name,
                description: product.description,
                category: product.category,
                price: product.price,
                unit: product.unit
            },
                {headers: authHeader()})
            .then(response => {

                console.log(response.data)
                return response.data
            })
    }
}

export default new ProductService();