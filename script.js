// Assignment Code
const generateBtn = document.querySelector("#generate");

// Write password to the #password input
// function writePassword() {
//   let password = generatePassword();
//   let passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// Add event listener to generate button
generateBtn.addEventListener("click", promptMe);

function promptMe(){

  const passwordLengthString = prompt('What is your desired password length?');
  let passwordLengths = +passwordLengthString


  if (passwordLengths > 128){
    return alert ('Maximum length of 128');   
  } else if  (passwordLengths < 8);
    return alert ('Minimum length of 8');
  } else {
  alert (passwordLengths);
  
  
  const needUppercase = confirm('Do you want uppercase letters?');

  const needSymbols = confirm('Do you want symbols?');
}


// var password=document.getElementById("password");

let chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let password = "";
let passwordLength = 15;

for (var i = 0; i <= passwordLength; i++) {
  var randomNumber = Math.floor(Math.random() * chars.length);
  password += chars.substring(randomNumber, randomNumber +1);
 }
 console.log (password)
 
  



// Testing different methods of producing random passwords

// Generate Functions
// function getRandomLowercase() {
//   return String.fromCharCode(Math.floor(Math.random() * 26) +97);
// };

// function getRandomUppercase() {
//   return String.fromCharCode(Math.floor(Math.random() * 26) +65);
// };

// function getRandomNumbers() {
//   return String.fromCharCode(Math.floor(Math.random() * 10) +48);
// };

// function getRandomSymbol() {
//   const symbols = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
//   return symbols[Math.floor(Math.random() * symbols.length)];
// };



