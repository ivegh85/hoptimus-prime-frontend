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

    updateUser(user, username, role, id) {
        console.log("Update user function ")
        //console.log("user id "+id)
        console.log(user)
        console.log(user.firstName)
        console.log(username)
        console.log(role)
        //console.log("user "+email)
        return axios
            .put(API_URL + id, {
                username: username,
                email: user.email,
                firstname: user.firstName,
                lastname: user.lastName,
                password: user.password,
                role: role
            },
                {headers: authHeader()})
            .then(response => {

                console.log(response.data)
                return response.data
            })
            .catch(function (error){
                console.log(error)
            })

    }

}

export default new MyProfileService();