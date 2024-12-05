function calculateAge(birthYear, currentYear = new Date().getFullYear()) {
  let age = currentYear - birthYear;

  if (isNaN(birthYear) || birthYear < 1907 || birthYear > currentYear) {
    return `Input a valid year number.`;
  }

  return `You are ${age} years old.`;
}

console.log(calculateAge(1995));
console.log(calculateAge(1900));
console.log(calculateAge("hello"));
console.log(calculateAge("123"));
console.log(calculateAge(2008));
