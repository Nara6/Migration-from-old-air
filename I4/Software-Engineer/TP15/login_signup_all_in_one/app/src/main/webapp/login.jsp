<%
login_with_db.UserMgmt usermgmt = new login_with_db.UserMgmt();
    if(usermgmt.hasUser(request.getParameter("username"),request.getParameter("password"))){
        out.print("Success");
    }else{
        response.sendRedirect("index.jsp");
    }
%>
<div>
    <a href="./index.jsp" class="text-blue-500">Back to index</a>
</div>