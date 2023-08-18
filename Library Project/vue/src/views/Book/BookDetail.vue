<template>
  <v-app id="inspire">
    <div class="book_detail_container">
      <div class="navigation">
        <Navigation />
      </div>

      <div class="book_detail_body">
        <div class="detail">
          <v-card max-width="100%" class="mx-auto">
            <v-row dense>
              <v-col cols="12">
                <v-card color="#006064" dark>
                  <div class="theBook">
                    <div>
                      <h1>
                        Title <span style="color: coral">{{ book.title }}</span>
                      </h1>

                      <v-card-subtitle>
                        <h2>
                          Author:
                          <span style="color: coral">{{
                            book.author.name
                          }}</span>
                        </h2>
                      </v-card-subtitle>
                      <v-card-subtitle>
                        <h5>
                          Category :
                          <span style="color: coral">{{
                            book.category.category
                          }}</span>
                        </h5>
                      </v-card-subtitle>
                      <v-card-subtitle>
                        <p>
                          Language:
                          <span style="color: coral">{{
                            book.language.language
                          }}</span>
                        </p>
                      </v-card-subtitle>

                      <v-card-actions class="btn">
                        <v-row justify="center">
                          <v-dialog
                            v-model="dialog"
                            persistent
                            max-width="900px"
                          >
                            <template v-slot:activator="{ on, attrs }">
                              <v-btn dark v-bind="attrs" v-on="on">
                                Borrow
                              </v-btn>
                            </template>
                            <v-card>
                              <v-card-title>
                                <span class="text-h5"
                                  >Input information to borrow this book</span
                                >
                              </v-card-title>
                              <v-card-text>
                                <v-container>
                                  <v-stepper v-model="e1">
                                    <v-stepper-header>
                                      <v-stepper-step
                                        :complete="e1 > 1"
                                        step="1"
                                      >
                                        Email Address
                                      </v-stepper-step>

                                      <v-divider></v-divider>

                                      <v-stepper-step
                                        :complete="e1 > 2"
                                        step="2"
                                      >
                                        User name
                                      </v-stepper-step>

                                      <v-divider></v-divider>

                                      <v-stepper-step step="3">
                                        Pickup date
                                      </v-stepper-step>
                                    </v-stepper-header>

                                    <v-stepper-content step="1">
                                      <v-card class="mb-12" height="200px">
                                        <v-form v-model="valid">
                                          <v-text-field
                                            v-model="email"
                                            :rules="emailRules"
                                            label="E-mail"
                                            required
                                          ></v-text-field>
                                        </v-form>
                                      </v-card>

                                      <v-btn color="primary" @click="e1 = 2">
                                        Continue
                                      </v-btn>

                                      <v-btn text> Cancel </v-btn>
                                    </v-stepper-content>

                                    <v-stepper-content step="2">
                                      <v-card class="mb-12" height="200px">
                                      </v-card>

                                      <v-btn color="primary" @click="e1 = 3">
                                        Continue
                                      </v-btn>

                                      <v-btn text> Cancel </v-btn>
                                    </v-stepper-content>

                                    <v-stepper-content step="3">
                                      <v-card class="mb-12" height="200px">
                                        <h1>We are not implement yet 😣</h1>
                                      </v-card>

                                      <v-btn color="primary" @click="e1 = 1">
                                        Continue
                                      </v-btn>

                                      <v-btn text> Cancel </v-btn>
                                    </v-stepper-content>
                                  </v-stepper>
                                </v-container>
                              </v-card-text>
                              <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn
                                  color="blue darken-1"
                                  text
                                  @click="dialog = false"
                                >
                                  Close
                                </v-btn>
                                <v-btn
                                  color="blue darken-1"
                                  text
                                  @click="dialog = false"
                                >
                                  Save
                                </v-btn>
                              </v-card-actions>
                            </v-card>
                          </v-dialog>
                        </v-row>

                        <button v-if="`${book.bookFile}`">
                          <a
                            :href="`${book.bookFile}`"
                            target="_blank"
                            rel="noopener noreferrer"
                            >Read and Download</a
                          >
                        </button>

                        <!-- <v-btn color="white"><a :href="`${book.bookFile}`" target="_blank" rel="noopener noreferrer"></a></v-btn> -->
                      </v-card-actions>
                    </div>
                    <div>
                      <img :src="`${book.bookThumbnail}`" alt="Book cover" />
                    </div>
                  </div>
                </v-card>
              </v-col>
            </v-row>
          </v-card>
        </div>

        <div class="more_detail">
          <v-card style="border: 1px solid black">
            <v-tabs v-model="tab" grow>
              <v-tab
                style="font-size: 1.2rem; background-color: #ff7c02"
                class="orange--text"
                v-for="item in moreDetail"
                :key="item"
              >
                <h5 style="color: white">{{ item }}</h5>
              </v-tab>
            </v-tabs>

            <v-tabs v-model="tab" style="border: 1px solid black">
              <v-tab-item>
                <v-card flat
                  ><v-card-text style="color: black">{{
                    book.description
                  }}</v-card-text></v-card
                >
              </v-tab-item>
              <v-tab-item>
                <v-card
                  ><v-card-text>
                    <div style="display: flex">
                      <v-img
                        contain
                        :lazy-src="`${book.author.image}`"
                        max-height="164"
                        max-width="254"
                        :src="`${book.author.image}`"
                      ></v-img>
                      <div>
                        <h3>{{ book.author.name }}</h3>
                        <p style="color: black">{{ book.author.bio }}</p>
                      </div>
                    </div>
                  </v-card-text></v-card
                >
              </v-tab-item>
              <v-tab-item>
                <v-card flat
                  ><v-card-text style="color: black">
                    <div
                      style="
                        width: 100%;
                        height: 400px;
                        overflow: scroll;
                        padding: 0 30px;
                      "
                    >
                      <v-list three-line>
                        <template v-for="(item, index) in items">
                          <v-subheader
                            v-if="item.header"
                            :key="item.header"
                            v-text="item.header"
                          ></v-subheader>

                          <v-divider
                            v-else-if="item.divider"
                            :key="index"
                            :inset="item.inset"
                          ></v-divider>

                          <v-list-item v-else :key="item.title">
                            <v-list-item-avatar>
                              <v-img :src="item.avatar"></v-img>
                            </v-list-item-avatar>

                            <v-list-item-content>
                              <v-list-item-title
                                v-html="item.title"
                              ></v-list-item-title>
                              <v-list-item-subtitle
                                v-html="item.subtitle"
                              ></v-list-item-subtitle>
                            </v-list-item-content>
                          </v-list-item>
                        </template>
                      </v-list>
                    </div>
                  </v-card-text>
                </v-card>
              </v-tab-item>
              <v-tab-item>
                <v-card flat
                  ><v-card-text style="color: black"
                    ><p>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Omnis, molestias ullam, laudantium tempora voluptatem
                      iusto dolore distinctio voluptatibus delectus minus maxime
                      recusandae nemo repellendus reprehenderit temporibus
                      eaque, debitis minima facere ea! Laboriosam delectus
                      beatae quae sed nisi cum labore aspernatur, suscipit, ut
                      accusamus animi nostrum deserunt fuga libero dolorum est!
                      Quaerat repudiandae tempore sunt eos consequuntur
                      temporibus laboriosam, explicabo dolores alias repellendus
                      iste natus esse ut ullam facere nobis nostrum dignissimos
                      eius aspernatur debitis suscipit molestiae. Perspiciatis
                      eum laboriosam enim nisi harum id rem sapiente ducimus,
                      reprehenderit quibusdam? Minus rerum commodi doloremque
                      pariatur? Illo deserunt molestias enim. Inventore
                      voluptatum repellat exercitationem saepe, error impedit
                      temporibus quas recusandae. Consequuntur accusamus nostrum
                      eius, eligendi beatae modi porro maiores quis debitis sunt
                      et iusto sint, dignissimos odio sit ipsa, pariatur
                      accusantium! Tenetur quod fugiat quam minus accusantium
                      necessitatibus distinctio unde inventore saepe iste quis
                      ratione assumenda quos illum optio, dolorum repellendus
                      commodi a voluptatum. Vero dolores iste illum? Voluptas,
                      mollitia? Mollitia nulla sequi dolorum ex consectetur
                      similique rerum doloremque. Ut architecto distinctio eum
                      debitis, in nisi cumque tenetur sapiente aliquid ratione
                      cupiditate libero quia quis vel officiis ipsa fuga quam
                      earum ea aut? Tempora esse amet odit, sint magni libero
                      voluptatem, hic dignissimos aliquam odio aut iure sapiente
                      reiciendis facilis harum? Nihil temporibus distinctio
                      repellendus numquam iure odio ex? Veritatis quidem commodi
                      ea saepe nemo id optio cumque magnam quos, sed atque,
                      exercitationem laboriosam aliquid. Consequuntur, et odio.
                      Corrupti tenetur ut animi minima aperiam placeat? Esse,
                      enim voluptates aut dolore itaque voluptatibus nobis
                      rerum? Temporibus fugit excepturi praesentium totam cumque
                      facere voluptatum neque! Quis dignissimos ab sint
                      voluptatem consectetur, quibusdam vel debitis deleniti eum
                      placeat nesciunt in aspernatur. Obcaecati harum eos a
                      temporibus praesentium odio voluptatibus fuga animi sed
                      quod ipsum amet voluptate, aperiam similique suscipit
                      neque. Praesentium, quibusdam? Ea culpa porro veritatis.
                    </p></v-card-text
                  ></v-card
                >
              </v-tab-item>
            </v-tabs>
          </v-card>
        </div>
        <h1 style="margin-top: 100px">Relate Books</h1>
      </div>
      <div class="all_boo" style="padding: 0px 50px; margin-bottom: 100px">
        <v-sheet class="mx-auto" elevation="8" max-width="100%">
          <v-slide-group
            v-model="model"
            class="pa-4"
            active-class="success"
            show-arrows
          >
            <v-slide-item
              v-for="book in allBook"
              :key="book._id"
              v-slot="{ active, toggle }"
            >
              <v-card
                style="margin-left: 40px"
                :color="active ? undefined : 'grey lighten-1'"
                class="ma-4"
                height="300"
                width="200"
              >
                <a
                  :href="`${book.bookFile}`"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <v-row class="fill-height" align="center" justify="center">
                    <v-scale-transition>
                      <img
                        style="padding: 0 20px"
                        height="320px"
                        width="250px"
                        :src="`${book.bookThumbnail}`"
                        alt="Book"
                      />
                    </v-scale-transition>
                  </v-row>
                </a>
              </v-card>
            </v-slide-item>
          </v-slide-group>
        </v-sheet>
      </div>

      <div class="footer">
        <Footer />
      </div>
    </div>
  </v-app>
</template>

<script>
import Navigation from "@/components/Navigation.vue";
import Footer from "@/components/Footer.vue";
import Book_API from "@/Service/Book/book";

export default {
  name: "BookDetail",
  components: {
    Navigation,
    Footer,
  },
  data() {
    return {
      valid: false,
      e1: 1,
      dialog: false,
      book: {},
      tab: null,
      allBook: [],
      bookWithCategory: [],
      moreDetail: ["Description", "Author", "Comments", "Preview"],
      email: "",
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+/.test(v) || "E-mail must be valid",
      ],
      items: [
        { header: "Comments" },
        {
          avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
          title: "Brunch this weekend?",
          subtitle: `<span class="text--primary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
        },
        { divider: true, inset: true },
        {
          avatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
          title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
          subtitle: `<span class="text--primary">to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.`,
        },
        { divider: true, inset: true },
        {
          avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
          title: "Oui oui",
          subtitle:
            '<span class="text--primary">Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?',
        },
        { divider: true, inset: true },
        {
          avatar: "https://cdn.vuetifyjs.com/images/lists/4.jpg",
          title: "Birthday gift",
          subtitle:
            '<span class="text--primary">Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?',
        },
        { divider: true, inset: true },
        {
          avatar: "https://cdn.vuetifyjs.com/images/lists/5.jpg",
          title: "Recipe to try",
          subtitle:
            '<span class="text--primary">Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.',
        },
      ],
    };
  },
  async created() {
    this.book = await Book_API.getBookById(this.$route.params.id);

    this.allBook = await Book_API.getAllBook();
  },
};
</script>

<style lang="scss" scoped>
.more_detail {
  margin-top: 30px;
  .basil {
    background-color: #fffbe6;
  }
  .basil--text {
    color: #ff7c02 !important;
  }
}
.book_detail_body {
  padding: 30px 60px;
  .detail {
    .theBook {
      display: flex;
      justify-content: space-between;
      padding: 2% 5% 2% 2%;
      .btn {
        margin-top: 80px;
        button {
          margin-right: 300px;
          color: black;
          padding: 10px 30px;
          background-color: #fff;
          border-radius: 50px;
          font-weight: bold;
          font-size: 1rem;
          a {
            text-decoration: none;
            color: black;
          }
        }
      }
      div {
        img {
          height: 400px;
          width: auto;
        }
      }
    }

    .img {
      width: 40%;
      img {
        height: 460px;
        width: auto;
      }
    }
    .about_book {
      width: 100%;
      div {
        margin-left: 20px;
        margin-top: 40px;
        h1 {
          color: white;
        }
        div {
          color: white;
          margin-top: 20px;
        }
      }
      .btn {
        width: 100%;

        margin-top: 100px;
        div {
          display: flex;

          div {
            button {
              margin-left: 40px;
              background-color: #fff;
              padding: 10px 40px;
              color: black;
              font-weight: bold;
              border-radius: 50px;
              font-size: 1.3rem;
              a {
                text-decoration: none;
                color: black;
              }
            }
          }
        }
      }
    }
  }
}
</style>
