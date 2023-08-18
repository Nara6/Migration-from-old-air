<template>
  <div>
    <Bartitle title="YOUR FAVORITE" />
    <div style="margin-top:15px"></div>
    <div class="container_favorite">
      <!-- <v-card class="card_fav" max-width="90%" max-height="120px" outlined>
        <v-list-item three-line>
          <v-list-item-avatar tile size="80" color="grey">
            <v-img
              max-height="150"
              max-width="260"
              src="https://www.fijivillage.com/news_images/9087270295e94c7572cbffb5b78d0b.jpg"
            ></v-img>
          </v-list-item-avatar>

          <div class="information">
            <div class="title_news">Hello GUY</div>
            <div class="date_news">11/12/2022</div>
            <div class="type_new">Spread</div>
          </div>

          <div>
            <v-card-actions>
              <v-btn class="button_read" outlined rounded text>
                <v-icon>mdi-read</v-icon>Read
              </v-btn>
              <v-btn class="button_remove" outlined rounded text>
                <v-icon>mdi-delete</v-icon>Remove
              </v-btn>
            </v-card-actions>
          </div>
        </v-list-item>
      </v-card> -->
      <v-card
        v-for="item in AllItemsNEW"
        :key="item._id"
        class="card_fav"
        max-width="90%"
        max-height="120px"
        outlined
      >
        <v-list-item three-line>
          <v-list-item-avatar tile size="80" color="grey">
            <v-img
              max-height="150"
              max-width="260"
              :src="item.image"
            ></v-img>
          </v-list-item-avatar>

          <div class="information">
            <div class="title_news">{{item.title}}</div>
            <div class="date_news">{{moment(item.create_at)}}</div>
            <div class="type_new">{{item.type.type}}</div>
          </div>

          <div>
            <v-card-actions>
              <v-btn class="button_read" outlined rounded text :href="`/news/detail/${item._id}`"> 
                <v-icon>mdi-read</v-icon>Read
              </v-btn>
              <v-btn class="button_remove" outlined rounded text @click="remove_favorite(item._id)">
                <v-icon>mdi-delete</v-icon>Remove
              </v-btn>
            </v-card-actions>
          </div>
        </v-list-item>
      </v-card>
    </div>
  </div>
</template>
<script>
import Bartitle from "../components/Bartitle.vue";
import axios from "axios";
import VueCookies from "vue-cookies";
import moment from "moment";


export default {
  components: {
    Bartitle
  },
  data() {
    return {
      AllItems: [],
      AllItemsWithFavorite: [],
      favoriteStatus: true,
      SERVICE_LINK: process.env.VUE_APP_SERVICE_URL,
    };
  },
  methods: {
     moment: function(date) {
      return moment(date).format("MMMM Do YYYY, h:mm a");
    },
    remove_favorite(id) {
      var submit_form = {};
      var LoginData = VueCookies.get("UserInfo");

      if (LoginData) {
        submit_form.user_id = LoginData.user_id;
        submit_form.news_id = id;
        console.log(submit_form);
        axios
          .delete(
            `${this.SERVICE_LINK}/api/favorite/${submit_form.user_id}/${submit_form.news_id}`
          )
          .then(response => (this.info = response))
          .then(() => {
            if (this.info) {
              if (this.info.data.msg == "success") {
                this.list_item();
              } else {
                alert("Delete Favorite False");
              }
            }
          });
      } else {
        alert("Please Log In before Delete favorite");
      }
    },
    list_item() {
      axios
        .get(`${this.SERVICE_LINK}/api/news/client`)
        .then(response => (this.info = response))
        .then(() => {
          if (this.info) {
            if (this.info.data.msg == "success") {
              this.AllItems = this.info.data.datas;
              this.AllItems.forEach((item, index) => {
                if (
                  this.AllItems[index].image == "" ||
                  this.AllItems[index].image == null
                ) {
                  this.AllItems[index].image =
                    "https://www.fijivillage.com/news_images/9087270295e94c7572cbffb5b78d0b.jpg";
                }
              });
              this.list_favorite();
              // console.log(this.AllItems);
            } else {
              alert("Error1");
            }
          }
        });
    },
    list_favorite() {
      var LoginData = VueCookies.get("UserInfo");
      if (LoginData) {
        axios
          .get(`${this.SERVICE_LINK}/api/favorite/${LoginData.user_id}`)
          .then(response => (this.info = response))
          .then(() => {
            if (this.info) {
              if (this.info.data.msg == "success") {
                this.favorite_data = this.info.data.datas;
                this.AllItems.forEach((item, i) => {
                  this.AllItems[i].favorite = false;
                  if (this.favorite_data.length > 0) {
                    this.favorite_data.forEach((item, j) => {
                      if (
                        this.AllItems[i]._id == this.favorite_data[j].news._id
                      ) {
                        this.AllItems[i].favorite = true;
                      }
                    });
                  } else {
                    console.log("Null");
                  }
                });
                //DATA
                this.AllItemsWithFavorite = this.AllItems;
                // console.log(this.AllItemsWithFavorite);

              } else {
                alert("Error1");
              }
            }
          });
      } else {
        this.AllItemsWithFavorite = this.AllItems;
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
  mounted() {
    console.log(process.env.VUE_APP_TITLE);
    this.list_item();
  },
  computed: {
    AllItemsNEW: function() {
      return this.AllItemsWithFavorite.filter(item => { 
        if(item.favorite==true){
          return item.favorite 
        }
      });
    }
  }
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

.container_favorite {
  width: 65%;
  height: 550px;
  overflow-y: scroll;
  margin: auto;
  border: 2px solid #2a81ea;
  padding: 15px;
  border-radius: 10px ;
}
.card_fav {
  width: 100%;
  margin: 4px;
  border: 1px solid #2a81ea;
}
.card_fav:hover {
  box-shadow: 0px 0px 4px 2px rgba(42, 129, 234, 0.8) !important;
}
.button_remove {
  color: red;
  border: 1px solid red !important;
  margin-left: 10px;
}
.button_read {
  color: #2a81ea;
  border: 1px solid #2a81ea !important;
  text-align: right;
  margin-left: 50px;
}
.information {
  width: 60%;
  text-align: left;
  margin-left: 25px;
}
.information .title_news {
  font-size: 18px;
  font-weight: bold;
  color: black;
  font-family: "Inria Sans";
}
.information .date_news {
  font-size: 14px;
  font-weight: 500;
  color: #2a81ea;
  font-family: "Inria Sans";
}
.information .type_new {
  width: 4vw;
  border: #2a81ea 1px solid;
  border-radius: 7px;
  font-size: 16px;
  color: black;
  font-family: "Inria Sans";
  text-align: center;
}
</style>