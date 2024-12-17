function isMark(text) {
  const markList = [",", ".", "!", "?", ";", ":"];

  for (let i = 0; i < markList.length; i++) {
    if (text === markList[i]) {
      return true;
    }
  }

  return false;
}

function combineStrings(array) {
  let sentence = "";
  for (let i = 0; i < array.length; i++) {
    sentence += array[i];
    if (i < array.length - 1 && !isMark(array[i + 1])) {
      sentence += " ";
    }
  }
  return sentence;
}

console.log(combineStrings(["Hello", "there", "students", "of", "SEDC", "!"]));
console.log(combineStrings(["Hello", ",", "I", "am", "Marija", "."]));
