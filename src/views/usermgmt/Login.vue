<template>

  <div class="login-page">
    <div class="background-login"></div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-4 col-md-6 col-sm-8 mx-auto">
          <div class="card-login">
            <h1>Sign in</h1>
            <Form @submit="loginRequest" :validation-schema="loginFormSchema">
              <div class="form-group">
                <div>
                  <label for="loginuname" class="little-space">Username</label>
                  <Field
                      id="loginuname"
                      name="loginuname"
                      placeholder="Username"
                      class="form-control">
                  </Field>
                  <ErrorMessage name="loginuname" class="error-feedback"></ErrorMessage>
                </div>
                <div class="little-space">
                  <label for="password" class="little-space">Password</label>
                  <Field
                      id="password"
                      name="password"
                      type="password"
                      placeholder="Password"
                      class="form-control">
                  </Field>
                  <ErrorMessage name="password" class="error-feedback"></ErrorMessage>
                </div>
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
                <ErrorModal title="Oops, login error" :open="this.message !== '' && this.loading === false ? !isOpen : isOpen" @close="isOpen = !isOpen">
                  {{ message }}
                </ErrorModal>
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
import {Form, Field, ErrorMessage} from "vee-validate";
import router from "@/router";
import ErrorModal from "@/components/ErrorModal";
import {ref} from "vue";

export default {
// eslint-disable-next-line vue/multi-word-component-names
  name: "Login.vue",
  data() {
    //schema for validation
    const loginFormSchema = yup.object().shape({
      loginuname: yup.string().min(3, "Min 3 Characters").max(20, "Max 20 Characters").required("Username is required"),
      password: yup.string().min(8, "Min 8 Characters").required("Password is required"),
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

      this.$store.dispatch("auth/login", user).then(
          () => {
            //router.push("/home");
            //console.log(user)
            console.log("user id: " + JSON.parse(localStorage.getItem('user')).id)
            router.push("/myProfile/" + JSON.parse(localStorage.getItem('user')).id)
          },
          (error) => {
            this.loading = false;
            this.message = (error.response && error.response.data && error.response.data.message) ||
                error.message || error.toString();
            this.loading = false;
          }
      )
    },
  },
  components: {
    'ErrorModal': ErrorModal,
    'SubmitButtonAtom': SubmitButtonAtom,
    'RememberMeBoxAtom': RememberMeBoxAtom,
    'NotAMemberAtom': NotAMemberAtom,
    'Form': Form,
    'ErrorMessage': ErrorMessage,
    'Field': Field
  },
  setup(){
    const isOpen = ref(false)
    return { isOpen }
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
  border: 1px solid rgba(0, 0, 0, .125);
  border-radius: 0.25rem;
}

.little-space {
  margin-bottom: 10px;
}

.form-group {
  margin-bottom: 20px;
}

.form-control {
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
  background: url(../../assets/pexels-anna-kapustina-1324896.png) no-repeat center center;
  background-size: cover;
  height: 100%;
  position: absolute;
  width: 100%;
}

.error-feedback {
  color: #DC3545;
  margin-bottom: 10px;
}

</style>
