<script src="https://cdn.tailwindcss.com"></script>

<div class="flex flex-col w-full h-screen justify-center items-center gap-y-6">
    <h1 class="text-sky-400 text-[40px]">Welcome to login form</h1>
    <form method="post" action="login.jsp" class="flex flex-col w-[400px] gap-y-5 items-center">
        <input type="text" name="username" class="border-[2px] border-gray-200 px-4 h-[50px] w-[400px]" placeholder="Username">
        <input type="password" name="password" class="border-[2px] border-gray-200 h-[50px] px-4 w-[400px]" placeholder="Password"></label>
        <button class="w-[200px] h-[50px] bg-green-200">Login</button>
        <a href="./index.jsp" class="text-blue-700">Or Back to index</a>
    </form>
</div>