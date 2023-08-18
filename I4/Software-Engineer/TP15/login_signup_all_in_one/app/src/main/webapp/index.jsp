<%@ page isELIgnored="false" %>
<%@ page import="login_with_db.*" %>
<script src="https://cdn.tailwindcss.com"></script>
<!-- <form method="post" action="login.jsp">
    <label>Username: <input type="text" name="username"></label>
    <br><label>Password: <input type="password" name="password"></label>
    <br><button>Login</button>
</form> -->
<div class="w-full h-screen flex gap-y-8 justify-center items-center flex-col">
    <div class="text-[50px] font-bold text-stone-800">Welcome to our index page</div>
    <div class="flex gap-x-5">
        <a href="./loginpage.jsp" class="w-[200px] h-[100px] bg-sky-400 rounded-2xl flex items-center justify-center text-white text-[25px]">LOGIN</a>
        <a href="./sign_up_page.jsp" class="w-[200px] h-[100px] bg-green-400 rounded-2xl flex items-center justify-center text-white text-[25px]">SIGN UP</a>
    </div>
    
</div>
