<?php
session_start();
?>

<!-- Session Reader -->

<?php
    print('name: ');print($_GET['name'].'<br>');
    print('age: ');print($_GET['age'].'<br>');
    print('occupation: ');print($_GET['occupation']);
    $_SESSION['name'] = $_GET['name'];
    $_SESSION['age'] = $_GET['age'];
    $_SESSION['occupation'] = $_GET['occupation'];
?>