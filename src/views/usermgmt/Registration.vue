<template>
  <div class="reg-page">
    <div class="background-registration"></div>
    <div class="container">
      <div class="row">
        <div class="col-lg-4 col-md-6 col-sm-8 mx-auto">
          <div class="card-registration" v-if="!successful">
            <h1 class="back-off text-center">Sign up</h1>
            <Form @submit="registrationRequest" :validation-schema="registrationFormSchema">
              <div class="form-group">
                <label for="fname">First Name</label>
                <Field
                    id="fname"
                    name="fname"
                    placeholder="First Name"
                    class="form-control">
                </Field>
                <ErrorMessage name="fname" class="error-feedback"></ErrorMessage>
                <label for="lname">Last Name</label>
                <Field
                    id="lname"
                    name="lname"
                    placeholder="Last Name"
                    class="form-control">
                </Field>
                <ErrorMessage name="lname" class="error-feedback"></ErrorMessage>
                <label for="uname">User Name</label>
                <Field
                    id="uname"
                    name="uname"
                    placeholder="User Name"
                    class="form-control">
                </Field>
                <ErrorMessage name="uname" class="error-feedback"></ErrorMessage>
                <label for="email">Email</label>
                <Field
                    id="email"
                    name="email"
                    placeholder="Email"
                    class="form-control">
                </Field>
                <ErrorMessage name="email" class="error-feedback"></ErrorMessage>
                <label for="password">Password</label>
                <Field
                    id="password"
                    type="password"
                    name="password"
                    placeholder="Password"
                    class="form-control">
                </Field>
                <ErrorMessage name="password" class="error-feedback"></ErrorMessage>
                <label for="confirmPassword">Confirm Password</label>
                <Field
                    id="confirmPassword"
                    type="password"
                    name="confirmPassword"
                    placeholder="Password"
                    class="form-control">
                </Field>
                <ErrorMessage name="confirmPassword" class="error-feedback"></ErrorMessage>
                <div class="row-mb-4">
                  <div class="text-center">
                    <SubmitButtonAtom></SubmitButtonAtom>
                    <AlreadyAMemberAtom></AlreadyAMemberAtom>
                  </div>
                </div>
              </div>
            </Form>
            <div
                v-if="message"
                class="alert"
                :class="successful ? 'alert-success' : 'alert-danger'"
            >
              {{ message }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SubmitButtonAtom from "@/atoms/SubmitButtonAtom";
import AlreadyAMemberAtom from "@/atoms/AlreadyAMemberAtom";
import * as yup from "yup";
import {Form, Field, ErrorMessage} from "vee-validate";


export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Registration.vue",
  data() {
    //schema for validation
    const registrationFormSchema = yup.object().shape({
      fname: yup.string().required("Firstname is required!"),
      lname: yup.string().required("Lastname is required!"),
      uname: yup.string().min(2, "Min 2 Characters").max(15, "Max 15 characters").required("Username is required!"),
      email: yup.string().email("Email is invalid").required("Email is required"),
      password: yup.string().min(8, "Min 8 Characters").max(20, "Max 20 characters").required(),
      confirmPassword: yup.string().oneOf([yup.ref('password'), null], "Passwords must match")
    });
    return {
      successful: false,
      loading: false,
      message: "",
      registrationFormSchema,
    };
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
  },
  /*
  mounted() {
    if (this.loggedIn) {
      router.push("/home");
    }
  },
   */
  methods: {
    registrationRequest(user) {
      this.message = "";
      this.successful = false;
      this.loading = true;

      this.$store.dispatch( "auth/register" , user).then(
          function(data) {
            this.message = data.message;
            this.successful = true;
            this.loading = false;
          },
          (error) => {
            this.message = (
                error.response && error.response.data && error.response.data.message
            ) || error.message || error.toString();
            this.successful = false;
            this.loading = false;
          }
      )
    },
  },
    components: {
      'SubmitButtonAtom': SubmitButtonAtom,
      'AlreadyAMemberAtom': AlreadyAMemberAtom,
      'Form': Form,
      'ErrorMessage': ErrorMessage,
      'Field': Field,
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
  border: 1px solid rgba(0, 0, 0, .125);
  border-radius: 0.25rem;
}

.back-off {
  margin-bottom: 30px;
}

.form-group {
  margin-bottom: 20px;
}

.form-control {
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
