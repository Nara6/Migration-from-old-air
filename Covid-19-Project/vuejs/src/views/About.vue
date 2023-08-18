<template>
  <div class="main">
    <div class="background">
      <div class="contain">
        <div class="screen">
          <div class="screen-header">
            <div class="screen-header-left">
              <div class="screen-header-button close"></div>
              <div class="screen-header-button maximize"></div>
              <div class="screen-header-button minimize"></div>
            </div>
            <div class="screen-header-right">
              <div class="screen-header-ellipsis"></div>
              <div class="screen-header-ellipsis"></div>
              <div class="screen-header-ellipsis"></div>
            </div>
          </div>
          <div class="screen-body">
            <div class="screen-body-item left">
              <div class="app-title">
                <span>CONTACT US</span>
              </div>
              <div class="contact-wrapper">
                <div class="direct-contact-container">
                  <ul class="contact-list">
                    <li class="list-item">
                      <i class="fa fa-map-marker fa-2x">
                        <span class="contact-text place">City, State</span>
                      </i>
                    </li>

                    <li class="list-item">
                      <i class="fa fa-phone fa-2x">
                        <span class="contact-text phone">(+855)12151515</span>
                      </i>
                    </li>

                    <li class="list-item">
                      <i class="fa fa-envelope fa-2x">
                        <span class="contact-text gmail">GICTeam1@gmail.com</span>
                      </i>
                    </li>

                    <li class="list-item">
                      <span class="contact-text suggestion">
                        <p>We're open for any suggestion or just to have a chat</p>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="screen-body-item">
              <div class="app-form">
                <form >
                  <div class="app-form-group">
                    <input
                      class="app-form-control"
                      required
                      placeholder="NAME"
                      v-model="submit_data.name"
                    />
                  </div>
                  <div class="app-form-group">
                    <input
                      class="app-form-control"
                      type="email"
                      required
                      placeholder="EMAIL"
                      v-model="submit_data.email"
                    />
                  </div>
                  <div class="app-form-group">
                    <input
                      class="app-form-control"
                      required
                      placeholder="CONTACT NO"
                      v-model="submit_data.contactno"
                    />
                  </div>
                  <div class="app-form-group message">
                    <input
                      class="app-form-control"
                      required
                      placeholder="MESSAGE"
                      v-model="submit_data.message"
                    />
                  </div>
                  <div class="app-form-group buttons">
                    <button class="app-form-button">CANCEL</button>
                    <button class="app-form-button"  @click="validate">SEND</button>
                  </div>
                  
                  <div class="contianer_alert">
                    <v-alert
                      v-if="success_input"
                      class="alert_success"
                      type="success"
                    >Success. Thank you</v-alert>
                    <v-alert
                      v-if="error_input"
                      class="alert_error"
                      type="warning"
                    >Please input fields before submit.</v-alert>

                    <v-alert dense outlined class="not_login_alert" v-if="notLogin" type="error">
                      Please
                      <strong>Log in</strong> before share new.
                      <a href="/login">Go to Log In</a>
                    </v-alert>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import VueCookies from "vue-cookies";

export default {
  data: () => ({
    success_input: false,
    error_input: false,
    notLogin: false,
    submit_data: {
      name: null,
      email: null,
      contactno: null,
      message: null,
      SERVICE_LINK: process.env.VUE_APP_SERVICE_URL,
    },
   
  }),
  methods: {
    submit_form() {
      axios
        .post(`${this.SERVICE_LINK}/api/contact`, this.submit_data)
        .then(response => (this.info = response))
        .then(() => {
          if (this.info) {
            if (this.info.data.msg == "success") {
             
             this.success_input = true;
              setTimeout(() => {
                this.success_input = false;
              }, 3000);
              
            } else {
              alert("Create Contact False");
            }
          }
        });
    },
    validate() {
      if (this.submit_data.name.lenght==0||this.submit_data.name.contactno==0||this.submit_data.email.contactno==0||this.submit_data.email.message==0) {
        this.error_input = true;
        setTimeout(() => {
          this.error_input = false;
        }, 3000);
      } else {
        if (this.check_cookie() == true) {
           this.submit_form();
        } else {
          setTimeout(() => {
            this.notLogin = true;
          }, 3000);
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
    }
  }
};
</script>
<style scoped>
.main {
  margin-top: -40px;
  font-family: "Inria Sans", sans-serif;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  background: linear-gradient(to right, #ea1d6f 0%, #eb466b 100%);
  font-size: 12px;
}

body,
button,
input {
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  letter-spacing: 1.4px;
}

.background {
  display: flex;
  min-height: 95vh;
}

.contain {
  flex: 0 1 800px;
  margin: auto;
  padding: 10px;
  box-shadow: 0px 0px 19px 8px rgba(42, 129, 234, 0.8);
  border-radius: 25px;
}

.screen {
  position: relative;
  background: #3e3e3e;
  border-radius: 15px;
}

.screen:after {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 20px;
  right: 20px;
  bottom: 0;
  border-radius: 15px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
  z-index: -1;
}

.screen-header {
  display: flex;
  align-items: center;
  padding: 10px 20px;
  background: #4d4d4f;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
}

.screen-header-left {
  margin-right: auto;
  display: flex;
}

.screen-header-button {
  display: inline-block;
  width: 8px;
  height: 8px;
  margin-right: 3px;
  border-radius: 8px;
  background: white;
}

.screen-header-button.close {
  background: #ed1c6f;
}

.screen-header-button.maximize {
  background: #e8e925;
}

.screen-header-button.minimize {
  background: #74c54f;
}

.screen-header-right {
  display: flex;
}

.screen-header-ellipsis {
  width: 3px;
  height: 3px;
  margin-left: 2px;
  border-radius: 8px;
  background: #999;
}

.screen-body {
  display: flex;
  width: 800px;
  color: #2a81ea;
}

.screen-body-item {
  flex: 1;
  padding: 80px;
}

.screen-body-item.left {
  display: flex;
  flex-direction: column;
}

.app-title {
  display: flex;
  flex-direction: column;
  position: relative;
  color: white;
  font-size: 26px;
  font-weight: bold;
}

.app-title:after {
  content: "";
  display: block;
  position: absolute;
  left: 0;
  bottom: -10px;
  width: 25px;
  height: 4px;
  background: white;
}

.app-contact {
  margin-top: auto;
  font-size: 8px;
  color: #888;
}

.app-form-group {
  margin-bottom: 15px;
}

.app-form-group.message {
  margin-top: 40px;
}

.app-form-group.buttons {
  margin-bottom: 0;
  text-align: right;
}

.app-form-control {
  width: 100%;
  padding: 10px 0;
  background: none;
  border: none;
  border-bottom: 1px solid #666;
  color: #ddd;
  font-size: 14px;
  outline: none;
  transition: border-color 0.2s;
}

.app-form-control::placeholder {
  color: #666;
}

.app-form-control:focus {
  border-bottom-color: #ddd;
}

.app-form-button {
  background: none;
  border: none;
  color: #2a81ea;
  font-size: 14px;
  cursor: pointer;
  outline: none;
  margin-left: 10px;
}

.app-form-button:hover {
  color: white;
}

.contact-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 auto;
  padding: 20px;
  position: relative;
  max-width: 200px;
}

/* Begin Right Contact Page */
.direct-contact-container {
  width: 600px;
  padding: 10px;
  text-align: left;
}
.direct-contact-container ul {
  width: 100%;
  list-style-type: none;
  font-size: 10px;
  color: white;
}
.direct-contact-container ul li {
  margin-top: 25px;
}
.direct-contact-container ul li a {
  text-decoration: none;
}
.direct-contact-container i {
  color: white;
}
.contact-text {
  color: white;
  margin-left: 15px;
}
.suggestion {
  color: white;
  font-size: 13px;
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
  background-color: orange !important;
  width: 20vw;
  margin: auto;
}
.not_login_alert {
  color: red !important;
}
@media screen and (max-width: 520px) {
  .screen-body {
    flex-direction: column;
  }

  .screen-body-item.left {
    margin-bottom: 30px;
  }

  .app-title {
    flex-direction: row;
  }

  .app-title span {
    margin-right: 12px;
  }

  .app-title:after {
    display: none;
  }
}

@media screen and (max-width: 600px) {
  .screen-body {
    padding: 40px;
  }

  .screen-body-item {
    padding: 0;
  }
}
</style>