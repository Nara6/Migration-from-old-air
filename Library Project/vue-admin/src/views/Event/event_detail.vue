<template>
  <v-container>
    <div><h1>Event Detail</h1></div>
    <div class="event_detail" no-gutters>
      <v-card class="mx-auto pa-3" max-width="500">
        <v-img :src="`${event.image}`" height="400px"></v-img>

        <v-card-title>
          {{ event.title }}
        </v-card-title>

        <v-card-subtitle>
          <!-- <span>image url: {{event.image}}</span> -->
          <a href="">{{ event.image }}</a>
        </v-card-subtitle>
        <div class="btn">
          <div>
            <v-btn
              tile
              color="success"
              :to="{ name: 'update-event', params: { id: event._id } }"
              ><v-icon left>mdi-pencil</v-icon>Edit</v-btn
            >
          </div>
          <div>
            <v-btn tile color="error" @click="removeEvent(event._id)"
              ><v-icon left>mdi-delete</v-icon>Delete</v-btn
            >
          </div>
        </div>
        <v-card-actions>
          <v-btn color="orange lighten-2" text> Description </v-btn>

          <v-spacer></v-spacer>

          <v-btn icon @click="show = !show">
            <v-icon>{{ show ? "mdi-chevron-up" : "mdi-chevron-down" }}</v-icon>
          </v-btn>
        </v-card-actions>

        <v-expand-transition>
          <div v-show="show">
            <v-divider></v-divider>

            <v-card-text>
              {{ event.description }}
            </v-card-text>
          </div>
        </v-expand-transition>
      </v-card>
    </div>
  </v-container>
</template>

<script>
import Event_API from "../../apiService/Event/event";

export default {
  name: "event_detail",

  data() {
    return {
      event: {},
      show: false,
    };
  },
  beforeCreate() {
    if (!this.$cookies.get("token")) {
      this.$router.go();
    }
  },
  methods: {
    async removeEvent(id) {
      this.result = await Event_API.deleteEvent(id);
      this.$router.push({ name: "create-event" });
    },
  },

  async created() {
    this.event = await Event_API.getEventByID(this.$route.params.id);
    console.log(this.event._id);
  },
};
</script>

<style>
.btn {
  display: flex;
  justify-content: space-between;
  margin: 0px 20px;
}

div h1 {
  text-align: center;
  color: rgb(40, 8, 103);
  margin-bottom: 20px;
}
</style>
