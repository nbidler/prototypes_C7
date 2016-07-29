<?php
//EXERCISE 1

$variable1 = 'hello';
$variable2 = 4;
$variable3 = ['foo', 'bar'];

//EXERCISE 2

$variable1 = 4;
$variable1 = 'hello';

//EXERCISE 3

$numbers = [3, 5, 16, 3, 4, 18];
$result = $numbers[0];

for($i = 1; $i < count($numbers); $i++)
{
    $result += $numbers[$i];
}

print('Result = ' . $result);
print("<br>");

//EXERCISE 4 

print('This is a string' . 'This is another string');
print("<br>");

//EXERCISE 5

$my_float = 3.5;
$my_int = round($my_float);
$my_float2 = 5.3;
$my_int2 = round($my_float2);

//EXERCISE 6

$my_var1 = 'Hello';

if(!empty($my_var2)){
    echo($my_var2);
}
else
{
    echo($my_var1);
}
print("<br>");

//EXERCISE 7

$check_var = "What time is it?";

switch($check_var) {
    case 'hello':
        echo('greetings');
        break;
    case 'bye':
        echo('good bye');
        break;
    default:
        echo('It\'s party time!');
        break;
}
print("<br>");

//EXERCISE 8

class student
{
    public $name = 'Skippy';
    public $class = 'English';
    public $grade = 75;
}

//EXERCISE 9

$student = new stdClass();
$student->name = 'Skippy';
$student->class = 'English';
$student->grade = 75;

//EXERCISE 10

$num_array = [35, 2, 14, 56, 65, 52];

function find_greatest_num_and_index($direction)
{
    global $num_array;

    $greatest = null;
    $greatest_index = null;
    if($direction >= 0)
    {
        $i = 0;
        $increment = 1;
        $end_loop = count($num_array) -1;
    }
    else
    {
        $i = count($num_array) -1;
        $increment = -1;
        $end_loop = 0;
    }

    while( $i != $end_loop)
    {
        if( $num_array[$i] > $greatest )
        {
            $greatest = $num_array[$i];
            $greatest_index = $i;
        }
        $i += $increment;
    }

    return array("greatest" => $greatest, "greatest_index" => $greatest_index);
}

var_dump(find_greatest_num_and_index(1));

?>