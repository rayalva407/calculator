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
      add(num1, num2);
      break;
    case "-":
      subtract(num1, num2);
    case "*":
      multiply(num1, num2);
    case "/":
      divide(num1, num2);
    default:
      break;
  }
}

let num1 = 0;
let num2 = 0;
let op = "";
const displayText = document.querySelector(".display-text");
let displayString = displayText.innerText;
const keys = document.querySelectorAll(".key");

keys.forEach((key) => {
  key.addEventListener("click", () => {
    const value = key.innerText;

    if (displayString === "0") {
      displayString = value;
    }
    else {
      displayString += key.innerText;
    }

    displayText.innerText = displayString;
  });
});


