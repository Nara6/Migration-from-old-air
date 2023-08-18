<template>
  <div class="book_data">
    <h2 style="margin-bottom: 20px; color: blue">Table data of user</h2>
    <v-data-table
      :headers="headers"
      :items="desserts"
      sort-by="username"
      class="elevation-1"
      :search="search"
      :page.sync="page"
      :items-per-page="itemsPerPage"
      hide-default-footer
      @page-count="pageCount = $event"
    >
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>
            <v-text-field
              style="padding: 5px 20px"
              v-model="search"
              append-icon="mdi-magnify"
              label="Search user name"
              single-line
              hide-details
            ></v-text-field>
          </v-toolbar-title>

          <v-divider class="mx-15" inset vertical></v-divider>

          <v-spacer></v-spacer>

          <v-dialog v-model="dialog" max-width="500px">
            <template v-slot:activator="{ on, attrs }">
              <v-btn color="primary" dark class="mb-2" v-bind="attrs" v-on="on">
                Add new User
              </v-btn>
            </template>
            <v-card>
              <v-card-title>
                <span class="text-h5">{{ formTitle }}</span>
              </v-card-title>

              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12">
                      <v-text-field
                        v-model="editedItem.username"
                        label="User name"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="12">
                      <v-text-field
                        v-model="editedItem.email"
                        label="Email"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="12">
                      <v-select
                        v-model="editedItem.category"
                        :items="category"
                        :rules="[(v) => !!v || 'Category is required']"
                        label="Role"
                        required
                      ></v-select>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="12">
                      <v-text-field
                        v-model="editedItem.password"
                        v-if="editedIndex"
                        label="Password"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                  <!-- <v-text v-if="editedIndex">Press Submit to save the record</v-text> -->
                </v-container>
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="close">
                  Cancel
                </v-btn>
                <v-btn
                  color="blue darken-1"
                  text
                  @click="save"
                  v-if="!createPassword"
                >
                  Save
                </v-btn>
                <!-- <v-btn color="blue darken-1" text @click="addUser" v-if="editedIndex  "> Submit </v-btn> -->
              </v-card-actions>
            </v-card>
          </v-dialog>
          <v-dialog v-model="dialogDelete" max-width="500px">
            <v-card>
              <v-card-title class="text-h5"
                >Are you sure you want to delete this user?</v-card-title
              >
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="closeDelete"
                  >Cancel</v-btn
                >
                <v-btn color="blue darken-1" text @click="deleteItemConfirm"
                  >OK</v-btn
                >

                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-toolbar>
      </template>
      <template v-slot:item.actions="{ item }">
        <!-- <v-icon small class="mr-2" @click="editItem(item)" color="success" > mdi-pencil </v-icon>
          <v-icon small @click="deleteItem(item)" color="error"> mdi-delete </v-icon> -->
        <v-chip
          class="ma-2"
          color="success"
          label
          text-color="white"
          @click="editItem(item)"
        >
          <v-icon left> mdi-pencil </v-icon>
          Edit
        </v-chip>
        <v-chip
          class="ma-2"
          color="error"
          label
          text-color="white"
          @click="deleteItem(item)"
        >
          <v-icon left> mdi-delete </v-icon>
          Delete
        </v-chip>
      </template>
      <template v-slot:no-data>
        <v-btn color="primary" @click="initialize"> Reset </v-btn>
      </template>
    </v-data-table>

    <div class="text-center pt-2">
      <v-pagination v-model="page" :length="pageCount"></v-pagination>
      <!-- <v-text-field
        :value="itemsPerPage"
        label="Items per page"
        type="number"
        min="-1"
        max="10"
        @input="itemsPerPage = parseInt($event, 10)"
      ></v-text-field> -->
    </div>
  </div>
</template>

<script>
import axios from "axios";
import User_API from "../../apiService/User/user";

export default {
  name: "book_table",
  data() {
    return {
      createPassword: false,
      id: "",
      editId: "",
      result: "",
      deleteId: "",
      total: "",
      picker: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10),
      dialog: false,
      dialogDelete: false,
      search: "",
      page: 1,
      pageCount: 0,
      itemsPerPage: 10,
      category: ["user", "admin"],

      headers: [
        {
          text: "id",
          text: "User Name",
          align: "start",
          sortable: false,
          value: "username",
        },

        { text: "Email", value: "email" },
        { text: "Role", value: "role" },
        { text: "Created At", value: "createdAt" },
        { text: "Actions", value: "actions", sortable: false },
      ],
      desserts: [],
      editedIndex: -1,
      editedItem: {
        username: "",
        email: "",
        role: "",
        password: "",
      },
      defaultItem: {
        username: "",
        email: "",
        role: "",
        create: "",
      },
    };
  },
  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "New User" : "Edit Item";
    },
  },

  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
  },

  created() {
    this.initialize();
  },

  methods: {
    async initialize() {
      this.desserts = await User_API.getAllUser();
      console.log(this.desserts);
    },

    async editItem(item) {
      this.editedIndex = this.desserts.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    async deleteItem(item) {
      this.editedIndex = this.desserts.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.deleteId = Object.assign({}, item)._id;
      this.dialogDelete = true;
      console.log(this.deleteId);
    },

    async deleteItemConfirm() {
      this.desserts.splice(this.editedIndex, 1);
      this.closeDelete();
      console.log(this.deleteId);
      const result = await User_API.deleteUser(`${this.deleteId}`);
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },
    async save() {
      if (this.editedIndex > -1) {
        Object.assign(this.desserts[this.editedIndex], this.editedItem);
        const formData = new FormData();
        formData.append("role", this.desserts[this.editedIndex].category);
        formData.append("username", this.desserts[this.editedIndex].username);
        formData.append("email", this.desserts[this.editedIndex].email);
        formData.append("password", this.desserts[this.editedIndex].password);

        this.desserts.push(this.editedItem);
        console.log(formData);
        this.result = await User_API.updateUser(
          this.desserts[this.editedIndex]._id,
          formData
        );
        console.log(this.desserts[this.editedIndex]._id);
      } else {
        const formData = new FormData();
        formData.append("username", this.editedItem.username);
        formData.append("email", this.editedItem.email);
        formData.append("role", this.editedItem.category);
        formData.append("password", this.editedItem.password);

        const data = await User_API.createUser(formData);
        this.desserts.push(data);
      }
      this.close();
    },
  },
};
</script>

<style></style>
