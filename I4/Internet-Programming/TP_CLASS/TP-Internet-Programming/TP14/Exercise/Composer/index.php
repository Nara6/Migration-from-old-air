<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php include "vendor/autoload.php"; ?>
    <?php
        ini_set('display_errors', 1);
        use Intervention\Image\ImageManagerStatic as Image;
        $Image = Image::make("upload/image.jpg")->resize(200,200)->save("img/thumbnail.jpg",100);
    ?>
</body>
</html>
