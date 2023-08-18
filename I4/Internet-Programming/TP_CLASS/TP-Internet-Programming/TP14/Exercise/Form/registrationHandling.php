<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
        if(isset($_POST)){
            $emp_name = $_POST['name'];
            $emp_number = $_POST['number'];
            $emp_email = $_POST['email'];
            if($emp_name==""){
                $erroMsg = "error: You did not input name";
                $code = 1;
                echo $erroMsg;
            }
            elseif($emp_number==""){
                $erroMsg = "error: You did not input number";
                $code = "2";
                echo $erroMsg;
            }
            elseif(is_numeric($emp_number)==false){
                $erroMsg = "error: Please enter numeric value";
                $code = "2";
                echo $erroMsg;
            }
            elseif(strlen($emp_number)<10){
                $erroMsg = "error: Number should be ten digit";
                $code = "2";
                echo $erroMsg;
            }
            elseif($emp_email==""){
                $erroMsg = "error: You did not input email";
                $code = "3";
                echo $erroMsg;
            }
            elseif(!preg_match("/^[_\.a-zA-Z0-9-]+@([0-9a-zA-Z][0-9a-zA-Z-]+\.)+[a-zA-Z]{2,6}$/i", $emp_email)){
                $erroMsg = "error: You input invalid email";
                $code = "3";
                echo $erroMsg;
            }else{
                echo "Success";
            }
        }else{
            echo "Here";
        }
    ?>
</body>
</html>