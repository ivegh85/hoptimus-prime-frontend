<template>
  <div class="reg-page">
    <div class="background-registration"></div>
    <div class="container">
      <div class="row">
        <div class="col-lg-4 col-md-6 col-sm-8 mx-auto">
          <div class="card-registration">
            <h1>Registration</h1>
            <form class="form-group" @submit.prevent="registrationRequest">
              <div>
                <FirstNameAtom
                    id="fname"
                    name="fname"
                    v-model="form.values.fname"
                    @blur="validation('fname')"
                    @keypress="validation('fname')"
                    class="form-control">
                </FirstNameAtom>
                <LastNameAtom
                    id="lname"
                    name="lname"
                    v-model="form.values.lname"
                    @blur="validation('lname')"
                    @keypress="validation('lname')"
                    class="form-control">
                </LastNameAtom>
                <UserNameAtom
                    id="uname"
                    name="uname"
                    v-model="form.values.uname"
                    @blur="validation('uname')"
                    @keypress="validation('uname')"
                    class="form-control">
                </UserNameAtom>
                <EmailInputAtom
                    id="email"
                    name="email"
                    v-model="form.values.email"
                    @blur="validation('email')"
                    @keypress="validation('email')"
                    class="form-control">
                </EmailInputAtom>
                <PasswordInputAtom
                    id="password"
                    name="password"
                    v-model="form.values.password"
                    @blur="validation('password')"
                    @keypress="validation('password')"
                    class="form-control">
                </PasswordInputAtom>
                <div class="row-mb-4">
                <div class="text-center">
                  <SubmitButtonAtom v-on:click="registrationRequest"></SubmitButtonAtom>
                  <AlreadyAMemberAtom></AlreadyAMemberAtom>
                </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SubmitButtonAtom from "@/atoms/SubmitButtonAtom";
import PasswordInputAtom from "@/atoms/PasswordInputAtom";
import EmailInputAtom from "@/atoms/EmailInputAtom";
import FirstNameInputAtom from "@/atoms/FirstNameInputAtom";
import LastNameInputAtom from "@/atoms/LastNameInputAtom";
import UserNameInputAtom from "@/atoms/UserNameInputAtom";
import AlreadyAMemberAtom from "@/atoms/AlreadyAMemberAtom";
import {object, string} from "yup";
import axios from "axios";

//schema for validation
const registrationFormSchema = object().shape({
  fname: string().required(),
  lname: string().required(),
  uname: string().required(),
  email: string().email().required(),
  password: string().min(8).required(),
});

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Registration.vue",
  data: () => ({
    form: {
      values: {
        fname: '',
        lname: '',
        uname: '',
        email: '',
        password: '',
      },
      errors: {
        fname: '',
        lname: '',
        uname: '',
        email: '',
        password: '',
      }
    }
  }),
  methods: {
    validation(input) {
      registrationFormSchema.validateAt(input, this.form.values)
          .then(() => {
            this.form.errors[input] = "";
          })
          .catch(err => {
            this.form.errors[input] = err.message;
          })
    },
    async registrationRequest() {
      const reg = {
        fname: this.form.values.fname,
        lname: this.form.values.lname,
        uname: this.form.values.uname,
        email: this.form.values.email,
        password: this.form.values.password
      };
      //placeholder
      const url = 'https://auctionplatformbackend.stockidev.com/users';
      try {
        const res = await axios.post(url, { reg }).then(res => res.data);
        console.log(res)
      } catch (err) {
        this.error = err.message
        console.log(this.error);
      }
    },

  },
    components: {
      'SubmitButtonAtom': SubmitButtonAtom,
      'PasswordInputAtom': PasswordInputAtom,
      'EmailInputAtom': EmailInputAtom,
      'FirstNameAtom': FirstNameInputAtom,
      'LastNameAtom': LastNameInputAtom,
      'UserNameAtom': UserNameInputAtom,
      'AlreadyAMemberAtom': AlreadyAMemberAtom,
    },
  };
</script>

<style scoped>

.card-registration {
  padding: 20px;
  position: relative;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0,0,0,.125);
  border-radius: 0.25rem;
}

.form-group {
  margin-bottom: 20px;
}

.form-control{
  margin-bottom: 20px;
}

.reg-page {
  align-items: center;
  display: flex;
  height: 100vh;
}

.background-registration {
  background: url(../../assets/pexels-chris-f-1283219.jpg) no-repeat center center;
  background-size: cover;
  height: 100%;
  position: absolute;
  width: 100%;
}
</style>
