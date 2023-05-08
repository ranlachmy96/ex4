<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>forms</title>
</head>
<body>
    <section><h1>Company: Vroom like the wind</h1>
        <?php
        $colors = array("red", "green", "blue", "yellow", "orange", "purple", "black", "white");

        $id = $_GET["bicycle_id"];
        $bc = $_GET["bicycle_color"];
        $nm = $_GET["names"];
        $add = $_GET["moreToAdd"];
 
        if (in_array($bc, $colors)) {
            echo "<h2>Your bike ".$nm." with ID number ".$id." and the color ".$bc." is on its way!</h2>";
            if (!empty($add)) {
                echo "<p>You also added: ".$add."</p>";
            }
        } else {
            echo "<h2>We're sorry, but the color you entered is not in stock please try another one.</h2>";
        }
        ?>
    </section>
</body>
</html>
