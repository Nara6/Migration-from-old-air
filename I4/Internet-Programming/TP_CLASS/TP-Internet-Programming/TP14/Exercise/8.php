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
    $multiDArray = array(
        "A"=> array(0 => "red", 2 => "green", 3=>"blue"),
        "B"=> array(0=>"orange",2=>"black"),
        "C"=> array(0=>"white", 1=>"purple",2=>"grey")
    );
    echo $multiDArray["A"][3];
    echo "<br>".$multiDArray["C"][1];
    ?>
</body>
</html>