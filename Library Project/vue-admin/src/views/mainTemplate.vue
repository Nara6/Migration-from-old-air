<template>
  <v-app id="inspire" style="background-color: #f5f5f5">
    <v-navigation-drawer :mini-variant.sync="mini" permanent app>
      <v-list>
        <v-list-item class="px-0">
          <div class="library_logo px-0" v-if="!mini">
            <v-img id="logo" src="../assets/ITC_library_logo/Logo1.png"></v-img>
          </div>
          <div class="library_logo px-0" v-else>
            <v-img
              id="logoSmall"
              src="../assets/ITC_library_logo/logo.png"
            ></v-img>
          </div>
          <v-app-bar-nav-icon
            @click="mini = !mini"
            class="drawer"
          ></v-app-bar-nav-icon>
        </v-list-item>
      </v-list>
      <!-- <v-divider> </v-divider> -->

      <v-list>
        <v-subheader class="subHeader" v-if="!mini">Menu</v-subheader>
        <v-subheader style="margin-left: -7px" v-else>Menu</v-subheader>
        <div
          v-for="navigator in navigation"
          :key="navigator.title"
          class="list"
        >
          <div v-if="navigator.group">
            <v-list-group
              v-for="item in navigator.items"
              :key="item.title"
              v-model="item.active"
              :prepend-icon="item.action"
              no-action
            >
              <template v-slot:activator>
                <v-list-item-content>
                  <v-list-item-title v-text="item.title"></v-list-item-title>
                </v-list-item-content>
              </template>
              <v-list-item
                v-for="child in item.items"
                :key="child.title"
                :to="child.link"
                link
              >
                <v-list-item-icon>
                  <v-icon v-text="child.icons"></v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-title v-text="child.title"></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-group>
          </div>
          <div v-else>
            <v-list-item
              v-for="item in navigator.items"
              :key="item.title"
              :to="item.link"
              color="primary"
              link
            >
              <v-list-item-icon>
                <v-icon v-text="item.icons"></v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title v-text="item.title"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </div>
        </div>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app>
      <div class="navbar">
        <div class="library">
          <h2 style="">ITC LIBRARY</h2>
        </div>

        <div class="profile">
          <v-menu bottom min-width="200px" rounded offset-y>
            <template v-slot:activator="{ on }">
              <v-btn icon x-large v-on="on">
                <v-avatar color="brown" size="48">
                  <img :src="`${user.profile}`" alt="Profile" />
                </v-avatar>
              </v-btn>
            </template>
            <v-card>
              <v-list-item-content class="justify-center">
                <div class="mx-auto text-center">
                  <v-avatar color="brown">
                    <img :src="`${user.profile}`" alt="Profile" />
                  </v-avatar>
                  <h3>{{ user.username }}</h3>
                  <p class="text-caption mt-1">
                    {{ user.email }}
                  </p>
                  <v-divider class="my-3"></v-divider>
                  <v-btn depressed rounded text> Edit Account </v-btn>
                  <v-divider class="my-3"></v-divider>
                  <v-btn depressed rounded text @click="logout">
                    Log out
                  </v-btn>
                </div>
              </v-list-item-content>
            </v-card>
          </v-menu>
        </div>
      </div>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import authApi from "../apiService/User/auth.api";

export default {
  name: "mainTemplate",
  methods: {
    async logout() {
      await authApi.logout();
      this.$cookies.remove("token");
      this.$router.replace("/");
      this.$router.go();
    },
  },
  async created() {
    this.user = await (await authApi.selfInfo()).data;
  },
  data: () => ({
    mini: false,
    user: {},
    navigation: [
      //================> Dashboard
      {
        group: false,
        title: "Dashboard",
        items: [
          {
            title: "Dashboard",
            link: "/dashboard",
            icons: "mdi-view-dashboard",
          },
        ],
      },
      //================> Request
      {
        group: false,
        title: "Request",
        items: [
          {
            title: "Request",
            icons: "mdi-note-edit",
            link: "/request",
          },
        ],
      },
      //================> Book
      {
        group: true,
        title: "Books",
        items: [
          {
            title: "Book",
            action: "mdi-bookshelf",
            items: [
              {
                title: "Listing Book",
                link: "/book",
                icons: "mdi-book-open-page-variant",
              },
              {
                title: "Category",
                link: "/category",
                icons: "mdi-bookmark-multiple",
              },
              {
                title: "Author",
                link: "/author",
                icons: "mdi-bookshelf",
              },
              {
                title: "Language",
                link: "/language",
                icons: "mdi-bookshelf",
              },
            ],
          },
        ],
      },
      //================> User
      {
        group: true,
        title: "Users",
        items: [
          {
            title: "Users",
            action: "mdi-account",
            items: [
              {
                title: "Information ",
                link: "/user",
                icons: "mdi-account-box-multiple",
              },
            ],
          },
        ],
      },
      //================> Event
      {
        group: true,
        title: "Event",
        items: [
          {
            action: "mdi-calendar-text",
            title: "Event",
            items: [
              {
                title: "Add new ",
                link: "/create-event",
                icons: "mdi-plus-thick",
              },
              {
                title: "Event detail ",
                link: "/event-detail",
                icons: "mdi-view-dashboard-outline",
              },
              {
                title: "Update ",
                link: "/update-event",
                icons: "mdi-file-cog",
              },
            ],
          },
        ],
      },
      //================> Email
      {
        group: false,
        title: "Email",
        items: [
          {
            title: "Email ",
            link: "/email",
            icons: "mdi-email",
          },
        ],
      },
      //================> Calender
      {
        group: false,
        title: "Calender",
        items: [
          {
            title: "Calendar ",
            link: "/calendar",
            icons: "mdi-calendar-month",
          },
        ],
      },
    ],
  }),
};
</script>
<style lang="scss" scoped>
.list {
  padding: 0px;
  margin: 0px;
}
.top {
  margin: 10px 20px 10px 20px !important;
}
.navbar {
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  padding: 0px 30px;
}
.drawer {
  margin-left: 10px;
}
.library_logo {
  #logo {
    width: 200px;
    margin-left: 10px;
  }
  #logoSmall {
    width: 45px;
    height: 40px;
    margin: 5px;
  }
}
.subHeader {
  font-size: 20px;
  margin-left: 10px;
}
</style>
