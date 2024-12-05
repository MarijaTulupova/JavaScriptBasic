function typeParametar(parametar) {
  if (typeof parametar === "object" && parametar !== null) {
    return "object";
  }

  if (typeof parametar === "boolean") {
    return "boolean";
  }

  if (typeof parametar === "number") {
    return "number";
  }

  if (typeof parametar === "string") {
    return "string";
  }

  if (typeof parametar === "undefined") {
    return "undefined";
  }

  return "No such parametar";
}

console.log(typeParametar({}));
console.log(typeParametar(null));
console.log(typeParametar(true));
console.log(typeParametar(30));
console.log(typeParametar("heeey"));
console.log(typeParametar(undefined));
