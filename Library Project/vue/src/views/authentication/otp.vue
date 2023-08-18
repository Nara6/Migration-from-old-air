<template>
  <div class="my_container">
    <div class="sub_container">
      <div class="login_content">
        <h1>Verify code!!</h1>
        <p>Enter your verify code to change password !</p>
      </div>

      <div class="forget_logo">
        <img
          src="https://cdn.iconscout.com/icon/premium/png-256-thumb/otp-1899644-1605594.png"
          alt=""
        />
      </div>

      <div class="otp" style="margin-top: 50px">
        <div class="ma-auto" style="max-width: 300px">
          <v-otp-input
            v-model="otp"
            :disabled="loading"
            @finish="onFinish"
            length="4"
          ></v-otp-input>
          <v-overlay absolute :value="loading">
            <v-progress-circular
              indeterminate
              color="primary"
            ></v-progress-circular>
          </v-overlay>
        </div>

        <!-- <h3 style="text-align:center; margin-top:30px; color:blue">Auto checking </h3> -->
        <v-snackbar v-model="snackbar" :color="snackbarColor" :timeout="2000">
        </v-snackbar>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
const OTP_URL = "/api/auth/forget-password/code-verify";
export default {
  name: "otp",

  data: () => ({
    loading: false,
    snackbar: false,
    snackbarColor: "default",
    otp: "",

    expectedOtp: "0031",
  }),
  methods: {
    onFinish(rsp) {
      this.loading = true;
      setTimeout(async () => {
        this.loading = false;
        console.log(rsp);
        const formData = {
          code: rsp,
        };
        await axios
          .post(OTP_URL, formData)
          .then(function (res) {
            if (res.status === 200) {
              console.log(res.status);
              window.location.href = "http://localhost:8080/reset-password";
            }
          })
          .catch(function (error) {
            if (error.response.status !== 200) {
              console.log("wrong OTP");
              window.location.href = "http://localhost:8080/forget";
            }
          });

        this.snackbar = true;
      }, 3500);
    },
  },
};
</script>

<style lang="scss" scoped>
.position-relative {
  position: relative;
}
.otp {
  .ma-auto {
    display: flex;
    justify-content: center;
    margin-left: 120px;
  }
}

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
