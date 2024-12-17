function sumOfMaxAndMin(array) {
  if (array.length === 0) {
    return "Array must not be empty.";
  }

  let maxNum = array[0];
  let minNum = array[0];

  for (let i = 0; i < array.length; i++) {
    let num = array[i];

    if (num > maxNum) {
      maxNum = num;
    }

    if (num < minNum) {
      minNum = num;
    }
  }

  let sumOfMaxMin = maxNum + minNum;

  return `Max:${maxNum}, Min:${minNum}, Sum:${sumOfMaxMin}`;
}

console.log(sumOfMaxAndMin([3, 5, 8, 2, 9]));
console.log(sumOfMaxAndMin([]));
