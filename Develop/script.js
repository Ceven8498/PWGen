// Assignment code here
const resultEl = document.getElementById('btnfun')

function btnfun(){
var length = Number(prompt("How many characters would you like your password to be?"))
if (length < 8 || length > 128){
    alert("Length must be 8-128 characters")
} else { (length >= 8 && length <= 128)
var uppercase = confirm("Would you like to use uppercase letters?")
var lowercase = confirm("Would you like to use lowercase letters?")
var numbers = confirm("would you like to use numbers?")
var symbols = confirm("would you like to use special characters?")
}    

if (uppercase != true && lowercase != true && numbers != true && symbols != true){
    alert("You must select at least one character type!")
}

//DOM
const resultEl = document.getElementById('password');

document.getElementById('generate').addEventListener('click', () => {	
	const hasLower = lowercase.true;
	const hasUpper = uppercase.true;
	const hasNumber = numbers.true;
	const hasSymbol = symbols.true;
	resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length);
});

const randomFunc = {
	lower: getRandomLower,
	upper: getRandomUpper,
	number: getRandomNumber,
	symbol: getRandomSymbol
}

function generatePassword(lower, upper, number, symbol, length) {
	let generatedPassword = '';
    const typesCount = lower + upper + number + symbol;
	const typesArr = [{lower}, {upper}, {number}, {symbol}].filter(item => Object.values(item)[0]);

 	// create a loop
     for(let i=0; i<length; i+=typesCount) {
		typesArr.forEach(type => {
			const funcName = Object.keys(type)[0];
			generatedPassword += randomFunc[funcName]();
		});
	}
	
	const finalPassword = generatedPassword.slice(0, length);
	
	return finalPassword;
}

//Functions
function getRandomLower (){
  return String.fromCharCode(Math.floor(math.random() * 26) + 97);
}

function getRandomUpper (){
  return String.fromCharCode(Math.floor(math.random() * 26) + 65);
}

function getRandomNumber (){
  return String.fromCharCode(Math.floor(math.random() * 10) + 48);
}

function getRandomSymbol (){
  const symbols = '!@#$%^&*(){}[]=<>/,.';
  return symbols[math.floor(Math.random() * symbols.length)];

}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);