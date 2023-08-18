<template>
  <v-container>
    <v-row no-gutters>
      <v-col sm="10" class="mx-auto">
        <v-card class="pa-5">
          <v-card-title justify-center> Edit the event</v-card-title>
          <v-divider></v-divider>

          <v-form
            ref="form"
            @submit.prevent="updateEvent"
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
            <v-img :src="`${event.image}`" width="120"></v-img>

            <!-- <v-btn type="submit" class="mt-3" color="primary">Add Event</v-btn> -->
            <v-row justify-center>
              <v-col cols="auto">
                <v-dialog transition="dialog-top-transition" max-width="600">
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      color="primary"
                      v-bind="attrs"
                      v-on="on"
                      type="submit"
                      >Update</v-btn
                    >
                  </template>
                  <template v-slot:default="dialog">
                    <v-card>
                      <v-toolbar color="primary" dark>Add new event</v-toolbar>

                      <!-- Test -->
                      <v-card-text>
                        <div class="text-h2 pa-12">Edit success</div>
                      </v-card-text>
                      <v-card-actions class="justify-end">
                        <v-btn text @click="dialog.value = false">Close</v-btn>
                      </v-card-actions>
                    </v-card>
                  </template>
                </v-dialog>
              </v-col>
            </v-row>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Event_API from "../../apiService/Event/event";
export default {
  name: "create",

  data() {
    return {
      rules: [(value) => !!value || "This field is required !"],
      event: {
        title: "",
        description: "",
        image: "",
      },
      image: "",
      success: "Input required 😟",
      result: "",
      status: false,
    };
  },

  beforeCreate() {
    if (!this.$cookies.get("token")) {
      this.$router.go();
    }
  },
  methods: {
    selectFile(file) {
      this.image = file[0];
    },

    async created() {
      const id = this.$route.params.id;
      console.log(this.$route.params);
      const result = await Event_API.getEventByID(id);
      this.event = result;
    },
    async updateEvent() {
      const formData = new FormData();

      formData.append("title", this.event.title);
      formData.append("description", this.event.description);
      formData.append("image", this.image);

      if (this.$refs.form.validate()) {
        const result = await Event_API.updateEvent(
          this.$route.params.id,
          formData
        );
        this.success = result.message + "😊";
        this.status = true;
        this.$router.push({ name: "create-event" });
      }
    },
  },
};
</script>

<style></style>
