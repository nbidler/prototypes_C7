<!-- Session Reader -->
<!--header('location: session_setter.php');-->
<!---->
<!--print('name: ');print($_GET['name'].'<br>');-->
<!--print('age: ');print($_GET['age'].'<br>');-->
<!--print('occupation: ');print($_GET['occupation']);-->

<?php
session_start();

    //convert all this JS to PHP - should be possible to regex check in PHP using preg_check

$inName = $_GET['name'];
if ( preg_match("/^[A-Za-z]{1,} *[A-Za-z]*$/", $inName) ){
    print('name ' . $_GET['name'] . '<br>');
    $_SESSION['name'] = $_GET['name'];
}
else {
    print('name err ' . $_GET['name']);
    if (!empty($inName)){
        $_SESSION['errors']['name'] = 'name err: ' . $_GET['name'];
    }
    header('location: session_setter.php');
}

$inAge = $_GET['age'];
if ( preg_match("/^[0-9]{1,}$/", $inAge) ){
    print('age ' . $_GET['age'] . '<br>');
    $_SESSION['age'] = $_GET['age'];
}
else {
    print('age err ' . $_GET['age']);
    if (!empty($inAge)){
        $_SESSION['errors']['age'] = 'age err: ' . $_GET['age'];
    }
    header('location: session_setter.php');
}

$inJob = $_GET['occupation'];
if ( preg_match("/^[A-Za-z]{1,} *[A-Za-z]*$/", $inJob) ){
    print('occupation ' . $_GET['occupation'] . '<br>');
    $_SESSION['occupation'] = $_GET['occupation'];
}
else {
    print('occupation err ' . $_GET['occupation']);
    if (!empty($inJob)){
        $_SESSION['errors']['occupation'] = 'occupation err: ' . $_GET['occupation'];
    }
    header('location: session_setter.php');
}

?>