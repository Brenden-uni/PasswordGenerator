// Assignment Code
const generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", promptMe);

// Creat function to generate password

function promptMe(){

  // prompt user choices for password

  const passwordLengthString = prompt('What is your desired password length?');
  let passwordLength = +passwordLengthString

// create min and max value for length

  if (passwordLength > 128){
    return alert ('Maximum length of 128');   
  } else if (passwordLength < 8){
    return alert ('Minimum length of 8');
  } else if (passwordLength == NaN){
    return alert ('Please specify a number!');
  } else {
  alert (passwordLength); }
  
  const needNumbers = confirm('Do you want numbers?');
  
  const needUppercases = confirm('Do you want uppercase letters?');

  const needSymbols = confirm('Do you want symbols?');

  console.log (passwordLength);
  console.log (needNumbers)
  console.log (needUppercases);
  console.log (needSymbols);

  // variables aligning with user choices

  let charactersAll = "abcdefghijklmnopqrstuvwxyz";
  let charactersNumber = "0123456789";
  let charactersUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let charactersSymbol = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  
  // create if statement to include user choice variables

if (needNumbers === true){ 
  charactersAll += charactersNumber
}
if (needUppercases === true){ 
  charactersAll += charactersUpper
}
if (needSymbols === true){ 
  charactersAll += charactersSymbol
}

  let password = "";
// create the password
  for (let i = 0; i <= passwordLength; i++) {
    let randomNumber = Math.floor(Math.random() * charactersAll.length);
    password += charactersAll.substring(randomNumber, randomNumber +1);
  }
  
  console.log(password)

  writePassword()
  
}






