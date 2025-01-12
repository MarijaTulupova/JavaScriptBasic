const numbersBox = document.getElementById("numbersBox");
const wordsBox = document.getElementById("wordsBox");

let timeoutId;

const ones = [
  "",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
];
const teens = [
  "ten",
  "eleven",
  "twelve",
  "thirteen",
  "fourteen",
  "fifteen",
  "sixteen",
  "seventeen",
  "eighteen",
  "nineteen",
];
const tens = [
  "",
  "",
  "twenty",
  "thirty",
  "forty",
  "fifty",
  "sixty",
  "seventy",
  "eighty",
  "ninety",
];
const thousands = ["", "thousand", "million"];

/**
 * Converts a number less than 1000 into words.
 * @param {number} chunk - A number less than 1000.
 * @returns {string} - Words representing the number.
 */

function convertChunkToWords(chunk) {
  let words = [];

  if (chunk >= 100) {
    words.push(ones[Math.floor(chunk / 100)] + " hundred");
    chunk %= 100;
  }

  if (chunk >= 20) {
    words.push(tens[Math.floor(chunk / 10)]);
    chunk %= 10;
  }

  if (chunk >= 10) {
    words.push(teens[chunk - 10]);
    chunk = 0;
  }

  if (chunk > 0) {
    words.push(ones[chunk]);
  }

  return words.join(" ");
}

/**
 * Converts a number to its word representation.
 * @param {number} num - The input number.
 * @returns {string} - Words representing the number.
 */

function numberToWords(num) {
  let words = [];
  let thousandIndex = 0;

  while (num > 0) {
    let chunk = num % 1000;
    if (chunk > 0) {
      words.unshift(
        convertChunkToWords(chunk) +
          (thousands[thousandIndex] ? " " + thousands[thousandIndex] : "")
      );
    }
    num = Math.floor(num / 1000);
    thousandIndex++;
  }

  return words.join(" ").trim();
}

//Handles input changes and updates the words box accordingly.
function appearInNumbersBox() {
  const input = numbersBox.value.trim();
  clearTimeout(timeoutId);

  if (input === "") {
    // Handle empty input
    wordsBox.innerText = "And Words will appear here...";
    wordsBox.style.color = "white";
  } else if (isNaN(input)) {
    // Handle non-numeric input
    wordsBox.innerText = "Enter numbers (digits) only.";
    wordsBox.style.color = "red";

    timeoutId = setTimeout(() => {
      wordsBox.innerText = "And Words will appear here...";
      wordsBox.style.color = "white";
    }, 1500);
  } else if (parseInt(input) > 1000000) {
    // Handle input exceeding 1,000,000
    wordsBox.innerText = "You can't enter more than 1,000,000.";
    wordsBox.style.color = "red";
    numbersBox.value = "1000000";
  } else if (input === "0") {
    // Handle zero input
    wordsBox.innerText = "zero";
  } else if (input === "00") {
    // Handle multiple zeros
    wordsBox.innerText = "You can't enter multiple zeros";
    wordsBox.style.color = "red";
    timeoutId = setTimeout(() => {
      wordsBox.innerText = "And Words will appear here...";
      wordsBox.style.color = "white";
    }, 1500);
  } else {
    // Convert valid input to words
    wordsBox.innerText = numberToWords(parseInt(input));
    wordsBox.style.color = "white";
  }

  // Clean up input by removing non-digits and leading zeros
  numbersBox.value = input.replace(/[^0-9]/g, "").replace(/^0+/, "0");
}

numbersBox.addEventListener("input", appearInNumbersBox);
