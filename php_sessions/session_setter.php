<?php
session_start();
?>
<!-- Session Setter -->
<?php

echo $_SESSION['errors']['name'];
echo $_SESSION['errors']['age'];
echo $_SESSION['errors']['occupation'];

$prev_name = ''; $err_name = '';

if (!empty($_SESSION['name']))
{
    $prev_name = $_SESSION['name'];
    if (!empty($_SESSION['name'])){
        $err_name = $_SESSION['errors']['name'];
    }
}

$prev_age = ''; $err_age = '';

if (!empty($_SESSION['age']))
{
    $prev_age = $_SESSION['age'];
    if (!empty($_SESSION['age'])){
        $err_age = $_SESSION['errors']['age'];
    }
}

$prev_occupation = ''; $err_occupation = '';

if (!empty($_SESSION['occupation']))
{
    $prev_occupation = $_SESSION['occupation'];
    if (!empty($_SESSION['occupation'])){
        $err_occupation = $_SESSION['errors']['occupation'];
    }
}

$_SESSION['errors']['name'] = '';
$_SESSION['errors']['age'] = '';
$_SESSION['errors']['occupation'] = '';

?>



<form action="session_reader.php">
    <input type="text" name="name" value=<?=$prev_name?>>
    <p><?= $err_name ?></p>
    <input type="number" name="age" value=<?=$prev_age?>>
    <p><?= $err_age ?></p>
    <input type="text" name="occupation" value=<?=$prev_occupation?>>
    <p><?= $err_occupation ?></p>
    <input type="submit">
</form>