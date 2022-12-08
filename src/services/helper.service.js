
class HelperService {
    permittedAdmin(){
        if(localStorage.getItem('user') !== null){
            let user = JSON.parse(localStorage.getItem('user'));
            console.log(user.roles.includes('ADMIN'))
            return user.roles.includes('ADMIN');
        }
    }

    permitted() {
        let user = JSON.parse(localStorage.getItem('user'));
        return user.roles;
    }

    permittedUser(){
        let user = JSON.parse(localStorage.getItem('user'));
        if(user === null){
            return false;
        }
        console.log(user.roles.includes('ADMIN') || user.roles.includes('USER'))
        return (user.roles.includes('ADMIN') || user.roles.includes('USER'));


    }

}

export default new HelperService();
