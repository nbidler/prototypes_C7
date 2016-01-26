// Answer the questions here:
/*
// - What do you think is going to happen?
I think it will output "Delegated Button#5 Handler" to the console
// - What happened?
Exactly what I thought it would.
// - Why?
The parent handles all clicks on its child the same way, ergo, even if a new child
is put in at 'compile time,' it s still handled the same.
*/

//========== Write your code below ===========//

$(document).ready(function() {
    $('#list').on('click', 'button', function () {
        console.log($(this).text());
    });

    $('#list').append("<li><button style='margin-top: 10px'>Delegated Button#5 Handler</button></li>");
});