<template>
  <div>
    <v-container class="ok">
      <v-alert
        id="notMatch"
        border="left"
        close-text="Close Alert"
        color="green accent"
        dark
        dismissible
        v-if="passwordNotMatch"
      >
        {{ message }}
      </v-alert>
    </v-container>

    <div class="my_container">
      <div class="sub_container">
        <v-container> </v-container>
        <!-- <v-alert border="left" close-text="Close Alert" color="green accent" dark dismissible v-if="result">
                {{messageSuccess}}
                </v-alert> -->
        <v-form
          ref="form"
          @submit.prevent="SubmitForm"
          enctype="multipart/form-data"
        >
          <div class="content">
            <h1>Sign Up</h1>
            <p>Create your account to get full access</p>
          </div>
          <div class="user_input">
            <div>
              <label for="username">User name</label><br />
              <input
                v-model="user.username"
                type="text"
                name="username"
                placeholder="Enter username"
                required
              />
            </div>
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
            <div>
              <label for="confirm_pwd">Confirm password</label><br />
              <input
                v-model="user.confirm_password"
                type="password"
                name="confirm_pwd"
                placeholder="Confirm password"
                required
              />
            </div>
          </div>
          <div class="register">
            <div>
              <p>
                Already have account ?
                <router-link :to="{ name: 'login' }" id="login"
                  >login</router-link
                >
                Here.
              </p>
            </div>

            <div class="submit_btn">
              <button type="Submit">Sign Up</button>
            </div>
          </div>
        </v-form>
        <!-- <v-alert color="success" class="mt-3" type="error" v-if="passwordNotMatch">
             {{message}}
            </v-alert> -->
      </div>
    </div>
  </div>
</template>

<script>
import User_API from "@/Service/User/user";
import axios from "axios";
const User_register = "/api/auth/register";
export default {
  name: "Register",
  data() {
    return {
      passwordNotMatch: false,
      message: "",
      messageSuccess: "",
      result: false,
      res: "",
      user: {
        username: "",
        email: "",
        password: "",
        confirm_password: "",
      },
    };
  },
  methods: {
    async SubmitForm() {
      const formData = new FormData();
      formData.append("username", this.user.username);
      formData.append("email", this.user.email);
      formData.append("password", this.user.password);
      formData.append("confirm_password", this.user.confirm_password);
      if (this.user.password === this.user.confirm_password) {
        this.res = await axios
          .post(User_register, formData)
          .catch(function (error) {
            console.log(error);
            return {
              status: error.request.status,
              data: error.response.data,
            };
          });
        if (this.res.status === 201) {
          this.result = true;
          this.messageSuccess = "Register successfully";
          this.$router.push({
            name: "login",
            params: { message: this.messageSuccess },
          });
        } else {
          alert(this.res.data);
        }
      } else {
        this.message = "Password not match!!";
        this.passwordNotMatch = true;
        this.$router.push({ name: "register" });
      }

      // if (this.res.status === 201 && this.user.password === this.user.confirm_password) {
      //   this.result = true;
      //   this.messageSuccess = "Register successfully";
      //   this.$router.push({
      //     name: "login",
      //     params: { message: this.messageSuccess },
      //   });
      // } else {
      //   this.message = "Password not match!!";
      //   this.passwordNotMatch = true;
      //   this.$router.push({ name: "register" });
      // }
    },
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400&display=swap");
div {
  #notMatch {
    color: white;
    background-color: red;
  }
}
.register {
  display: flex;
  justify-content: space-between;
  margin-top: 70px;
  @media (max-width: 460px) {
    display: flex;
    flex-direction: column;

    div p {
      text-align: center;
    }
    .submit_btn button {
      width: 100%;
    }
  }
  div p #login {
    color: red;
  }
  .submit_btn {
    button {
      padding: 10px 30px;
      margin-top: -10px;
      background-color: #2d52fa;
      color: white;
      border-radius: 3px;
      font-weight: bold;
    }
  }
}
.user_input {
  margin-top: 20px;
  div {
    margin-top: 20px;
    input {
      width: 100%;
      height: 45px;
      border: 1px solid black;
      padding-left: 30px;
      border-radius: 5px;
    }
    label {
      font-size: 18px;
      font-weight: bold;
    }
  }
}
.my_container {
  display: flex;
  width: 100%;
  align-items: center;
  min-height: 100vh;
  justify-content: center;

  .sub_container {
    position: relative;
    padding: 30px;
    border-radius: 5px;
    border: 1px solid black;
    box-shadow: black;
    width: 600px;
    height: 680px;

    .content {
      text-align: center;
      margin-top: -20px;
      h1 {
        color: #0e25a0;
      }
      p {
        font-size: 16px;
        font-family: "Pridi";
      }
    }
  }
}
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
</style>
