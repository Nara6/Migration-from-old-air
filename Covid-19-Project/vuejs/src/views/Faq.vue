<template>
  <div class="contain">
    <Bartitle title="FREQUENTLY ASKED QUESTIONS" />
    <!-- <div id="word">_Question_</div>
    <div class="search_con">
      <input type="text" placeholder="Type your question here" class="input_comment" />
      <button class="btn btn-outline-secondary submitbtn" type="button">Submit</button>
    </div> -->

    <v-card class="question_container ">
      <v-tabs vertical>
        <v-tab 
        
          @click="list_item(type._id)"
          class="tab_part"
          v-for="type in typefaq"
          :key="type._id"
        >{{type.type}}
        </v-tab>

        <v-tab-item class="tab_display" v-for="type in typefaq" :key="type._id">
          
          <v-expansion-panels class="question_box" focusable>
            <v-expansion-panel class="question_each" v-for="(item,i) in allfaq" :key="i">
              <v-expansion-panel-header class=" question_text" >
                {{item.question}}
                <v-icon class="icon"></v-icon>
              </v-expansion-panel-header>
              <v-expansion-panel-content class="answer_part">{{item.answer}}</v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
          
        </v-tab-item>
      </v-tabs>
    </v-card>
    

    <Askquestion/>
  </div>
</template>
<script>
import Bartitle from "../components/Bartitle.vue";
import axios from "axios";
import Askquestion from "../components/Askquestion";
export default {
  name: "HomePage",
  components: {
    Bartitle,
    Askquestion
  },
  data() {
    return {
      typefaq: "",
      allfaq: "",
      SERVICE_LINK: process.env.VUE_APP_SERVICE_URL,
    };
  },

  mounted() {
    this.list_type_faq();
  },

  methods: {
    list_item(id) {
      axios
        .get(`${this.SERVICE_LINK}/api/faq/client/${id}`)
        .then(response => (this.info = response))
        .then(() => {
          if (this.info) {
            if (this.info.data.msg == "success") {
              this.allfaq = this.info.data.datas;
            } else {
              alert("Error1");
            }
          }
        });
    },
    list_type_faq() {
      axios
        .get(`${this.SERVICE_LINK}/api/typefaq`)
        .then(response => (this.info = response))
        .then(() => {
          if (this.info) {
            if (this.info.data.msg == "success") {
              this.typefaq = this.info.data.datas;
              if(this.typefaq.length>0){
                this.list_item(this.typefaq[0]._id);
              }
            } else {
              alert("Error1");
            }
          }
        });
    }
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Inria+Sans&display=swap");
.v-card--reveal {
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
  width: 100%;
}
body {
  background-color: rgb(255, 255, 255);
  width: 100%;
  height: auto;
}
b {
  font-weight: bold;
}
.contain {
  padding: 0;
  width: 100%;
  height: auto;
  background-color: white;
  margin-bottom: 4vh;
}
.header {
  text-align: center;
  width: 100%;
  height: auto;
  background: linear-gradient(273deg, #2a81ea 0%, rgb(10, 49, 98) 100%);
  overflow: visible;
  color: white;
  font-weight: bold;
  font-family: "Inria Sans", sans-serif;
  font-size: 44px;
  padding-top: 40px;
}
#word {
  margin-top: 40px;
  white-space: pre;
  font-weight: bold;
  font-style: normal;
  font-family: "Inria Sans";
  color: #2a81ea;
  font-size: 30px;
  letter-spacing: 0px;
  line-height: 1.2;
  text-align: center;
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
.post {
  width: 80px;
  height: 36px;
  background-color: #2a81ea;
  overflow: visible;
  border: 1px solid #2a81ea;
  border-radius: 15px;
  font-weight: 700;
  font-style: normal;
  font-family: "Inria Sans", sans-serif;
  color: white;
}
.post:focus {
  background-color: #1b57a0;
}
.question_container {
  width: 90vw;
  margin: 50px 5vw 30px 5vw ;
  border: #2a81ea 4px double;
  padding: 15px;
  height: auto;
}
.tab_part {
  border-right: 3px solid #2a81ea !important;
  width: 15vw;
}
.tab_part:active {
  background-color: #2a81ea !important;
  color: white !important;
}
.tab_part:hover {
  background-color: #2a81ea !important;
  color: white !important;
}
.tab_display{
  width: 85vw;
  padding-left: 15px;
}
.question_box{
  width: 71.5vw;
  z-index: 0;

}
.question_each{
 /* border-bottom: 2px solid #2a81ea !important ; */
 margin: 2px 1px;
 width: 100%;
 border: #2a81ea 1px solid;
}
.question_each button{
  width: 100%;

}
.answer_part{
  font-family: "Inria Sans", sans-serif;
  color: #2a81ea;
}
.question_text{
  font-family: "Inria Sans";
  color: #2a81ea;
  font-weight: bold ;
}
</style>
