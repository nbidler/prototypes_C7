// Answer the questions here:
<<<<<<< HEAD
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
        if ($(this).attr("name")){
            console.log("SCREEEECH");
        }
    });

    $('#list').append("<li><button style='margin-top: 10px' name='gronk'>Delegated Button #5 Handler</button></li>");
    $('#list').append("<li><button style='margin-top: 10px'>Delegated Button #6 Handler</button></li>");
    $('#list').append("<li><a href='http://www.google.com' target='_blank'><button style='margin-top: 10px'>Throw to Google</button></a></li>");
});
=======

// - What do you think is going to happen?

// - What happened?

// - Why?

//========== Write your code below ===========//

>>>>>>> 92c6d68b0da2bccbee260893409728d9a7c7508a
