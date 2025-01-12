const display = document.getElementById("display");
const clear = document.getElementById("clear");
const back = document.getElementById("back");
const input = document.getElementsByClassName("input");
const errorMessage = document.getElementById("errorMessage");

let timeoutId;
const operators = ["+", "-", "*", "/", "."];
const operatorsWithoutMinus = ["+", "*", "/", "."];
const operatorsWithoutDot = ["+", "-", "*", "/"];
const MAX_DIGIT_NUMBER = 15;
const MAX_DIGIT_ERROR_MESSAGE = "Can't enter more than 15 digits.";
const ZERO_DIVISION_ERROR_MESSAGE = "You can't divide by 0.";
const LAST_DIGIT_NUMBER_ERROR_MESSAGE = "You must enter a number.";

function openErrorMessage(message) {
  if (timeoutId) {
    clearTimeout(timeoutId);
  }

  errorMessage.textContent = message;
  errorMessage.style.display = "block";

  timeoutId = setTimeout(() => {
    errorMessage.style.display = "none";
    timeoutId = null;
  }, 3000);
}

function clearDisplay() {
  display.innerText = "";
}

clear.addEventListener("click", clearDisplay);

function removeLastChar() {
  display.innerText = display.innerText.slice(0, -1);
}

back.addEventListener("click", removeLastChar);

function isOperator(char, operatorsList = operators) {
  const parsedChar = char.replace("÷", "/").replace("−", "-").replace("×", "*");

  return operatorsList.includes(parsedChar);
}

function appendToDisplay(event) {
  let nextClickedInput = event.target.innerText;

  // Prevent operators (except minus) from being the first input
  if (
    display.innerText === "" &&
    isOperator(nextClickedInput, operatorsWithoutMinus)
  ) {
    return;
  }

  const lastChar = display.innerText.slice(-1);
  const currentNumber = display.innerText.split(/[\+\−\×\÷]/).pop();

  // Prevent adding a second decimal point in the current number
  if (nextClickedInput === "." && currentNumber.includes(".")) {
    return;
  }

  // Prevent adding more digits than the allowed maximum
  if (
    !isOperator(nextClickedInput) &&
    currentNumber.length >= MAX_DIGIT_NUMBER
  ) {
    openErrorMessage(MAX_DIGIT_ERROR_MESSAGE);

    return;
  }

  // Replace the initial '0' when a number is entered
  if (display.innerText === "0" && !isOperator(nextClickedInput)) {
    display.innerText = nextClickedInput;
    return;
  }

  // Replace the last operator if two operators are entered consecutively
  if (isOperator(lastChar) && isOperator(nextClickedInput)) {
    display.innerText = display.innerText.slice(0, -1);
    display.innerText += nextClickedInput;
    return;
  }

  display.innerText += nextClickedInput;
}

for (let i = 0; i < input.length; i++) {
  input[i].addEventListener("click", appendToDisplay);
}

/**
 * Tokenizes a mathematical expression into an array of numbers and operators.
 *
 * @param {string} expression - The mathematical expression to tokenize, e.g., "3+5×2".
 * @returns {Array<number|string>} - An array of tokens where numbers are converted
 *                                   to numbers and operators are strings.
 *
 * Example:
 * tokenize("3+5×2") -> [3, "+", 5, "*", 2]
 */
function tokenize(expression) {
  const tokens = [];
  let currentNumber = "";

  const parsedExpression = expression
    .replaceAll("÷", "/")
    .replaceAll("−", "-")
    .replaceAll("×", "*");

  for (let char of parsedExpression) {
    if (/[\d.]/.test(char)) {
      currentNumber += char;
    }

    if (isOperator(char, operatorsWithoutDot)) {
      if (currentNumber) {
        tokens.push(Number(currentNumber));
        currentNumber = "";
      }

      tokens.push(char);
    }
  }

  tokens.push(Number(currentNumber));
  return tokens;
}

/**
 * Processes only multiplication and division operations in a mathematical expression.
 *
 * @param {Array<number|string>} tokens - The tokenized expression, where numbers are
 *                                        of type `number` and operators are strings.
 *                                        E.g., [3, "+", 5, "*", 2].
 * @returns {Array<number|string>} - A new array with multiplication and division operations
 *                                   evaluated. Remaining numbers and operators are unchanged.
 *                                   E.g., [3, "+", 10].
 *
 * @throws {Error} Throws an error if division by zero is encountered.
 *
 * Example:
 * processMultiplicationAndDivision([3, "+", 5, "*", 2]) -> [3, "+", 10]
 * processMultiplicationAndDivision([12, "/", 4, "-", 2]) -> [3, "-", 2]
 */
function processMultiplicationAndDivision(tokens) {
  const result = [];

  for (let i = 0; i < tokens.length; i++) {
    if (tokens[i] !== "*" && tokens[i] !== "/") {
      result.push(tokens[i]);
      continue;
    }

    const leftNumber = result.pop();
    const rightNumber = tokens[i + 1];

    if (tokens[i] === "*") {
      result.push(leftNumber * rightNumber);
    } else {
      if (rightNumber === 0) {
        throw new Error("Division by zero error");
      }

      result.push(leftNumber / rightNumber);
    }

    i++; // skip the next number since it's already processed
  }

  return result;
}

/**
 * Processes addition and subtraction operations in a mathematical expression.
 *
 * @param {Array<number|string>} tokens - The tokenized expression, where numbers are
 *                                        of type `number` and operators are strings.
 *                                        E.g., [3, "+", 10].
 * @returns {number} - The final calculated result after processing all addition
 *                     and subtraction operations.
 *
 * Example:
 * processAdditionAndSubtraction([3, "+", 10]) -> 13
 * processAdditionAndSubtraction([-5, "+", 8, "-", 2]) -> 1
 */
function processAdditionAndSubtraction(tokens) {
  let result = 0;
  let index = 1;

  // Handle the case where the expression starts with a negative number
  if (tokens[0] === "-") {
    result = Number(tokens[0] + tokens[1]);
    index = 2; // Skip the first two tokens (sign and number)
  } else {
    result = tokens[0];
  }

  for (let i = index; i < tokens.length; i++) {
    if (tokens[i] === "+") {
      result += tokens[i + 1];
    } else if (tokens[i] === "-") {
      result -= tokens[i + 1];
    }
  }

  return result;
}

/**
 * Evaluates a mathematical expression represented as a tokenized array.
 *
 * @param {Array<number|string>} tokens - The tokenized expression, where numbers are
 *                                        of type `number` and operators are strings.
 *                                        E.g., [3, "+", 5, "*", 2, "-", 4].
 * @returns {number} The final calculated result of the evaluated expression.
 *
 * @see processMultiplicationAndDivision;
 * @see processAdditionAndSubtraction;
 *
 * Example:
 * customEval([3, "+", 5, "*", 2, "-", 4]) -> 9
 */
function customEval(tokens) {
  const tokensAfterMultiplicationAndDivision =
    processMultiplicationAndDivision(tokens);
  const result = processAdditionAndSubtraction(
    tokensAfterMultiplicationAndDivision
  );
  return result;
}

/**
 * Handles the click event for the "equals" button and evaluates the mathematical
 * expression in the display.
 *
 * @throws {Error} If the expression ends with an operator or contains a division by zero.
 *
 * @returns {void}
 */
function handleEqualsClick() {
  const expression = document.getElementById("display").innerText.trim();

  if (expression !== "") {
    try {
      if (isOperator(expression[expression.length - 1])) {
        throw new Error(LAST_DIGIT_NUMBER_ERROR_MESSAGE);
      }

      const tokens = tokenize(expression);
      const results = customEval(tokens);
      document.getElementById("display").innerText = Number(
        results.toFixed(10)
      );
    } catch (error) {
      openErrorMessage(error.message);
    }
  }
}

document.getElementById("equals").addEventListener("click", handleEqualsClick);
