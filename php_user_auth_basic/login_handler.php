<!--login_handler.php-->
<?php
session_start();

$user_info = [
    ['id'=> 1, 'username'=>'alpha', 'password' => '52e51c43e283548b762e3c9dd9a4600768db9fb4'],
    ['id'=> 2, 'username'=>'beta', 'password' => 'c033816b54c9eccffff834e492c66a262938ee18'],
    ['id'=> 3, 'username'=>'charlie', 'password' => '4ff053e82dc70e9c6a22544252ba01befdc340c0']
];

$output = [];

$input_username = $_POST['username'];
$input_password = sha1($_POST['password']);
$login_failed = true;

foreach ($user_info as $entry)
{
    if ($entry['username'] == $input_username)
    {
        //username valid
        if ($entry['password'] == $input_password)
        {
            //password valid
            $_SESSION['user_id'] = $entry['id'];
            $login_failed = false;
            $output['success'] = true;
            $output['user_id'] = $entry['id'];
            $output['message'] = 'successful login';
        }
        else
        {
            //password invalid
        }
    }
    else
    {
        //username invalid
    }
}
if ($login_failed)
{
    $output['success'] = false;
    $output['message'] = 'failed login';
}

$output_string = json_encode($output);

print($output_string);
?>