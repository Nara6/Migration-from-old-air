<template>
  <v-container>
    <div>
      <v-row no-gutters>
        <v-col sm="10" class="mx-auto">
          <v-card class="pa-5">
            <v-card-title justify-center> Create New event</v-card-title>
            <v-divider></v-divider>

            <v-form
              ref="form"
              @submit.prevent="submitEvent"
              class="pa-5"
              enctype="multipart/form-data"
            >
              <v-text-field
                label="Title"
                v-model="event.title"
                prepend-icon="mdi-note"
                :rules="rules"
              ></v-text-field>
              <v-textarea
                label="Description"
                v-model="event.description"
                prepend-icon="mdi-note-plus"
                :rules="rules"
              ></v-textarea>
              <v-file-input
                @change="selectFile"
                :rules="rules"
                show-size
                counter
                multiple
                label="Select event images"
              ></v-file-input>

              <!-- <v-btn type="submit" class="mt-3" color="primary">Add Event</v-btn> -->

              <v-btn dark color="orange darken-2" @click="snackbar = true" type="submit">
                Add new event
              </v-btn>

              <v-snackbar v-model="snackbar" :timeout="timeout">
                {{ text }}

                <template v-slot:action="{ attrs }">
                  <v-btn color="blue" text v-bind="attrs" @click="snackbar = false">
                    Close
                  </v-btn>
                </template>
              </v-snackbar>
            </v-form>
          </v-card>
        </v-col>
      </v-row>
    </div>

    <div class="event_list">
      <table style="width: 100%">
        <tr>
          <th>Event Title</th>
          <th>Description</th>
          <th>Image url</th>
          <th>Detail</th>
        </tr>
        <tr v-for="event in events" :key="event._id">
          <td>{{ event.title }}</td>
          <td>{{ event.description.substring(0, 15) + "​​​​​​​​ ...." }}</td>
          <td>{{ event.image.substring(0, 30) + "​​​​​​​​ ...." }}</td>
          <td>
            <v-btn
              color="success"
              class="mr-3"
              :to="{ name: 'event-detail', params: { id: event._id } }"
              >View</v-btn
            >
          </td>
        </tr>
      </table>
    </div>
  </v-container>
</template>

<script>
import Event_API from "../../apiService/Event/event";

export default {
  name: "create",

  data() {
    return {
      snackbar: false,
      text: 'Event create successfully !',
      timeout: 2000,
      events: [],
      eventIds: {},

      rules: [(value) => !!value || "This field is required !"],
      event: {
        title: "",
        description: "",
        image: "",
      },
      image: "",
      result: "",
      status: false,
      
    };
  },
  async created() {
    this.events = await Event_API.getAllEvent();
    console.log(this.events);
  },
  props: [],
  beforeCreate() {
    if(!this.$cookies.get("token")){
      this.$router.go()
    }
  },
  methods: {
    selectFile(file) {
      this.image = file[0];
    },

    async removeEvent(id) {
      const result = await Event_API.deleteEvent(id);
    },

    async submitEvent() {
      const formData = new FormData();

      formData.append("title", this.event.title);
      formData.append("description", this.event.description);
      formData.append("image", this.image);

      if (this.$refs.form.validate()) {
        const result = await Event_API.createEvent(formData);
        this.events.push(result)
        this.successMsg = result.message + "😊";
        this.status = true;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.event_list {
  position: absolute;
  width: 100%;
  padding: 0px 20px;
  margin-top: 20px;
  left: 0px;

  table {
    font-family: Arial, Helvetica, sans-serif;
    border-collapse: collapse;
    text-align: center;
    width: 100%;
    border: 1px solid rgb(147, 147, 147);
    th {
      padding-top: 12px;
      padding-bottom: 12px;
      text-align: left;
      background-color: #04aa6d;
      color: white;
      text-align: center;
    }
    tr:hover {
      background-color: #ddd;
    }
    tr {
      margin-top: 10px;
      padding: 10px 0px;
    }
    td {
      padding: 10px 0px;
    }
  }
}
</style>
