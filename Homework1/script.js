let feet = 5;
let feetInOneMeter = 0.3048;
let meters = feet * feetInOneMeter;
console.log(meters);

// I saw "function" in the presentation and did some research about functions and their imporatnce
function feetToMetresConversion(feet) {
  let feetInOneMeter = 0.3048;

  return feet * feetInOneMeter;
}

console.log(feetToMetresConversion(5));
console.log(feetToMetresConversion(10));
console.log(feetToMetresConversion(15));
console.log(feetToMetresConversion(20));
console.log(feetToMetresConversion(25));
console.log(feetToMetresConversion(30));
console.log(feetToMetresConversion(35));
console.log(feetToMetresConversion(40));
