<template>
  <div class="content">
    <v-data-table
      :headers="headers"
      :items="books"
      :search="search"
      sort-by="calories"
      class="elevation-1"
    >
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>Book Mangement</v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Search"
            single-line
            hide-details
          ></v-text-field>
          <v-spacer></v-spacer>
          <v-dialog ref="form" v-model="dialog" max-width="500px">
            <template v-slot:activator="{ on, attrs }">
              <v-btn color="primary" dark class="mb-2" v-bind="attrs" v-on="on">
                Add Book
              </v-btn>
            </template>
            <v-card>
              <v-card-title>
                <span class="text-h5">{{ formTitle }}</span>
              </v-card-title>

              <v-card-text>
                <v-container>
                  <v-form ref="form" v-model="form">
                    <v-text-field
                      v-model="editedItem.title"
                      :rules="[(v) => !!v || 'Title is required']"
                      label="Title"
                      required
                    ></v-text-field>
                    <v-text-field
                      v-model="editedItem.description"
                      :rules="[(v) => !!v || 'Description is required']"
                      label="Description"
                      required
                    ></v-text-field>
                    <v-select
                      v-model="editedItem.category"
                      :items="category"
                      :rules="[(v) => !!v || 'Category is required']"
                      label="Category"
                      required
                    ></v-select>
                    <v-select
                      v-model="editedItem.author"
                      :items="author"
                      :rules="[(v) => !!v || 'Author is required']"
                      label="Author"
                      required
                    ></v-select>
                    <v-select
                      v-model="editedItem.language"
                      :items="language"
                      :rules="[(v) => !!v || 'Language is required']"
                      label="Language"
                      required
                    ></v-select>
                    <v-text-field
                      v-model="editedItem.publisher"
                      label="Publisher"
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
                          label="Publish Date"
                          readonly
                          v-bind="attrs"
                          v-on="on"
                          @click:clear="date = undefined"
                        ></v-text-field>
                      </template>
                      <v-date-picker
                        v-model="date"
                        @change="menu2 = false"
                      ></v-date-picker>
                    </v-menu>
                    <v-file-input
                      @change="selectImage"
                      show-size
                      counter
                      multiple
                      label="Book Cover Input"
                    ></v-file-input>
                    <v-file-input
                      @change="selectFIle"
                      show-size
                      counter
                      multiple
                      label="Book File input"
                    ></v-file-input>
                  </v-form>
                </v-container>
                <v-progress-linear
                  v-if="isLoading"
                  indeterminate
                  color="cyan darken-2"
                ></v-progress-linear>
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
                  :disabled="!form"
                >
                  Save
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <v-dialog v-model="viewDialog" max-width="650px">
            <v-card>
              <v-card-title>
                <span class="text-h5">Book Detail</span>
              </v-card-title>

              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col>
                      <v-img
                        :src="`${editedItem.bookThumbnail}`"
                        width="250"
                      ></v-img>
                    </v-col>
                    <v-col>
                      <H1>{{ editedItem.title }}</H1>
                      <v-row>
                        <v-col class="view-detail-left">
                          <h4>Description :</h4>
                        </v-col>
                        <v-col class="view-detail-right">
                          {{ editedItem.description }}
                        </v-col>
                      </v-row>
                      <v-row>
                        <v-col class="view-detail-left">
                          <h4>Category :</h4>
                        </v-col>
                        <v-col class="view-detail-right">
                          {{ editedItem.category }}
                        </v-col>
                      </v-row>
                      <v-row>
                        <v-col class="view-detail-left">
                          <h4>Author :</h4>
                        </v-col>
                        <v-col class="view-detail-right">
                          {{ editedItem.author }}
                        </v-col>
                      </v-row>
                      <v-row>
                        <v-col class="view-detail-left">
                          <h4>Language :</h4>
                        </v-col>
                        <v-col class="view-detail-right">
                          {{ editedItem.language }}
                        </v-col>
                      </v-row>
                      <v-row>
                        <v-col class="view-detail-left">
                          <h4>Publisher :</h4>
                        </v-col>
                        <v-col class="view-detail-right">
                          {{ editedItem.publisher }}
                        </v-col>
                      </v-row>
                      <v-row>
                        <v-col class="view-detail-left">
                          <h4>published Date :</h4>
                        </v-col>
                        <v-col class="view-detail-right">
                          {{ editedItem.publishedDate }}
                        </v-col>
                      </v-row>
                      <v-row>
                        <v-btn
                          color="primary"
                          :disabled="isHaveFile"
                          @click="viewFile(editedItem.bookFile)"
                        >
                          View File
                        </v-btn>
                      </v-row>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="close"> Close </v-btn>
              </v-card-actions>
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
                <v-btn color="blue darken-1" text @click="deleteItemConfirm()"
                  >OK</v-btn
                >
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-toolbar>
      </template>
      <template v-slot:[`item.actions`]="{ item }">
        <v-icon small class="mr-2" @click="viewItem(item)"> mdi-eye </v-icon>
        <v-icon small class="mr-2" @click="editItem(item)"> mdi-pencil </v-icon>
        <v-icon small @click="deleteItem(item)"> mdi-delete </v-icon>
      </template>
      <template v-slot:no-data>
        <v-btn color="primary" @click="initialize"> Refresh </v-btn>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import { format, parseISO } from "date-fns";
import bookApi from "../../apiService/Book/book.api";
import categoryApi from "../../apiService/Book/category.api";
import authorApi from "../../apiService/Book/author.api";
import languageApi from "../../apiService/Book/language.api";

export default {
  data: () => ({
    search: '',
    isHaveFile: false,
    viewDialog: false,
    isLoading: false,
    form: false,
    date: undefined,
    menu2: false,
    dialog: false,
    dialogDelete: false,
    headers: [
      {
        text: "Title",
        align: "start",
        value: "title",
      },
      { text: "Category", value: "category.category" },
      { text: "Author", value: "author.name" },
      { text: "Language", value: "language.language" },
      { text: "Publisher", value: "publisher" },
      { text: "Actions", value: "actions", sortable: false },
    ],
    editedIndex: -1,
    books: [],
    bookId: null,
    category: [],
    author: [],
    language: [],
    authorDetails: [],
    categoryDetails: [],
    languageDetails: [],
    editedItem: {
      title: undefined,
      description: undefined,
      category: undefined,
      author: undefined,
      language: undefined,
      publisher: undefined,
      publishedDate: undefined,
      bookThumbnail: undefined,
      bookFile: undefined,
    },
    defaultItem: {
      title: undefined,
      description: undefined,
      category: undefined,
      author: undefined,
      language: undefined,
      publisher: undefined,
      publishedDate: undefined,
      bookThumbnail: undefined,
      bookFile: undefined,
    },
  }),

  beforeCreate() {
    if (!this.$cookies.get("token")) {
      this.$router.go();
    }
  },

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "New Book" : "Edit Book";
    },
    computedDateFormattedDatefns() {
      this.editedItem.publishedDate = this.date;
      return this.date ? format(parseISO(this.date), "EEEE, MMMM do yyyy") : "";
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
      this.books = await (await bookApi.getAll()).data;
      this.categoryDetails = await (await categoryApi.getAll()).data;
      this.categoryDetails.forEach((element) => {
        this.category.push(element.category);
      });
      this.authorDetails = await (await authorApi.getAll()).data;
      this.authorDetails.forEach((element) => {
        this.author.push(element.name);
      });
      this.languageDetails = await (await languageApi.getAll()).data;
      this.languageDetails.forEach((element) => {
        this.language.push(element.language);
      });
    },

    async viewItem(item) {
      this.setBookFromItem(item);
      this.editedItem.publishedDate = item.publishedDate;
      if (this.editedItem.bookFile !== undefined) {
        this.isHaveFile = false;
      } else {
        this.isHaveFile = true;
      }
      this.viewDialog = true;
    },

    editItem(item) {
      this.editedIndex = this.books.indexOf(item);
      this.setBookFromItem(item);
      this.editedItem.bookThumbnail = undefined;
      this.editedItem.bookFile = undefined;
      this.bookId = item._id;
      this.dialog = true;
    },

    deleteItem(item) {
      this.bookId = item._id;
      this.dialogDelete = true;
    },

    async deleteItemConfirm() {
      this.isLoading = true;
      await bookApi.remove(this.bookId);
      this.initialize();
      this.closeDelete();
      this.isLoading = false;
    },

    close() {
      this.dialog = false;
      this.viewDialog = false;
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
      this.isLoading = true;
      if (this.editedIndex > -1) {
        var formData = await this.createFormData(this.editedItem);
        const data = await bookApi.update(this.bookId, formData);
        this.initialize();
      } else {
        var formData = await this.createFormData(this.editedItem);
        const data = await bookApi.create(formData);
        this.editedItem = this.defaultItem;
        this.initialize();
      }
      this.close();
      this.isLoading = false;
    },
    selectFIle(file) {
      this.editedItem.bookFile = file[0];
    },
    selectImage(image) {
      this.editedItem.bookThumbnail = image[0];
    },
    setBookFromItem(item) {
      this.editedItem.title = item.title;
      this.editedItem.description = item.description;
      this.editedItem.category = item.category.category;
      this.editedItem.author = item.author.name;
      this.editedItem.language = item.language.language;
      this.editedItem.publisher = item.publisher;
      this.date = item.publishedDate;
      this.editedItem.bookThumbnail = item.bookThumbnail;
      this.editedItem.bookFile = item.bookFile;
    },
    async createFormData(data) {
      var formData = new FormData();
      formData.append("title", data.title);
      formData.append("description", data.description);
      if (data.bookThumbnail !== undefined) {
        formData.append("bookThumbnail", data.bookThumbnail);
      }
      if (data.bookFile !== undefined) {
        formData.append("bookFile", data.bookFile);
      }
      if (data.publishedDate !== undefined) {
        formData.append("publishedDate", data.publishedDate);
      }
      if (data.publisher !== undefined) {
        formData.append("publisher", data.publisher);
      }
      this.categoryDetails.forEach((element) => {
        if (element.category === data.category) {
          formData.append("category", element._id);
          return;
        }
      });
      this.authorDetails.forEach((element) => {
        if (element.name === data.author) {
          formData.append("author", element._id);
          return;
        }
      });
      this.languageDetails.forEach((element) => {
        if (element.language === data.language) {
          formData.append("language", element._id);
          return;
        }
      });
      return formData;
    },
    viewFile(link) {
      window.open(link);
    },
  },
};
</script>

<style scoped>
.content {
  margin: 10px;
  background-color: #f5f5f5;
}
.view-detail-left {
  margin-left: -10px;
}
.view-detail-right {
  margin-left: -80px;
}
</style>