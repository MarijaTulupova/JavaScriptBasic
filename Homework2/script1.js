function moneyInput() {
  let input = prompt("How much money you have?");
  console.log(input);

  let numberInput = parseInt(input);
  console.log(numberInput);

  //   if (!isNaN(numberInput) && numberInput >= 50) {
  //     return `You should go out to a dinner and a movie!`;
  //   } else if (!isNaN(numberInput) && numberInput >= 35) {
  //     return `You should go out to a fine meal.`;
  //   } else if (!isNaN(numberInput) && numberInput >= 12) {
  //     return `You should go see a movie.`;
  //   } else if (!isNaN(numberInput) && numberInput < 12) {
  //     return `Looks like you'll be watching TV.`;
  //   } else {
  //     return `Invalid input. Please enter a valid number.`;
  //   }

  if (!isNaN(numberInput) && numberInput >= 50) {
    return `You should go out to a dinner and a movie!`;
  }

  if (!isNaN(numberInput) && numberInput >= 35) {
    return `You should go out to a fine meal.`;
  }

  if (!isNaN(numberInput) && numberInput >= 12) {
    return `You should go see a movie.`;
  }

  if (!isNaN(numberInput) && numberInput < 12) {
    return `Looks like you'll be watching TV.`;
  }

  return `Invalid input. Please enter a valid number.`;
}

alert(moneyInput());
