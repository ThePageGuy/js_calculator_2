let firstNumber = "";
let operator = "";
let secondNumber = "";
let displayValue = "0";

function appendNumber(number) {
  displayValue = displayValue === "0" ? String(number) : displayValue + number;
  updateDisplay();
}

function appendOperator(op) {
  operator = op;
  firstNumber = displayValue;
  displayValue = "0";
  updateDisplay();
}

function appendDecimal() {
  if (!displayValue.includes(".")) {
    displayValue += ".";
    updateDisplay();
  }
}

function clearDisplay() {
  firstNumber = "";
  operator = "";
  secondNumber = "";
  displayValue = "0";
  updateDisplay();
}

function clearOne() {
  if (displayValue.length > 1) {
    displayValue = displayValue.slice(0, -1);
  } else {
    displayValue = "0";
  }
  updateDisplay();
}

function clearAll() {
  firstNumber = "";
  operator = "";
  secondNumber = "";
  displayValue = "0";
  updateDisplay();
}

let resultDisplayed = false;

function calculate() {
  if (operator && firstNumber !== "" && displayValue !== "") {
    secondNumber = displayValue;
    displayValue = operate(
      operator,
      parseFloat(firstNumber),
      parseFloat(secondNumber)
    );
    resultDisplayed = true;
    updateDisplay();
    firstNumber = displayValue;
    operator = "";
    secondNumber = "";
  }
}

function operate(op, num1, num2) {
  switch (op) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      if (num2 !== 0) {
        return num1 / num2;
      } else {
        displayError("Cannot divide by zero");
        clearDisplay();
        return "Error";
      }
    default:
      return "Error";
  }
}

function updateDisplay() {
  const displayElement = document.getElementById("calculator-display");
  const equationElement = document.getElementById("calculator-equation");

  if (resultDisplayed) {
    equationElement.textContent = displayValue;
    resultDisplayed = false;
  } else {
    equationElement.textContent =
      firstNumber + " " + operator + " " + displayValue;
  }

  displayElement.textContent = displayValue;
}

function displayError(message) {
  alert(message);
}
