<?php
session_start();
?>
<!-- Session Setter -->
<?php

$prev_name = '';
if (!empty($_SESSION['name']))
{
    $prev_name = $_SESSION['name'];
}

$prev_age = '';
if (!empty($_SESSION['age']))
{
    $prev_age = $_SESSION['age'];
}

$prev_occupation = '';
if (!empty($_SESSION['occupation']))
{
    $prev_occupation = $_SESSION['occupation'];
}

?>



<form action="session_reader.php">
    <input type="text" name="name" value=<?=$prev_name?>>
    <input type="number" name="age" value=<?=$prev_age?>>
    <input type="text" name="occupation" value=<?=$prev_occupation?>>
    <input type="submit">
</form>