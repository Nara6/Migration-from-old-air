
<template>

  <div class="login_container">
  
     <div class="left">
          <div class="itc_logo">
            <img src="../../assets/ITC_library_logo/library_logo.png" alt="">
          </div>
          <div class=" logo">
            <img src="../../assets/ITC_library_logo/login.png" alt="">
          </div>
     </div>

     <div class="right">

        
      <div class="form">
       <h1>Admin Login </h1>
       <div style="display: flex; margin-top:40px; align-item:center" >
        <div><h3 style="color:blue">Sign in with</h3></div>
        <div style="margin-left:30px">
          <i style="font-size: 30px; color:blue" class="bi bi-facebook"></i>
          <i style="font-size: 30px; color:blue; margin-left:20px" class="bi bi-google"></i>
        </div>
       </div>
       <hr style="margin-top:20px">
        <div class="email">
          <label for="email">Email Address</label>
          <div><input type="email" placeholder="Enter your email address" name="email"  v-model="email" required> </input></div>
        </div>
        <div class="password">

          <label for="password">Password</label>
          <div><input type="password" placeholder="Enter your password" name="password" v-model="password"  required> </input></div>
        </div>
        <div class="forget_password">
          <div><input type="checkbox" name="remember" id=""> Remember me </div>
          <div><router-link :to="{name: 'login'}">Forgot Password!</router-link></div>
        </div>
        <div class="btn">
          <button @click.prevent="login">Login </button>
        </div>
       
      </div>
    </div>
  </div>
</template>


<script>
import authApi from "../../apiService/User/auth.api";

export default {
  data() {
    return {
      email: "sopagna@gmail.com",
      password: "12345678"
    };
  },
  beforeCreate() {
    if (this.$cookies.get("token")) {
      this.$emit("isAlreadyLogin", true);
      this.$router.replace("/dashboard").catch(() => {});
    }
  },
  methods: {
    async login() {
      const formData = new FormData()
      formData.append("email", this.email)
      formData.append("password", this.password)
      const result = await authApi.login(formData);
      if (result?.data?.Data?.role === "admin") {
        this.$cookies.set("token", result.data.Token);
        this.$emit("isAlreadyLogin", true);
        this.$router.replace({name: 'dashboard', params:{data: result}});
      } else {
        await authApi.logout();
        this.$cookies.remove("token");
      }
    },
  },
};
</script>


<style scoped lang="scss">
*{
  padding: 0px;
  box-sizing: border-box;
  margin: 0px;
}
.login_container{
  width: 100%;
    display: flex;
     .right{
      display: flex;
      justify-content: center;
      align-items: center;
      width: 60%;
     .form{
      width: 700px;
      height: 700px;
      margin-top: 100px;
      .btn{
        margin-top: 70px;
        button{
          padding: 10px 60px;
          background-color: rgb(0, 2, 126);
          color: whitesmoke;
          font-weight: bold;
          border-radius: 5px;
          
        }
      }
       .email, .password{
        margin-top: 40px;
        label{
          font-size: 1.2rem;
          
        }
        div{
          margin-top: 5px;
          input{
            width: 100%;
            border: 1px solid black;
            height: 40px;
            border-radius: 5px;
            padding-left: 30px;
            outline: none;
          }
        }
       }
       .forget_password{
        display: flex;
        margin-top: 20px;
        justify-content: space-between;
       }

     }

    }
    .left{
        height: 100vh;
        
        width: 40%;
        .itc_logo{
          img{
            margin: 30px 0px 0px 30px;
          }
        }
        .logo{
            display: flex;
            justify-content: center;
            align-items: center;
           
            margin-top: 200px;
            img{

              width: 400px;
            }
        }
    }
   
}
</style>