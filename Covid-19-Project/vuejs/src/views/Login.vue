<template>
  <div>
    <div class="main">
      <div class="cont">
        <div class="image">
          <img v-bind:src="background" />
        </div>

        <div class="input">
          <div class="tab_button">
            <div class="tab_button">
              <a class="btn btn-primary" href="/login" role="button">SIGN IN</a>
              <a class="btn btn-outline-primary" href="/register" role="button">SING UP</a>
            </div>
          </div>
          <div class="input_part">
            <div class="input-container">
              <i class="fa fa-envelope icon"></i>
              <input
                class="input-field"
                type="text"
                placeholder="Email"
                name="email"
                required
                v-model="submit_data.username"
              />
            </div>
            <div class="input-container">
              <i class="fa fa-key icon"></i>
              <input
                class="input-field"
                type="password"
                placeholder="Password"
                name="psw"
                required
                v-model="submit_data.password"
              />
            </div>
          </div>
          <div class="contianer_alert">
            <v-alert v-if="success_input" class="alert_success" type="success">Log In success</v-alert>
            <v-alert v-if="error_input" class="alert_error" type="warning">{{messageError}}</v-alert>
          </div>
          <div class="submit_part">
            <button type="button" class="btn btn-primary" @click="validate">SIGN IN</button>
            <div>
              <span>If you not member?</span>
              <a style="text-decoration: none;" href="/register">Sign Up</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import image from "../assets/background.png";
import axios from "axios";
import VueCookies from "vue-cookies";

export default {
  data() {
    return {
      background: image,
      messageError: "",
      submit_data: {username:'',password:''},
      success_input: false,
      error_input: false,
      SERVICE_LINK: process.env.VUE_APP_SERVICE_URL,
    };
  },
  methods: {
    submit_from() {
      axios
        .post(`${this.SERVICE_LINK}/api/user/login`, this.submit_data)
        .then(response => (this.info = response))
        .then(() => {
          if (this.info) {
             
            if (this.info.data.msg == "success") {
              //console.log(this.info.data.role);
              //alert(this.info.data.role);
              VueCookies.set("UserInfo", this.info.data, "8h");
              this.$router.push({ name: "Home" });
              this.$router.reload({ name: "Home" });
            } else {
              this.messageError = "Log in Error";
              this.alert_error();
            }
          }else{
              this.messageError = "Log in Error";
              this.alert_error();
          }
        });
    },
    validate() {
      
      if (this.check_cookie() == true) {
        this.messageError = "You already log in. Please Log out.";
        this.alert_error();
      }else{
      
        if(this.submit_data.username.length<=0 || this.submit_data.password.length<=0 ){
            this.messageError = "Please input fields before submit.";
            this.alert_error();
        }else{
          this.submit_from();
        }
      }
    },
    check_cookie() {
      var LoginData = VueCookies.get("UserInfo");
      if (LoginData) {
        return true;
      } else {
        return false;
      }
    },
    alert_error(){
       this.error_input = true;
        setTimeout(() => {
          this.error_input = false;
        }, 3000);
    }
  }
};
</script>
<style scoped>
body {
  margin: 0px;
  padding: 0px;
}
.main {
  width: 100%;
}
.cont {
  /* border: 10px ridge;
  border-radius: 25px; */
  margin-top: 15vh;
  margin-bottom: 15vh;
  width: 90%;
  display: flex;
  margin-left: 10%;
}
.image {
  width: 60%;
}
.image img {
  width: 90%;
}
.input {
  width: 40%;
  margin-top: 15vh;
  margin-left: -200px;
}
.input .tab_button {
  width: 100%;
  justify-content: center;
  text-align: center;
}

.input .input_part {
  margin-top: 5vh;
  width: 100%;
  justify-content: center;
  text-align: center;
}

.input-container .icon {
  background-color: #2a81ea;
  padding: 10px;
  color: white;
  min-width: 50px;
  text-align: center;
  border-radius: 10px;
}
.input-container .input-field {
  width: 60%;
  padding: 5px 0px 5px 15px;
  outline: none;
  margin-bottom: 18px;
  border-radius: 10px;
  border: 1px black solid;
}
.input-container .input-field:focus {
  border: 2px solid dodgerblue;
}
.submit_part {
  margin-top: 5vh;
  text-align: center;
}

.submit_part div {
  margin-top: 2vh;
}

.contianer_alert {
  margin-top: 10px;
  width: 100%;
  text-align: center;
  justify-content: center;
}
.alert_success {
  background-color: green !important;
  width: 20vw;
  margin: auto;
}
.alert_error {
  background-color: red !important;
  width: 20vw;
  margin: auto;
}
</style>