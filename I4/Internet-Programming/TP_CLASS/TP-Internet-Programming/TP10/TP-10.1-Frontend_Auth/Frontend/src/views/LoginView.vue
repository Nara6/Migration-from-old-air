
<template>
  <div class="wrappers">
    <div>
      <div class="flex justify-center">
        <img src="https://www.w3schools.com/howto/img_avatar2.png" alt="avatar"/>
      </div>
      <div class="input">
        <label for="email">Email</label><br />
        <input id="email" type="text" v-model="email" placeholder="Enter email" />
      </div>
      <div class="input">
        <label for="password">Password</label><br />
        <input id="password" type="password" v-model="password" placeholder="Enter password" />
      </div>
      <div class="forget-password">
        <a href="">Forget Password?</a>
      </div>
      <div class="input">
        <button id="login" v-on:click="login">Login</button>
      </div>
    </div>
  </div>
</template>

<script>
import router from "../router/index.js"
export default {
  name: "Login",
  data(){
    return{
      email: '',
      password: ''
    }
  },
  methods:{
    login(){
      // console.log(this.email,this.password);
      fetch('http://localhost:3001/api/login', {
        method: 'POST',
        credentials: "include",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email: this.email,
          password: this.password
        })
      }).then( (res)=>{
        return res.json();
      }).then((data) => {
        console.log(this.email);
        console.log(data);
        if(data.success == true){
          router.push({name: 'home'})
        }
      }).catch((err)=>{
        console.log(err);
      })
    }
  }
}
</script>

<style>
.wrappers{
    /* display: block; */
    width: 500px;
    border: 1px solid gray;
    padding: 20px;
    text-align: center;
}
.wrappers img{
   
    width: 200px;
    border-radius: 100%;
}
.forget-password{
  display: flex;
  justify-content: right;
  text-decoration: underline;
}
.input{
    
    text-align: left;
}
.input input{
    width: 100%;
    height: 50px;
    padding-left: 10px;
    margin: 10px 10px 10px 0px;
    border: 1px solid rgb(172, 172, 172);
}
.input button{
    width: 100%;
    height: 50px;
    margin-top: 10px;
    border: 0px solid black;
    color: white;
    background-color: green;
}
.content p{
    margin-top: 10px;
}
.content button{
    margin-left: 10px;
    width: 90px;
    height: 25px;
    color: white;
    background-color: gray;
    border: 0px;
    border-radius: 2px;
    margin-top: 5px;
}
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>