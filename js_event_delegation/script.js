// Answer the questions here:
/*
// - What do you think is going to happen?
I think it will output "Delegated Button#5 Handler" to the console
// - What happened?

// - Why?
*/
//========== Write your code below ===========//

$(document).ready(function() {
    $('#list').on('click', 'button', function () {
        console.log($(this).text());
    });

    $('#list').append("<li><button style='margin-top: 10px'>Delegated Button#5 Handler</button></li>");
});