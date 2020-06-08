




var num1;
var num2;
var guess;
var answer;
var response;

// main function 
// Note:
// can be formated "$(document).ready(function() {});"

$(function() { 
    num1 = document.getElementById("num1");
    num2 = document.getElementById("num2");
    guess = document.getElementById("InputField");
    response = document.getElementById("Response1");
    
    $("#SubmitButton1").click(function() {
        checkAnswer();
        
    });
    
    setNumbers();
});

//random number function
function setNumbers() {
    num1.innerHTML = Math.floor(Math.random() * 10) + 1;
    num2.innerHTML = Math.floor(Math.random() * 10) + 1;
}

function checkAnswer() {
    var n1 = parseInt(num1.innerHTML)
    var n2 = parseInt(num2.innerHTML)
    answer = n1 * n2;
    
    if (parseInt(guess.value) == answer)
        response.innerHTML = "Correct";
    else
        response.innerHTML = "Incorrect";
        setTimeout(checkCorrect, 1500);
}
function checkCorrect(){
    if (parseInt(guess.value) == answer)
    location.reload();
}
