function validateNumber(element) {
  return typeof element === "number";
}

function sumOfFiveNumbers(array) {
  if (array.length !== 5) {
    return `Insert 5 numbers.`;
  }

  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    let currentNumber = array[i];

    if (validateNumber(currentNumber)) {
      sum += currentNumber;
    } else {
      return "error";
    }
  }

  return sum;
}

console.log(sumOfFiveNumbers([3, 6, 4, 5, 18]));
console.log(sumOfFiveNumbers([3, 6, 1, "ej", 18]));
console.log(sumOfFiveNumbers([2, 6, 9, 1]));
