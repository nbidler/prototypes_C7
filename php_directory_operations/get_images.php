<?php
/**
 * Created by PhpStorm.
 * User: Nick
 * Date: 8/19/2016
 * Time: 2:02 PM
 */

$picute = glob('images\*');

$output = [
    'success' => array(),
    'error' => array(),
    'files' => array()
];

foreach ($picute as $item) {
    //print("<img src='$item'><br>"
    if (is_file($item)) {
        if (is_readable($item)) {
            $output['success'][] = $item;
        } else {
            $output['error'][] = $item;
        }
        $output['files'][] = $item;
    }
}

print_r($output['success']);
print("<br>");
print_r($output['error']);
print("<br>");
print_r($output['files']);
print("<br>");

$enc_output = json_encode($output);

print_r($enc_output);
