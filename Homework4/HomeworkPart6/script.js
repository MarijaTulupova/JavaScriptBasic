function getFullNames(firstNames, lastNames) {
  if (firstNames.length !== lastNames.length) {
    return "Error: Arrays must be the same size.";
  }

  let fullNames = [];

  for (let i = 0; i < firstNames.length; i++) {
    let firstName = firstNames[i];
    let lastName = lastNames[i];
    let fullName = `${i + 1}. ${firstName} ${lastName}`;
    fullNames[i] = fullName;
    // fullNames.push(fullName);
  }

  return fullNames;
}

let firstNames = ["Bob", "Jill"];
let lastNames = ["Gregory", "Wurtz"];
let result = getFullNames(firstNames, lastNames);
console.log(result);

let wrongArray1 = ["Marija", "John"];
let wrongArray2 = ["Tulupov"];
let wrongResult = getFullNames(wrongArray1, wrongArray2);
console.log(wrongResult);
