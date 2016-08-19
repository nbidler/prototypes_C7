<?php
/**
 * Created by PhpStorm.
 * User: Nick
 * Date: 8/19/2016
 * Time: 2:02 PM
 */

$picute = glob('images/*');

foreach ($picute as $item){
    //print("<img src='$item'><br>");

    $output = [
        $success => '',
        $error => '',
        $files => ''
    ];
}