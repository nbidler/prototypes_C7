<!-- index_select.php -->
<?php
require('mysql_connect.php');

$query = "SELECT * FROM `todo_items` WHERE `user_id` = 333";

$result = mysqli_query($conn, $query);

if (mysqli_num_rows($result)){
    while ($row = mysqli_fetch_assoc($result))
    {
        print_r($row);print '<br>';
    }
}

?>