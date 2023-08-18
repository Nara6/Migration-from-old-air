<html>
<head>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="flex justify-center w-full items-center h-[700px]">
    <div class="flex flex-col items-center w-[600px]">
        <h1 class="text-[50px]">Sign Up</h1>
        <h1 class="text-[20px] text-gray-400">It's free and take only a minute</h1>
        <form class="form flex flex-col w-full gap-y-3" method="post" action="./sign_up.jsp">
            <span class="text-gray-400">Username</span>
            <input type="text" name="username" class="border-gray-300 border-[1px] rounded-md h-[45px] p-5"></input>
            <span class="text-gray-400">Email Address</span>
            <input type="email" name="email" class="border-gray-300 border-[1px] rounded-md h-[45px] p-5"></input>
            <span class="text-gray-400">Password</span>
            <input type="password" name="password" class="border-gray-300 border-[1px] rounded-md h-[45px] p-5"></input>
            <span class="text-gray-400">Confirm Password</span>
            <input type="password" name="confirm-password" class="border-gray-300 border-[1px] rounded-md h-[45px] p-5"></input>
            <button class=" border-[1px] rounded-md h-[45px] bg-green-300 mt-3 text-white text-[20px] font-bold">Sign up</button>
        </form>
        <div class="footerSignUp w-[370px] flex justify-center mt-4">
            <p class="text-center text-gray-400">
                By clicking the sign up button, you agreed to our <span class="text-green-300 hover:cursor-pointer">Terms and Conditions</span>, and <span class="text-green-300 hover:cursor-pointer">Privacy Policy.</span>
            </p>
        </div>
    </div>
</body>
</html>
