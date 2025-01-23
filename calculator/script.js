let currentNumber = "";
let previousNumber = "";
let operator = "";

function appendNumber(number) {
  currentNumber += number;
  updateScreen(currentNumber);
}

function setOperator(op) {
  if (currentNumber === "") return;
  operator = op;
  previousNumber = currentNumber;
  currentNumber = "";
}

function clearScreen() {
  currentNumber = "";
  previousNumber = "";
  operator = "";
  updateScreen("");
}

function calculate() {
  if (currentNumber === "" || previousNumber === "" || operator === "") return;

  let result = 0;
  const prev = parseFloat(previousNumber);
  const curr = parseFloat(currentNumber);

  switch (operator) {
    case "+":
      result = prev + curr;
      break;
    case "-":
      result = prev - curr;
      break;
    case "*":
      result = prev * curr;
      break;
    case "/":
      result = curr !== 0 ? prev / curr : "Error";
      break;
    default:
      return;
  }

  updateScreen(result);
  currentNumber = result.toString();
  previousNumber = "";
  operator = "";
}

function updateScreen(value) {
  document.getElementById("screen").value = value;
}

function toggleMode() {
  document.body.classList.toggle("dark-mode");
}
