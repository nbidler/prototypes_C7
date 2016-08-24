<!--login_handler.php-->
<?php
session_start();

$user_info = [
    ['id'=> 1, 'username'=>'alpha', 'password' => 'alph'],
    ['id'=> 2, 'username'=>'beta', 'password' => 'bet'],
    ['id'=> 3, 'username'=>'charlie', 'password' => 'charli']
];

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
            $login_success = false;
            print('successful login'."\n");
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
if ($login_success)
{
    print('failed login'."\n");
}

?>