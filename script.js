function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  if (num2 === 0) {
    return "Division by zero error. Try again!";
  }
  return num1 / num2;
}

function operate(num1, num2, operation) {
  
  switch (operation) {
    
    case "+":
      console.log(num1);
      return add(num1, num2);
    case "-":
      return subtract(num1, num2);
    case "*":
      return multiply(num1, num2);
    case "/":
      return divide(num1, num2);
    default:
      break;
  }
}

function operationReady(op) {
  for (k in op) {
    if (op[k] === undefined) {
      return false;
    }
  }

  return true;
}

const operation = {
  num1: undefined,
  operator: undefined,
  num2: undefined
}

const displayText = document.querySelector(".display-text");
let displayString = displayText.innerText;
const keys = document.querySelectorAll(".key");

keys.forEach((key) => {
  key.addEventListener("click", () => {
    const value = key.innerText;

    if (value === "+" || value === "-" || value === "*" || value === "/") {
      operation.operator = value

      if (operation.num1 === undefined) {
        operation.num1 = Number(displayString)
      }
      else{
        operation.num2 = Number(displayString)
      }

      console.log(operationReady(operation))
      
      if (operationReady(operation)) {
        displayString = operate(operation.num1, operation.num2, operation.operator)
      }

      displayString = "0"
    }
    else if (value === "=") {
      operation.num2 = Number(displayString)
      displayString = operate(operation.num1, operation.num2, operation.operator)
    }
    else {
      displayString = displayString + value;
      if (displayString[0] === "0") {
        displayString = displayString.slice(1)
      }
    }

    displayText.innerText = displayString;
  });
});


