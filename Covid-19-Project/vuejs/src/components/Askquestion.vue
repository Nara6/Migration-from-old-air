<template>
  <div>
    <div id="word">
        <br />_Question_
        <br />Ask Your Question Here
    </div>
    <v-form v-model="valid" ref="form" lazy-validation class="form_input">
      <v-container>
        <v-row>

          <v-col cols="12" md="12">
            <v-text-field
              v-model="submit_data.question"
              label="Question"
              required
              :rules="QuestionRules"
              placeholder="Please Enter Question"
              class="input_text"
            ></v-text-field>
          </v-col>
      
        </v-row>
      </v-container>
      <v-btn class="mr-4 button_submit" @click="validate">submit</v-btn>

     <div class="contianer_alert">
        <v-alert v-if="success_input" class="alert_success" type="success">Success. Thank you</v-alert>
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

    </v-form>
  </div>
</template>

<script>
import axios from "axios";
import VueCookies from "vue-cookies";

export default {
   data: () => ({
    success_input: false,
    SERVICE_LINK: process.env.VUE_APP_SERVICE_URL,
    error_input: false,
    notLogin: false,
    submit_data:{
      "question":null,
    
    },
     QuestionRules: [
      v => !!v || "Question is required",
      v => (v && v.length <= 100) || "Name must be less than 100 characters"
    ],
  }),
  methods:{
     submit_form() {
      axios
        .post(`${this.SERVICE_LINK}/api/faq`, this.submit_data)
        .then(response => (this.info = response))
        .then(() => {
          if (this.info) {
            if (this.info.data.msg == "success") {
              // console.log("Create Success");
              this.submit_data = {};
              this.success_input = true;
              setTimeout(() => {
                this.success_input = false;
              }, 3000);
            } else {
              alert("Create False");
            }
          }
        });
    },
    validate() {
      if (this.$refs.form.validate() == false) {
        this.error_input = true;
        setTimeout(() => {
          this.error_input = false;
        }, 3000);
      } else {
        if (this.check_cookie() == true) {
          var LoginData = VueCookies.get("UserInfo");
          this.submit_form.user_id = LoginData.user_id;
          this.submit_form();
        } else {
          this.notLogin = true;
          setTimeout(() => {
            this.notLogin = false;
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
.form_input {
  margin: 0px 10vw;
  border: 2px solid #2a81ea;
  padding: 25px;
  border-radius: 15px;
}
.form_input:active {
  box-shadow: 0px 0px 15px 8px rgba(42, 129, 234, 0.8) !important;
}
.input_text {
  color: #2a81ea !important;
  font-size: 16px;
}
.input_text ::placeholder {
  color: #2a81ea !important;
  opacity: 1;
  margin-top: 10px;
}

.button_submit{
  background-color:#2a81ea !important;
  color: white !important;
}
.button_submit:hover{
  background-color:#4374b1 !important;
}
.contianer_alert {
  margin-top: 10px ;
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
#word {
  white-space: pre;
  font-weight: bold;
  font-family: "Inria Sans";
  color: #2a81ea;
  font-size: 25px;
  line-height: 1.2;
  text-align: center;
  justify-content: center;
  margin-bottom: 15px ;
}
.not_login_alert {
  color: red !important;
}
</style>