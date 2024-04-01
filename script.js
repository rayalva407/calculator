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
  for (let key in op) {
    if (op[key] === undefined) {
      return false;
    }
  }

  return true;
}

function clearNumbers(op) {
  op.num1 = undefined
  op.num2 = undefined
  op.operator = undefined
}

const operation = {
  num1: undefined,
  operator: undefined,
  num2: undefined
}

const displayText = document.querySelector(".display-text");
let displayString = displayText.innerText;
const keys = document.querySelectorAll(".key");
let stillGoing = false;
const dot = document.querySelector("#dot")




keys.forEach((key) => {
  key.addEventListener("click", () => {
    const value = key.innerText;
    
    if (value === "+" || value === "-" || value === "*" || value === "/") {
      if (operation.num1 === undefined) {
        operation.num1 = Number(displayString)
      }
      else{
        operation.num2 = Number(displayString)
      }

      if (operationReady(operation)) {

        displayString = operate(operation.num1, operation.num2, operation.operator).toString()
        operation.num1 = Number(displayString)
        operation.num2 = undefined
        stillGoing = true
      }
      else {
        displayString = "0"
      }
      operation.operator = value
    }
    else if (value === "=") {
      operation.num2 = Number(displayString)

      if (operationReady(operation)) {
        displayString = operate(operation.num1, operation.num2, operation.operator).toString()
        clearNumbers(operation)
      }
    }
    else if (value === "C") {
      clearNumbers(operation)
      displayString = "0"
    }
    else {
      if (stillGoing) {
        displayText.innerText = displayString;
      }
      
      displayString = displayString + value;

      if (displayString[0] === "0") {
        displayString = displayString.slice(1)
      }
    }

    if (displayString.includes(".")) {
      dot.classList.add("disabled-button")
    }
    else {
      dot.classList.remove("disabled-button")
    }

    displayText.innerText = displayString;
  });
});


