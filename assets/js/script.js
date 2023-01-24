// Assignment Code
var generateBtn = document.querySelector("#generate");

var alphabetCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var alphabetLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "-", ".", "`", "~", "|", "<", ">", "=", "-", "_"];
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var prePass = [];
var postPass = "";

var generatePassword = function () {
  // allows user to define the length of the password
  var userChoiceLength = window.prompt("Enter desired length of password (at least 8 characters & no more than 128 characters)");

  if (!userChoiceLength) {
    return;

  } else if (userChoiceLength >= 8 && userChoiceLength <= 128) {
    window.alert("When generated your password will contain " + userChoiceLength + " characters.");

  } else {
    window.alert("Error! Passwords must be at least 8 charactors and at most 128 characters. Please start over.")
    return;
  }
  // allows user to include uppercase letters
  var userChoiceUpperCase = window.prompt("Password contains at least one uppercase letter (YES or NO): ");

  if (!userChoiceUpperCase) {
    return;
  }

  userChoiceUpperCase = userChoiceUpperCase.toLocaleUpperCase();

  if (userChoiceUpperCase === "YES") {
    window.alert("When generated your pasword will contain at least one uppercase letter.");
    prePass = prePass.concat(alphabetCharacters)

  } else if (userChoiceUpperCase === "NO") {
    window.alert("When generated your pasword will NOT contain at least one uppercase letter.");

  } else {
    window.alert("You must enter YES or NO. Please start over.")
    return;
  }
  // allows user to include lowercase letters 
  var userChoiceLowerCase = window.prompt("Password contains at least one lowercase letter (YES or NO): ");

  if (!userChoiceLowerCase) {
    return;
  }

  userChoiceLowerCase = userChoiceLowerCase.toLocaleUpperCase();

  if (userChoiceLowerCase === "YES") {
    window.alert("When generated your pasword will contain at least one lowercase letter.");
    prePass = prePass.concat(alphabetLower)

  } else if (userChoiceLowerCase === "NO") {
    window.alert("When generated your pasword will NOT contain at least one lowercase letter.");

  } else {
    window.alert("You must enter YES or NO. Please start over.")
    return;
  }
  // allows user to include special characters
  var userChoiceSpecialCharacters = window.prompt("Password contains at least one special character (YES or NO): ");

  if (!userChoiceSpecialCharacters) {
    return;
  }

  userChoiceSpecialCharacters = userChoiceSpecialCharacters.toLocaleUpperCase();

  if (userChoiceSpecialCharacters === "YES") {
    window.alert("When generated your pasword will contain at least one special character.");
    prePass = prePass.concat(specialCharacters)

  } else if (userChoiceSpecialCharacters === "NO") {
    window.alert("When generated your pasword will NOT contain at least one special character.");

  } else {
    window.alert("You must enter YES or NO. Please start over.")
    return;
  }
  // allows user to include numbers
  var userChoiceNumbers = window.prompt("Password contains at least one number (YES or NO): ");

  if (!userChoiceNumbers) {
    return;
  }
  userChoiceNumbers = userChoiceNumbers.toLocaleUpperCase();

  if (userChoiceNumbers === "YES") {
    window.alert("When generated your pasword will contain at least one number.");
    prePass = prePass.concat(numericCharacters)

  } else if (userChoiceNumbers === "NO") {
    window.alert("When generated your pasword will NOT contain at least one number.");

  } else {
    window.alert("You must enter YES or NO. Please start over.")
    return;
  }
  console.log(prePass)
  // returns user to the beginning if they did not choose at least one character type
  if (userChoiceUpperCase === "YES" || userChoiceLowerCase === "YES" || userChoiceSpecialCharacters === "YES" || userChoiceNumbers === "YES") {
    for(let i = 0; i < userChoiceLength; i++) {
      var index = Math.floor(Math.random() * prePass.length)
      postPass += prePass[index]
    }
    return postPass

  } else {
    window.alert("At least one character type needs to be included in order to generate password. Please start over.");
    return;
  }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);