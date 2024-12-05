function calculateYears(years, type) {
  switch (type) {
    case "humanToDog":
      return years * 7;
    case "dogToHuman":
      return years / 7;
    default:
      return "Invalid conversion Type";
  }
}

console.log(calculateYears(5, "humanToDog"));
console.log(calculateYears(7, "dogToHuman"));
console.log(calculateYears(3, "something"));
