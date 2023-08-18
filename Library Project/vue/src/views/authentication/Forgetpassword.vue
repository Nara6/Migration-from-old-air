<template>
  <div class="my_container">
    <div class="sub_container">
      <v-alert
        id="Match"
        border="left"
        close-text="Close Alert"
        color="green accent"
        dark
        dismissible
        v-if="checkEmail"
      >
        {{ result }}
      </v-alert>
      <v-form
        ref="form"
        @submit.prevent="ForgetForm"
        enctype="multipart/form-data"
      >
        <div class="login_content">
          <h1>Forget Password</h1>
          <p>Enter your email to retrieve your password!</p>
        </div>

        <div class="forget_logo">
          <img src="../../assets/background/forgot.png" alt="" />
        </div>
        <div class="user_input">
          <div>
            <label for="email">Email Address</label><br />
            <input
              v-model="user.email"
              type="email"
              name="email"
              placeholder="Enter your email address"
              required
            />
          </div>
        </div>

        <div class="register">
          <div class="submit_btn">
            <button type="submit">Submit</button>
          </div>
        </div>
      </v-form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
const User_forgetpassowrd = "/api/auth/forget-password";
export default {
  name: "Forgetpassword",

  data() {
    return {
      result: "",
      checkEmail: false,
      router: "",
      routeToForgetpassword: "",
      user: {
        email: "",
      },
    };
  },
  methods: {
    async ForgetForm() {
      const formData = new FormData();
      formData.append("email", this.user.email);

      await axios
        .post(User_forgetpassowrd, formData)
        .then(function (res) {
          if (res.status === 200) {
            console.log("correct emil");
            window.location.href = "http://localhost:8080/verifycode";
          } else {
            alert("Email not found");
          }
        })
        .catch(function (error) {
          console.log("wrong");
          console.log(error.response.data);
          this.result = error.response.data;
          this.check = true;
          //  window.location.href = 'http://localhost:8080/forget'
        });
    },

    success() {
      this.$router.push({ name: "verfycode" });
    },
  },
};
</script>

<style lang="scss" scoped>
.register {
  display: flex;
  justify-content: end;
}
.forget_logo {
  display: flex;
  justify-content: center;

  img {
    height: 150px;
  }
}
</style>
