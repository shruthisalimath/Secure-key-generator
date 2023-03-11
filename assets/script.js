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


// validating length of the password
//function generatePassword() {
  
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

// validating character types whether or not to include lowercase, uppercase, numeric, and/or special characters.

//var newpassword = "";
var characters = function()
{
  var promptlowercase = window.confirm("Would you like to include lowercase letters?\nPress OK for Yes and Cancel for No.");
  var promptUppercase = window.confirm("Would you like to include uppercase letters?\nPress OK for Yes and Cancel for No.");
  var promptNumbers = window.confirm("Would you like to include numbers?\nPress OK for Yes and Cancel for No.");
  var promptSpecial = window.confirm("Would you like to include special characters?\nPress OK for Yes and Cancel for No.");

if(promptlowercase || promptUppercase || promptNumbers || promptSpecial)
{
  var possibility = "";
  if(promptlowercase){
    possibility += "abcdefghijklmnopqrstuvwxyz";
  }
  if(promptUppercase){
    possibility += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if(promptNumbers){
    possibility += "0123456789";
  }
  if(promptSpecial){
    possibility += " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  }

  for (i=o; i<=num; i++ ){
    possibility += possibleCharacters.charAt(Math.floor(Math.random() * possibleCharacters.length));
  }
  }
  else {
    alert("You have to choose minimum  one type of character.\nPlease try again.");
  }
  return possibility;
  
  /*  if(possibility===null) //If user select Cancel, come out of program
  { return num;
  }*/
  
}
characters();
//}
//generatePassword();

 






