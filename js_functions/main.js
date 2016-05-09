function myMessage(){
    console.log("function myMessage run");
}

function add(number1, number2){
    console.log(number1 + number2);
}

function add2(number1, number2){
    return (number1 + number2);
}

var add2result = add2(10,22);

function cardFlip(clicked) {
    $(clicked).hide();
}