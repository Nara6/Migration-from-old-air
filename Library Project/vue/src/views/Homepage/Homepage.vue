<template>
  <div class="home_container">
    <div class="navigation">
      <Navigation />
    </div>

    <div class="home_carousel">
      <b-carousel
        id="carousel-1"
        v-model="slide"
        :interval="4000"
        controls
        indicators
        background="#ababab"
        img-width="1024"
        img-height="480"
        style="text-shadow: 1px 1px 2px #333"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
      >
        <!-- Text slides with image -->
        <b-carousel-slide
          caption="ITC library"
          text="In the library have a lot of book for the students read and research"
          img-src="https://www.abovethetreeline.com/wp-content/uploads/Untitled-design-1.png"
        ></b-carousel-slide>

        <!-- Slides with custom text -->
        <b-carousel-slide
          img-src="https://3.files.edl.io/85ba/21/08/12/141720-28ce0105-92a6-4467-95f6-35ba96bc2992.png"
        >
          <h1>ITC Library</h1>
          <p>Book are the most important in our life read book together</p>
        </b-carousel-slide>

        <!-- Slides with image only -->
        <b-carousel-slide
          img-src="https://www.wiso.uni-hamburg.de/7129665/a-z-2-mentz-1200x300-655277c26af898797fb9fee71130b74126d3ac32.jpg"
        ></b-carousel-slide>

        <!-- Slides with img slot -->
        <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
        <b-carousel-slide>
          <template #img>
            <img
              class="d-block img-fluid w-100"
              width="1024"
              height="480"
              src="https://library.sd.gov/SDSL/NEWS/2020/GoldBanner-2020Award.jpg"
              alt="image slot"
            />
          </template>
        </b-carousel-slide>

        <!-- Slide with blank fluid image to maintain slide aspect ratio -->
      </b-carousel>
    </div>

    <div class="home_body">
      <h1 style="color: #ff7c02">Library</h1>
      <div class="home">
        <div>
          <img src="../../assets/body-img/img1.jpg" alt="" />
        </div>

        <div>
          <p>
            A library is an essential tool for learning. It’s mainly one of the
            best locations to visit for learning and progress. Whether you’re a
            college student, researcher, or professor, dropping by at a library
            will never waste time. Typically, libraries have millions of items
            to share. But libraries don’t need to be in physical form, and
            modern electronic libraries are prevalent as they embrace digital
            advancements. Electronic or digital libraries are more accessible
            and convenient than physical libraries. Its vision is to provide
            collections, programs, and leadership to promote the development of
            literate and informed citizens. It is also committed to sustaining
            the value of public library services with equal access to cultural,
            intellectual, recreational, and information sources. Hence, such
            libraries can store thousands of resources and do their services
            24/7.The website can allow people to come and freely to find their
            needed books in our library. This website allows user to search the
            books that they want to read, and also make a request to borrow the
            book by just click sign up or sign in with this system. With this
            plateform all service is free, no payment.
          </p>
          <div class="btn">
            <button id="checkout_btn1">
              <router-link :to="{ name: 'book' }" style="color: white"
                >Check out</router-link
              >
            </button>
          </div>
        </div>
      </div>

      <h1 style="margin-top: 40px; color: #ff7c02">Recently Books</h1>
      <div class="book">
        <v-sheet class="mx-auto" elevation="8" max-width="100%">
          <v-slide-group
            v-model="model"
            class="pa-4"
            active-class="success"
            show-arrows
          >
            <v-slide-item
              v-for="book in books"
              :key="book._id"
              v-slot="{ active, toggle }"
            >
              <v-card
                style="margin-left: 40px"
                :color="active ? undefined : 'grey lighten-1'"
                class="ma-4"
                height="250"
                width="150"
              >
                <v-row class="fill-height" align="center" justify="center">
                  <v-scale-transition>
                    <!-- :to="{name: 'book_detail', params:{id: book._id}}" -->

                    <v-img :src="`${book.bookThumbnail}`"></v-img>
                    <!-- <v-img src="https://edit.org/images/cat/book-covers-big-2019101610.jpg"></v-img> -->
                  </v-scale-transition>
                </v-row>
              </v-card>
            </v-slide-item>
          </v-slide-group>
        </v-sheet>
      </div>
      <h1 style="margin-top: 40px; color: #ff7c02">Events</h1>
      <div class="home" id="home2">
        <div>
          <p>
            With our Library users not only can access with the book but we also
            have many events for you to join to gain more benefits and
            acknowledgement. Every year, our library have many events that is
            very useful for everyone. Some events relate to job opportunity,
            book affair, show room, and many more. We also have In-person
            events, virtual tours, webcasts, talks, DIY experiments, quizzes,
            citizen science and competitions. Discover online and real world
            activities to join in. Join us to get all information about library
            and events that will happens related with our library. We also have
            the most important events that helds every year is book fair. It was
            an international book fair. So you can have the good fortune to have
            a glimpse of the masterpieces produced in foreign countries as well.
            All the leading publishers of India had also set up their stalls
            there latest publications were on display. Artistic title covers and
            fine computerized printing made the books look more attractive and
            alluring. The firms also offered a discount on a cash sale. So don't
            for to join us !!!
          </p>
          <div class="btn">
            <button id="checkout_btn2">
              <router-link :to="{ name: 'event' }" style="color: white"
                >Check out</router-link
              >
            </button>
          </div>
        </div>

        <div>
          <img src="../../assets/body-img/img4.jpg" alt="" />
        </div>
      </div>
    </div>
    <div class="footer">
      <Footer />
    </div>
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";
import Navigation from "../../components/Navigation.vue";
import Book_API from "@/Service/Book/book";
export default {
  name: "Homepage",
  components: {
    Footer,
    Navigation,
  },
  data: () => ({
    model: null,
    books: [],
    users: {},
  }),

  async created() {
    this.books = await Book_API.getAllBook();

    console.log(this.$route.params);
    // this.users = this.$route.params.data.data
    // console.log(this.$route.params.data);
  },
};
</script>

<style lang="scss" scoped>
.home_carousel {
  padding: 0px 30px;
  margin-top: 30px;
  @media (max-width: 426px) {
    display: none;
  }
}
.home_top {
  margin-bottom: 20px;
}
.home_img {
  background-image: url("../../assets/body-img/img2.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  align-items: center;
  display: flex;

  div {
    height: 300px;
    width: 100%;
    p {
      text-align: center;
      color: #fff;
      font-size: 24px;
    }
  }
}
.home_body {
  margin-top: 50px;
  h1 {
    text-align: center;
    font-weight: bold;
  }
  @media (max-width: 769px) {
    #home2 {
      flex-direction: column-reverse;
    }
  }
}
.home {
  padding: 20px 50px;
  display: flex;
  justify-content: space-around;

  @media (max-width: 769px) {
    display: flexbox;
    flex-direction: column;
    padding: 0px;
    p {
      text-align: center;
    }
  }
  div {
    width: 100%;
    padding: 0px 20px;
    position: relative;

    .btn {
      #checkout_btn1 {
        padding: 10px 25px;
        background-color: #ff7c02;
        border-radius: 20px;
        color: #fff;
        font-weight: bold;
        font-size: 18px;
        outline: none;
        margin-top: 5%;
      }
      #checkout_btn2 {
        padding: 10px 25px;
        background-color: #ff7c02;
        border-radius: 20px;
        color: #fff;
        font-weight: bold;
        font-size: 18px;
        outline: none;
        margin-top: 5%;
      }
      @media (max-width: 768px) {
        #checkout_btn1 {
        }
      }
    }
    p {
      text-align: center;
      margin-top: 20px;
      align-items: center;
    }
    img {
      width: 100%;
      height: auto;
    }
  }
}
.home_container {
  width: 100%;
  height: 100vh;
  position: relative;
}
</style>
