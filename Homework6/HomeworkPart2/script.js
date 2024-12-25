let numbersListElement = document.getElementsByClassName("container")[0];
let sumContainerElement = document.getElementsByClassName("sum")[0];
let numbers = [1, 3, 6, 8, 9];

function createList(itemArray, element) {
  let unorderedList = "";

  for (let item of itemArray) {
    unorderedList += `<li>${item}</li>`;
  }

  element.innerHTML += `Numbers: <ul>${unorderedList}</ul>`;
}

function sumOfNumbers(array, element) {
  let sum = 0;
  let equation = "";

  for (let i = 0; i < array.length; i++) {
    equation += array[i];
    sum += array[i];

    if (i < array.length - 1) {
      equation += " + ";
    }
  }

  equation += " = " + sum;
  element.innerHTML = equation;
}

createList(numbers, numbersListElement);
sumOfNumbers(numbers, sumContainerElement);
