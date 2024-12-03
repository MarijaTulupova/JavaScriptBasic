// function calculateChineseZodiac(year) {
//   let validationYear = year <= 2024 && year >= 1908;
//   let formula = (year - 4) % 12;
//   if (validationYear && formula === 0) {
//     return `Rat`;
//   } else if (validationYear && formula === 1) {
//     return `Ox`;
//   } else if (validationYear && formula === 2) {
//     return `Tiger`;
//   } else if (validationYear && formula === 3) {
//     return `Rabbit`;
//   } else if (validationYear && formula === 4) {
//     return `Dragon`;
//   } else if (validationYear && formula === 5) {
//     return `Snake`;
//   } else if (validationYear && formula === 6) {
//     return `Horse`;
//   } else if (validationYear && formula === 7) {
//     return `Goat`;
//   } else if (validationYear && formula === 8) {
//     return `Monkey`;
//   } else if (validationYear && formula === 9) {
//     return `Rooster`;
//   } else if (validationYear && formula === 10) {
//     return `Dog`;
//   } else if (validationYear && formula === 11) {
//     return `Pig`;
//   } else {
//     return `Invalid Input`;
//   }
// }

function calculateChineseZodiac(year) {
  let validationYear = year <= 2024 && year >= 1908;
  let formula = (year - 4) % 12;

  if (validationYear && formula === 0) {
    return `Rat`;
  }

  if (validationYear && formula === 1) {
    return `Ox`;
  }

  if (validationYear && formula === 2) {
    return `Tiger`;
  }

  if (validationYear && formula === 3) {
    return `Rabbit`;
  }

  if (validationYear && formula === 4) {
    return `Dragon`;
  }

  if (validationYear && formula === 5) {
    return `Snake`;
  }

  if (validationYear && formula === 6) {
    return `Horse`;
  }

  if (validationYear && formula === 7) {
    return `Goat`;
  }

  if (validationYear && formula === 8) {
    return `Monkey`;
  }

  if (validationYear && formula === 9) {
    return `Rooster`;
  }

  if (validationYear && formula === 10) {
    return `Dog`;
  }

  if (validationYear && formula === 11) {
    return `Pig`;
  }

  return `Invalid Input`;
}

console.log(calculateChineseZodiac(1995));
//yes, i am a pig
console.log(calculateChineseZodiac(1972));

console.log(calculateChineseZodiac(2030));
//no one is born in 2030,yet
console.log(calculateChineseZodiac(1900));
//no one is alive who was born in 1900

console.log(calculateChineseZodiac(2002));
