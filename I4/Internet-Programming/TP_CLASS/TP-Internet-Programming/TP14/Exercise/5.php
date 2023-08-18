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
    $date = date("m-d");
    // echo $date;
    if($date=="07-04"){
        echo "HAPPY BIRTHDAY TO YOU PPUN SML.";
    }else{
        echo "NOTHING!";
    }

    $date1 = date("m-d");
    if($date1 == "07-04"){
        echo "<br>"."HAPPY BIRTHDAY TO YOU PPUN SML.";
    }elseif($date1 == "08-15"){
        echo "<br>"."HAPPY INDEPENDENT DAY!";
    }else{
        echo "<br>"."NOTHING.";
    }

    $myFavColor = "red";
    switch ($myFavColor) {
        case 'blue':
            echo "<br>"."My favorite color is BLUE.";
            break;
        case 'red':
            echo "<br>"."My favorite color is RED.";
            break;
        case 'orange':
            echo "<br>"."My favorite color is ORANGE.";
            break;
        default:
            echo "<br>"."My favorite color is not RED, BLUE or ORANGE.";
            break;
    }


    ?>
</body>
</html>