import axios from "axios";
import authHeader from "@/services/auth-header";


const API_URL = 'https://auctionplatformbackend.stockidev.com/api/users/';

class MyProfileService {

    constructor() {
        return this
    }

    getUser(id) {
        console.log("user id "+ id)
        console.log('function getUser called')
        return axios
            .get(API_URL + id, { headers: authHeader() })
            .then(response => {

                console.log(response.data);
                return response.data;
            })
    }

}

export default new MyProfileService();