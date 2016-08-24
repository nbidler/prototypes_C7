<!--login_handler.php-->
<?php
session_start();

$user_info = [
    ['id'=> 1, 'username'=>'alpha', 'password' => 'alph'],
    ['id'=> 2, 'username'=>'beta', 'password' => 'bet'],
    ['id'=> 3, 'username'=>'charlie', 'password' => 'charli']
];

$output = [];

$input_username = $_POST['username'];
$input_password = $_POST['password'];
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