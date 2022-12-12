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

    updateUser(user, id) {
        console.log("Update user function ")
        //console.log("user id "+id)
        console.log(user)
        console.log(user.firstName)

        //console.log("user "+email)
        return axios
            .put(API_URL + id, {
                username: user.username,
                email: user.email,
                firstName: user.firstName,
                lastName: user.lastName,
                password: user.password,
                role: user.role
            },
                {headers: authHeader()})
            .then(response => {

                console.log(response.data)
                return response.data
            })
           /* .catch(function (error){
                console.log(error)
            })*/

    }

}

export default new MyProfileService();