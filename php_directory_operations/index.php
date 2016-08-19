<div>

    <?php

    if (is_dir('images')){
        //print_r(glob('images/*'));
        $picute = glob('images/*');

        foreach ($picute as $item){
            print("<img src='$item'><br>");
        }
    }

    ?>

</div>

