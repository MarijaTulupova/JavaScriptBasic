let priceOfPhone = 119.95;
let taxPercent = 0.05;
let numberOfPhones = 30;

let taxForOnePhone = priceOfPhone * taxPercent;
let totalPriceOfOnePhone = priceOfPhone + taxForOnePhone;

let result = totalPriceOfOnePhone * numberOfPhones;

console.log(result);

function totalPrice(priceOfPhone, taxPercent, numberOfPhones) {
  let taxForOnePhone = priceOfPhone * taxPercent;
  let totalPriceOfOnePhone = priceOfPhone + taxForOnePhone;

  let totalPrice = totalPriceOfOnePhone * numberOfPhones;

  return totalPrice;
}

console.log(totalPrice(119.95, 0.05, 30));
