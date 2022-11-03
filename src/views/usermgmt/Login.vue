<template>

  <div class="login-page">
    <div class="background-login"></div>
    <div class="container">
      <div class="row">
        <div class="col-lg-4 col-md-6 col-sm-8 mx-auto">
          <div class="card-login">
            <h1>Sign in</h1>
            <Form @submit="loginRequest" :validation-schema="loginFormSchema">
              <div class="form-group">
                <label for="loginuname">Username</label>
                <Field
                    id="loginuname"
                    name="loginuname"
                    placeholder="Username"
                    class="form-control">
                </Field>
                <ErrorMessage name="loginuname" class="alert-danger"></ErrorMessage>
                <label for="password">Password</label>
                <Field
                    id="password"
                    name="password"
                    placeholder="Password"
                    class="form-control">
                </Field>
                <ErrorMessage name="password" class="alert-danger"></ErrorMessage>
                <div class="row-mb-4">
                  <div class="form-check-inline">
                    <RememberMeBoxAtom></RememberMeBoxAtom>
                  </div>
                </div>
                <div class="text-center">
                  <SubmitButtonAtom></SubmitButtonAtom>
                  <NotAMemberAtom></NotAMemberAtom>
                </div>
              </div>
              <div class="form-group">
                <div v-if="message" class="alert alert-danger" role="alert">
                  {{ message }}
                </div>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import RememberMeBoxAtom from "@/atoms/RememberMeBoxAtom";
import SubmitButtonAtom from "@/atoms/SubmitButtonAtom";
import NotAMemberAtom from "@/atoms/NotAMemberAtom";
import * as yup from "yup";
import { Form, Field, ErrorMessage } from "vee-validate";
import router from "@/router";

export default {
// eslint-disable-next-line vue/multi-word-component-names
  name: "Login.vue",
  data () {
    //schema for validation
    const loginFormSchema = yup.object().shape({
      loginuname: yup.string().min(3, "Min 3 Characters" ).max(20, "Max 20 Characters" ).required("Email is mandatory!"),
      password: yup.string().min(8, "Min 8 Characters").required("Password is mandatory!"),
    });
    return {
      loading: false,
      message: "",
      loginFormSchema,
    };
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
  },
  methods: {
    loginRequest(user) {

      this.loading = true;

      this.$store.dispatch("auth/login", user).then (
          () => {
            router.push("/home");
          },
          (error) => {
            this.loading = false;
            this.message = (error.response && error.response.data && error.response.data.message) ||
                error.message || error.toString();
          }
      )
    },
  },
  components: {
    'SubmitButtonAtom': SubmitButtonAtom,
    'RememberMeBoxAtom': RememberMeBoxAtom,
    'NotAMemberAtom': NotAMemberAtom,
    'Form': Form,
    'ErrorMessage': ErrorMessage,
    'Field': Field
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
