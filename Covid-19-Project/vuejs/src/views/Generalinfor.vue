<script>
import Faq from "../components/Faq.vue";
import Relatednews from "../components/Relatednews";
import axios from "axios";
export default {
  components: {
    Faq,
    Relatednews
  },
  data() {
    return {
      cases: null,
      deaths: null,
      recovered: null,
      tests:null,
      todayCases:null,
      todayDeaths:null,
    };
  },
  methods: {
    get_total_case() {
      axios
        .get(`https://disease.sh/v3/covid-19/all`)
        .then(response => (this.info = response))
        .then(() => {
          if (this.info) {
            if (this.info != null) {
              this.cases = this.info.data.cases;
              this.deaths = this.info.data.deaths;
              this.recovered = this.info.data.recovered;
              this.tests = this.info.data.tests;
              this.todayCases = this.info.data.todayCases;
              this.todayDeaths = this.info.data.todayDeaths;
             
              // alert("GET API SUCCESS");
              // console.log(this.info);
            } else {
              console.log("GET TOTAL CASE FALSE");
              //alert("GET TOTAL CASE FALSE");
            }
          }
        });
    }
  },
  mounted() {
    this.get_total_case();
  }
};
</script>
<template>
  <div id="app">
    <div class="introduct">
      <div class="information">
        <div class="content">
          <h1 class="heading">
            <span>CORONA</span>
            <span class="heading-sm">
              <span class="sub">VIRUS</span>
            </span>
          </h1>
          <p>
            The Coronavirus (COVID-19) was first reported in Wuhan, Hubei,
            China in December 2019, the outbreak was later recognized as a
            pandemic by the World Health Organization (WHO) on 11 March 2020.
          </p>
          <ul class="nk-banner-btns">
            <li>
              <a href="#about" class="btn scrollto">
                <span>About COVID-19</span>
              </a>
            </li>
          </ul>
          <div class="status" data-covid="world">
            <div class="row g-gs">
              <div class="col-sm-4 col-6">
                <div class="status-item">
                  <h6 class="title">TOTAL</h6>
                  <div class="count covid-stats-cases">{{cases}}</div>
                </div>
              </div>
              <div class="col-sm-4 col-6">
                <div class="status-item">
                  <h6 class="title">RECOVERED</h6>
                  <div class="count covid-stats-death">{{recovered}}</div>
                </div>
              </div>
              <div class="col-sm-4 col-6">
                <div class="status-item">
                  <h6 class="title">DEATHS</h6>
                  <div class="count covid-stats-recovered">{{deaths}}</div>
                </div>
              </div>
            </div>
            <div class="row g-gs">
              <div class="col-sm-4 col-6">
                <div class="status-item">
                  <h6 class="title">TESTS</h6>
                  <div class="count covid-stats-cases">{{tests}}</div>
                </div>
              </div>
              <div class="col-sm-4 col-6">
                <div class="status-item">
                  <h6 class="title">Today Cases</h6>
                  <div class="count covid-stats-death">{{todayCases}}</div>
                </div>
              </div>
              <div class="col-sm-4 col-6">
                <div class="status-item">
                  <h6 class="title">Today Deaths</h6>
                  <div class=" count covid-stats-recovered">{{todayDeaths}}</div>
                </div>
              </div>
            </div>
            <div class="status-note">
              * Last updated:
              <span class="covid-update-time">~</span>
            </div>
          </div>
          <!-- .status -->
        </div>
      </div>
      <div class="background_image">
        <img v-bind:src="require('../assets/general_information/images/gfx/header-a.png')" alt />
      </div>
    </div>

    <main class="nk-pages">
      <!-- About Covid -->
      <section class="section section-l bg-white section-about" id="about">
        <div class="container">
          <div class="section-content">
            <div class="row g-gs justify-content-between">
              <div class="col-lg-7">
                <div class="text-block">
                  <h5 class="subtitle">About the disease</h5>
                  <h2 class="title">
                    Coronavirus
                    <br class="d-sm-none" />(COVID-19)
                  </h2>
                  <p class="lead">
                    <strong>COVID-19 is a new illness that can affect your lungs and airways.</strong> It's caused by a virus called coronavirus. It was discovered in December 2019 in Wuhan, Hubei, China.
                  </p>
                  <p>Common signs of infection include respiratory symptoms, fever, cough, shortness of breath and breathing difficulties. In more severe cases, infection can cause pneumonia, severe acute respiratory syndrome, kidney failure and even death.</p>
                  <p>Standard recommendations to prevent infection spread include regular hand washing, covering mouth and nose when coughing and sneezing, thoroughly cooking meat and eggs. Avoid close contact with anyone showing symptoms of respiratory illness such as coughing and sneezing.</p>
                </div>
                <!-- .text-block -->
              </div>
              <!-- .col -->
              <div class="col-lg-5 col-xl-4">
                <div class="wgs wgs-card mt-sm-2 mt-md-4 mt-lg-0 ml-lg-4 ml-xl-0">
                  <div class="wgs-head">
                    <h4>What you need to know</h4>
                  </div>
                  <ul class="wgs-list">
                    <!-- <li><a class="scrollto" href="#spread">How coronavirus is spread</a></li> -->
                    <li>
                      <a class="scrollto" href="#symptoms">Symptoms of coronavirus</a>
                    </li>
                    <li>
                      <a class="scrollto" href="#prevention">How to protect yourself</a>
                    </li>
                    <li>
                      <a class="scrollto" href="#treatment">Treatment for coronavirus</a>
                    </li>
                    <li>
                      <a class="scrollto" href="#faq">FAQ</a>
                    </li>
                    <li>
                      <a class="scrollto" href="#faq">Questions & answers</a>
                    </li>
                  </ul>
                </div>
                <!-- .wgs -->
              </div>
              <!-- .col -->
            </div>
            <!-- .row -->
          </div>
          <!-- .section-content -->
        </div>
        <!-- .container -->
      </section>
      <!-- .section -->
      <!-- 11111111111111111111111111 -->
      <!-- About Covid -->
      <!-- Symtoms -->
      <section class="section section-l bg-white section-symptom" id="symptoms">
        <div class="container">
          <div class="section-head text-center wide-lg">
            <h5 class="subtitle">What are the symptoms of COVID-19?</h5>
            <h2 class="title">Symptoms of Coronavirus</h2>
            <p>The most common symptoms of COVID-19 are fever, tiredness, and dry cough. Some patients may have aches and pains, nasal congestion, runny nose, sore throat or diarrhea. These symptoms are usually mild and begin gradually. Also the symptoms may appear 2-14 days after exposure.</p>
          </div>
          <!-- .section-head -->
          <div class="section-content">
            <div class="row g-gs justify-content-center">
              <div class="col-sm-10 col-md-8 col-lg-4">
                <div class="box2">
                  <div class="box2-gfx">
                    <img
                      v-bind:src="require('../assets/general_information/images/gfx/symptom-a.png')"
                      alt
                    />
                  </div>
                  <div class="box2-content">
                    <h5 class="title">Fever</h5>
                    <p>
                      <strong>High Fever</strong> – this means you feel hot to touch on your chest or back (you do not need to measure your temperature). It is a common sign and also may appear in 2-10 days if you affected.
                    </p>
                  </div>
                </div>
                <!-- .box2 -->
              </div>
              <!-- .col -->
              <div class="col-sm-10 col-md-8 col-lg-4">
                <div class="box2">
                  <div class="box2-gfx">
                    <img
                      v-bind:src="require('../assets/general_information/images/gfx/symptom-b.png')"
                      alt
                    />
                  </div>
                  <div class="box2-content">
                    <h5 class="title">Cough</h5>
                    <p>
                      <strong>Continuous cough</strong> – this means coughing a lot for more than an hour, or 3 or more coughing episodes in 24 hours (if you usually have a cough, it may be worse than usual).
                    </p>
                  </div>
                </div>
                <!-- .box2 -->
              </div>
              <!-- .col -->
              <div class="col-sm-10 col-md-8 col-lg-4">
                <div class="box2">
                  <div class="box2-gfx">
                    <img
                      v-bind:src="require('../assets/general_information/images/gfx/symptom-c.png')"
                      alt
                    />
                  </div>
                  <div class="box2-content">
                    <h5 class="title">Shortness of breath</h5>
                    <p>
                      <strong>Difficulty breathing</strong> – Around 1 out of every 6 people who gets COVID-19 becomes seriously ill and develops difficulty breathing or shortness of breath.
                    </p>
                  </div>
                </div>
                <!-- .box2 -->
              </div>
              <!-- .col -->
            </div>
            <!-- .row -->
            <div class="section-cta">
              <div class="row g-gs justify-content-center">
                <div class="col-sm-10 col-md-8 col-lg-7 col-xl-8">
                  <div class="notes">
                    <em class="icon ni ni-alert-fill-c"></em>
                    <p>
                      <strong>Stay at home and call your doctor:</strong> If you think you have been exposed to COVID-19 and develop a fever and any symptoms, such as cough or difficulty breathing, call your healthcare provider as soon as possible for medical advice.
                    </p>
                  </div>
                </div>
                <!-- .col -->
                <div class="col-sm-10 col-md-8 col-lg-5 col-xl-4">
                  <div class="d-flex justify-content-lg-end ml-sm-5 ml-4 pl-3 ml-lg-0 pl-lg-0">
                    <a href="#faq" class="btn scrollto">
                      <em class="icon ni ni-question"></em>
                      <span>Have question? Find answer.</span>
                    </a>
                  </div>
                </div>
                <!-- .col -->
              </div>
              <!-- .row -->
            </div>
          </div>
          <!-- .section-content -->
        </div>
        <!-- .container -->
      </section>
      <!-- .section -->
      <!-- Prevention -->
      <section class="section section-l bg-light section-advice pb-0 ov-h" id="prevention">
        <div class="container">
          <div class="section-head text-center wide-lg">
            <h5 class="subtitle">How to Protect Yourself?</h5>
            <h2 class="title">
              Prevention
              <br class="d-sm-none" />&amp; advice
            </h2>
            <p>
              There is currently no vaccine to prevent coronavirus disease 2019 (COVID-19).
              <strong>The best way to prevent illness is to avoid being exposed to this virus.</strong> Stay aware of the latest information on the COVID-19 outbreak, available on the WHO website and through your national and local public health authority.
            </p>
          </div>
          <!-- .section-head -->
          <div class="section-content">
            <div class="row g-gs gy-sm-m">
              <div class="col-lg-3 col-sm-6">
                <div class="box3">
                  <div class="box3-gfx">
                    <img
                      v-bind:src="require('../assets/general_information/images/gfx/advice-a.png')"
                      alt
                    />
                  </div>
                  <div class="box3-content">
                    <h5 class="title">Wash Hand</h5>
                    <p>Regularly and thoroughly clean your hands with an alcohol-based hand rub or wash them with soap and water for at least 20 seconds.</p>
                  </div>
                </div>
                <!-- .box3 -->
              </div>
              <!-- .col -->
              <div class="col-lg-3 col-sm-6">
                <div class="box3">
                  <div class="box3-gfx">
                    <img
                      v-bind:src="require('../assets/general_information/images/gfx/advice-b.png')"
                      alt
                    />
                  </div>
                  <div class="box3-content">
                    <h5 class="title">Social Distance</h5>
                    <p>Maintain at least 1 metre distance between yourself & anyone who is coughing or sneezing. If you are too close, get chance to infected.</p>
                  </div>
                </div>
                <!-- .box3 -->
              </div>
              <!-- .col -->
              <div class="col-lg-3 col-sm-6">
                <div class="box3">
                  <div class="box3-gfx">
                    <img
                      v-bind:src="require('../assets/general_information/images/gfx/advice-c.png')"
                      alt
                    />
                  </div>
                  <div class="box3-content">
                    <h5 class="title">Face Touching</h5>
                    <p>Hands touch many surfaces and can pick up viruses. So, hands can transfer the virus to your eyes, nose or mouth and can make you sick.</p>
                  </div>
                </div>
                <!-- .box3 -->
              </div>
              <!-- .col -->
              <div class="col-lg-3 col-sm-6">
                <div class="box3">
                  <div class="box3-gfx">
                    <img
                      v-bind:src="require('../assets/general_information/images/gfx/advice-d.png')"
                      alt
                    />
                  </div>
                  <div class="box3-content">
                    <h5 class="title">Hygiene</h5>
                    <p>Maintain good respiratory hygiene as covering your mouth & nose with your bent elbow or tissue when cough or sneeze.</p>
                  </div>
                </div>
                <!-- .box3 -->
              </div>
              <!-- .col -->
            </div>
            <!-- .row -->

            <!-- .section-actions -->
          </div>
          <!-- .section-content -->
        </div>
        <!-- .container -->
      </section>
      <!-- .section -->
      <!-- 11111111111111111111111111 -->
      <!-- HandWash -->
      <section class="section section-l bg-light section-handwash" id="handwash">
        <div class="container mt-n4">
          <div class="section-subhead text-center">
            <h4 class="title">
              Follow steps to
              <br class="d-sm-none" />wash hands
            </h4>
            <a href="#faq" class="btn btn-sm btn-transparent scrollto">
              <span>Why do I need wash hand</span>
              <em class="icon ni ni-arrow-long-right"></em>
            </a>
          </div>
          <div class="section-content">
            <div class="row g-gs justify-content-center">
              <div class="col-6 col-mb-5 col-sm-4 col-lg-2">
                <div class="box4">
                  <div class="box4-gfx">
                    <img
                      v-bind:src="require('../assets/general_information/images/gfx/hand-a.png')"
                      alt
                    />
                  </div>
                  <div class="box4-content">
                    <h6 class="title">Soap on Hand</h6>
                  </div>
                </div>
                <!-- .box4 -->
              </div>
              <!-- .col -->
              <div class="col-6 col-mb-5 col-sm-4 col-lg-2">
                <div class="box4">
                  <div class="box4-gfx">
                    <img
                      v-bind:src="require('../assets/general_information/images/gfx/hand-b.png')"
                      alt
                    />
                  </div>
                  <div class="box4-content">
                    <h6 class="title">Palm to Palm</h6>
                  </div>
                </div>
                <!-- .box4 -->
              </div>
              <!-- .col -->
              <div class="col-6 col-mb-5 col-sm-4 col-lg-2">
                <div class="box4">
                  <div class="box4-gfx">
                    <img
                      v-bind:src="require('../assets/general_information/images/gfx/hand-c.png')"
                      alt
                    />
                  </div>
                  <div class="box4-content">
                    <h6 class="title">Between Fingers</h6>
                  </div>
                </div>
                <!-- .box4 -->
              </div>
              <!-- .col -->
              <div class="col-6 col-mb-5 col-sm-4 col-lg-2">
                <div class="box4">
                  <div class="box4-gfx">
                    <img
                      v-bind:src="require('../assets/general_information/images/gfx/hand-d.png')"
                      alt
                    />
                  </div>
                  <div class="box4-content">
                    <h6 class="title">Back to Hands</h6>
                  </div>
                </div>
                <!-- .box4 -->
              </div>
              <!-- .col -->
              <div class="col-6 col-mb-5 col-sm-4 col-lg-2">
                <div class="box4">
                  <div class="box4-gfx">
                    <img
                      v-bind:src="require('../assets/general_information/images/gfx/hand-e.png')"
                      alt
                    />
                  </div>
                  <div class="box4-content">
                    <h6 class="title">Clean with Water</h6>
                  </div>
                </div>
                <!-- .box4 -->
              </div>
              <!-- .col -->
              <div class="col-6 col-mb-5 col-sm-4 col-lg-2">
                <div class="box4">
                  <div class="box4-gfx">
                    <img
                      v-bind:src="require('../assets/general_information/images/gfx/hand-f.png')"
                      alt
                    />
                  </div>
                  <div class="box4-content">
                    <h6 class="title">Focus on Wrist</h6>
                  </div>
                </div>
                <!-- .box4 -->
              </div>
              <!-- .col -->
            </div>
            <!-- .row -->
          </div>
          <!-- .section-content -->
        </div>
        <!-- .container -->
      </section>
      <!-- .section -->
      <!-- 11111111111111111111111111 -->
      <!-- Treatment -->
      <section class="section section-l bg-accent-light tc-light section-treatment" id="treatment">
        <div class="overlay shape shape-b"></div>
        <!-- Overlay Shape -->
        <div class="container">
          <div class="section-content">
            <div class="row g-gs gy-sm-m justify-content-between align-items-center">
              <div class="col-lg-7 col-xl-6">
                <div class="text-block">
                  <h5 class="subtitle">Be carefull & Stay Safe</h5>
                  <h2 class="title">Treatment for coronavirus</h2>
                  <p>
                    <strong>To date, there is no vaccine and no specific antiviral medicine to prevent or treat COVID-2019.</strong> However, those affected should receive care to relieve symptoms. People with serious illness should be hospitalized. Most patients recover thanks to supportive care.
                  </p>
                  <p>Antibiotics do not help, as they do not work against viruses. Treatment aims to relieve the symptoms while your body fights the illness. You'll need to stay in isolation, away from other people, until you have recovered.</p>
                </div>
                <!-- .text-block -->
              </div>
              <!-- .col -->
              <div class="col-lg-5">
                <div class="box5 bg-accent-dark">
                  <h6 class="title">Self Care</h6>
                  <p>If you have mild symptoms, stay at home until you’ve recovered. You can relieve your symptoms if you:</p>
                  <ul class="list-arrow">
                    <li>Rest and sleep</li>
                    <li>Keep warm</li>
                    <li>Drink plenty of liquids</li>
                    <li>Use a room humidifier or take a hot shower to help ease a sore throat and cough</li>
                  </ul>
                  <h6 class="title">Medical Treatments</h6>
                  <p>If you develop a fever, cough, and have difficulty breathing, promptly seek medical care. Call in advance and tell your health provider of any recent travel or recent contact with travelers.</p>
                </div>
                <!-- .box5 -->
              </div>
              <!-- .col -->
            </div>
            <!-- .row -->
          </div>
          <!-- .section-content -->
        </div>
        <!-- .container -->
      </section>
      <!-- .section -->
      <!-- FAQ -->
      <section class="section section-l bg-white section-faq" id="faq">
        <div class="container">
          <div class="section-head text-center">
            <h5 class="subtitle">Frequently Asked Questions</h5>
            <h2 class="title">
              Common Question
              <br class="d-sm-none" />&amp; Answer
            </h2>
          </div>
          <Faq></Faq>
        </div>
      </section>
      <!-- .section -->
      <!-- News -->
      <section class="section section-l bg-light section-blog" id="news">
        <!-- <div class="container">
          <div class="section-head text-center wide-lg">
            <h5 class="subtitle">Recent From Blog</h5>
            <h2 class="title">Latest Update</h2>
          </div>
          <News />
        </div> -->

        <h5 class="subtitle">_NEWS_</h5>
            <h2 class="title">
              DIALY NEWS
            </h2>
        <Relatednews/>
      </section>
      <!-- .section -->
    </main>
    <!-- .nk-pages -->
  </div>
</template>

<style scoped src='../assets/general_information/css/styles.css'></style>
<style scoped src='../assets/general_information/css/styles-azure.css'></style>
<style scoped>
.box3-content {
  margin: 10px;
  padding: 10px;
}
.overlay {
  z-index: -1;
}
.introduct {
  width: 100%;
  display: flex;
}
.introduct > div {
  width: 50%;
}
.introduct .information {
  /* padding: 50px; */
  width: 50%;
  text-align: center;
  justify-content: right;
  margin: auto;
}

.introduct .content {
  padding-left: 12vw;
}
.introduct .content .status {
  margin-top: 2vh;
}
.introduct .background_image {
  padding-right: 100px;
}
.nk-banner-image {
  position: absolute;
  top: 0px;
  width: 500px;
  margin-left: 15px;
}
.blog-text a button {
  background-color: #2a81ea;
  border-radius: 50px;
  border: none;
  color: #fff;
  width: 10vw;
  height: 5vh;
}
.blog-text a button:hover {
  background-color: #1153d6;
}
.blog-item {
  box-shadow: 5px 5px 4px gray;
  border-radius: 4px;
  background: #fff;
  height: 100%;
  border: #2a81ea solid 1px;
}
.status-item {
  background-color: gainsboro;
}
.box2-content {
  background-color: #2a81ea;
  border-radius: 10px;
  height: 30vh;
}
.box2-content .title,
.box2-content p {
  color: #fff;
  font-size: 16px;
}
.heading,
.title {
  color: #2a81ea;
}
h5 .subtitle {
  color: gray;
}
.bg-light {
  box-shadow: 2px 5px 7px gray;
}

nav a {
  text-decoration: none;
  color: #000;
  padding-top: 10px;
  margin-left: 30px;
  font-weight: bold;
  display: inline-block;
  position: relative;
}
.container-fluid ul {
  display: block;
}
.menu {
  display: inline-flex;
  color: #000;
  font-size: 15px;
}
.d-flex {
  margin-top: -10px;
}
.btn-outline-success:hover {
  background-color: #0087ca;
}
.container {
  width: 100%;
  padding-right: 10px;
  padding-left: 10px;
  margin-right: auto;
  margin-left: auto;
}
.row {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  justify-content: space-between;
}
.row > div {
  width: 25vw;
}
.top_infomation {
  text-align: left;
  display: flex;
  flex-direction: column;
  width: 25vw;
}
.detail {
  border-radius: 5px;
  border: gray 0.5;
  box-shadow: #0087ca;
}
.detail:hover {
  color: #0087ca;
}
.count{
  font-weight: bold;
  font-size: 20px;
  padding-bottom: 15px;
}
</style>
