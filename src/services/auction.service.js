import axios from "axios";
import authHeader from "@/services/auth-header";

const API_URL = 'https://auctionplatformbackend.stockidev.com/api/auctions/';

class AuctionService {

    getAuctions() {
        console.log("function getAuctions called")
        return axios
            .get(API_URL , { headers: authHeader() })
            .then(response => {
                if(response.data.token) {
                    localStorage.setItem('auctions', JSON.stringify(response.data));
                }
                console.log(response.data);
                return response.data;

            })
    }


    
}

export default new AuctionService()