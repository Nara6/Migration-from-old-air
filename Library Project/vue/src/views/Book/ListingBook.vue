<template>
  <v-app id="inspire">
    <div class="book_container">
      <div class="navigation">
        <Navigation />
      </div>
      <h2 style="margin: 10px 0 0 20%; color: orange">Book listing</h2>
      <div class="book">
        <div class="category" style="overflow: scroll; height: 87vh">
          <h2 style="text-align: center; color: orange">Search filter</h2>
          <h4 style="color: blue">Category</h4>
          <v-checkbox
            v-model="selected"
            label="John"
            value="Programing"
          ></v-checkbox>
          <v-checkbox
            id="filter"
            style="margin-top: -20px"
            label="Database"
            value="Database"
          ></v-checkbox>
          <v-checkbox
            id="filter"
            style="margin-top: -20px"
            label="History"
            value="History"
          ></v-checkbox>
          <v-checkbox
            id="filter"
            style="margin-top: -20px"
            label="Math"
            value="Math"
          ></v-checkbox>
          <v-checkbox
            id="filter"
            style="margin-top: -20px"
            label="Algorithm"
            value="Algorithm"
          ></v-checkbox>
          <v-checkbox
            id="filter"
            style="margin-top: -20px"
            label="Physic"
            value="Physic"
          ></v-checkbox>

          <h4 style="color: blue">Authors</h4>
          <v-checkbox
            label="William Shakespeare"
            value="William Shakespeare"
          ></v-checkbox>
          <v-checkbox
            style="margin-top: -20px"
            label="Agatha Christie"
            value="Agatha Christie"
          ></v-checkbox>
          <v-checkbox
            style="margin-top: -20px"
            label="Georges Simenon"
            value="Georges Simenon"
          ></v-checkbox>
          <v-checkbox
            style="margin-top: -20px"
            label="GoalKicker"
            value="GoalKicker"
          ></v-checkbox>
          <h4 style="color: blue">Language</h4>
          <v-checkbox label="English" value="English"></v-checkbox>
          <v-checkbox
            style="margin-top: -20px"
            label="Khmer"
            value="Khmer"
          ></v-checkbox>
          <v-checkbox
            style="margin-top: -20px"
            label="China"
            value="China"
          ></v-checkbox>
        </div>

        <div class="book_listing">
          <div v-for="book in books" :key="book._id">
            <v-card
              :loading="loading"
              class="mx-auto my-3"
              max-height="100%"
              max-width="374"
              style="border: 1px solid gray"
              no-gutters
            >
              <template slot="progress">
                <v-progress-linear
                  color="deep-purple"
                  height="10"
                  indeterminate
                ></v-progress-linear>
              </template>

              <img
                style="width: 100%; height: 300px; padding: 1px"
                :src="`${book.bookThumbnail}`"
                alt="book"
              />
              <v-card-title class="red--text">{{ book.title }}</v-card-title>

              <v-card-text>
                <v-row align="center" class="mx-0">
                  <v-rating
                    v-model="rating"
                    background-color="white"
                    color="yellow accent-4"
                    dense
                    half-increments
                    hover
                    size="18"
                  ></v-rating>
                  <span class="grey--text text--lighten-2 text-caption mr-2">
                    ({{ rating }})
                  </span>
                </v-row>

                <div>
                  <v-card-actions>
                    <v-btn
                      text
                      color="deep-purple accent-4"
                      :to="{ name: 'book_detail', params: { id: book._id } }"
                    >
                      See details
                    </v-btn>
                  </v-card-actions>
                </div>
              </v-card-text>
            </v-card>
          </div>
        </div>
      </div>

      <div class="some_book"></div>

      <div class="footer">
        <Footer />
      </div>
    </div>
  </v-app>
</template>

<script>
import Navigation from "../../components/Navigation.vue";
import Footer from "../../components/Footer";
import Book_API from "@/Service/Book/book";
export default {
  name: "ListingBook",
  components: {
    Navigation,
    Footer,
  },
  data() {
    return {
      books: [],
      selectedItem: 1,
      rating: 4.3,
      selected: ["John"],
      items: [
        { text: "Real-Time", icon: "mdi-clock" },
        { text: "Audience", icon: "mdi-account" },
        { text: "Conversions", icon: "mdi-flag" },
        { text: "Real-Time", icon: "mdi-clock" },
        { text: "Audience", icon: "mdi-account" },
        { text: "Conversions", icon: "mdi-flag" },
      ],
    };
  },

  async created() {
    this.books = await Book_API.getAllBook();
    console.log(this.books);
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.book_container {
  height: 100vh;
  width: 100%;
}
.book {
  display: flex;
  justify-content: space-between;
  padding: 20px 30px;
  .category {
    width: 20%;
    height: 50vh;
    #filter {
      margin-top: -20px;
    }
  }
  .book_listing {
    width: 100%;
    overflow: scroll;
    display: grid;
    outline: none;
    border: none;
    height: 700px;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    padding: 1px;

    div {
      width: 250px;
    }
  }
}
</style>
