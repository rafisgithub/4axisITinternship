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
    $evenCounter =0;
    $oddCounter = 0;
    for($i=0;$i<=100;$i++){
        if($i%2==0){
            $evenCounter++;
        }else{
            $oddCounter++;
        }
        
    }
    echo($evenCounter);
    echo($oddCounter);

    for($i=0;$i<=100;$i++){
       if($i==49){
        echo($i);
        break;
       }
        
    }
     ?>
</body>
</html>