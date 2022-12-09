var left_cover = document.getElementById("left-cover");
var left_form = document.getElementById("left-form");

var right_cover = document.getElementById("right-cover");
var right_form = document.getElementById("right-form");

function switchSignup() {
    right_form.classList.add("fade-in-element");
    left_cover.classList.add("fade-in-element");

    left_form.classList.add("form-hide");
    left_cover.classList.remove("cover-hide");
    right_cover.classList.add("cover-hide");
    right_form.classList.remove("form-hide");
}
var attempt = 3; 
function validate(){
var username = document.getElementById("user-name").value;
var password = document.getElementById("user-pass").value;
if ( username == "user" && password == "pass"){
alert ("Login successfully");
console.log("check");
window.open = "success.html"; // Redirecting to other page.
return false;
}
else{
attempt --;
alert("You have left "+attempt+" attempt;");
// Disabling fields after 3 attempts.
if( attempt == 0){
document.getElementById("username").disabled = true;
document.getElementById("password").disabled = true;
document.getElementById("submit").disabled = true;
return false;
        }
    }
}