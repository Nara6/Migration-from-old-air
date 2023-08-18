<template>
  <div>
    <v-container class="ok">
      <v-alert
        style="position: absolute; width: 1200px"
        id="Match"
        border="left"
        close-text="Close Alert"
        color="green accent"
        dark
        dismissible
        v-if="this.$route.params.message"
      >
        {{ this.$route.params.message }}
      </v-alert>
      <!-- <v-alert id="Match" border="left" close-text="Close Alert" color="green accent" dark dismissible v-if="invalid">
                  {{message}}
        </v-alert> -->
    </v-container>
    <div class="my_container">
      <div class="sub_container">
        <v-form
          ref="form"
          @submit.prevent="LoginForm"
          enctype="multipart/form-data"
        >
          <div class="login_content">
            <h1>Sign Up</h1>
            <p>Create your account to get full access</p>
          </div>
          <div class="user_input">
            <div>
              <label for="email">Email Address</label><br />
              <input
                v-model="user.email"
                type="email"
                name="email"
                placeholder="Enter email address"
                required
              />
            </div>
            <div>
              <label for="password">Password</label><br />
              <input
                v-model="user.password"
                type="password"
                name="password"
                placeholder="Enter password"
                required
              />
            </div>
          </div>
          <div class="forget_pwd">
            <router-link :to="{ name: 'forget' }" id="forget_pwd"
              >Forget password</router-link
            >
          </div>
          <div class="register">
            <div>
              <p>
                Already have account ?
                <router-link :to="{ name: 'register' }" id="login"
                  >Sign Up</router-link
                >
                Here.
              </p>
            </div>

            <div class="submit_btn">
              <button type="submit">Login</button>
            </div>
          </div>
        </v-form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
const URL = "/api/auth/login";

export default {
  name: "Login",

  data() {
    return {
      result: "",
      invalid: false,
      message: "",
      users: [],
      user: {
        email: "",
        password: "",
      },
    };
  },

  methods: {
    async LoginForm() {
      const formData = new FormData();
      formData.append("email", this.user.email);
      formData.append("password", this.user.password);
      this.users = await axios.post(URL, formData).catch(function (error) {
        console.log(error);
        return {
          status: error.request.status,
          data: error.response.data,
        };
      });
      // console.log(this.users.data.Data);
      if (this.users.status === 200) {
        this.$router.push({
          name: "navigation",
          params: { data: this.users.data },
        });
        this.$router.push({ name: "home", params: { data: this.users.data } });
      } else {
        alert(this.users.data);
      }
    },
  },
};
</script>

<style lang="scss">
div {
  #Match {
    color: white;
    background-color: green;
  }
}
.login_content {
  margin-bottom: 80px;
  text-align: center;
  h1 {
    color: #0e25a0;
  }
}
.forget_pwd {
  display: flex;
  justify-content: end;
  #forget_pwd {
    color: red;
    margin-top: 20px;
  }
}
</style>
