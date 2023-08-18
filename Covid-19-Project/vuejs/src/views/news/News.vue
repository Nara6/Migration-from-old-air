<template>
  <div>
    <div class="contain">
      <div>
        <!-- <Bartitle title="NEWS" /> -->
        <div id="word">
          <br />_NEWS_
          <br />Daily News Feed
        </div>

        <div class="search_con">
          <!-- <input type="text" id="myInput" placeholder="Search for names.." title="Type in a name" />
          <button class="btn btn-outline-secondary submitbtn" type="button">Submit</button>-->
          <input type="text" placeholder="Search here" v-model="search" class="input_comment" />
          <button class="btn btn-outline-secondary submitbtn" type="button">Search</button>
        </div>

        <div class="container_filter">
          <div class="row_change">
            <v-row>
              <v-col class="filter_part" cols="12" sm="6">
                <span>Display News:</span>
                <select
                  class="form-select"
                  aria-label="Default select example"
                  v-model="rowSelect"
                  @change="changeRow"
                >
                  <option value="0">Default (2 Rows)</option>
                  <option value="1">1 Row</option>
                  <option value="2">2 Rows</option>
                  <option value="3">3 Rows</option>
                </select>
              </v-col>
              <v-col cols="6" class="filter_part">
                <span>Type of News:</span>
                <select
                  class="form-select"
                  aria-label="Default select example"
                  v-model="type_faq_select"
                  
                >
                  <option value="0">General</option>
                  <option  v-for="item in type_faq" :key="item._id" :value="item._id">{{item.type}}</option>
                </select>
              </v-col>
            </v-row>
          </div>
        </div>
      </div>

      <!-- card -->
      <div class="cards" v-if="search">
        <!-- <div class="cards_subcontain">
          <v-card class="card" width="290" v-for="item in filterItems" :key="item.id">
            <v-img class="imageCard" :src="item.image"></v-img>
            <v-bottom-navigation>
              <v-btn class="contain_resource">
                <span>{{moment(item.create_at)}}</span>
                <span class="resource">{{item.type.type}}</span>
              </v-btn>

              <v-btn value="favorites" v-if="!Favorites">
                <span>Favorite</span>
                <v-icon>mdi-heart</v-icon>
              </v-btn>
              <v-btn value="favorites" v-if="Favorites">
                <span>Un Favorites</span>
                <v-icon class="favorite_icon">mdi-heart</v-icon>
              </v-btn>
            </v-bottom-navigation>
            <div class="container_title">
              <v-card-title class="card_title overflow-hidden">{{item.title}}</v-card-title>
            </div>

            <v-card-actions>
              <div style="justify-content: center; text-align:center; margin:auto;">
                <v-btn
                  class="read_more"
                  :href="`/news/detail/${item._id}`"
                  color="orange  lighten-2"
                  text
                >Read More</v-btn>
              </div>

              <v-spacer></v-spacer>

              <v-btn icon @click="show = !show">
                <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
              </v-btn>
            </v-card-actions>

            <v-expand-transition>
              <div v-show="show">
                <v-divider></v-divider>

                <v-card-text>I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.</v-card-text>
              </div>
            </v-expand-transition>
          </v-card>
        </div>-->
        <div class="cards_subcontain">
          <v-card class="card" width="290" v-for="item in filterItems" :key="item.id">
            <v-img class="imageCard" :src="item.image"></v-img>
            <!-- <div class="card_resource">
              
              <span class="tag type">{{item.type.type}}</span>
              <span class="tag favorite">
                <v-btn icon dark >
                  <v-icon>
                    {{ active ? 'mdi-heart' : 'mdi-heart-outline' }}
                  </v-icon>
                </v-btn>
              </span>
              <br />
              <span class="date">{{moment(item.create_at)}}</span>
              
            </div>-->
            <v-bottom-navigation>
              <v-btn class="contain_resource">
                <div class="date">{{moment(item.create_at)}}</div>
                <div class="resource">{{item.type.type}}</div>
              </v-btn>

              <v-btn value="favorites" @click="add_favorite(item._id)" v-if="!item.favorite">
                <span>Favorite</span>
                <v-icon>mdi-heart</v-icon>
              </v-btn>
              <v-btn value="favorites" @click="remove_favorite(item._id)" v-if="item.favorite">
                <span style="color:red;">Un Favorites</span>
                <v-icon class="favorite_icon">mdi-heart</v-icon>
              </v-btn>
            </v-bottom-navigation>
            <div class="container_title">
              <v-card-title class="card_title overflow-hidden">{{item.title}}</v-card-title>
            </div>

            <v-card-actions>
              <div style="justify-content: center; text-align:center; margin:auto;">
                <v-btn
                  class="read_more"
                  :href="`/news/detail/${item._id}`"
                  color="orange  lighten-2"
                  text
                >Read More</v-btn>
              </div>

              <v-spacer></v-spacer>

              <v-btn icon @click="show = !show">
                <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
              </v-btn>
            </v-card-actions>

            <v-expand-transition>
              <div v-show="show">
                <v-divider></v-divider>
                <v-card-text>{{item.description}}</v-card-text>
              </div>
            </v-expand-transition>
          </v-card>
        </div>
      </div>

      <!-- card -->
      <div class="cards" v-if="search.length==0">
        <div class="cards_subcontain">
          <v-card class="card" width="290" v-for="item in pageOfItems" :key="item.id">
            <v-img class="imageCard" :src="item.image"></v-img>
            <!-- <div class="card_resource">
              
              <span class="tag type">{{item.type.type}}</span>
              <span class="tag favorite">
                <v-btn icon dark >
                  <v-icon>
                    {{ active ? 'mdi-heart' : 'mdi-heart-outline' }}
                  </v-icon>
                </v-btn>
              </span>
              <br />
              <span class="date">{{moment(item.create_at)}}</span>
              
            </div>-->
            <v-bottom-navigation>
              <v-btn class="contain_resource">
                <div class="date">{{moment(item.create_at)}}</div>
                <div class="resource">{{item.type.type}}</div>
              </v-btn>

              <v-btn value="favorites" @click="add_favorite(item._id)" v-if="!item.favorite">
                <span>Favorite</span>
                <v-icon>mdi-heart</v-icon>
              </v-btn>
              <v-btn value="favorites" @click="remove_favorite(item._id)" v-if="item.favorite">
                <span style="color:red;">Un Favorites</span>
                <v-icon class="favorite_icon">mdi-heart</v-icon>
              </v-btn>
            </v-bottom-navigation>
            <div class="container_title">
              <v-card-title class="card_title overflow-hidden">{{item.title}}</v-card-title>
            </div>

            <div class="mx-auto">
              <v-btn
                class="read_more"
                :href="`/news/detail/${item._id}`"
                color="orange lighten-2"
                text
              >Read More</v-btn>
            </div>
          </v-card>
        </div>

        <jw-pagination
          class="pagination"
          :pageSize="PageSizes"
          :items="AllItemsNEW"
          @changePage="onChangePage"
        ></jw-pagination>
      </div>
    </div>
    <Sharenews />
  </div>
</template>
<script>
// import Bartitle from "../../components/Bartitle.vue";
import axios from "axios";
import image from "../../assets/news/2.png";
import moment from "moment";
import Sharenews from "../../components/Sharenews";
import VueCookies from "vue-cookies";
export default {
  components: {
    Sharenews
  },
  data() {
    return {
      valid: true,
      Favorites: true,
      toastCount: 0,
      AllItems: [],
      pageOfItems: [],
      dateformat: [],
      image,
      show: false,
      search: "",
      type_faq: "",
      type_faq_select: "0",
      rowSelect: 0,
      favorite_data: [],
      AllItemsWithFavorite: [],
       SERVICE_LINK: process.env.VUE_APP_SERVICE_URL,
    };
  },

  methods: {
    // changeType(){
    //   console.log(this.type_faq_select);
    // },
    changeRow() {
      if (this.rowSelect == 0) {
        this.pageNumber = 4;
        this.list_item();
      } else {
        this.pageNumber = 4 * this.rowSelect;
        this.list_item();
      }
    },
    moment: function(date) {
      return moment(date).format("MMMM Do YYYY, h:mm a");
    },
    onChangePage(pageOfItems) {
      this.pageOfItems = pageOfItems;
    },
    gettype() {
      axios
        .get(`${this.SERVICE_LINK}/api/typefaq`)
        .then(response => (this.info = response))
        .then(() => {
          if (this.info) {
            if (this.info.data.msg == "success") {
              // console.log(this.info.data.datas);
              this.type_faq = this.info.data.datas;
              console.log(this.type_faq);
            } else {
              alert("Error1");
            }
          }
        });
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
              this.check_favorite();

              console.log(this.AllItems);
            } else {
              alert("Error1");
            }
          }
        });
    },
    list_favorite() {
      var LoginData = VueCookies.get("UserInfo");
      alert(LoginData.user_id);
      axios
        .get(`${this.SERVICE_LINK}/api/favorite/${LoginData.user_id}`)
        .then(response => (this.info = response))
        .then(() => {
          if (this.info) {
            if (this.info.data.msg == "success") {
              this.favorites = this.info.data.datas;
              console.log(this.favorites);
            } else {
              alert("Error1");
            }
          }
        });
    },
    readMore(id) {
      window.location.href = `/news/detail/${id}`;
    },
    add_favorite(id) {
      var submit_form = {};
      var LoginData = VueCookies.get("UserInfo");

      if (LoginData) {
        // alert(true);
        submit_form.user_id = LoginData.user_id;
        submit_form.news_id = id;

        axios
          .post(`${this.SERVICE_LINK}/api/favorite`, submit_form)
          .then(response => (this.info = response))
          .then(() => {
            if (this.info) {
              if (this.info.data.msg == "success") {
                this.list_item();
              } else {
                alert("Add Favorite False");
              }
            }
          });
      } else {
        alert("Please Log In before Add favorite");
      }
    },
    remove_favorite(id) {
      var submit_form = {};
      var LoginData = VueCookies.get("UserInfo");

      if (LoginData) {
        submit_form.user_id = LoginData.user_id;
        submit_form.news_id = id;
        // console.log(submit_form);
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
    check_favorite() {
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
                //console.log(this.AllItemsWithFavorite);
              } else {
                alert("Error1");
              }
            }
          });
      }else{
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
    this.list_item();
    this.gettype();
  },
  computed: {
    filterItems: function() {
      return this.AllItems.filter(item => {
        return item.title.toLowerCase().match(this.search.toLocaleLowerCase());
      });
    },
    AllItemsNEW: function() {
      if (this.type_faq_select != "0") {

        return this.AllItemsWithFavorite.filter(item => {
          return item.type._id.match(this.type_faq_select);
        });
      } else {
        return this.AllItemsWithFavorite;
      }
    },
    PageSizes: function() {
      if (this.rowSelect == 0) {
        return 8;
      } else {
        return 4 * this.rowSelect;
      }
    }
  }
};
</script>


<style scoped>
.contain {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  margin-top: 3%;
}
.read_more {
  color: #2a81ea !important ;
  font-family: "Inria Sans", sans-serif;
}
.read_more:hover {
  text-decoration: none;
}

.header {
  width: 100%;
  background: linear-gradient(273deg, #2a81ea 0%, rgb(10, 49, 98) 100%);
  color: white;
  font-weight: bold;
  font-family: "Inria Sans";
  font-size: 44px;
  text-align: center;
  justify-content: center;
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
}

.search_con {
  width: 100%;
  text-align: center;
  justify-content: center;
  display: flex;
  margin-top: 20px;
}
.input_comment {
  width: 70%;
  height: 6vh;
  border-radius: 15px 0px 0px 15px;
  padding: 10px;
  border: 2px solid #2a81ea;
  font-family: "Inria Sans", sans-serif;
}

.submitbtn {
  height: 6vh;
  background-color: #2a81ea;
  overflow: visible;
  border: 1px solid #2a81ea;
  border-radius: 0px 15px 15px 0px;
  font-weight: 700;
  font-style: normal;
  font-family: "Inria Sans", sans-serif;
  color: white;
}

::placeholder {
  color: #08080866;
}

.cards {
  width: 100%;
  padding: 0px 6.5vw;
  justify-content: center;
  margin: 3vh 0px;
}
.cards_subcontain {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: left;
  margin-bottom: 5vh;
}
.card_title {
  font-weight: 600;
  font-size: 15px;
}
.container_title {
  height: 120px;
  overflow: hidden;
  padding: 5px;
}
.card_resource {
  margin: 10px;
  text-align: left;
}
.imageCard {
  height: 200px;
  margin: 5px;
}

.card {
  margin: 10px 1vw;
  background-color: #fff;
  border-radius: 10px;
  border: solid 0.5px #2a81ea;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);
  overflow: hidden;
}

.tag {
  background: #cccccc;
  border-radius: 50px;
  font-size: 12px;
  margin: 0;
  color: #fff;
  padding: 5px 10px;
  text-transform: uppercase;
  cursor: pointer;
}
.type {
  background-color: #2a81ea;
}
.contain_resource {
  width: 70%;
  margin: auto;
  font-family: "Inria Sans", sans-serif;
}
.contain_resource span {
  display: block;
  text-align: left;
}
.resource {
  width: 100%;
  color: white;
  font-size: 12px;
  background-color: #2a81ea;
  padding: 5px;
  border-radius: 9px;
  margin: 2px;
  text-transform: uppercase;
}
.date {
  color: #2a81ea;
  font-weight: 500;
}
.favorite_icon {
  color: red !important;
  font-family: "Inria Sans", sans-serif;
}
.card-body p {
  font-size: 13px;
  margin: 0 0 40px;
}
.user {
  display: flex;
  margin-top: auto;
}
.user img {
  border-radius: 50%;
  width: 40px;
  height: 40px;
  margin-right: 10px;
}
.user-info h5 {
  margin: 0;
}
.user-info small {
  color: #545d7a;
}
.btn {
  margin-bottom: 4vh;
}
.date {
  color: #2a81ea;
}
.card:hover {
  /* box-shadow: 2px 2px 5px rgb(163, 163, 246); */
  box-shadow: 0px 0px 7px 3px rgba(42, 129, 234, 0.8) !important;
}
.container_filter {
  width: 100%;
}
.row_change {
  width: 40%;
  margin: auto;
}
.filter_part {
  display: flex;
}
.filter_part span {
  width: 10vw;
  margin: auto;
  color: #2a81ea;
  font-family: "Inria Sans";
  font-size: 15px;
  font-weight: bold;
}
.filter_part select {
  color: #2a81ea;
  border: #2a81ea 1px solid;
  font-family: "Inria Sans";
}
.read_more {
  margin: auto;
  background-color: #2a81ea !important ;
  color: white !important;
  border: 1px solid #2a81ea;
  margin: 15px 0px;
  border-radius: 20px;
}
.read_more:hover {
  text-decoration: none;
}
</style>