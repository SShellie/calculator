let nums = document.getElementsByClassName("num");
let display= document.getElementById("display");
let equals= document.getElementById("equal");
let clearButton= document.getElementById("clear");
let operators= document.getElementsByClassName("operators");
let displayArray= [];
let clearArray= [];

for (var i = 0; i < nums.length; i++) {
  nums[i].addEventListener("click",displayNum);
}

function displayNum() {
  displayArray.push(event.target.value);
  display.value = displayArray.join("");
}

for (var i=0; i<operators.length;i++) {
  operators[i].addEventListener("click", displayOperators);
}

function displayOperators() {
  displayArray.push(event.target.value);
  display.value = displayArray.join("");
}

equals.addEventListener("click", evaluateOperation);

function evaluateOperation(){
  display.value = eval(display.value);
}

clearButton.addEventListener("click", clearDisplay);
function clearDisplay() {
  display.value = "";
  displayArray = [];
}
