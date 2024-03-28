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
  console.log(operation == "+")
  
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

let num1 = 0;
let num2 = 0;
let op = "";
let numSwitch = true;
const displayText = document.querySelector(".display-text");
let displayString = displayText.innerText;
const keys = document.querySelectorAll(".key");

keys.forEach((key) => {
  key.addEventListener("click", () => {
    const value = key.innerText;
    displayString = displayString + value;
    if (displayString[0] === "0") {
      displayString = displayString.slice(1)
    }

    // if (value === "+" || value === "-" || value === "*" || value === "/") {

    //   op = value

    //   if (numSwitch === false) {
    //     num2 = Number(displayString);
    //     displayString = operate(num1, num2, op);
    //     typeof displayString
    //     num1 = displayString
    //   }
    //   else {
    //     num1 = Number(displayString)
    //     displayString = "0";
    //   }
    //   numSwitch = !numSwitch;
    // }
    // else {
    //   if (displayString[0] === "0") {
    //     displayString = value
    //   }
    //   else {
    //     displayString += value;
    //   }
    // }

    displayText.innerText = displayString;
  });
});


