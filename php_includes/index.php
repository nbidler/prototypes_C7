<?php
/**
 * Created by PhpStorm.
 * User: Nick
 * Date: 7/29/2016
 * Time: 4:50 PM
 */
    $a = 1;
    $b = 5;
    include('includes/data.php');
    $result = $a * $b;
    print("<br>Result is $result");

    $c = 2;
    include('includes/data2.php');
    include_once('includes/data2.php');
    include('includes/data2.php');
    $result2 = $c;
    print("<br>Result 2 = $result2");
?>