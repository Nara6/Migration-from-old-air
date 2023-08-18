<template>
  <div class="content">
    <v-toolbar flat>
      <v-toolbar-title>Request borrow</v-toolbar-title>
      <v-divider class="mx-4" inset vertical></v-divider>
      <v-spacer></v-spacer>
      <v-dialog v-model="dialog" max-width="500px">
        <v-card>
          <v-card-text>
            <v-container>
              <v-form ref="form" v-model="form">
                <v-text-field
                  v-model="editedItem.username"
                  :rules="[(v) => !!v || 'Username is required']"
                  label="Username"
                ></v-text-field>
                <v-text-field
                  v-model="editedItem.isbn"
                  :rules="[(v) => !!v || 'ISBN is required']"
                  label="ISBN"
                ></v-text-field>
                <v-text-field
                  v-model="editedItem.reason"
                  :rules="[(v) => !!v || 'Reason is required']"
                  label="Reason"
                ></v-text-field>
                <v-menu
                  v-model="menu2"
                  :close-on-content-click="false"
                  max-width="290"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      :value="computedDateFormattedDatefns"
                      clearable
                      label="Pick Up Date"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                      @click:clear="editedItem.pickUpDate = undefined"
                      :rules="[(v) => !!v || 'Pick up date is required']"
                    ></v-text-field>
                  </template>
                  <v-date-picker
                    v-model="editedItem.pickUpDate"
                    @change="menu2 = false"
                  ></v-date-picker>
                </v-menu>
                <v-select
                  v-model="editedItem.duration"
                  :items="[1, 2, 3, 4]"
                  label="Duration (Weeks)"
                ></v-select>
              </v-form>
            </v-container>
          </v-card-text>

          =
        </v-card>
      </v-dialog>
      <v-dialog v-model="dialogDelete" max-width="500px">
        <v-card>
          <v-card-title class="text-h5">
            Are you sure you want to delete this item?
            <br /><br />
            <v-progress-linear
              v-if="isLoading"
              indeterminate
              color="cyan darken-2"
            ></v-progress-linear>
          </v-card-title>
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
    <v-data-table
      :headers="headers"
      :item-key="borrows._id"
      :items="borrows"
      sort-by="calories"
      class="elevation-1"
    >
      <template v-slot:body="{ items }">
        <tbody>
          <tr v-for="item in items" :key="item.name">
            <td>{{ item.userId.username }}</td>
            <td>{{ item.bookUnit.isbn }}</td>
            <td>{{ formatDate(item.pickUpDate) }}</td>
            <td>{{ deadlineDate(item.pickUpDate, item.duration) }}</td>
            <td>
              <div :class="statusColor(item.status)">
                {{ item.status }}
              </div>
            </td>
          </tr>
        </tbody>
      </template>
      <template v-slot:no-data>
        <v-btn color="primary" @click="initialize"> Reset </v-btn>
      </template>
    </v-data-table>
    <v-snackbar v-model="isSnackbar">
      {{ errorMessage }}

      <template v-slot:action="{ attrs }">
        <v-btn color="pink" text v-bind="attrs" @click="isSnackbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
import { format, parseISO } from "date-fns";
import borrowApi from "../../apiService/Borrow/borrow.api";
import userApi from "../../apiService/User/user";
import bookUnitApi from "../../apiService/Book/bookUnit.api";

export default {
  data: () => ({
    isLoading: false,
    form: false,
    isSnackbar: false,
    date: undefined,
    menu2: false,
    dialog: false,
    dialogDelete: false,
    headers: [
      {
        text: "User",
        align: "start",
        value: "userId.username",
      },
      { text: "ISBN", value: "bookUnit.isbn" },
      { text: "Pick Up Date", value: "pickUpDate" },
      { text: "Deadline", value: "duration" },
      { text: "Status", value: "status" },
    ],
    errorMessage: "Something Went Wrong",
    borrows: [],
    users: [],
    bookUnits: [],
    itemId: undefined,
    editedIndex: -1,
    editedItem: {
      username: "DimLify",
      isbn: "9840258354398",
      pickUpDate: undefined,
      duration: undefined,
      status: undefined,
      reason: undefined,
    },
    defaultItem: {
      username: undefined,
      isbn: undefined,
      pickUpDate: undefined,
      duration: undefined,
      status: undefined,
      reason: undefined,
    },
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "New Item" : "Edit Item";
    },
    computedDateFormattedDatefns() {
      return this.editedItem.pickUpDate
        ? format(parseISO(this.editedItem.pickUpDate), "EEEE, MMMM do yyyy")
        : undefined;
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
      this.borrows = await (await borrowApi.getAll()).data;
      this.users = await userApi.getAllUser();
      this.bookUnits = await (await bookUnitApi.getAll()).data;
      // console.log(this.users);
      // console.log(this.bookUnits);
    },

    editItem(item) {
      this.editedIndex = this.borrows.indexOf(item);
      this.itemId = item._id;
      console.log(item);
      this.editedItem.username = item.userId.username;
      this.editedItem.isbn = item.bookUnit.isbn;
      this.editedItem.pickUpDate = item.pickUpDate;
      this.editedItem.duration = item.duration;
      this.editedItem.status = item.status;
      this.editedItem.reason = item.reason;
      this.dialog = true;
    },

    deleteItem(item) {
      this.itemId = item._id;
      this.dialogDelete = true;
    },

    async deleteItemConfirm() {
      this.isLoading = true;
      const result = await borrowApi.remove(this.itemId);
      console.log(result);
      if (result.status === 200) {
        this.initialize();
        this.errorMessage = "Deleted successfully";
        this.isSnackbar = true;
      } else {
        this.errorMessage = result.data;
        this.isSnackbar = true;
      }
      this.closeDelete();
      this.isLoading = false;
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
        const formData = await this.createFormData(this.editedItem);

        const result = await borrowApi.update(this.itemId, formData);
        if (result.status === 200) {
          this.editedItem = this.defaultItem;
          this.initialize();
        } else {
          this.errorMessage = result.data;
          this.isSnackbar = true;
        }
      } else {
        const formData = await this.createFormData(this.editedItem);
        const result = await borrowApi.create(formData);
        if (result.status === 201) {
          this.editedItem = this.defaultItem;
          this.initialize();
          this.errorMessage = "Created successfully";
          this.isSnackbar = true;
        } else {
          this.errorMessage = result.data;
          this.isSnackbar = true;
        }
      }
      this.close();
    },

    formatDate(date) {
      return format(parseISO(date), "MMMM do yyyy");
    },
    deadlineDate(date, week) {
      const dateTmp = new Date(date);
      dateTmp.setDate(dateTmp.getDate() + 7 * week);
      return format(parseISO(dateTmp.toISOString()), "MMMM do yyyy");
    },
    async createFormData(data) {
      var formData = new FormData();
      this.users.forEach((element) => {
        if (element.username === data.username) {
          formData.append("userId", element._id);
          return;
        }
      });
      this.bookUnits.forEach((element) => {
        if (element.isbn === data.isbn) {
          formData.append("bookUnit", element._id);
          return;
        }
      });
      formData.append("reason", data.reason);
      formData.append("pickUpDate", data.pickUpDate);
      if (data.duration !== undefined) {
        formData.append("duration", data.duration);
      }
      return formData;
    },
    logFormData(formData) {
      for (const pair of formData.entries()) {
        console.log(`${pair[0]}: ${pair[1]}`);
      }
    },
    statusColor(status) {
      if (status == "pending") {
        return "yellow-text";
      }
      if (status == "rejected" || status == "cancel") {
        return "red-text";
      }
      if (status == "approved") {
        return "green-text";
      }
    },
  },
};
</script>

<style scoped>
.content {
  margin: 10px;
  background-color: #f5f5f5;
}
.red-text {
  color: red;
}
.yellow-text {
  color: #ffcc00;
}
.green-text {
  color: #12bf0c;
}
</style>
