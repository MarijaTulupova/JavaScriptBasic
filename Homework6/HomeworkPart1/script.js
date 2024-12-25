let newMainHeader = document.getElementById("myTitle");
newMainHeader.innerText = "I am main header!";

let newParagraphText = document.getElementsByClassName("paragraph")[0];
newParagraphText.innerText = "Hello!";

let secondNewParagraph = document.getElementsByClassName("second")[0];
secondNewParagraph.innerText = "Hello from me too!";

let changeText =
  document.getElementsByClassName("anotherDiv")[0].lastElementChild;
changeText.innerText = "I wanna be changed too...";

let lastMainHeader = document.getElementsByTagName("h1")[1];
lastMainHeader.innerText = "I am main header too.";

let subHeading = document.getElementsByTagName("h3")[0];
subHeading.innerText = "Last but not least!";
