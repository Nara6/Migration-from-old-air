<template>
  <div class="body">
    <nav class="navbar navbar-light bg-light">
      <div class="container-fluid">
      
        <img
          v-bind:src="require('../assets/logo_covid.png')"
          alt
          width="50"
          height="50"
          class="d-inline-block align-text-top"
          style="margin-left: 5vw;"
        />
      
        <!-- <h2 class="navbar-brand">Covid Info</h2> -->
        <ul class="menu">
          <li>
            <a id="home" href="/" v-b-tooltip.hover title="Go to Home Page">HOME</a>
          </li>
          <li>
            <a
              id="general"
              href="/generalinformation"
              v-b-tooltip.hover
              title="Go to General Information Page"
            >GENERAL INFO</a>
          </li>
          <li>
            <a id="news" href="/news" v-b-tooltip.hover title="Go to News Page">NEWS</a>
          </li>
          <li>
            <a id="vaccine" href="/vaccine" v-b-tooltip.hover title="Go to Vaccines Page">VACCINES</a>
          </li>
          <li>
            <a
              id="faq"
              v-b-tooltip.hover
              title="Go to Frequently Asked Question Page"
              href="/faq"
            >FAQ</a>
          </li>
        </ul>
        <div>
          <b-nav-form class="search">
            <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
          </b-nav-form>

          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template #button-content>
              <em>
                <b-icon icon="person-fill" style="margin-right:10px;"></b-icon>Username
              </em>
            </template>
            <b-dropdown-item href="/favorite"   style="width:100%">Favorite</b-dropdown-item>
            <b-dropdown-item @click="logout"  v-if="!login" style="width:100%">Log Out</b-dropdown-item>
            <b-dropdown-item  href="/login" v-else style="width:100%;margin-top:15px;">Log In</b-dropdown-item>

           
          </b-nav-item-dropdown>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
import $ from "jquery";
import VueCookies from "vue-cookies";

export default {
  data() {
    return {
      
    };
  },
  methods:{
    logout() {
      if(this.check_cookie()==true){
        VueCookies.remove("UserInfo");
        alert("Log Out Success");
        this.$router.reload();
      }else{
        alert("You are not log in yet.");
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
  created(){
      this.check_cookie();
  },
  computed: {
    login: function(){
      if(this.check_cookie()==true){
        return false;
      }else{
        return true;
      }
    }
  },
  mounted() {

    var pageURL = $(location).attr("href");

    var ActivePage = pageURL.split("/");
    if (ActivePage[3] == "") {
      $("#home").addClass("active");
    } else if (ActivePage[3] == "generalinformation") {
      $("#general").addClass("active");
    } else if (ActivePage[3] == "news") {
      $("#news").addClass("active");
    } else if (ActivePage[3] == "vaccine") {
      $("#vaccine").addClass("active");
    } else if (ActivePage[3] == "faq") {
      $("#faq").addClass("active");
    }
    
  }
};
</script>

<style scoped>
.body{
  margin-bottom: 80px ;
}
.navbar {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1;
}
.bg-light {
  box-shadow: 2px 5px 7px gray;
}
li {
  display: inline-flex;
  font-size: 15px;
}
.menu a {
  text-decoration: none;
}
a {
  color: #000;
  padding-top: 10px;
  margin-left: 30px;
  font-weight: bold;
  display: inline-block;
  position: relative;
}
a:after {
  content: "";
  position: absolute;
  width: 100%;
  transform: scaleX(0);
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: #2a81ea;
  transform-origin: bottom right;
  transition: transform 0.25s ease-out;
}
a:hover:after {
  transform: scaleX(1);
  transform-origin: bottom left;
}

.d-flex {
  margin-top: -10px;
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
  /* margin-right: -15px;
          margin-left: -15px; */
  justify-content: space-between;
}
.row > div {
  width: 25vw;
}
.footer {
  padding-top: 10vh;
  padding-bottom: 10vh;
  background-color: wheat;
  text-align: center;
}
.menu_footer {
  padding: 0;
  text-align: left;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.top_infomation {
  text-align: left;
  display: flex;
  flex-direction: column;
}

.footer_logo_container {
  width: 100%;
  text-align: left;
}
.search {
  margin-right: 15px;
}
.search button {
  background-color: #2a81ea;
}
.search button:hover {
  background-color: #1f579b;
}
.active {
  color: #2a81ea;
}
</style>