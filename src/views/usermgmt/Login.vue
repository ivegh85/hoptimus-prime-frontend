<template>

  <div class="login-page">
    <div class="background-login"></div>
    <div class="container">
      <div class="row">
        <div class="col-lg-4 col-md-6 col-sm-8 mx-auto">
          <div class="card-login">
            <h1>Login Page</h1>
            <form class="form-group" @submit.prevent="loginRequest">
              <div>
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
                  <div class="form-check-inline">
                    <RememberMeBoxAtom></RememberMeBoxAtom>
                  </div>
                </div>
                <div class="text-center">
                  <SubmitButtonAtom v-on:click="loginRequest"></SubmitButtonAtom>
                  <NotAMemberAtom></NotAMemberAtom>
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
import EmailInputAtom from "@/atoms/EmailInputAtom";
import PasswordInputAtom from "@/atoms/PasswordInputAtom";
import RememberMeBoxAtom from "@/atoms/RememberMeBoxAtom";
import SubmitButtonAtom from "@/atoms/SubmitButtonAtom";
import NotAMemberAtom from "@/atoms/NotAMemberAtom";
import axios from "axios";
import {object, string} from 'yup';

//schema for validation
const loginFormSchema = object().shape({
  email: string().email().required(),
  password: string().min(8).required(),
});

export default {
// eslint-disable-next-line vue/multi-word-component-names
  name: "Login.vue",
  data: () => ({
    form: {
      values: {
        email: '',
        password: '',
      },
      errors: {
        email: '',
        password: '',
      }
    }
  }),
  methods: {
    validation(input) {
      loginFormSchema.validateAt(input, this.form.values)
          .then(() => {
            this.form.errors[input] = "";
              })
          .catch(err => {
            this.form.errors[input] = err.message;
          })
    },
    async loginRequest() {
      const auth = {
        email: this.form.values.email, password: this.form.values.password
      };
      //placeholder
      const url = 'https://auctionplatformbackend.stockidev.com/users/{id}';
      try {
        const res = await axios.get(url, { auth }).then(res => res.data);
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
    'RememberMeBoxAtom': RememberMeBoxAtom,
    'NotAMemberAtom': NotAMemberAtom
  },
}

</script>

<style scoped>

.card-login {
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

.login-page {
  align-items: center;
  display: flex;
  height: 100vh;
}

.form-check-inline {
  margin-bottom: 20px;
  align-items: center;
}

.background-login {
  background: url(../../assets/pexels-anna-kapustina-1324896.jpg) no-repeat center center;
  background-size: cover;
  height: 100%;
  position: absolute;
  width: 100%;
}

</style>
