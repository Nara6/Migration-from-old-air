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
    $age = array("nara"=>"21", "nang"=>"22", "heng"=>"23");
    foreach ($age as $x => $value) {
        echo "$x: $value"."<br>";
    }
    ?>
</body>
</html>