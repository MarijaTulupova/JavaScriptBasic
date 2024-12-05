let availableMoney = 1000;

function atm() {
  let requestedAmount = parseInt(
    prompt("Enter the amount you want to withdraw:")
  );

  if (isNaN(requestedAmount) || requestedAmount <= 0) {
    alert("Please enter a valid amount.");
    return;
  }

  if (requestedAmount > availableMoney) {
    alert(`Not enough money. You have ${availableMoney} euro in your account.`);
  }

  if (requestedAmount <= availableMoney) {
    availableMoney = availableMoney - requestedAmount;
    alert(
      `You have withdrawn ${requestedAmount} euro from your accound. You have ${availableMoney} euro left.`
    );
  }
}

for (let i = 0; i < 3; i++) {
  atm();
}
