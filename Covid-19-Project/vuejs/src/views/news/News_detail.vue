<template>
  <div>
    <div class="contain">
      <div class="backbutton">
        <!-- <a class="button" href="/news">
          <b-icon icon="caret-left"></b-icon>Back
        </a>-->
        <v-btn class="ma-2 button_back" dark href="/news">
          <v-icon dark left>mdi-arrow-left</v-icon>Back
        </v-btn>
      </div>
      <div class="image">
        <img :src="news.image" alt />
      </div>
      <div class="title">
        <span>{{news.title}}</span>
      </div>
      <div class="resurce">
        <span>{{moment(news.create_at)}} | {{news.type.type}} | Resource: {{news.resource}}</span>
      </div>
      <div class="favorite">
        <button class="button">
          <b-icon icon="suit-heart" aria-hidden="true"></b-icon>Add to favorite
        </button>
      </div>
      <div class="description">
        <p>{{news.description}}</p>
      </div>

      <div class="comment">
        <span>COMMENT</span>
        <hr class="line"/>
        <div class="list_comment">
          <div
            class="d-flex align-items-center card_comment"
            v-for="item in comments"
            :key="item._id"
          >
            <b-avatar variant="primary" class="mr-3">{{item.create_by.username}}</b-avatar>
            <span class="mr-auto">
              <span class="date_in_comment">{{moment(item.create_at)}}</span>
              <br />
              {{item.text}}
            </span>
          </div>
        </div>
        <div class="d-flex card_comment" style="margin-top: 20px ;">
          <input
            type="text"
            v-model="new_comment"
            placeholder="Type comment here"
            class="input_comment"
          />
          <button class="btn btn-outline-secondary" type="button" @click="validate">Submit</button>
        </div>
        
        <div class="contianer_alert">
          <v-alert  v-if="success_input" class="alert_success" type="success">Success. Thank you</v-alert>
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
      </div>

      <div class="related_new">
        <div class="contain">
          <div id="word" style="margin-bottom:2vh;">
            <br />RELATED NEWS
          </div>
          <Relatednews />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";

import moment from "moment";
import VueCookies from "vue-cookies";
import Relatednews from "../../components/Relatednews";
export default {
  components: {
    Relatednews
  },
  data() {
    return {
      success_input: false,
      error_input: false,
      notLogin: false,
      news: "",
      dateFormat: "",
      comments: [],
      new_comment: "",
      favorite_data:[],
      SERVICE_LINK: process.env.VUE_APP_SERVICE_URL,
    };
  },
  methods: {
    moment: function(date) {
      return moment(date).format("MMMM Do YYYY, h:mm a");
    },
    list_item() {
      axios
        .get(`${this.SERVICE_LINK}/api/news/client/${this.$route.params.id}`)
        .then(response => (this.info = response))
        .then(() => {
          if (this.info) {
            if (this.info.data.msg == "success") {
              this.news = this.info.data.datas[0];
              if (this.news.image == "" || this.news.image == null) {
                this.news.image =
                  "https://www.fijivillage.com/news_images/9087270295e94c7572cbffb5b78d0b.jpg";
              }
            } else {
              alert("Error1");
            }
          }
        });
    },
    list_comment() {
      axios
        .get(`${this.SERVICE_LINK}/api/comment/${this.$route.params.id}`)
        .then(response => (this.info = response))
        .then(() => {
          if (this.info) {
            if (this.info.data.msg == "success") {
              this.comments = this.info.data.datas;
              console.log(this.comments);
            } else {
              alert("Error1");
            }
          }
        });
    },
    validate() {
      if (this.new_comment.length <= 0) {
        this.error_input = true;
        setTimeout(() => {
          this.error_input = false;
        }, 2000);
      } else {
        if (this.check_cookie() == true) {
          this.submit_comment();
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
    },
    submit_comment() {
      var submit_form = {};
      var LoginData = VueCookies.get("UserInfo");

      submit_form.comments = this.new_comment;
      submit_form.news_id = this.$route.params.id;
      submit_form.user_id = LoginData.user_id;

      axios
        .post(`${this.SERVICE_LINK}/api/comment`, submit_form)
        .then(response => (this.info = response))
        .then(() => {
          if (this.info) {
            if (this.info.data.msg == "success") {
              // console.log("Create Success");
              this.submit_data = {};
              this.success_input = true;
              this.new_comment="";
              this.list_comment();
              setTimeout(() => {
                this.success_input = false;
              }, 2000);
            } else {
              alert("Create False");
            }
          }
        });
    },
    
  },
  mounted() {
    this.list_item();
    this.list_comment();

  },

};
</script>

<style scoped>
/* width */
::-webkit-scrollbar {
  width: 20px;
}
/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey; 
  border-radius: 10px;
}
/* Handle */
::-webkit-scrollbar-thumb {
  background: #2a81ea; 
  border-radius: 10px;
}
/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #386092; 
}

#word {
  font-weight: bold;
  color: #2a81ea;
  font-size: 25px;
  line-height: 1.2;
  text-align: center;
  justify-content: center;
  background-color: white;
}
.contain {
  widows: 100%;
  margin-top: 12vh;
  height: auto;
}
.backbutton {
  text-align: left;
  padding-left: 10vw;
}
.button {
  border-radius: 15px;
  background-color: #2a81ea;
  color: white;
  border: 0.5px white;
  padding: 3px 8px;
}
.button:hover {
  background: #78a6de;
}
.title {
  padding-left: 10vw;
  margin-top: 40px;
  white-space: pre;
  font-weight: bold;
  font-style: normal;
  font-family: "Inria Sans";
  color: #2a81ea;
  font-size: 30px;
  letter-spacing: 0px;
  line-height: 1.2;
  text-align: left;
}
.resurce {
  padding-left: 10vw;
  margin: 10px 0px;
  white-space: pre;
  font-weight: bold;
  font-style: normal;
  font-family: "Inria Sans";
  font-size: 16px;
  letter-spacing: 0px;
  line-height: 1.2;
  text-align: left;
}
.favorite {
  padding-left: 10vw;
  text-align: left;
}
.favo-btn {
  background-color: aliceblue;
  color: black;
  margin: 10px 0px;
}
.favo-btn:hover {
  background-color: #2a81ea;
}
.favo-btn:active {
  background-color: #2a81ea;
}
.description {
  padding: 0vw 10vw;
  text-align: left;
  margin-top: 30px;
}
.image {
  width: 100%;
}
.image img {
  height: 400px;
}
.comment {
  padding-left: 10vw;
  margin-top: 40px;
  font-weight: bold;
  font-style: normal;
  font-family: "Inria Sans";
  color: #2a81ea;
  font-size: 20px;
  letter-spacing: 0px;
  line-height: 1.2;
  text-align: left;
}
.list_comment {
  width: 80%;
  margin-top: 15px;
  padding: 15px;
  height: 300px;
  font-weight: normal;
  font-size: 15px;
  justify-content: center;
  color: black;
  overflow-y: scroll;
}

.card_comment {
  padding-left: 1vw;
  width: 50%;
  border: none;
  margin-top: 2vh;
  font-size: 15px;
}
.input_comment {
  width: 70%;
  border-radius: 15px 0px 0px 15px;
  padding: 10px;
  border: solid #2a81ea;
}
.date_in_comment {
  margin-bottom: 5px;
  font-size: 13.5px;
}
.btn {
  background-color: #2a81ea;
  overflow: visible;
  border: 1px solid #2a81ea;
  border-radius: 0px 15px 15px 0px;
  font-weight: 700;
  font-style: normal;
  font-family: "Inria Sans", sans-serif;
  color: white;
}
.button_back {
  color: white !important;
  background-color: #2a81ea !important;
  border-radius: 15px;
}
.button_back:hover {
  background: #78a6de !important;
}
.contianer_alert {
  margin-top: 10px ;
  width: 40%;
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
  width: 30vw;
  margin: auto;
}
.line{
  color: #2a81ea !important;
  width: 50vw;
}
</style>