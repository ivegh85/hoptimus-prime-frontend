import axios from 'axios';

const API_URL = 'http://auctionplatformbackend.stockidev.com/api/auth/';


class AuthService {
    login(user) {
        return axios
            .post(API_URL + 'signin', {
                username: user.loginuname,
                password: user.password
            })
            .then(response => {
                if (response.data.token) {
                    localStorage.setItem('user', JSON.stringify(response.data));
                }

                return response.data;
            });
    }

    logout() {
        localStorage.removeItem('user');
    }

    register(user) {
        return axios
            .post(API_URL + 'signup', {
                username: user.uname,
                email: user.email,
                password : user.password,
                firstname : user.fname,
                lastname : user.lname,
                role: "USER"
        });
    }
}

export default new AuthService();
