<template>
  <div>My Profile Area</div>
  <div>
    Username: {{ user.username }}
  </div>
  <div>
    Email: {{ user.email }}
  </div>
  <div>
    First Name: {{ user.firstName }}
  </div>
  <div>
    Last Name: {{ user.lastName }}
  </div>
</template>

<script>
import MyProfileService from "@/services/myprofile.service";

export default {
  name: "MyProfile",
  //props: [{id: JSON.parse(localStorage.getItem('user')).id}],
  data() {
    return {
      user: [],
      errMessage: ''
    }
  },
  mounted:
  function(){
    this.getMyProfileData(JSON.parse(localStorage.getItem('user')).id,);
  },
  methods: {
    getMyProfileData(id) {
      this.errMessage = '';
      MyProfileService.getUser(id)
          .then(
              (response) => {
                console.log(response)
                this.user = response;
              },
              (error) => {
                this.name = (error.response &&
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