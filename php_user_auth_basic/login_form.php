<!--login_form.php-->
<?php
session_start();
?>

<!DOCTYPE html>
<html>
<head>

    <script src="https://code.jquery.com/jquery-3.1.0.min.js"></script>

    <script>
        function doAjax(username, password)
        {
            $.ajax({
                url: 'login_handler.php',
                cache:false,
                method: 'post',
                dataType: 'text',
                data: {
                    username: username,
                    password: password
                },
                success: function(response){
                    console.log(response);
                }
            });
        }

        $(document).ready(function () {
            $('button').click(function() {
                doAjax(
                    $('input[name="username"]').val(),
                    $('input[name="password"]').val() );

                //console.log
                /*
                 console.log($('input[name="timestamp"]').val());
                 console.log($('input[name="user_id"]').val());
                 console.log($('input[name="title"]').val());
                 console.log($('input[name="details"]').val());
                 */
            });
        });
    </script>

</head>
<body>

<form>
    <input type="text" name="username" placeholder="username">
    <input type="text" name="password" placeholder="password">
    <button type="button">Log In</button>
</form>

</body>
