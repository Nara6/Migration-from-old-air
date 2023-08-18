<template>
  <div >
    <div id="word">
      <br />_Pubilc_
      <br />Share News
    </div>
    <v-form v-model="valid" ref="form" lazy-validation class="form_input">
      <v-container>
        <v-row>
          <v-col cols="12" md="12">
            <v-text-field
              v-model="submit_data.title"
              label="News Title"
              :rules="TitleRules"
              required
              placeholder="Please Enter News Title "
              class="input_text"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="12">
            <v-text-field
              v-model="submit_data.resource"
              label="Resource"
              :rules="ResourceRules"
              required
              placeholder="Please Enter Resource (Link or Place)"
              class="input_text"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="12">
            <v-textarea
              v-model="submit_data.description"
              label="Description"
              :rules="DescriptionRules"
              required
              placeholder="Please Enter News Description"
              class="input_text"
            ></v-textarea>
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
    submit_data: {
      title: null,
      resource: null,
      description: null
    },
    TitleRules: [
      v => !!v || "Title is required",
      v => (v && v.length <= 100) || "Name must be less than 100 characters"
    ],
    ResourceRules: [v => !!v || "Resurce is required"],
    DescriptionRules: [v => !!v || "Description is required"]
  }),
  methods: {
    submit_form() {
      axios
        .post(`${this.SERVICE_LINK}/api/news/client`, this.submit_data)
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
  },
  watch: {}
};
</script>
<style scoped>

 
.form_input {
  margin: 10px 10vw;
  border: 5px double #2a81ea;
  padding: 50px;
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

.button_submit {
  background-color: #2a81ea !important;
  color: white !important;
}
.button_submit:hover {
  background-color: #4374b1 !important;
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

#word {
  white-space: pre;
  font-weight: bold;
  font-family: "Inria Sans";
  color: #2a81ea;
  font-size: 25px;
  line-height: 1.2;
  text-align: center;
  justify-content: center;
  margin-bottom: 15px;
}
.not_login_alert {
  color: red !important;
}
</style>