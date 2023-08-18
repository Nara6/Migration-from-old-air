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
    // $i = 0;
    // while($i<=5){
    //     echo "HELLO while $i times."."<br>";
    //     $i++;
    // }
    // do {
    //     $i++;
    //     echo "HELLO do while $i times."."<br>";
    // } while ($i <= 5);
    // for ($i=1; $i <=5 ; $i++) { 
    //     echo "HELLO do while $i times."."<br>";
    // }
    $salary[] = 1000;
    $salary[] = 2000;
    $salary[] = 3000;
    foreach ($salary as $value) {
        echo "Salary: $value"."<br>";
    }
    ?>
</body>
</html>