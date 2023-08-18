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
        ini_set('display_errors', 1);

        // echo var_dump($_FILES);
        
        if(isset($_POST)){
        
            $fileName = basename($_FILES["resume"]["name"]);
            $fileSize = $_FILES["resume"]["size"] / 1024;
            $fileType = $_FILES["resume"]["type"];
            $fileTmpName = $_FILES["resume"]["tmp_name"];
            if($fileType=="application/msword" || $fileType=="application/vnd.openxmlformats-officedocument.wordprocessingml.document" ){
                if($fileSize<=200){
                    $random = rand(1111,9999);
                    $newFileName = $random.$fileName;
                    $uploadPath = "testUpload/".$newFileName;
                    
                    if(move_uploaded_file($fileTmpName,$uploadPath)){
                        echo "Successfully"."<br>";
                        echo "File Name: ". $newFileName."<br>";
                        echo "File Size: ". $fileSize. "Kb"."<br>";
                        echo "File Type: ". $fileType."<br>";
                    }else{
                        echo "fail";
                    }
                }else{
                    echo "Maximum upload file size is limit is 200Kb";
                }
            }else{
                echo "You can upload only word File";
            }

        }
    ?>
</body>
</html>