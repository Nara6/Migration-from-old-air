<template>
  <div>
    <div id="top" class="nav_container">
      <Go_up class="top" />

      <div class="nav_left">
        <img src="../assets/background/library_logo.png" alt="library" />
      </div>
      <div class="nav_mid">
        <div class="search">
          <input type="text" placeholder="Search book by name or author" />
        </div>
        <div class="search_icon">
          <i class="bi bi-search"></i>
        </div>
      </div>

      <div class="nav_right">
        <div class="faq">
          <p>FAQ</p>
        </div>
        <div class="notification">
          <i class="bi bi-bell"></i>
        </div>
        <div class="signin_btn">
          <router-link id="signin" :to="{ name: 'register' }"
            >Sign Up</router-link
          >
        </div>
      </div>

      <div class="user_profile">
        <v-menu bottom min-width="200px" rounded offset-y>
          <template v-slot:activator="{ on }">
            <v-btn icon x-large v-on="on">
              <v-avatar color="brown" size="48">
                <img
                  src="https://scontent.fpnh20-1.fna.fbcdn.net/v/t39.30808-6/240213781_1478011032538377_6917299806390810921_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=174925&_nc_eui2=AeEV7fJEtfFjDu7-nXADAXWObwhzghhU83JvCHOCGFTzcpZkBFxny_ixBsIJ3F55tl-rx7BRJ3O8wUWMWnkid3Xi&_nc_ohc=Hbf18a2C36oAX8klEpu&_nc_ht=scontent.fpnh20-1.fna&oh=00_AT-D-wmpKdvT6HIJMhk98mlfwVf7vrtIAbjNuPoDu7w01g&oe=62C1FE15"
                  alt="Profile"
                />
              </v-avatar>
            </v-btn>
          </template>
          <v-card>
            <v-list-item-content class="justify-center">
              <div class="mx-auto text-center">
                <v-avatar color="brown">
                  <img
                    src="https://scontent.fpnh20-1.fna.fbcdn.net/v/t39.30808-6/240213781_1478011032538377_6917299806390810921_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=174925&_nc_eui2=AeEV7fJEtfFjDu7-nXADAXWObwhzghhU83JvCHOCGFTzcpZkBFxny_ixBsIJ3F55tl-rx7BRJ3O8wUWMWnkid3Xi&_nc_ohc=Hbf18a2C36oAX8klEpu&_nc_ht=scontent.fpnh20-1.fna&oh=00_AT-D-wmpKdvT6HIJMhk98mlfwVf7vrtIAbjNuPoDu7w01g&oe=62C1FE15"
                    alt="Profile"
                  />
                </v-avatar>
                <h3>Bros Toch</h3>
                <p class="text-caption mt-1">brostoch@gmail.com</p>
                <v-divider class="my-3"></v-divider>
                <v-btn depressed rounded text> Edit Account </v-btn>
                <v-divider class="my-3"></v-divider>
                <v-btn depressed rounded @click.prevent="logout">
                  Log out
                </v-btn>
              </div>
            </v-list-item-content>
          </v-card>
        </v-menu>
      </div>
    </div>

    <div class="sidebar">
      <div class="logo_lib">
        <img src="../assets/background/library_logo.png" alt="" />
      </div>
      <div class="sidebar_btn">
        <b-button
          variant="light"
          class="px-0 py-0"
          id="list_bar"
          v-b-toggle.sidebar-right
          ><i class="bi bi-list"></i
        ></b-button>

        <b-sidebar id="sidebar-right" title="ITC LIBRARY " right shadow>
          <v-list>
            <v-list-item-group v-model="model" mandatory color="indigo">
              <v-list-item
                v-for="(item, i) in items"
                :key="i"
                :to="item.link"
                link
              >
                <v-list-item-icon>
                  <v-icon v-text="item.icon"></v-icon>
                </v-list-item-icon>

                <v-list-item-content style="margin-left: 50px">
                  <v-list-item-title v-text="item.text"></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </b-sidebar>
      </div>
    </div>

    <div class="navbar_link">
      <div>
        <router-link class="navbar_links" :to="{ name: 'home' }"
          >Home</router-link
        >
      </div>
      <div>
        <router-link class="navbar_links" :to="{ name: 'book' }"
          >Book</router-link
        >
      </div>
      <div>
        <router-link class="navbar_links" :to="{ name: 'about' }"
          >About</router-link
        >
      </div>
      <div>
        <router-link class="navbar_links" :to="{ name: 'event' }"
          >Events</router-link
        >
      </div>
      <div>
        <router-link class="navbar_links" :to="{ name: 'contact' }"
          >Contact</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
import Go_up from "./Go_up.vue";
import axios from "axios";

const logot = "/api/auth/logout";
export default {
  name: "Navigation",
  components: {
    Go_up,
  },

  data: () => ({
    drawer: null,
    selectedItem: 1,

    user: {},

    items: [
      {
        icon: "mdi-home",
        text: "Home",
        link: "/",
      },
      {
        icon: "mdi-book",
        text: "Category",
        link: "/book",
      },
      {
        icon: "mdi-calendar-text",
        text: "Event",
        link: "/event",
      },
      {
        icon: "mdi-information",
        text: "About",
        link: "/about",
      },
      {
        icon: "mdi-account-box",
        text: "contact",
        link: "/contact",
      },
    ],
    model: 1,
  }),

  async created() {
    const user = await axios.post(userURL).then(function (res) {
      console.log(res);
    });
  },
  methods: {
    logout() {
      // this.$cookie.remove("access_token")
      this.cookie.remove("access_token");
      axios.post(logot);
      this.$router.push({ name: "login" });
    },
  },
};
</script>

<style lang="scss" scoped>
.sidebar {
  padding: 10px 50px;
  display: none;
  margin-bottom: 64px;
  .logo_lib {
    img {
      height: 40px;
    }
  }
  @media (max-width: 769px) {
    display: flex;
    justify-content: space-between;
    #list_bar {
      border: none;
      outline: none;
      .bi {
        font-size: 30px;
      }
    }
  }
}
.navbar_link {
  display: flex;
  height: 40px;
  align-items: center;

  justify-content: space-around;
  background-color: #4c74ad;

  div {
    .navbar_links {
      font-size: 1.5rem;
      color: white;
      text-decoration: none;
    }
  }
  @media (max-width: 768px) {
    display: none;
  }
}
.signin_btn {
  background-color: #ff7c02;
  border-radius: 50px;
  text-align: center;
  align-items: center;
  display: flex;
  justify-content: center;
  color: white;
  #signin {
    width: 120px;
    align-items: center;
    color: white;
    margin-top: -5px;
  }
}
#dropdown_links {
  text-decoration: none;
  color: blue;
  font-size: larger;
}

.profile {
  .bi {
    font-size: 40px;
  }
}

.nav_container {
  padding: 30px 0px;
  height: 60px;

  display: flex;
  align-items: center;
  justify-content: space-around;
  @media (max-width: 769px) {
    display: none;
  }
  .nav_left {
    img {
      height: 40px;
    }
  }
  .nav_mid {
    display: flex;
    border: 1px solid black;
    padding: 5px 20px;
    border-radius: 30px;
    .search {
      input {
        width: 250px;
        outline: none;
      }
    }
    .search_icon {
      cursor: pointer;
    }
  }
  .nav_right {
    display: flex;
    justify-content: space-between;
    div {
      margin-left: 60px;
      margin-top: 10px;
      cursor: pointer;
      font-size: 18px;
      align-items: center;
    }
    .signin_btn {
      button {
        padding: 5px 15px;
        background-color: #ff7c02;
        color: #fff;
        border-radius: 20px;
        margin-top: -10px;
      }
    }
  }
}
</style>
