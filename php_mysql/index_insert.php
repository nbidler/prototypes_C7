<!-- index_insert.php -->
<?php
require('mysql_connect.php');

//print_r($_POST);

$query = "INSERT INTO `todo_items` SET `timestamp`= '$_POST[timestamp]',
  `user_id` = '$_POST[user_id]', `title` = '$_POST[title]', `details` = '$_POST[details]'";

$result = mysqli_query($conn, $query);

if (mysqli_affected_rows($conn) >0){
    print_r(mysqli_affected_rows($conn));
}
else
{
    print(mysqli_error($conn));
}

?>