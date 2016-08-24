<?php
/**
 * Created by PhpStorm.
 * User: Nick
 * Date: 8/22/2016
 * Time: 4:53 PM
 */
?>

<script   src="https://code.jquery.com/jquery-3.1.0.min.js"></script>

<script>
    function doAjax(timestamp, user, title, details)
    {
        $.ajax({
                url: 'index_insert.php',
                method: 'post',
                dataType: 'text',
                data: {
                    timestamp: timestamp,
                    user_id: user,
                    title: title,
                    details: details
                },
            success: function(response){
                    console.log(response);
                }
        });
    }

    $(document).ready(function () {
        $('input[type="button"]').click(function() {
            doAjax( $('input[name="timestamp"]').val(), $('input[name="user_id"]').val(),
                $('input[name="title"]').val(), $('input[name="details"]').val() );
            /*
            console.log($('input[name="timestamp"]').val());
            console.log($('input[name="user_id"]').val());
            console.log($('input[name="title"]').val());
            console.log($('input[name="details"]').val());
             */
        });
    });
</script>

<form>
    <input type="number" name="timestamp">
    <input type="number" name="user_id">
    <input type="text" name="title">
    <input type="text" name="details">
    <input type="button" value="Submit">
</form>

