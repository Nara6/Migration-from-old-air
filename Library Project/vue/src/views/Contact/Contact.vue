<template>
  <div class="contact_container">
    <div class="parent">
      <Navigation />
    </div>

    <div class="contact_body">
      <div class="map">
        <a href="https://goo.gl/maps/6CCTTdntPobARYUZ9"
          ><iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6662.0013507934655!2d104.89434916947654!3d11.569997581345863!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109513c272da0a3%3A0xcba97e5793b60662!2sInstitute%20of%20Technology%20of%20Cambodia%20(ITC)!5e0!3m2!1sen!2skh!4v1652845995498!5m2!1sen!2skh"
            width="600"
            height="450"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe
        ></a>
      </div>

      <div class="content">
        <div><h2>Get in touch</h2></div>
        <div style="padding-left: 150px"><h2>Contact us</h2></div>
      </div>

      <div class="feedback">
        <div class="user_feedback">
          <div>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Write your message here"
            ></textarea>
          </div>
          <div class="user_submit">
            <div><input type="text" name="" id="" placeholder="Enter your name" /></div>
            <div>
              <input type="email" name="" id="" placeholder="Enter your address" />
            </div>
          </div>
          <div>
            <button>Send</button>
          </div>
        </div>

        <div class="contact_icon">
          <ul>
            <li>
              <i class="bi bi-envelope"
                ><a href="mailto:brostoch0031@gmail.com">itc_library@dtc.edu.kh</a></i
              >
            </li>
            <li>
              <i class="bi bi-telephone"> <a href="tel:0972581537">0972581537</a></i>
            </li>
            <li>
              <i class="bi bi-geo-alt">
                <a href="https://goo.gl/maps/6CCTTdntPobARYUZ9" target="_blank"
                  >https://goo.gl/maps/6CCTTdntPobARYUZ9</a
                ></i
              >
            </li>
          </ul>
          <h2>Social Media</h2>
          <div class="social_icon">
            <div>
              <a href="https://www.facebook.com/itckh" target="_blank"
                ><i class="bi bi-facebook"></i
              ></a>
            </div>
            <div>
              <a
                href="https://www.youtube.com/c/itcedukhcambodia"
                target="_blank"
                style="color: red"
                ><i class="bi bi-youtube"></i
              ></a>
            </div>
            <div>
              <a href="#"><i class="bi bi-twitter" target="_blank"></i></a>
            </div>
            <div>
              <a href="https://t.me/itckh" target="_blank"
                ><i class="bi bi-telegram"></i
              ></a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Footer />
  </div>
</template>

<script>
import Navigation from "../../components/Navigation.vue";
import Footer from "../../components/Footer.vue";

export default {
  name: "Contact",
  components: {
    Navigation,
    Footer,
  },
};
</script>

<style lang="scss" scoped>
.feedback {
  display: flex;
  width: 100%;

  .user_feedback {
    width: 100%;
    div {
      button {
        padding: 10px 30px;
        color: white;
        background-color: #2d52fa;
        margin-top: 30px;
        font-weight: bold;
        border-radius: 5px;
      }
    }
    div {
      textarea {
        width: 100%;
        border: 1px solid black;
        padding: 20px 0px 0px 30px;
      }
    }
    .user_submit {
      display: flex;
      justify-content: space-between;
      margin-top: 20px;
      div {
        width: 49%;
        input {
          width: 100%;
          border: 1px solid black;
          padding: 5px 0px 5px 20px;
        }
      }
    }
  }

  .contact_icon {
    width: 100%;
    padding-left: 200px;
    left: 30px;

    .social_icon {
      display: flex;
      justify-content: left;
      div {
        margin-left: 20px;

        border-radius: 5px;
      }
      a {
        i {
          font-size: 30px;
        }
      }
    }
    ul {
      margin-bottom: 50px;
      width: 100%;
      li {
        list-style: none;

        i {
          font-size: 30px;

          a {
            margin-left: 20px;
            text-decoration: none;
            font-size: 1rem;
            text-transform: none;
          }
        }
      }
    }
    @media (max-width: 769px) {
      margin-left: -200px;
      width: 100%;
      font-size: 10px;
    }
  }
  @media (max-width: 769px) {
    display: flex;
    flex-direction: column;
    left: 30px;
  }
}
.content {
  display: flex;

  margin-top: 20px;
  div {
    width: 100%;
    height: auto;
  }
}
.contact_body {
  margin: 20px 0px;
  padding: 0px 40px;
}
.map {
  border: 1px solid black;
  a {
    iframe {
      width: 100%;
      height: 400px;
    }
  }
}
</style>
