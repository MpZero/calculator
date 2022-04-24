let displayValue = document.getElementById("displayVal");
const btnMisc = document.querySelectorAll(".btn")
const btnNum = document.querySelectorAll(".btn-num");
const btnOp = document.querySelectorAll(".btn-op");
let num1 = ""
let num2 = ""
let op = ""
let result = ""

function add() {
 result =parseInt(num1) + parseInt(num2);
 displayValue.textContent = result
}

function subtract() {
  console.log(parseInt(num1) - parseInt(num2));
}

function multiply() {
  console.log(parseInt(num1) * parseInt(num2));
}

function divide() {
  console.log(parseInt(num1) / parseInt(num2));
}

function operate() {
  if (op == "/") {
    return divide()
  }
  if (op == "*") {
    return multiply()
  }
  if (op == "+") {
    return add()
  }
  if (op == "-") {
    return subtract()
  }
}

btnNum.forEach((button) => {
  button.addEventListener("click", () => {
    if ( op === "") {
      num1 += button.textContent;
      displayValue.textContent = num1;
      // console.log(num1)
    } else {
      num2 += button.textContent;
      displayValue.textContent = num1 + op + num2
      // console.log(num2)
    }
    });
  });

btnOp.forEach((button) => {
  button.addEventListener("click", () => {
      // console.log(op = button.textContent);
      op = button.textContent;
      displayValue.textContent = num1 + button.textContent;
        })
});

btnMisc.forEach((button) => {
  button.addEventListener("click", (e) => {
    let misc = e.target.textContent
     if (misc == "=") {
      return operate()
    } else if (misc == "CLEAR") {
      return clear()
    } else if (misc == "DELETE") {
      return deleteChar()
    }
  });
});

function clear() {
  num1 = ""
  num2 = ""
  op = ""
  displayValue.textContent = ""
}

// function switchNum() {
  
// }

// function deleteChar() {

// }
 //create function that stores the value of the numbers
 //pass that value to the display

 //create function that adds event listeners to all buttons
 //when button is clicked call its value

 //el usuario presiona un boton
 //el valor del boton se guarda en una variable y se visualiza en la pantalla
 //cuando el usuario presiona un operador, este se guarda

 //