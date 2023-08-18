<template>
  <div class="my_container">
    <div class="sub_container">
      <div class="login_content">
        <h1>Reset password</h1>
        <p>Enter your new password!!</p>
      </div>

      <div class="forget_logo">
        <img
          src="https://cdn-icons-png.flaticon.com/512/6195/6195699.png"
          alt=""
        />
      </div>
      <div class="user_input">
        <div>
          <label for="password">Enter your new password</label><br />
          <input
            v-model="password.newPassword"
            type="password"
            name="password"
            placeholder="Enter your new password"
            required
          />
        </div>
      </div>

      <div class="register">
        <div class="submit_btn">
          <button @click.prevent="resetPassword">Submit</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
const URL = "/api/auth/forget-password/reset-password";
export default {
  name: "ResetNewPassword",
  data() {
    return {
      password: {
        newPassword: "",
      },
    };
  },
  methods: {
    async resetPassword() {
      const formData = new FormData();
      formData.append("newPassword", this.password.newPassword);

      await axios.patch(URL, formData).then(function (res) {
        if (res.status === 200) {
          window.location.href = "http://localhost:8080/login";
        }
      });

      // console.log(this.password.newPassword);
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
