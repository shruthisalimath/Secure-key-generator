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

// Code implementation to satisfy the requirements. //

//define different character type constants. to use later to generate password.
const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const specialChars = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

// Implementation of the main function to generate password.
function generatePassword(){

  //Initial prompt to get the password length input from user.
  let passwordLengthInput = promptForPasswordLength(); 
  //check for cancel button click, if cancel then value will be null.
  if(passwordLengthInput === null) {
    return "Your Secure Password";
  }
  
  // While loop to get the desired password length input that validates length requirements. 
  while(!checkPasswordLengthValid(passwordLengthInput)) {
    // Prompt the user to get the length. 
    passwordLengthInput = promptForPasswordLength();
    //again check for cancel button click
    if(passwordLengthInput === null) {
      return "Your Secure Password";
    }
  }
  
  //prompting character types and store the response (true or false) for all four character types
  let isLowerCaseTypeNeeded = promptForLowerCaseTypesNeed();

  let isUpperCaseTypeNeeded = promptForUpperCaseTypesNeed();

  let isNumberTypeNeeded = promptForNumberTypesNeed();

  let isSpecialCharTypeNeeded = promptForSpecialCharTypesNeed();
  

  //If no type is selected then return to Generating password screen to start over.
  if(!(isLowerCaseTypeNeeded || isUpperCaseTypeNeeded || isNumberTypeNeeded || isSpecialCharTypeNeeded)) {
    alert("You need to select at least one of the character type for password generation.\n\nPlease Start Over");
    return "Your Secure Password";
  }
  // THis will create the password and also validates that it has all selected character type in the created password.
  return createPassword(passwordLengthInput, isLowerCaseTypeNeeded, isUpperCaseTypeNeeded, isNumberTypeNeeded, isSpecialCharTypeNeeded);
}

// function to prompt the user for password length.
function promptForPasswordLength() {
  return window.prompt("Please enter length of the password, length can be between 8 to 128 characters"); 
} 

// function that checkes for the valid password length between 8 and 128 also check for not number entry by user.
function checkPasswordLengthValid(passwordLength){
  let pwdLengthNumber = parseInt(passwordLength,10);
  if(isNaN(pwdLengthNumber)) {
    return false;
  }
  if(pwdLengthNumber < 8 || pwdLengthNumber > 128) {
    return false ;
  }
  return true;
}

// prompt for Lower case type chacarcter need in the password
function promptForLowerCaseTypesNeed() {
  return window.confirm("Would you like to include lower case letters in your password?\n\nPress OK for  Yes and Cancel for No.");
}

// prompt for Upper case type chacarcter need in the password
function promptForUpperCaseTypesNeed() {
  return window.confirm("Would you like to include upper case letters in your password?\n\nPress OK for Yes and Cancel for No.");
}

// prompt for Number type need in the password
function promptForNumberTypesNeed() {
  return window.confirm("Would you like to include numbers in your password?\n\nPress OK for Yes and Cancel for No.");
}

// prompt for Special character type need in the password
function promptForSpecialCharTypesNeed() {
  return window.confirm("Would you like to include special characters in your password?\n\nPress OK for Yes and Cancel for No.");
}

// function that intially creates the password character pool by using different character type user selected and then calls further to create password
function createPassword(passwordLengthInput, isLowerCaseTypeNeeded, isUpperCaseTypeNeeded, isNumberTypeNeeded, isSpecialCharTypeNeeded) {

  //Password character pool creation.
  let passwordCharacterPool = "";
  if(isLowerCaseTypeNeeded) {
    passwordCharacterPool += lowerCaseLetters;
  } 
  if(isUpperCaseTypeNeeded) {
    passwordCharacterPool += upperCaseLetters;
  }
  if(isNumberTypeNeeded) {
    passwordCharacterPool += numbers;
  }
  if(isSpecialCharTypeNeeded) {
    passwordCharacterPool += specialChars;
  }
  
  //check once again for passwordLengthInput from user is a proper number
  let passwordLengthNumber = parseInt(passwordLengthInput, 10);
  //call for actual generating and also validating the password.
  let createdPassword = generateAndValidatePassword(passwordLengthNumber, passwordCharacterPool, isLowerCaseTypeNeeded, isUpperCaseTypeNeeded, isNumberTypeNeeded, isSpecialCharTypeNeeded);
  //return the valid newly generated password.
  return createdPassword;
}

//function that gets all the proper inputs provided by the user and generates the password, also validates the password to match with the selected charcter type inclusion
function generateAndValidatePassword(passwordLengthNumber, passwordCharacterPool, isLowerCaseTypeNeeded, isUpperCaseTypeNeeded, isNumberTypeNeeded, isSpecialCharTypeNeeded) {
  let generatedPassword = "";

  //While loop until we get the valid password that matches the requirements
  while(!(validateCreatedPassword(generatedPassword, isLowerCaseTypeNeeded, isUpperCaseTypeNeeded, isNumberTypeNeeded, isSpecialCharTypeNeeded))) {
    generatedPassword = create(passwordLengthNumber, passwordCharacterPool);
  }
  //alert("generatedPassword In generateAndValidatePassword :" + generatedPassword);
  return generatedPassword;
}

// a base function to create the password from the characterpool and the password length given.
function create(pwdLengthNumber, pwdCharacterPool) {
  let newPassword = "";
  for (i = 0; i < pwdLengthNumber; i++) {
    newPassword += pwdCharacterPool.charAt(Math.floor(Math.random() * pwdCharacterPool.length));
  }
  //alert("Password in CREATE : " + newPassword);
  return newPassword;
}

//function that validates the password created using create() function to match the all the user selected character types
function  validateCreatedPassword(createdPassword, isLowerCaseTypeNeeded, isUpperCaseTypeNeeded, isNumberTypeNeeded, isSpecialCharTypeNeeded) {
  //alert("INSIDE validateCreatedPassword :" + createdPassword);
  if(isLowerCaseTypeNeeded) {
    let includesLowerCase = isGeneratedPasswordContains(createdPassword, lowerCaseLetters);
    if(!includesLowerCase) {
      return false;
    }
  }
  if(isUpperCaseTypeNeeded) {
    let includesUpperCase = isGeneratedPasswordContains(createdPassword, upperCaseLetters);
    if(!includesUpperCase) {
      return false;
    }
  }
  if(isNumberTypeNeeded) {
    let includesNumber = isGeneratedPasswordContains(createdPassword, numbers);
    if(!includesNumber) {
      return false;
    }
  }
  if(isSpecialCharTypeNeeded) {
    let includesSpecialChar = isGeneratedPasswordContains(createdPassword, specialChars);
    if(!includesSpecialChar) {
      return false;
    }
  }
  return true;
}

// function that checkes passwords individual character to see if any of it matches with give character sequence.
function isGeneratedPasswordContains(pwd, charTypeSequence) {
  for(i = 0; i < pwd.length; i++) {
    //alert("Char value to check " + pwd.charAt(i));
    if(charTypeSequence.includes(pwd.charAt(i))) {
      //alert("containsTrue" + pwd.charAt(i));
      return true;
    } 
  } 
  return false;
}