<template>
  <div>
    <div class="contain">
      <!-- <div id="word">
        <br />_RELATED NEWS_
      </div> -->

      <!-- card -->
      <div class="cards">
        <div class="cards_subcontain">
          <v-card class="card" width="290" v-for="item in filterItems" :key="item.id">
            <v-img class="imageCard" :src="item.image"></v-img>
            <v-bottom-navigation>
              <v-btn class="contain_resource">
                <span>{{moment(item.create_at)}}</span>
                <span class="resource">{{item.type.type}}</span>
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
      </div>
    </div>
  </div>
</template>
<script>
// import Bartitle from "../../components/Bartitle.vue";
import axios from "axios";
import moment from "moment";

export default {
  components: {},
  data() {
    return {
      AllItems: [],
      SERVICE_LINK: process.env.VUE_APP_SERVICE_URL,
    };
  },

  methods: {
    moment: function(date) {
      return moment(date).format("MMMM Do YYYY, h:mm a");
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
    }
  },
  mounted() {
    this.list_item();
  },
  computed: {
    filterItems: function() {
      return this.AllItems.filter((item,i)=> {
        if(i<4){
         return item;
        }
      });
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
  margin: auto;
  background-color: #2a81ea !important ;
  color:white;
  border: 1px solid #2a81ea;
  margin: 10px 0px  ;
  border-radius: 20px;
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
  height: 7vh;
  border-radius: 15px 0px 0px 15px;
  padding: 10px;
  border: 2px solid #2a81ea;
}
.submitbtn {
  height: 7vh;
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
  width: 100%;
  margin-right: 0px;
}
.resource {
  color: white;
  font-size: 12px;
  background-color: #2a81ea;
  padding: 6px;
  border-radius: 7px;
  margin: 2px;
  text-transform: uppercase;
}
.favorite_icon {
  color: red !important;
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
  box-shadow: 0px 0px 8px 5px rgba(42, 129, 234, 0.8) !important;
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
</style>