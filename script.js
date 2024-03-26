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

let num1 = 0;
let num2 = 0;
let op = "";
