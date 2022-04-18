let num1 = 5;
let num2 = 5;
let displayValue = document.getElementById("displayNum");
const buttons = document.querySelectorAll("button");

function add(a, b) {
return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function operate() {
  //when user presses "=" key, then run operate and pass the result to the display
  return displayValue.textContent = button(num1, num2);

  //change "add" for button later
}

// function eventListeners(){
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      console.log("h")
    })
  });
// }

 //create function that stores the value of the numbers
 //pass that value to the display

 //create function that adds event listeners to all buttons
 //when button is clicked call its value