<%
    login_with_db.UserMgmt usermgmt = new login_with_db.UserMgmt();
    if(usermgmt.signUp(request.getParameter("username"),request.getParameter("password"),request.getParameter("confirm-password"))){
        out.print("Insert Successful");
    }else{
        out.print("Insert Failed");
    }
%>
<div>
    <a href="./loginpage.jsp">Go to login page</a>
</div>