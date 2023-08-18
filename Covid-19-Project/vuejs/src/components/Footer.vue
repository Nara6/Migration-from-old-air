<template>
  <div>
    <footer class="container-fluid bg-grey py-5">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <div class="row">
              <div class="col-md-6">
                <div class="logo-part">
                  <img  v-bind:src="require('../assets/logo_covid.png')" class="w-50 logo-footer" />
                  <p>7637 Laurel Dr. King Of Prussia, PA 19406</p>
                  <p>Use this tool as test data for an automated system or find your next pen</p>
                </div>
              </div>
              <div class="col-md-6 px-4">
                <h6>About Us</h6>
                <p>But horizontal lines can only be a full pixel high.</p>
                <a href="#" class="btn-footer">More Info</a>
                <br />
                <a href="/about" class="btn-footer">Contact Us</a>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="row">
              <div class="col-md-6 px-4">
                <h6>Help us</h6>
                <div class="row">
                  <div class="col-md-12">
                    <ul>
                      <li>
                        <a href="/" v-b-tooltip.hover title="Go to Home Page">Home</a>
                      </li>
                      <li>
                        <a href="/news" v-b-tooltip.hover title="Go to News Page">News</a>
                      </li>
                      <li>
                        <a href="/vaccine" v-b-tooltip.hover title="Go to Vaccines Page">Vaccines</a>
                      </li>
                      <li>
                        <a href="/faq" v-b-tooltip.hover title="Go to Vaccines Page">FAQ</a>
                      </li>
                      <li>
                        <a href="/generalinformation" v-b-tooltip.hover
              title="Go to General Information Page">General Information</a>
                      </li>
                      <li>
                        <a href="/about" v-b-tooltip.hover
              title="Go to See about us Page">About Us</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <h6>Newsletter</h6>
                <div class="social">
                  <a href="#">
                    <i class="fa fa-facebook" aria-hidden="true"></i>
                  </a>
                  <a href="#">
                    <i class="fa fa-instagram" aria-hidden="true"></i>
                  </a>
                </div>
                <form class="form-footer my-3">
                  <input type="text" placeholder="search here...." name="search" />
                  <input type="button" value="Go" />
                </form>
                <p>© 2022 All Rights Reserved. Design by ITC_Group1</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
<style scoped>
body {
  font-family:  "Inria Sans", sans-serif;
}
.bg-grey {
  background: rgb(241, 223, 190);
}
.logo-footer {
  margin-bottom: 40px;
}
footer {
  color:black ;
}
footer p,
a {
  font-size: 12px;
  font-family: "Roboto", sans-serif;
}
footer h6 {
  font-family: "Playfair Display", serif;
  margin-bottom: 40px;
  font-weight: bold;
  position: relative;
}
footer h6:after {
  position: absolute;
  content: "";
  background: black ;
  width: 12%;
  height: 1px;
  left: 0;
  bottom: -20px;
}
.btn-footer {
  color: black ;
  
  text-decoration: none;
  border: 1px solid;
  border-radius: 43px;
  font-size: 13px;
  padding: 7px 30px;
  line-height: 47px;
}
.btn-footer:hover {
  text-decoration: none;
}
.form-footer input[type="text"] {
  border: none;
  border-radius: 16px 0 0 16px;
  outline: none;
  padding-left: 10px;
}
::placeholder {
  font-size: 10px;
  padding-left: 10px;
  font-style: italic;
}
.form-footer input[type="button"] {
  border: none;
  background: #232323;
  margin-left: -5px;
  color: #fff;
  outline: none;
  border-radius: 0 16px 16px 0;
  padding: 2px 12px;
}
.social .fa {
  color: white;
  font-size: 22px;
  padding: 10px 15px;
  background: #3c3c3c;
}
footer ul li {
  list-style: none;
  display: block;
}
footer ul {
  padding-left: 0;
}
footer ul li a {
  text-decoration: none;
  color: black ;
  text-decoration: none;
}
a:hover {
  text-decoration: none;
  color: white;
  font-weight: bold;
}
.logo-part {
  border-right: 1px solid wheat;
  height: 100%;
}

</style>