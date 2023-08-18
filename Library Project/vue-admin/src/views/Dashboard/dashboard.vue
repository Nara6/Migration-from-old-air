<template>
  <div class="dashboard_container">
    <div class="header">
      <h3>Welcome Admin How was today different than yesterday?</h3>
    </div>

    <div class="data_total">
      <div>
        <div class="request">
          <h3>Request</h3>
          <div class="data">
            <div>
              <h2>39</h2>
              <p>Request per day</p>
            </div>
            <div class="icon"><i class="bi bi-journal-text"></i></div>
          </div>
        </div>
      </div>
      <div>
        <div class="avg_book">
          <h3>Book</h3>
          <div class="data">
            <div>
              <h2>{{ this.books.length }}</h2>
              <p>Book totals</p>
            </div>
            <div class="icon"><i class="bi bi-book"></i></div>
          </div>
        </div>
      </div>

      <div>
        <div class="avg_visitor">
          <h3>Users</h3>
          <div class="data">
            <div>
              <h2>{{ this.users.length }}</h2>
              <p>User registered</p>
            </div>
            <div class="icon"><i class="bi bi-people-fill"></i></div>
          </div>
        </div>
      </div>

      <div>
        <div class="avg_download">
          <h3>Downloads</h3>
          <div class="data">
            <div>
              <h2>324</h2>
              <p>Book downloaded</p>
            </div>
            <div class="icon"><i class="bi bi-cloud-download"></i></div>
          </div>
        </div>
      </div>
    </div>

    <h2 style="margin-top: 20px; color: blue">User Dashboard</h2>
    <div class="bar_chart">
      <div class="bar">
        <Barchart id="bar" />
      </div>
      <div class="calendar">
        <v-date-picker
          id="date"
          v-model="picker"
          year-icon="mdi-calendar-blank"
          prev-icon="mdi-skip-previous"
          next-icon="mdi-skip-next"
        ></v-date-picker>
      </div>
    </div>

    <!-- THis is table of date -->
    <div class="table_data">
      <h2 style="margin-bottom: 20px; margin-top: 30px; color: blue">
        Recent user request book!
      </h2>
      <user_dashboard />
    </div>

    <h2 style="color: blue; margin-top: 20px">Book Dashboard</h2>
    <div class="book">
      <div class="book_barchart">
        <BookBartChart id="book_bar" />
      </div>
      <div class="book_pie">
        <BookPie id="book_pie" />
      </div>
    </div>

    <div class="book_table">
      <book_dashboard />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Barchart from "../../components/Book/barchart.vue";
import BookPie from "../../components/Book/book_pie.vue";
import BookBartChart from "../../components/book_barchart.vue";
import BookTable from "../../components/Book/book_table.vue";
import UserRequestBook from "../../components/Book/user_request/table_user_request";
import book_dashboard from "../../views/Table_user&book/book.vue";
import user_dashboard from "../../views/Table_user&book/user_request.vue";
export default {
  name: "dashboard",
  components: {
    Barchart,
    BookPie,
    BookBartChart,
    BookTable,
    UserRequestBook,
    book_dashboard,
    user_dashboard,
  },
  data() {
    return {
      picker: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10),
      books: [],
      users: [],
    };
  },
  async created() {
    this.books = await (await axios.get("/api/public/book/")).data;
    this.users = await (await axios.get("/api/admin/user")).data;
  },
};
</script>

<style scoped lang="scss">
.book_table {
  margin-top: 20px;
}
.book {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  width: 100%;
  @media (max-width: 427px) {
    flex-direction: column;
    .book_barchart {
      width: 100%;
      #book_bar {
        width: 100%;
        height: 300px;
      }
    }
    .book_pie {
      height: 300px;
      margin-top: 20px;
      width: 100%;
      #book_pie {
        width: 100%;
        height: 300px;
      }
    }
  }

  .book_barchart {
    width: 70%;
    background-color: #fff;
    padding: 10px;
    margin-right: 1%;
  }
  .book_pie {
    background-color: #fff;
    padding: 10px;
    width: 30%;
  }
}

.bar_chart {
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 20px;
  .bar {
    width: 65%;
    margin-right: 1%;
    background-color: #fff;
    padding: 10px;
    border-radius: 5px;
  }
  .calendar {
    border-radius: 5px;
    background-color: #fff;
    width: 35%;
    #date {
      border: 1px solid gray;
      width: 100%;
    }
  }
  @media (max-width: 769px) {
    margin-top: -50px;
    .bar {
      width: 55%;
      height: 370px;
      #bar {
        height: 350px;
      }
    }
    .calendar {
      height: 400px;
      width: 45%;
      #date {
        height: 350px;
      }
    }
    @media (max-width: 427px) {
      flex-direction: column;

      .bar {
        width: 100%;
        #bar {
          width: 100%;
        }
      }
      .calendar {
        width: 100%;
        margin-top: 20px;
        padding: 0px;
        #date {
          border: none;
          padding: 0px;
        }
      }
    }
  }
}
.data_total {
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-top: 30px;
  div {
    position: relative;
    width: 97%;
    .request {
      border-left: 7px solid #ff0000;
      padding: 10px 20px;
      border-radius: 5px;
      background-color: #fff;
      height: 180px;
      h3 {
        text-align: center;
        font-size: 1.5rem;
      }
      .data {
        margin-top: 20px;
        display: flex;
        justify-content: space-around;
        div {
          h2 {
            color: #ff0000;
            font-size: 2rem;
          }
        }
        .icon {
          display: flex;
          align-items: center;
          justify-content: center;
          i {
            font-size: 50px;
            color: red;
            padding: 10px 14px;
            background-color: rgb(236, 159, 159);
            border-radius: 5px;
          }
        }
      }
    }
    .avg_visitor {
      border-left: 7px solid #04dc00;
      padding: 10px 20px;
      border-radius: 5px;
      background-color: #fff;
      height: 180px;
      h3 {
        text-align: center;
        font-size: 1.5rem;
      }
      .data {
        display: flex;
        justify-content: space-around;
        margin-top: 20px;
        div {
          h2 {
            color: #04dc00;
            font-size: 2rem;
          }
        }
        .icon {
          display: flex;
          align-items: center;
          justify-content: center;
          i {
            font-size: 50px;
            color: #04dc00;
            padding: 10px 14px;
            background-color: rgb(147, 233, 161);
            border-radius: 5px;
          }
        }
      }
    }
    .avg_book {
      border-left: 7px solid #ffc702;
      padding: 10px 20px;
      border-radius: 5px;
      background-color: #fff;
      height: 180px;
      h3 {
        text-align: center;
        font-size: 1.5rem;
      }
      .data {
        margin-top: 20px;
        display: flex;
        justify-content: space-around;
        div {
          h2 {
            color: #ffc702;
            font-size: 2rem;
          }
        }
        .icon {
          display: flex;
          align-items: center;
          justify-content: center;
          i {
            font-size: 50px;
            color: #ffc702;
            padding: 10px 14px;
            background-color: rgb(245, 242, 153);
            border-radius: 5px;
          }
        }
      }
    }
    .avg_download {
      border-left: 7px solid #ef0073;
      padding: 10px 20px;
      border-radius: 5px;
      background-color: #fff;
      height: 180px;
      h3 {
        text-align: center;
        font-size: 1.5rem;
      }
      .data {
        margin-top: 20px;
        display: flex;
        justify-content: space-around;
        div {
          h2 {
            color: #ef0073;
            font-size: 2rem;
          }
        }
        .icon {
          display: flex;
          align-items: center;
          justify-content: center;
          i {
            font-size: 50px;
            color: #ef0073;
            padding: 10px 14px;
            background-color: rgb(241, 151, 212);
            border-radius: 5px;
          }
        }
      }
    }
  }
  @media (max-width: 769px) {
    flex-direction: column;
    margin-top: -30px;

    * {
      font-size: 14px;
    }
    div {
      height: 200px;
      position: relative;
      margin-top: 20px;
      width: 100%;
      .avg_book {
        margin-top: -30px;
      }
      .avg_visitor {
        margin-top: -80px;
      }
      .avg_download {
        margin-top: -130px;
      }
      .request,
      .avg_book,
      .avg_visitor,
      .avg_download {
        display: flex;
        width: 100%;
        align-items: center;
        text-align: center;
        position: absolute;
        height: 150px;
        h3 {
          font-size: 1rem;
        }
        .data {
          div {
            h2 {
              margin-top: 40px;
            }
          }
          .icon {
            margin-top: -10px;
            align-items: center;
            display: flex;

            i {
              font-size: 24px;
            }
          }
        }
      }
    }
  }
}
.dashboard_container {
  width: 100%;
  height: auto;
  background-color: #e5e5e5;
  padding: 20px 30px;
  position: relative;
}
</style>
