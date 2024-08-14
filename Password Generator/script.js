let display = document.getElementById("display");
let slider = document.getElementById("slider");
let Capital = document.getElementById("Capital");
let Small = document.getElementById("Small");
let Numbers = document.getElementById("Numbers");
let Symbols = document.getElementById("Symbols");
let sliderValue = document.getElementById("sliderValue");
let symbol = `!@#$%^&*()_+{}|:"<>?/.,,';\][=-]`;

//handle slider
function handleSlider() {
  sliderValue.innerText = slider.value;
}

slider.addEventListener("change", handleSlider);

//generate random number
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min ;
}

//Random Capital
function randomCapital() {
  return String.fromCharCode(random(65, 90));
}

//Random Small
function randomSmall() {
  return String.fromCharCode(random(97, 122));
}

//Random Symbols
function randomSymbol() {
  return symbol[random(0, symbol.length - 1)];
}

function randomNumbers() {
  return random(0,9).toString();
}


//Generate Password 
function GeneratePassword() {
  let Password = "";
  let array = [] ;

  if(Capital.checked) 
    array.push(randomCapital);

  if(Small.checked) 
    array.push(randomSmall);

  if(Numbers.checked) 
    array.push(randomNumbers);

  if(Symbols.checked) 
    array.push(randomSymbol);

  for(let i = 0 ; i < slider.value ; i++) {
    let randomFunc = array[random(0 , array.length - 1)];
    Password += randomFunc();
  }

  display.value = Password ;
}