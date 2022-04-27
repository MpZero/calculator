let displayValue = document.getElementById("displayVal");
const btnMisc = document.querySelectorAll(".btn")
const btnNum = document.querySelectorAll(".btn-num");
const btnOp = document.querySelectorAll(".btn-op");
let num1 = ""
let num2 = ""
let op = ""
let result = ""
let decimal = ""

function add() {
  result = parseInt(num1) + parseInt(num2);
  displayValue.textContent = result
  num1 = result
  num2 = ""
  op = ""
}

function subtract() {
  result = parseInt(num1) - parseInt(num2);
  displayValue.textContent = result
  num1 = result
  num2 = ""
  op = ""

}

function multiply() {
  result = parseInt(num1) * parseInt(num2);
  displayValue.textContent = result
  num1 = result
  num2 = ""
  op = ""

}

function divide() {
  result = parseInt(num1) / parseInt(num2);
  displayValue.textContent = result
  num1 = result
  num2 = ""
  op = ""
}

function operate() {
  if (op !== "" && num1 !== "" && num2 == "") {
    return
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
    // } else if (op !== "" && num1 !== "") {
    //   console.log("hey")
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
    // } else if (decimal != ".") {
    //   console.log(num1 = num1 + decimal)
    //   displayValue.textContent = num1 + decimal
    //   decimal = "."
    // } else {
    //   console.log(ERROR)
    }
  });
});

function clear() {
  num1 = ""
  num2 = ""
  op = ""
  displayValue.textContent = ""
}

// function deleteChar() {
//   // let result = num1 + op + num2
//   let text = displayValue.textContent
//   text = text.substring(text.length -1);
  //  console.log(text)
  // return result.slice(-1)
// }
// function switchNum() {
  
// }
