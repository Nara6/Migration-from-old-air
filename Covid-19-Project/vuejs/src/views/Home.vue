<template>
  <div>
    <div class="main">
      <div class="part1">
        <div class="col1">
          <img v-bind:src="require('../assets/dash_img/dash.jpg')" />
        </div>
        <div class="col2">
          <div class="text">
            <h6 class="sub-title">__ COVID-19 __</h6>
            <h1 class="title">Welcome to COVID-19 INFORMATION</h1>
            <p>
              We created this website to make it easier for people to find information related to Covid-19.
            </p>
            
          </div>
        </div>
      </div>
      <div class="part2">
        <div class="title_part">
          <h6>__ TOTAL CASE __</h6>
          <h4>COVID-19 OUT BREAK</h4>
        </div>
        <div class="body">
          <div class="card_spread confirm">
            <h2>{{cases}}</h2>
            <span>CONFIRMED CASE</span>
          </div>
          <div class="card_spread death">
            <h2>{{deaths}}</h2>
            <span>DEATHS</span>
          </div>
          <div class="card_spread recover">
            <h2>{{recovered}}</h2>
            <span>RECOVERED</span>
          </div>
        </div>
      </div>

      <div class="part3">
        <div class="title_part">
          <h6>__MAP__</h6>
          <h4>MAP VITUALIZATION IN CAMBODIA</h4>
        </div>
        <div class="map">
          <MapComponent/>
        </div>
      </div>

      <div class="part4">
        <div class="title_part">
          <h6>__CHART__</h6>
          <h4>CHART VITUALIZATION IN CAMBODIA</h4>
        </div>
        <div class="body">
          <canvas id="myChart1" style="max-width:40%;max-height:30vh"></canvas>
          <canvas id="myChart2" style="max-width:40%;max-height:30vh"></canvas>
        </div>
      </div>

      <div class="part5">
        <div class="title_part">
          <h6>__ PREVENTION__</h6>
          <h4>STAY SAFE FROM THE COVID-19</h4>
        </div>
        <div class="body">
          <div class="cardpre">
            <img v-bind:src="require('../assets/dash_img/image1.png')" />
            <p class="titlecard">2M DISTANCE</p>
          </div>
          <div class="cardpre">
            <img v-bind:src="require('../assets/dash_img/image2.png')" />
            <p class="titlecard">AVOID CONTACT</p>
          </div>
          <div class="cardpre">
            <img v-bind:src="require('../assets/dash_img/image3.png')" />
            <p class="titlecard">AVOID FACT TO FACT</p>
          </div>
          <div class="cardpre">
            <img v-bind:src="require('../assets/dash_img/image4.png')" />
            <p class="titlecard">WEAR FACE MASK</p>
          </div>
          <div class="cardpre">
            <img v-bind:src="require('../assets/dash_img/image5.png')" />
            <p class="titlecard">WASH HANDS</p>
          </div>
          <div class="cardpre">
            <img v-bind:src="require('../assets/dash_img/image6.png')" />
            <p class="titlecard">GET VACCINE</p>
          </div>
        </div>
      </div>

      <div class="part6">
        <div class="body">
          <div class="img1">
            <img v-bind:src="require('../assets/dash_img/image2.1.png')" />
          </div>
          <div class="content">
            <h4>ARE YOU AFFECTED BY COVID-19 ?</h4>
            <div class="row2">
              <button type="button" class="btn btn-light appoint">APPOINTMENT FOR TEST</button>
              <h4>Or CONTACT</h4>
              <button type="button" class="btn btn-light call">125</button>
            </div>
          </div>
          <div class="img2">
            <img v-bind:src="require('../assets/dash_img/image2.2.png')" alt />
          </div>
        </div>
      </div>

      <section class="section section-l section-spread" id="spread">
        <div class="contain">
          <div id="word" style="margin-bottom:5vh;">
            <br />_NEWS_
            <br />DIALY NEWS
          </div>
          <Relatednews />
        </div>
      </section>
    </div>
  </div>
</template>
<script>
import Chart from "chart.js/auto";
import image1 from "../assets/dash_img/dash.jpg";
import MapComponent from '../components/MapComponent.vue';
import axios from 'axios';
import Relatednews from "../components/Relatednews";

export default {
  components: {
    Relatednews,
    MapComponent
  },
  data() {
    return {
      background: image1,
      cases:null,
      deaths:null,
      recovered:null,
      xValues1: [
        "",
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "July",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
      ],
      yValues1: [70, 80, 80, 90, 90, 96, 100, 110, 140, 150, 56, 15, 160],
      xValues2: ["Confirm Case", "Deaths", "Recovered"],
      yValues2: [1051428, 512335, 658222],
      barColors2: ["#f2b809", "#fa1100", "#3e9915"]
    };
  },
  methods: {
    create_chart() {
      new Chart("myChart1", {
        type: "line",
        data: {
          labels: this.xValues1,
          datasets: [
            {
              label: 'ចំនួន(នាក់)',
              fill: false,
              lineTension: 0,
              backgroundColor: "rgba(0,0,255,1.0)",
              borderColor: "rgba(0,0,255,0.1)",
              data: this.yValues1
            }
          ]
        },
        options: {
          legend: { display: false },
          scales: {
            yAxes: [{ ticks: { min: -1, max: 500 } }]
          },
          title: {
            display: true,
            text: "Covid Case In Cambodia 2022"
          }
        }
      });
      new Chart("myChart2", {
        type: "pie",
        data: {
          labels: this.xValues2,
          datasets: [
            {
              
              backgroundColor: this.barColors2,
              data: this.yValues2
            }
          ]
        },
        options: {
          title: {
            display: true,
            text: "Covid Case In Cambodia"
          }
        }
      });
    },
    get_total_case(){
      axios.get(`https://disease.sh/v3/covid-19/all`)
      .then(response => (
        this.info = response
      ))
      .then(()=>{
        if(this.info){
          if(this.info!=null){
            this.cases = this.info.data.cases;
            this.deaths = this.info.data.deaths;
            this.recovered = this.info.data.recovered;
            
            
            this.yValues2 = [this.cases,this.deaths,this.recovered];
            this.create_chart();
            // alert("GET API SUCCESS");
            // console.log(this.info);
          }else{
            console.log("GET TOTAL CASE FALSE");
            //alert("GET TOTAL CASE FALSE");
          }
        }
      })
    }
  },
  mounted() {
    this.get_total_case();
  }
};
</script>

<style scoped>
body {
  margin: 0;
  padding: 0;
  font-family:  'Inria Sans', sans-serif;
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
.sub-title, .title {
  color: #2a81ea;
  margin-bottom: 0.5rem;
  letter-spacing: 0.02em;
  font-family:  'Inria Sans', sans-serif;
  font-weight: bold;
}
br {
  display: block;
  margin-bottom: 2px;
  font-size: 2px;
  line-height: 2px;
}

.title_part {
  text-align: center;
  color: #2a81ea;
}

.title_part h4 {
  
  font-weight: bold;
  margin-top: 0px;
  line-height: 1px;
  font-size: 25px;
}

.title_part h6 {
  
  font-weight: bold;
  margin-top: 0px;
  line-height: 40px;
  font-size: 15px;
}

p {
  padding: 2vw;
  font-family:  'Inria Sans', sans-serif;
}

.main {
  width: 100%;
}

.part1 {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  /* background-color: aqua; */
}

.part1 .col1 {
  width: 59%;
}

.part1 .col1 img {
  width: 90%;
  margin-left: 4vw;
}

.part1 .col2 {
  width: 40%;
  margin-left: -55px ;
}

.part1 .col2 .text {
  margin-top: 25vh;
}

.part2 {
  width: 100%;
  height: auto;
  /* border: 1px solid; */
  margin-top: 5vh;
}

.part2 .body {
  margin-top: 25px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}

.part2 .card_spread {
  width: 25%;
  height: 17vh;
  /* border: 1px solid; */
  margin: 25px;
  justify-content: center;
  text-align: center;
  padding-top: 25px;
  box-shadow: 10px 10px 2px 0px rgba(0, 0, 0, 0.2);
  border-radius: 30px;
  color: white;
}
.card_spread:hover{
   box-shadow: 5px 0px 19px 8px rgba(42, 129, 234, 0.4);
}
.part2 .confirm {
  background: linear-gradient(180deg, #f8df7c 0%, rgb(194, 157, 10) 100%);
}

.part2 .death {
  background: linear-gradient(231deg, #e86e6e 0%, rgb(149, 24, 24) 100%);
}

.part2 .recover {
  background: linear-gradient(249deg, #93eb96 0%, rgb(33, 181, 38) 100%);
}

.part3 {
  width: 100%;
  height: auto;
  /* border: 1px solid; */
  margin-top: 5vh;
}

.part3 .map {
  margin-top: 50px;
  width: 100%;
  justify-content: center;
  text-align: center;
}

.part4 {
  width: 100%;
  height: auto;
  /* border: 1px solid; */
  margin-top: 5vh;
}

.part4 .body {
  margin-top: 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
}

.part5 {
  width: 100%;
  height: auto;
  /* border: 1px solid; */
  margin-top: 5vh;
  text-align: center;
}

.part5 .body {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 50px;
}

.part5 .body .cardpre {
  width: 20%;
  height: auto;
  border: 1px solid  #2a81ea;
  box-shadow: 6px 7px 12px 6px rgba(0, 108, 250, 0.24);
  background-color: #ffffff;
  border-radius: 15px;
  margin: 3%;
}
.part5 .body .cardpre:hover{
  box-shadow: 5px 7px 12px 6px rgba(0, 108, 250, 0.5);
  
}
.body .titlecard {
  white-space: pre;
  font-weight: 700;
  font-family:  'Inria Sans', sans-serif;
  color: #2a81ea;
  font-size: 18px;
  letter-spacing: 0px;
  line-height: 1.2;
}

.body .cardpre img {
  margin-top: 5vh;
  width: 60%;
}

.part6 {
  width: 100%;
  margin-top: 5vh;
}

.part6 .body {
  width: 80%;
  height: auto;
  background-color: #2a81ea;
  border-radius: 25px;
  display: flex;
  flex-direction: row;
  margin-left: 10%;
}
.part6 .body img {
  width: 120px;
}
.part6 .content {
  width: 80%;
  color: #ffffff;
  margin: 2vh 0px 0px 0vw;
  text-align: center;
  justify-content: center;
}

.part6 .content h4 {
  font-size: 25px;
  line-height: 48px;
  margin: 0px 0.5vw 0px 0.5vw;
  text-align: center;
  justify-content: center;
}

.part6 .content .row2 {
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: row;
}
.part6 .appoint {
  font-weight: bold;
  font-size: 12px;
}
.part6 .call {
  font-weight: bold;
  font-size: 12px;
}
</style>