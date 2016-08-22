<?php
session_start();
?>

<!-- Session Reader -->

<script>

    var inName = '<?php print($_GET['name']); ?>';

    if (1+ inName.search(/^[A-Za-z]{1,} *[A-Za-z]*$/)){
        console.log('name ' + '<?php print($_GET['name']); ?>');
        <?php
            //print('name: ');print('$_GET["name"]');
        ?>
        <?php
            $_SESSION['name'] = $_GET['name'];
        ?>
    }
    else {
        console.log('name err ' + '<?php print($_GET['name']); ?>');
        <?php
        $_SESSION['errors']['name'] = $_GET['name'];
        ?>
    }

    var inAge = '<?php print($_GET['age']); ?>';
    if (1+ inAge.search(/^[0-9]{1,}$/)){
        console.log('age ' + '<?php print($_GET['age']); ?>');
        <?php
        //print('age: ');print('$_GET["age"]');
        $_SESSION['age'] = $_GET['age'];
        ?>
    }
    else {
        console.log('name err ' + '<?php print($_GET['name']); ?>');
        <?php
        $_SESSION['errors']['age'] = $_GET['age'];
        ?>
    }

    var inJob = '<?php print($_GET['occupation']); ?>';
    if (1+ inJob.search(/^[A-Za-z]{1,} *[A-Za-z]*$/)){
        console.log('occupation ' + '<?php print($_GET['occupation']); ?>');
        <?php
        //print('name: ');print('$_GET["name"]');
        ?>
        <?php
        $_SESSION['occupation'] = $_GET['occupation'];
        ?>
    }
    else {
        console.log('name err ' + '<?php print($_GET['name']); ?>');
        <?php
        $_SESSION['errors']['occupation'] = $_GET["occupation"];
        ?>
    }

</script>

<?php
header('location: session_setter.php');

//    print('name: ');print($_GET['name'].'<br>');
//    print('age: ');print($_GET['age'].'<br>');
//    print('occupation: ');print($_GET['occupation']);
//?>