// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



var pwlength = function()
{
var promptlength = window.prompt("Please enter length of the password, length can be between 8 to 128 characters");
var num = parseInt(promptlength,10);

if(promptlength===null) //If user select Cancel, come out of program
  { return num;
  }

if (promptlength === ""  || isNaN(num) || num === undefined)
{
window.alert("you need to put in a number between 8 to 128, please try again");       
return pwlength();
  }
if (num < 8){
  alert("Your password is too short, please try again");
  return pwlength();
}
if (num > 128){
  window.alert("Your password is too long, please try again");
  return pwlength();
  }
else {
  return num;
  }

};
 pwlength();


 






