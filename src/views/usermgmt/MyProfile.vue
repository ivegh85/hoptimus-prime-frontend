<template>
  <div>My Profile Area</div>
  <div >
    Username: {{ user.username }}
  </div>
  <div >
    Email: {{ user.email }}
  </div>
  <div >
    First Name: {{ user.firstName }}
  </div>
  <div >
    Last Name: {{ user.lastName }}
  </div>
  <div>
    Current Auctions:
    <p>Title: {{ filteredAuction.title }}</p>
    <p>Description: {{ filteredAuction.description }}</p>
    <p>Product: {{ filteredAuction.product }}</p>
  </div>

    <div class="form-group">
      <div>
        <label for="email" class="little-space">Email</label>
        <input
            id="email"
            name="email"
            placeholder="Email"
            class="form-control"
            v-model="user.email">
        />
      </div>
      <div>
        <label for="firstName" class="little-space">First Name</label>
        <input
            id="firstName"
            name="firstName"
            placeholder="FirstName"
            class="form-control"
            v-model="user.firstName"/>
      </div>
      <div>
        <label for="lastName" class="little-space">Last Name</label>
        <input
            id="lastName"
            name="lastName"
            placeholder="LastName"
            class="form-control"
            v-model="user.lastName"/>
      </div>
      <div>
        <label for="password" class="little-space">Passwort</label>
        <input
            id="password"
            name="password"
            placeholder="password"
            class="form-control"
            v-model="user.password"/>
      </div>

      <div class="row-mb-4">
        <div class="text-center">
          <SubmitButtonAtom @click="updateRequest"></SubmitButtonAtom>
        </div>
      </div>
    </div>


</template>

<script>
import MyProfileService from "@/services/myprofile.service";
//import {Form, Field, ErrorMessage} from "vee-validate";
//import * as yup from "yup";
import SubmitButtonAtom from "@/atoms/SubmitButtonAtom";
import AuctionService from "@/services/auction.service";
//import axios from "axios";
//import authHeader from "@/services/auth-header";
//import authHeader from "@/services/auth-header";

export default {
  name: "MyProfile",
  components: {
    SubmitButtonAtom
  },
  data() {
    /*const updateFormSchema = yup.object().shape({
      username: yup.string().notRequired(),
      email: yup.string().min(8, "Min 8 Characters"),
      firstName: yup.string().min(3, "Min 3 Characters"),
      lastName: yup.string().min(3, "Min 8 Characters"),
      password: yup.string(),
      role: yup.string().notRequired()
        });*/
    return {
      user: [],
      auctions: [],
      filteredAuction: [],
      username: '',
      errMessage: '',
      //updateFormSchema,
    }
  },
  mounted:
  function(){
    if(JSON.parse(localStorage.getItem('user')) != null)
    this.getMyProfileData(JSON.parse(localStorage.getItem('user')).id,);
    this.getAuctions()
    //this.getAuctionByOwnerId()
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
    },

    getAuctionByOwnerId(){
      console.log("getAuctionByOwnerId")
      let id = this.getUserId()
      console.log(this.auctions)
      for(let i = 0; i < this.auctions.length; i++){
        console.log(this.auctions[i].owner.id)
        if(this.auctions[i].owner.id == id){
          this.filteredAuction = this.auctions[i]
        }
      }
    },

    getUserId() {
      return JSON.parse(localStorage.getItem('user')).id;
    },

    getAuctions() {
      AuctionService.getAuctions().then(
          (response) => {
            console.log("here")
            console.log(response)
            this.auctions = response;
            this.getAuctionByOwnerId()
          },
          (error) => {
            this.errMessage = (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();
          }
      )
    },
    updateRequest(){
      let id = this.getUserId()
      let user = this.user
      MyProfileService.updateUser(id, user)
          .then((response) => {
                console.log(id)
                console.log(user)
                console.log(response)
                this.user = response
              },
              (error) => {
                this.errMessage = (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString();
              })
    }
   /* updateRequest(updateFormSchema) {
      let id = this.getUserId()
      console.log("updateRequest")
      console.log(id)
      console.log(updateFormSchema.firstName)
      console.log(JSON.stringify(updateFormSchema))
      console.log("updateformschema "+updateFormSchema)
      let username = JSON.parse(localStorage.getItem('user')).username
      let role = JSON.parse(localStorage.getItem('user')).roles[0]
      //console.log(JSON.parse(updateFormSchema))
        MyProfileService.updateUser(updateFormSchema, username, role, id)
            .then(
                (response) => {
                  console.log("here")
                  console.log(response)
                  this.user = response;
                },
                (error) => {
                  this.errMessage = (error.response &&
                          error.response.data &&
                          error.response.data.message) ||
                      error.message ||
                      error.toString();
                }
            )
    }*/
  }
}
</script>

<style scoped>

</style>