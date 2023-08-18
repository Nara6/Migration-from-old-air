<template>
    <div class="login_container">
        <div class="left">
            <div class="logo">  
                <img src="@/assets/ITC_library_logo/library_logo.png"alt="">
            </div>
            <div class="background">
                <img src="../assets/Login_logo/login.png" alt="">
            </div>
        </div>

        <div class="right"> 
           
              <div class="user_input">
                    <div class="social">    
                        <div><h4>Sign in with</h4></div>
                        <div class="social_icon">
                        <i class="bi bi-facebook"></i>
                        <i class="bi bi-google"></i>
                        </div>
                    </div>
                    <div> <hr></div>

                    <div class="form">
                        <div>
                            <label for="Email">Email</label>
                            <input type="email" placeholder="Enter your email address" name="email" required>
                        </div>
                        <div>
                            <label for="Password ">Password</label>
                            <input type="password" placeholder="Enter your password " required name="password">
                        </div>
                        <div class="forget_password">
                            <div></div>
                            <div><a href="#">Forgot Password!</a></div>
                        </div>
                        <div class="btn">
                            <button>Login</button>
                        </div>
                        <div>
                            <p>Don't have an account ? <span><a href="#">Register</a></span></p>
                        </div>
                    </div>
              </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'adminLogin',


}
</script>

<style lang="scss" scoped>
    *{
        padding:0px;
        margin: 0px;
        box-sizing: border-box;
    }
    .login_container{
        
        display: flex;
       
        .left{
            width: 40%;
            height: 100vh;
            .logo{
                margin: 30px 20px ;
                img{
                    height: 50px;
                    width: auto;
                }
            }
            .background{
                width: 100%;
                display: flex;
                margin-top: 200px;
                justify-content: center;
                img{
                    align-items: center;
                }
            }
        }
        .right{
            height: 100vh;
            width: 60%;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 30px 20px;
            .user_input{
               height: 600px; 
               width: 700px;
                .form{

                    .btn{
                        margin-top: 40px;
                        button{
                            padding: 10px 50px;
                            font-weight: bold;
                            border-radius: 5px;
                            background-color: rgb(11, 11, 94);
                            color: white;
                        }
                    }
                   div{
                    p{
                        font-weight: bold;
                        span{
                            a{  
                                color: red;
                            }
                        }
                    }
                    input{
                        outline: none;
                    }
                    label{
                        margin-top: 20px;
                    }
                   }
                    .forget_password{
                        display: flex;
                        justify-content: space-between;
                        margin-top: -10px;
                    }

                }
               .social{
                display: flex;
                div{
                    
                }
                .social_icon{
                        margin-left: 30px;
                        i{
                            font-size: 25px;
                            margin-left: 20px;
                            color: blue;
                        }
                    }
               }
             
            }
           

        }
       
    }
</style>