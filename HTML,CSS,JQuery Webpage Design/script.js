
var email;
var n = 0;
// main function 
// Note:
// can be formated "$(document).ready(function() {});"

$(function() {
    
    $("#SubmitButton").click(function() {
        email = document.getElementById("InputField");
        storeEmail = String(email.value);
        checkEmail();
    });

    




});

function checkEmail() {
    var response = storeEmail.endsWith("\@gmail\.com");
    
    if (response == true)
        document.getElementById("Response").innerHTML = "Thank you, we will be in contact soon";
    else
        alert("I'm sorry, our company has a contract to only accept emails that are associated with a Gmail Account (@gmail.com), please enter a valid address"); 
    if (response == false)
        location.reload();
    
}   

