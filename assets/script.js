
// validating length of the password
//function generatePassword() {

function pwlength() {
  var promptlength = window.prompt("Please enter length of the password, length can be between 8 to 128 characters");
  var num = parseInt(promptlength, 10);

  //If user select Cancel, come out of program
  if (promptlength === null) {
    return num;
  }

  if (promptlength === "" || isNaN(num) || num === undefined) {
    window.alert("you need to put in a number between 8 to 128, please try again");
    return pwlength();
  }
  if (num < 8) {
    window.alert("Your password is too short, please try again");
    return pwlength();
  }

  if (num > 128) {
    window.alert("Your password is too long, please try again");
    return pwlength();
  } else {
    return num;
  }

};


// validating character types whether or not to include lowercase, uppercase, numeric, and/or special characters.


function characters(passLength) {
  var promptLowerCase = window.confirm("Would you like to include lowercase letters?\nPress OK for  Yes and Cancel for No.");
  alert("promptLowerCase=" + promptLowerCase);
  var promptUpperCase = window.confirm("Would you like to include uppercase letters?\nPress OK for Yes and Cancel for No.");
  alert("promptUppercase=" + promptUpperCase);
  var promptNumbers = window.confirm("Would you like to include numbers?\nPress OK for Yes and Cancel for No.");
  alert("promptNumbers=" + promptNumbers);
  var promptSpecial = window.confirm("Would you like to include special characters?\nPress OK for Yes and Cancel for No.");
  alert("promptSpecial=" + promptSpecial);

  var potentialPwd="";
  var generatedPassword = "";
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbers = "0123456789";
  var specialChars = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  if (promptLowerCase || promptUpperCase || promptNumbers || promptSpecial) {
    var possibility = "";
    if (promptLowerCase) {
      possibility += lowerCase;
    }
    if (promptUpperCase) {
      possibility += upperCase;
    }
    if (promptNumbers) {
      possibility += numbers;
    }
    if (promptSpecial) {
      possibility += specialChars;
    }
    var potentialPwd = passwordGenerator(passLength, possibility);
    alert("potentialPwd=" + potentialPwd);
    // you have to check if potentialPwd generated contains each of the characters options chosen 
    // by the user at least one of them exist in it or not. if not then need to generated the pwd again
    //until the all the condition is satisfied by the new password generated.
  }
  else {
    alert("You have to choose minimum  one type of character.\nPlease try again.");
  }
  return potentialPwd;

  /*  if(possibility===null) //If user select Cancel, come out of program
  { return num;
  }*/
}

function passwordGenerator(pwdLength, passChars) {
  var generatedPassword = "";
  for (i = 0; i <= pwdLength; i++) {
    generatedPassword+= passChars.charAt(Math.floor(Math.random() * passChars.length));
  }
  return generatedPassword;
}

function generatePassword() {
  var passwordLength = pwlength();
  alert("passwordLength=" + passwordLength)
  var passwordCharacters = characters(passwordLength);
  alert("passwordCharacters=" + passwordCharacters);
  return passwordCharacters;
}

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







