let displayValue = document.getElementById("displayVal");
const btnMisc = document.querySelectorAll(".btn")
const btnNum = document.querySelectorAll(".btn-num");
const btnOp = document.querySelectorAll(".btn-op");
let num1 = ""
let num2 = ""
let op = ""
let result = ""
let decimal = ""
let decimal2 = ""

function add() {
  result = parseFloat(num1) + parseFloat(num2);
  roundResult(result)
  displayValue.textContent = result
  num1 = result
  checkZero()
  num2 = ""
  op = ""
  decimal = ""
  decimal2 = ""
}

function subtract() {
  result = parseFloat(num1) - parseFloat(num2);
  roundResult(result)
  displayValue.textContent = result
  checkZero()
  num1 = result
  num2 = ""
  op = ""
  decimal = ""
  decimal2 = ""
}

function multiply() {
  result = parseFloat(num1) * parseFloat(num2);
  roundResult(result)
  displayValue.textContent = result
  num1 = result
  checkZero()
  num2 = ""
  op = ""
  decimal = ""
  decimal2 = ""
}

function divide() {
  result = parseFloat(num1) / parseFloat(num2);
  roundResult(result)
  displayValue.textContent = result
  num1 = result
  checkZero()
  num2 = ""
  op = ""
  decimal = ""
  decimal2 = ""
}

function roundResult() {
  result = Math.round(result * 100) / 100;
}

//check if the result is 0 then the next number you press should replace 0.
function checkZero() {
  if (result == 0) {
    num1 = 0
    displayValue.textContent = "0"
  }
}

function operate() {
  if (op !== "" && num1 !== "" && num2 == "") {
    return
  }
  if (num1 == 0 && num2 == "") {
    clear()
  }
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
    if ( op !== "" && num1 === "" && op == "-") {
      num1 += button.textContent;
      num1 = op + num1;
      displayValue.textContent = num1;
      op = ""
    } else if (op === "") {
      num1 += button.textContent;
      displayValue.textContent = num1
    } else if (op !== "") {
      // decimal = ""
      num2 += button.textContent;
      displayValue.textContent = num1 + op + num2
    }
    });
  });

btnOp.forEach((button) => {
  button.addEventListener("click", () => {
    // console.log(op = button.textContent);
    if (op === "") {
      op = button.textContent;
      displayValue.textContent = num1 + op;
    } else if (op !== "" && num1 != "" && num2 == "") {
      op = button.textContent;
      displayValue.textContent = num1 + op;
    } else if (op !== "" && num2 != "") {
      operate()
      op = button.textContent;
      displayValue.textContent = num1 + op;
    } 
  });
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
    } else if (misc == "." && decimal == "" && op == "") {
      decimal = "."
     num1 = num1 + misc
      displayValue.textContent = num1
    } else if (misc == "." && decimal2 == "" && op != "") {
      decimal2 = "."
      num2 = num2 + misc
      displayValue.textContent = num1 + op + num2
    }
  });
});


function deleteChar() {
  if (num1 != "" && op == "" && num2 == ""){
  num1 = num1.slice(0, -1)
  displayValue.textContent = num1
} else if (num2 != "" && op != "" && num1 != "") {
  num2 = num2.slice(0, -1)
  displayValue.textContent = num1 + op + num2
} else if (op != "" && num2 == "") {
  op = op.slice(0, -1);
  displayValue.textContent = num1 + op
}
}

function clear() {
  num1 = ""
  num2 = ""
  op = ""
  displayValue.textContent = ""
  decimal = ""
  decimal2 = ""
}
